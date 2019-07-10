import React from 'react'


const NewLocationForm = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>

    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className="input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={null}
        />
      </div>
    </div>


    <div className="control">
      <select
        onChange={handleChange} name="Type of the place">
        <option disabled value={''}>Choose</option>
        <option value="1">Pub</option>
        <option value="2">Restaurant</option>
        <option value="3">Cafe</option>
      </select>
    </div>




    <div className="field">
      <label className="label">House number</label>
      <div className="control">
        <input
          className="input"
          name="buildingNumber"
          placeholder="House number"
          onChange={handleChange}
          value={null}
        />
      </div>
    </div>


    <div className="field">
      <label className="label">Street</label>
      <div className="control">
        <input
          className="input"
          name="street"
          placeholder="Street"
          onChange={handleChange}
          value={null}
        />
      </div>
    </div>

    <div className="field">
      <label className="label">Postcode</label>
      <div className="control">
        <input
          className="input"
          name="postcode"
          placeholder="Postcode"
          onChange={handleChange}
          value={null}
        />
      </div>
    </div>


    <div className="field">
      <label className="label">Image</label>
      <div className="control">
        <input
          className="input"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={null}
        />
      </div>
    </div>


    <button type="submit" className="button">Submit</button>
  </form>

)




export default NewLocationForm
