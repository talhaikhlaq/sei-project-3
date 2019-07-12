import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'


class LocationCard extends React.Component {
  constructor() {
    super()

    this.state = { location: null, comment: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)

  }

  componentDidMount() {
    this.getData()

  }

  handleChange(e) {
    this.setState({ comment: { text: e.target.value } })
  }
  getData() {
    axios.get(`/api/locations/${this.props.match.params.id}`)
      .then(res => this.setState({ location: res.data, comment: {} }))
      .catch(err => console.log(err))

  }

  handleDelete() {
    axios.delete(`/api/locations/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/map'))
      .catch(err => console.log(err.response))
  }


  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/locations/${this.props.match.params.id}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.location.user
  }

  isOwnerComment(comment) {
    return Auth.getPayload().sub === comment.user
  }





  handleCommentDelete(comment) {
    axios.delete(`/api/locations/${this.props.match.params.id}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }



  render() {
    if (!this.state.location) return null
    const { location } =  this.state
    console.log('render state', this.state)
    console.log('auth payload sub', Auth.getPayload().sub)
    console.log('location user', this.state.location.user)
    console.log(this.isOwner())
    return (
      <main className="location-main">
        <div className="location-show">


          <div className="location-text">
            <div className="profile-heading">
              <h2 id="locationname">{location.name}</h2>
            </div>
            <p className="about-cat">
              {location.category}</p>
            <p className="about-loc">   {location.address.buildingNumber} {location.address.street} {location.address.postcode}</p>

            <a href={location.website} className="about-a" target="_blank" rel="noopener noreferrer">See their website</a>

            {this.isOwner() &&
              <div className="locationButtons">
                <Link
                  className="button edit-button-loc"
                  to={`/locations/${location._id}/edit`}
                >
                Edit
                </Link>
                <button button onClick={this.handleDelete}
                  className="button delete-button-loc"
                >
                  Delete
                </button>
              </div>
            }

          </div>
          <div className="location-picture-column">
            <figure >
              <img src={location.image}

                alt={location.name} />
            </figure>


            <div className="comclas">

              {Auth.isAuthenticated() &&
                   <form onSubmit={this.handleSubmit}>
                     <div className="field">
                       <div className="control">
                         <textarea
                           className="reviewtexarea"
                           placeholder="Review"
                           onChange={this.handleChange}
                           value={this.state.comment.text || ''}
                         >
                         </textarea>
                       </div>
                     </div>
                     <button className="button reviewbutton" type="submit">Sumbit review</button>
                   </form>}

              {location.comments.map(comment => (
                <div key={comment._id} className="card comclass">
                  <div className="card-content">
                    {comment.text} - {new Date(comment.createdAt).toLocaleString()}
                  </div>
                  {this.isOwner(comment) &&
                    <button
                      className="button delete-com-button"
                      onClick={() => this.handleCommentDelete(comment)}
                    >Delete
                    </button>
                  }
                </div>
              ))}
            </div>


          </div>

        </div>

      </main>

    )



  }
}


export default LocationCard
