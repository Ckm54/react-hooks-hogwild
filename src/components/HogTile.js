import React, { useState } from "react";
import AddNew from "./AddNew";
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


  const [filter, setFilter] = useState("all")
  function handleFilter(event) {
    setFilter(event.target.value)
    switch (event.target.value) {
      case "all":
        showHogs(hogs)
        break;
      case "weight":
        const byWeight = hogs.sort((a,b) => a.weight < b.weight ? 1 : -1)
        showHogs(byWeight)
        break;
      case "name":
        const byName = hogs.sort((a,b) => a.name > b.name ? 1 : -1)
        showHogs(byName)
        break;
      default:
        break;
    }
    console.log(filter)
  }

  const [showingTile, setShow] = useState(true)
  function toggleHog(name) {
    setShow(!showingTile)
    const tilesshown = hogs.filter((hog) => hog.name !== name)
    showHogs(tilesshown)
  }

  function handleAddHog(event) {
    event.preventDefault()
    console.log(event.target['text'])
  }
  

  const hogTile = hogsDisplayed.map((hog) => {
    return (
      <div className="pigTile" key={hog.name}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} onClick={handleClick} onDoubleClick={() => toggleHog(hog.name)} />
        {hogInfo[0].key === hog.name ? hogInfo : null}
        {/* <button onClick={() => toggleHog(hog.name)}>{hogInfo[0].key === hog.name ? "Hide" : "Show"}</button> */}
      </div>
    )
  })
  return (
    <>
    <AddNew handleSubmit={handleAddHog}/>
    <br />
    <br />
    <div>
    <h4>Sort hogs!!</h4>
      <select onChange={handleFilter}>
        <option value="all">Show All</option>
        <option value="name">Name (ascending)</option>
        <option value="weight">Weight (descending)</option>
      </select>
    </div>
    <button onClick={handleGreased}>{showGreased ? "Only Greased" : "Show All"}</button>
    {hogTile}
    </>
  )
}

export default HogTile