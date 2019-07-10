import React from 'react'


const EditForm = ({ data, handleChange, handleAddressChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>

    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className="input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name || ''}
        />
      </div>
    </div>


    <div className="control">
      <select
        onChange={handleChange}
        name="category"
        defaultValue={data.category || 0}
      >
        <option disabled selected value="0">Choose</option>
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
          onChange={handleAddressChange}
          value={data.address.buildingNumber || ''}
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
          onChange={handleAddressChange}
          value={data.address.street || ''}
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
          onChange={handleAddressChange}
          value={data.address.postcode || ''}
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
          value={data.image || ''}
        />
      </div>
    </div>


    <button type="submit" className="button">Submit</button>
  </form>

)




export default EditForm
