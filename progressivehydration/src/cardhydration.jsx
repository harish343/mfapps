import React from 'react'
import Card from "./Card"
import withHydrationOnDemand from "react-hydration-on-demand";
// export default function cardhydration() {
//   return (
//     <div>cardhydration</div>
//   )

// }

const CardWithHydrationOnDemand = withHydrationOnDemand({
    on: ["idle", "visible"],
})(Card);

export default {CardWithHydrationOnDemand}