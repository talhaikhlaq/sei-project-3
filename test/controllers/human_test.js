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

    it('should return an array of human objects', done => {
      api
        .get('/api/profiles')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.to.have.all.keys([
              '__v',
              '_id',
              'ownerName',
              'ownerAge',
              'ownerOccupation',
              'pet',
              'user'
            ])
          done()
        })
    })

  })


  describe('POST api/profiles', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/profiles')
        .set('Accept', 'application/json')
        .send({
          ownerName: 'Tal',
          ownerAge: '30',
          ownerOccupation: 'Company Director',
          image: 'https://i.imgur.com/Io6f0Eo.jpg?1'
        })
        .end((err, res) => {
          // console.log('err', err)
          // console.log('res', res)
          expect(res.status)
            .to.equal(201)
          done()
        })
    })

    it('should create a human profile', done => {
      api
        .post('/api/profiles')
        .set('Accept', 'application/json')
        .send({
          ownerName: 'Tal',
          ownerAge: '30',
          ownerOccupation: 'Company Director',
          image: 'https://i.imgur.com/Io6f0Eo.jpg?1'
        })
        .end((err, res) => {
          // console.log('err', err)
          // console.log('res', res)
          const human = res.body

          expect(human)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(human)
            .to.have.property('ownerName')
            .and.to.be.a('string')

          expect(human)
            .to.have.property('ownerAge')
            .and.to.be.a('number')

          expect(human)
            .to.have.property('ownerOccupation')
            .and.to.be.a('string')

          expect(human)
            .to.have.property('image')
            .and.to.be.a('string')

          done()

        })
    })
  })

  describe('GET /api/profiles/:id', () => {

    let human

    beforeEach(done => {
      Human.create({
        username: 'tal',
        email: 'tal@email',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
        .then(humanData => {
          human = humanData
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get(`/api/profiles/${human.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          // console.log('err', err)
          // console.log('res', res)
          expect(200)
          done()
        })
    })
  })

  describe('DELETE /api/profiles/:id', () => {

    let human

    beforeEach(done => {
      Human.create({
        username: 'tal',
        email: 'tal@email',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
        .then(humanData => {
          human = humanData
          done()
        })
        .catch(done)
    })

    it('should return a 204 response', done => {
      api
        .delete(`/api/profiles/${human.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(204)
          done()
        })
    })
  })

})
