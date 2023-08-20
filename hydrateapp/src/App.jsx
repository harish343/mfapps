import { useState, useEffect } from "react";
import Sign from "./Sign"
import Samplecard from "./Samplecard"
export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
        <Sign/>
        <h1>
      {isClient ? 'Is Client' : 'Is Server'}
    </h1>
        <Samplecard/>
        <Samplecard/>
        <Samplecard/>
        <Samplecard/>
        <Samplecard/>

    </div>
  );
}