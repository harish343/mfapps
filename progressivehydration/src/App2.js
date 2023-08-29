import logo from './logo.svg';
import './App.css';
import withHydrationOnDemand from "react-hydration-on-demand";
import CardWithHydrationOnDemand from "./cardhydration"
import Card2 from "./Card2"
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
const App2 = withHydrationOnDemand({
  on: ["idle", "visible"],
})(Card2);

export default App2;
