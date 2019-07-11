import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ firstName, lastName, image, _id, pet }) => {
  return (
    <Link to={`/friends/${_id}`}>
      <div className="body">
        <div className="outside">
          <div className="other-outside">
            <div className="outside">
              <div className="imgBx">
                <img className="owner" src={image} alt={firstName}/>

              </div>
              <div className="details">
                <h2>{firstName} {lastName} <span>{pet[0].petSpecies}: {pet[0].petName}</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProfileCard
