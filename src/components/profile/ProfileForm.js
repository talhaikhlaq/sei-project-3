import React, { Fragment } from 'react'

const ProfileForm = ({ handleChange, handleSubmit, data, handleChangePet, addPet }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className="input input-newform"
          name="ownerName"
          placeholder="Name"
          onChange={handleChange}
          value={data.ownerName || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Age</label>
      <div className="control">
        <input
          className="input"
          name="ownerAge"
          placeholder="Age"
          onChange={handleChange}
          value={data.ownerAge || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Occupation</label>
      <div className="control">
        <input
          className="input"
          name="ownerOccupation"
          placeholder="Occupation"
          onChange={handleChange}
          value={data.ownerOccupation || ''}
        />
      </div>
    </div>
    {data.pet.map((p, index) => (
      <Fragment key={p._id}>
        <div className="field">
          <label className="label">Pet {index + 1} Name</label>
          <div className="control">
            <input
              className="input"
              name="petName"
              placeholder="Pet's Name"
              onChange={(e) => handleChangePet(e, index)}
              value={p.petName || ''}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Pet&apos;s Age</label>
          <div className="control">
            <input
              className="input"
              name="petAge"
              placeholder="Pet's Age"
              onChange={handleChangePet}
              value={p.petAge || ''}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Pet&apos;s Species</label>
          <div className="control">
            <input
              className="input"
              name="petSpecies"
              placeholder="Pet's Species"
              onChange={handleChangePet}
              value={p.petSpecies || ''}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Hobbies</label>
          <div className="control">
            <input
              className="input"
              name="hobbies"
              placeholder="Hobbies"
              onChange={handleChange}
              value={p.hobbies || ''}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">About Me</label>
          <div className="control">
            <textarea
              className="textarea"
              name="aboutMe"
              placeholder="About Me"
              onChange={handleChange}
              value={p.aboutMe || ''}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
              value={data.pet[0].image || ''}
            />
          </div>
        </div>
      </Fragment>
    ))}
    <button type="button" className="button" onClick={addPet}>Add Pet</button>
    <button type="submit" className="button">Submit</button>
  </form>
)

export default ProfileForm
