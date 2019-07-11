import React, { Fragment } from 'react'

const ProfileForm = ({ handleChange, handleSubmit, data, handleChangePet, addPet }) => (
  <div className="new-form">
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={data.firstName || ''}
          />
          <label htmlFor="input" className="input-label">First Name</label>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={data.lastName || ''}
          />
          <label htmlFor="input" className="input-label">Last Name</label>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="ownerAge"
            placeholder="Age"
            onChange={handleChange}
            value={data.ownerAge || ''}
          />
          <label htmlFor="input" className="input-label">Age</label>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="ownerOccupation"
            placeholder="Occupation"
            onChange={handleChange}
            value={data.ownerOccupation || ''}
          />
          <label htmlFor="input" className="input-label">Occupation</label>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-2">
          <input
            id="input"
            className="input-text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            value={data.image || ''}
          />
          <label htmlFor="input" className="input-label">Image URL</label>
        </div>
      </div>

      {data.pet.map((p, index) => (
        <Fragment key={p._id}>
          <div className="wrapper">
            <div className="wrapper-2">
              <input
                id="input"
                className="input-text"
                name="petName"
                placeholder="Pet's Name"
                onChange={(e) => handleChangePet(e, index)}
                value={p.petName || ''}
              />
              <label htmlFor="input" className="input-label">Pet {index + 1} Name</label>
            </div>
          </div>

          <div className="wrapper">
            <div className="wrapper-2">
              <input
                id="input"
                className="input-text"
                name="petAge"
                placeholder="Pet's Age"
                onChange={(e) => handleChangePet(e, index)}
                value={p.petAge || ''}
              />
              <label htmlFor="input" className="input-label">Pet {index + 1} Age</label>
            </div>
          </div>

          <div className="wrapper">
            <div className="wrapper-2">
              <input
                id="input"
                className="input-text"
                name="petSpecies"
                placeholder="Pet's Species"
                onChange={(e) => handleChangePet(e, index)}
                value={p.petSpecies || ''}
              />
              <label htmlFor="input" className="input-label">Pet {index + 1} Species</label>
            </div>
          </div>

          <div className="wrapper">
            <div className="wrapper-2">
              <input
                id="input"
                className="input-text"
                name="hobbies"
                placeholder="Pet's Hobbies"
                onChange={(e) => handleChangePet(e, index)}
                value={p.hobbies || ''}
              />
              <label htmlFor="input" className="input-label">Pet {index + 1} Hobbies</label>
            </div>
          </div>

          <div className="wrapper">
            <div className="wrapper-2">
              <input
                id="input"
                className="input-text"
                name="image"
                placeholder="Pet's Picture"
                onChange={(e) => handleChangePet(e, index)}
                value={p.image || ''}
              />
              <label htmlFor="input" className="input-label">Pet {index + 1} Picture</label>
            </div>
          </div>

          <div className="field">
            <label className="label">About Your Pet</label>
            <div className="control">
              <textarea
                className="textarea"
                name="aboutMe"
                placeholder="About Your Pet"
                onChange={(e) => handleChangePet(e, index)}
                value={p.aboutMe || ''}
              />
            </div>
          </div>

        </Fragment>
      ))}

      <button type="button" className="button" onClick={addPet}>Add Another Pet</button>
      <button type="submit" className="button">Submit</button>
    </form>
  </div>
)

export default ProfileForm
