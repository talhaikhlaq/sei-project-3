require('../spec_helper')
const Human = require('../../models/user')


describe('Humans Controller Test', () => {

  beforeEach(done => {
    Human.collection.deleteMany()
    done()
  })

  afterEach(done => {
    Human.collection.deleteMany()
    done()
  })


  describe('Get api/profiles', () => {

    beforeEach(done => {
      Human.create({
        ownerName: 'Steven Parker',
        ownerAge: 28,
        ownerOccupation: 'Lawyer',
        pet: [{
          petName: 'Charming Nuttypants',
          petAge: 2,
          petSpecies: 'Cat',
          hobbies: ['Running, ', 'Drinking water straight from the tap'],
          aboutMe: 'Prefers the term collector rather than hoarder. Likes batting fragile things off tables to hear them smash and currently at war with neighborhood pigeons. ',
          image: 'https://i.imgur.com/Io6f0Eo.jpg?1'
        }]
      })
        .then(() => done())
        .catch(() => done())
    })

    it('should return 200 response', done => {
      api
        .get('/api/profiles')
        .set('Accept', 'application/json')
        .expect(200, done)
    })

    it('should respond with a JSON object', done => {
      api
        .get('/api/profiles')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should return an array', done => {
      api
        .get('/api/profiles')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })

  })



})
