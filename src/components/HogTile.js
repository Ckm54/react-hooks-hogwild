import React from "react";

function HogTile({hogs}){
  console.log(hogs)
  const hogTile = hogs.map((hog) => {
    return (
      <div className="pigTile" key={hog.name}>
      <h2>hog</h2>
    </div>
    )
  })
  return (
    <>
    {hogTile}
    </>
  )
}

export default HogTile