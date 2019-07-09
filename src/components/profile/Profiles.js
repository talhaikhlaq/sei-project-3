import React from 'react'
import axios from 'axios'

import ProfileCard from './ProfileCard'

class Profiles extends React.Component {
  constructor() {
    super()

    this.state = { profiles: null }
  }

  componentDidMount() {
    axios.get('/api/profiles')
      .then(res => this.setState({ profiles: res.data }))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.profiles) return null
    return (
      <main className="main-profiles">
        {this.state.profiles.map(profile => (
          <ProfileCard
            key={profile._id}
            {...profile}
          />
        ))}
      </main>
    )
  }
}

export default Profiles

// <section className="section">
//   <div className="container">
//     <div className="columns is-mobile is-multiline">
//       {this.state.profiles.map(profile => (
//         <ProfileCardTrial
//           key={profile._id}
//           {...profile}
//         />
//       ))}
//     </div>
//   </div>
// </section>
