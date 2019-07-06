// require('../spec_helper')
// const User = require('../../models/user')
//
// describe('Users Controller Test', () => {
//
//   beforeEach(done => {
//     User.collection.deleteMany()
//     done()
//   })
//
//   afterEach(done => {
//     User.collection.deleteMany()
//   })
//
//
//   describe('POST api/register', () => {
//
//     beforeEach(done => {
//       User.create([
//         {
//           username: 'tommykins',
//           email: 'tommykins@email',
//           password: 'pass',
//           passwordConfirmation: 'pass'
//         }, {
//           username: 'monterayjack',
//           email: 'jack@email',
//           password: 'pass',
//           passwordConfirmation: 'pass'
//         }
//       ])
//         .then(() => done())
//         .catch(() => done())
//     })
//
//     it('should return 201 response', done => {
//       api
//         .post('/api/login')
//         .set('Accept', 'application/json')
//         .expect(201, done)
//     })
//
//   })
//
//
// })
