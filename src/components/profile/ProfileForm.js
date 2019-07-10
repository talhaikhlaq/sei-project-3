import React, { Fragment } from 'react'

const ProfileForm = ({ handleChange, handleSubmit, data, handleChangePet, addPet }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">First Name</label>
      <div className="control">
        <input
          className="input input-newform"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={data.firstName || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Last Name</label>
      <div className="control">
        <input
          className="input input-newform"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={data.lastName || ''}
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
    <div className="field">
      <label className="label">Image</label>
      <div className="control">
        <input
          className="input"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          value={data.image || ''}
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
              onChange={(e) => handleChangePet(e, index)}
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
              onChange={(e) => handleChangePet(e, index)}
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
              onChange={(e) => handleChangePet(e, index)}
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
              onChange={(e) => handleChangePet(e, index)}
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
              onChange={(e) => handleChangePet(e, index)}
              value={p.image || ''}
            />
          </div>
        </div>
      </Fragment>
    ))}
    <button type="button" className="button" onClick={addPet}>Add Another Pet</button>
    <button type="submit" className="button">Submit</button>
  </form>
)

export default ProfileForm
