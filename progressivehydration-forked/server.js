import path from "path";
import express from "express";
import ssr from "./build/ssr/main.js";
import DATA from "./data.json";

const app = express();

/** API Proxy */
app.get("/api/users", (req, res) => {
  res.json(
    DATA.map(user => ({
      id: user.login.uuid,
      username: user.login.username,
      name: user.name.first + " " + user.name.last
    }))
  );
});

/** SSR */
app.get("/", async (request, response) => {
  try {
    const stream = await ssr({
      url: request.url
    });
    // Wait until data starts flowing to send a 200 OK,
    // so errors don't trigger "headers already sent".
    stream.on("data", function handleData() {
      stream.off("data", handleData);
      response.writeHead(200, {
        "content-type": "text/html",
        "content-transfer-encoding": "chunked",
        "x-content-type-options": "nosniff"
      });
      response.write(`<!DOCTYPE html><html><head>`);
      response.write(
        `<meta name="viewport" content="width=device-width, initial-scale=1">
				 <link rel="stylesheet" href="/style.css">
				 <script type="module" defer src="/build/client.js"></script>
				 </head>`
      );
      response.write(`<body><div id="root">`);
      response.flushHeaders();
    });
    await new Promise((resolve, reject) => {
      stream.on("error", err => {
        stream.unpipe(response);
        reject(err);
      });
      stream.on("end", () => {
        response.write("</div></body></html>");
        resolve();
      });
      stream.pipe(response);
    });
  } catch (err) {
    response.end(String((err && err.stack) || err));
    return;
  }
});

app.use("/client.js", (req, res) => {
  res.redirect("/build/client.js");
});

app.use(express.static(path.resolve(__dirname, "src")));
app.use("/build", express.static(path.resolve(__dirname, "build")));

const listener = app.listen(process.env.PORT || 2048, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
