import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ ownerName, image, pet }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img className="is-rounded" src={image} alt={ownerName}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img src={pet[0].image} alt={pet[0].petName}/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{ownerName}</p>
            <p className="subtitle is-5">Pet: {pet[0].petName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
