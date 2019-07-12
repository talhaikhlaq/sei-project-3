import React from 'react'


const EditForm = ({ data, handleChange, handleAddressChange, handleSubmit }) => (
  <div className="new-form">
    <form className="new-location-form" onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={data.name || ''}
          />
          <label className="input-label">Name</label>
        </div>
      </div>


      <div className="select-wrapper">
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


      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="buildingNumber"
            placeholder="House number"
            onChange={handleAddressChange}
            value={data.address.buildingNumber || ''}
          />
          <label className="input-label">House number</label>
        </div>
      </div>


      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="street"
            placeholder="Street"
            onChange={handleAddressChange}
            value={data.address.street || ''}
          />
          <label className="input-label">Street</label>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="postcode"
            placeholder="Postcode"
            onChange={handleAddressChange}
            value={data.address.postcode || ''}
          />
          <label className="input-label">Postcode</label>
        </div>
      </div>


      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="image"
            placeholder="Image"
            onChange={handleChange}
            value={data.image || ''}
          />
          <label className="input-label">Image</label>
        </div>
      </div>


      <button type="submit" className="button">Submit</button>
    </form>
  </div>

)




export default EditForm
