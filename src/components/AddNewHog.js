import React from "react";

function AddNewHog(props){
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name </label>
    <input type="text" placeholder="Enter name"/>
    <label htmlFor="specialty">Specialty </label>
    <input type="text" placeholder="Enter Specialty"/>
    <label htmlFor="name">Greased </label>
    <input
          name="isGreased"
          type="checkbox"
          checked={this.state.isGreased}
          onChange={this.handleInputChange} />
    <label htmlFor="weight">Weight </label>
    <input type="text" placeholder="Enter Weight"/>
    <label htmlFor="medal">Highest medal </label>
    <input type="text" placeholder="Enter highest Medal"/>
    <label htmlFor="image">image </label>
    <input type="text" placeholder="Enter image url"/>
    <input type="submit" value="Add Hog" />
  </form>
  )
}

export default AddNewHog