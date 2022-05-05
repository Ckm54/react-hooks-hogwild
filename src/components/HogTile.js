import React, { useState } from "react";
import HogInfo from "./HogInfo"

function HogTile({hogs}){
  const [hogsDisplayed, showHogs] = useState(hogs)
  const [showInfo, setShowInfo] = useState(false)
  console.log(hogs)

  const [shownInfo, showHogInfo] = useState(hogs)

  function handleClick(event) {
    setShowInfo(!showInfo)
    const name = event.target.alt
    const infoShown = hogs.filter((hog) => hog.name === name)
    showHogInfo(infoShown)
  }

  const hogInfo = shownInfo.map((hog) => {
    return (
      <div key={hog.name}>
      {showInfo ? <HogInfo hog={hog}/> : null}
      </div>
    )
  })

  const [showGreased, setGreased] = useState(true)
  function handleGreased() {
    setGreased(!showGreased)
    if(showGreased) {
      const greasedHogs = hogs.filter((hog) => hog.greased)
      showHogs(greasedHogs)
    } else {
      showHogs(hogs)
    }
  }

  

  const hogTile = hogsDisplayed.map((hog) => {
    return (
      <div className="pigTile" key={hog.name}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} onClick={handleClick} />
        {hogInfo[0].key === hog.name ? hogInfo : null}
      </div>
    )
  })
  return (
    <>
    <button onClick={handleGreased}>{showGreased ? "Only Greased" : "Show All"}</button>
    {hogTile}
    </>
  )
}

export default HogTile