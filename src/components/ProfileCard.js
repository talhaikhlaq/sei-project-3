import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ ownerName, image, pet }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{ownerName} & {pet[0]}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={ownerName} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
