import React from 'react'

const ProfileForm = ({ handleChange, handleSubmit, data, handleChangePet }) => (
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
    <div className="field">
      <label className="label">Pet&apos;s Name</label>
      <div className="control">
        <input
          className="input"
          name="petName"
          placeholder="Pet's Name"
          onChange={handleChangePet}
          value={data.pet[0].petName || ''}
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
          value={data.pet[0].petAge || ''}
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
          value={data.pet[0].petSpecies || ''}
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
          value={data.pet[0].hobbies || ''}
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
          value={data.pet[0].aboutMe || ''}
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
    <button type="submit" className="button">Submit</button>
  </form>
)

export default ProfileForm
