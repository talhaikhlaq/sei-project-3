import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'


class LocationCard extends React.Component {
  constructor() {
    super()

    this.state = { location: null, comment: {} }
    this.handleChange = this.handleChange.bind(this)
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

  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/locations/${this.props.match.params.id}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  // isOwner(comment) {
  //   return Auth.getPayload().sub === comment.user._id
  // }

  handleDelete() {
    axios.delete(`/api/locations/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/locations'))
      .catch(err => console.log(err.response))
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

            {Auth.isAuthenticated() &&
              <div>
                <Link
                  className="button edit-button-loc"
                  to={`/locations/${location._id}/edit`}
                >
                Edit
                </Link>
                <button
                  onClick={this.handleDelete}
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
                     <div className="field comclass">
                       <div className="control">
                         <textarea
                           className="textarea"
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
                  <button
                    className="button delete-com-button"
                    onClick={() => this.handleCommentDelete(comment)}
                  >Delete
                  </button>
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


// eturn (
//   <main className="location-main">
//     <div className="location-show">
//       <div className="location-text">
//         <div className="profile-heading">
//           <h2 id="names">{location.name}</h2>
//         </div>
//         <div className="">
//           <p className="about-p"> {location.category}</p>
//           <p className="about-info">   {location.address.buildingNumber} {location.address.street} {location.address.postcode}</p>
//
//         <a href={location.website} className="about-p" target="_blank" rel="noopener noreferrer">See their website</a>
//           {location.comments.map(comment => (
//             <div key={comment._id} className="card">
//               <div className="card-content">
//                 {comment.text} - {new Date(comment.createdAt).toLocaleString()}
//               </div>
//               <button
//                 className="button delete-button"
//                 onClick={() => this.handleCommentDelete(comment)}
//               >Delete
//               </button>
//             </div>
//           ))}
//
//           <hr />
//           {Auth.isAuthenticated() &&
//           <form onSubmit={this.handleSubmit}>
//             <div className="field">
//               <div className="control">
//                 <textarea
//                   className="textarea"
//                   placeholder="Review"
//                   onChange={this.handleChange}
//                   value={this.state.comment.text || ''}
//                 >
//                 </textarea>
//               </div>
//             </div>
//             <button className="button" type="submit">Sumbit review</button>
//           </form>}
//
//           {Auth.isAuthenticated() &&  <Link
//           className="button edit-button"
//           to={`/locations/${location._id}/edit`}
//                     >
//                   Edit
//                     </Link>}
//
//         {Auth.isAuthenticated() && <button onClick={this.handleDelete}
//           className="button delete-button">Delete
//         </button>}
//       </div>
//     </div>
//
//
//         <div className="location-pictures">
//           <figure className="location-picture">
//             <img src={location.image} alt={location.name} />
//           </figure>
//         </div>
//
//       </div>
//
//
//
//
//
//   </main>
//
// )
//
//
//
// }
// }
