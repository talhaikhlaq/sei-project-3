import React from 'react'


const EditForm = ({ data, handleChange, handleSubmit }) => (
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
    <button type="submit" className="button is-info">Submit</button>
  </form>
)


export default EditForm
