import logo from './logo.svg';
import './App.css';
import withHydrationOnDemand from "react-hydration-on-demand";
import CardWithHydrationOnDemand from "./cardhydration"
import Card from "./Card"
// function App() {
//   return (
// <>




// </>
//   );
// }
// const App = withHydrationOnDemand() =>{
//   return (
//     <div></div>
//   )
// }
// const App = withHydrationOnDemand({
//   on: ["idle", "visible"],
// })(Card);
const App = withHydrationOnDemand({
  on: [["scroll", () => document]],
})(Card);


export default App;
