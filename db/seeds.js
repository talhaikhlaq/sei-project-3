const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Human = require('../models/humanProfile')
const User = require('../models/user')
const Location = require('../models/location')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'tal',
          email: 'tal@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'amy',
          email: 'amy@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'kasia',
          email: 'kasia@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'wesleydale',
          email: 'wes@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'steven-parker',
          email: 'steven@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'ruby-charlton',
          email: 'ruby@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'rian-brantle',
          email: 'rian@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'victoria-lancaster',
          email: 'victoria@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'marlon-mcarthur',
          email: 'marlon@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'xanthe-deleon',
          email: 'xanthe@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'devin-parry',
          email: 'devin@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'abu-allen',
          email: 'abu@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'henley-marquez',
          email: 'henley@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'taha-choi',
          email: 'taha@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(users => {
      console.log(`${users.length} users created`)
      return Human.create([
        {
          ownerName: 'Steven Parker',
          ownerAge: 28,
          ownerOccupation: 'Lawyer',
          image: 'https://i.imgur.com/rezP6jv.jpg?1',
          pet: [{
            petName: 'Charming Nuttypants',
            petAge: 2,
            petSpecies: 'Cat',
            hobbies: ['Running, ', 'Drinking water straight from the tap'],
            aboutMe: 'Prefers the term collector rather than hoarder. Likes batting fragile things off tables to hear them smash and currently at war with neighborhood pigeons. ',
            image: 'https://i.imgur.com/Io6f0Eo.jpg?1'
          }],
          user: users[5]
        },
        {
          ownerName: 'Ruby Charlton',
          ownerAge: 30,
          ownerOccupation: '3D Animator',
          image: 'https://i.imgur.com/OtkwJs9.jpg?1',
          pet: [{
            petName: 'Poofy Fluff',
            petAge: 8,
            petSpecies: 'Cat',
            hobbies: ['Jangling Keys Manically '],
            aboutMe: 'Loves bright colors and soft fabrics. Using the litter box is a continuous struggle that is continuously up for debate.',
            image: 'https://i.imgur.com/w0wFWaQ.jpg?1'
          }],
          user: users[6]
        },
        {

          ownerName: 'Rian Brantle',
          ownerAge: 30,
          ownerOccupation: 'Producer',
          image: 'https://i.imgur.com/dQg4fle.jpg?1',
          pet: [{
            petName: 'Dancing Glitterbug',
            petAge: 4,
            petSpecies: 'Dog',
            hobbies: ['Bounding about, ', 'Giving Kisses'],
            aboutMe: 'Greedy eater and stubborn. She was stubborn to house train. Unable to look straight ahead. ',
            image: 'https://i.imgur.com/hyS04HX.jpg?1'
          }],
          user: users[7]
        },
        {
          ownerName: 'Victoria Lancaster',
          ownerAge: 32,
          ownerOccupation: 'Application Analyst',
          image: 'https://i.imgur.com/QOTx7EU.jpg?1',
          pet: [{
            petName: 'Rainy Gooberton',
            petAge: 1,
            petSpecies: 'Dog',
            hobbies: ['Licking faces', 'Being generally excited about everything'],
            aboutMe: 'Rainy jumps alot and she is not at all trained yet. Traded brain cells for friendliness.' ,
            image: 'https://i.imgur.com/4ocv52i.jpg?1'
          }],
          user: users[8]
        },
        {
          ownerName: 'Marlon McArthur',
          ownerAge: 52,
          ownerOccupation: 'Rapid prototyper',
          image: 'https://i.imgur.com/odQdPlw.jpg?1',
          pet: [{
            petName: 'Rueben',
            petAge: 6,
            petSpecies: 'Dog',
            hobbies: ['Treat hunting, ', 'Leaping at the beach'],
            aboutMe: 'I am an intelligent dog but I was difficult to train. A classic wanderer, I often get lost. ',
            image: 'https://i.imgur.com/yX4sQUE.jpg?1'
          }],
          user: users[9]
        },
        {
          ownerName: 'Xanthe Deleon',
          ownerAge: 24,
          ownerOccupation: 'Marine Engineer',
          image: 'https://i.imgur.com/qFtLLUA.jpg?1',
          pet: [{
            petName: 'Insane Chalupa',
            petAge: 10,
            petSpecies: 'Cat',
            hobbies: ['Licking myself, ', 'Licking others'],
            aboutMe: 'I love to stare intently into the distance at absolutely nothing.',
            image: 'https://i.imgur.com/peslsHh.jpg'
          }],
          user: users[10]
        },
        {
          ownerName: 'Devin Parry',
          ownerAge: 49,
          ownerOccupation: 'Safety Inspector',
          image: 'https://i.imgur.com/1j3RhYz.jpg',
          pet: [{
            petName: 'Goob',
            petAge: 8,
            petSpecies: 'Cat',
            hobbies: ['Sleeping, ', 'Curling tail around faces'],
            aboutMe: 'Goob is generally disatisfied with all humans and other animals. Shows general distaste at all times.',
            image: 'https://i.imgur.com/YaZz7nk.jpg?1'
          }],
          user: users[11]
        },
        {
          ownerName: 'Abu Allan',
          ownerAge: 27,
          ownerOccupation: 'Health Psychologist',
          image: 'https://i.imgur.com/FEscsaQ.jpg?1',
          pet: [{
            petName: 'Oracle',
            petAge: 1,
            petSpecies: 'Dog',
            hobbies: ['Barking obsessivly at nothing, ', 'Panting'],
            aboutMe: 'Only loves one person, still wont listen to them.',
            image: 'https://i.imgur.com/MlKDIAA.jpg?1'
          }],
          user: users[12]
        },
        {
          ownerName: 'Henley Marquez',
          ownerAge: 38,
          ownerOccupation: 'Ultrasound Technologist',
          image: 'https://i.imgur.com/J8gtJj2.jpg?1',
          pet: [{
            petName: 'Cuddly Doink',
            petAge: 16,
            petSpecies: 'Cat',
            hobbies: ['Drinking exclusively from the tap, ', 'Sleeping in the sink'],
            aboutMe: 'Will not allow you to brush your teeth or wash your hands.',
            image: 'https://i.imgur.com/lPc079Z.jpg?1'
          }],
          user: users[13]
        },
        {
          ownerName: 'Taha Choi',
          ownerAge: 26,
          ownerOccupation: 'Aircraft Assembler',
          image: 'https://i.imgur.com/MatVya9.jpg?1',
          pet: [{
            petName: 'Squiggly Pete',
            petAge: 5,
            petSpecies: 'Dog',
            hobbies: ['Not being chill ', 'Rubbing butt on carpet'],
            aboutMe: 'Gentle angel baby or neurotic mess, no inbetween.',
            image: 'https://i.imgur.com/kCPyjPb.jpg?1'
          }],
          user: users[14]
        }
      ])
    })
    // .then(profiles => console.log(`${profiles.length} profiles created`))
    .then(users => {
      return Location.create([
        {
          name: 'The Carpenters Arms',
          category: 'pub',
          address: {
            buildingNumber: '73',
            street: 'Cheshire Street',
            city: 'London',
            postcode: 'E2 6EG'
          },
          coordinates: {
            lat: 51.52408,
            lng: -0.06665
          },
          image: 'http://www.londondateguide.com/wp-content/uploads/2013/11/Carpenters-Arms.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d2527679-Reviews-The_Carpenter_s_Arms-London_England.html',
          user: users[2]
        }, {
          name: 'The Stonhouse',
          category: 'pub',
          address: {
            buildingNumber: '165',
            street: 'Stonhouse Street',
            city: 'London',
            postcode: 'SW4 6BJ'
          },
          coordinates: {
            lat: 51.46442,
            lng: -0.13694
          },
          image: 'https://www.thestonhouse.co.uk/assets/DSC_6062-1158x500.jpg',
          website: 'https://www.thestonhouse.co.uk/',
          user: users[2]
        }, {
          name: 'Bolingbroke',
          category: 'pub',
          address: {
            buildingNumber: '174',
            street: 'Northcote Road',
            city: 'London',
            postcode: 'SW11 6RE'
          },
          coordinates: {
            lat: 51.45371,
            lng: -0.16403
          },
          image: 'https://www.thebolingbroke.com/wp-content/themes/bolingbroke-child/assets/slides/bolingbroke08.jpg',
          website: 'https://www.thebolingbroke.com/',
          user: users[2]
        },{
          name: 'Duchess Belle',
          category: 'pub',
          address: {
            buildingNumber: '101',
            street: 'Battersea Park Road',
            city: 'London',
            postcode: 'SW8 4DS '
          },
          coordinates: {
            lat: 51.47886,
            lng: -0.14306
          },
          image: 'https://duchessbelle.wpengine.com/wp-content/uploads/2018/09/4882c1b4-323c-49f1-82e6-28d561e3ff79.jpg',
          website: 'http://www.duchessbelle.co.uk/',
          user: users[2]
        }, {
          name: 'The Avalon',
          category: 'pub',
          address: {
            buildingNumber: '16',
            street: 'Balham Hill',
            city: 'London',
            postcode: 'SW12 9EB'
          },
          coordinates: {
            lat: 51.45066,
            lng: -0.14819
          },
          image: 'https://www.theavalonlondon.com/wp-content/themes/avalon-child/assets/slides/avalon08.jpg',
          website: 'https://www.theavalonlondon.com/',
          user: users[2]
        }, {
          name: 'The Abbeville',
          category: 'pub',
          address: {
            buildingNumber: '67-69',
            street: 'Abbeville Road',
            city: 'London',
            postcode: 'SW4 9JW'
          },
          coordinates: {
            lat: 51.45484,
            lng: -0.13971
          },
          image: 'https://img.static-bookatable.com/33-abbeville-road-clapham-london-9.jpg?id=264345b9-e020-4e30-b12f-a348a857125b.jpg&404=bat2/404-restaurant.jpg&width=600&height=400&scale=both&mode=crop',
          website: 'https://www.theabbeville.co.uk/',
          user: users[2]
        }, {
          name: 'The Rosendale',
          category: 'pub',
          address: {
            buildingNumber: '65',
            street: 'Rosendale Road',
            city: 'London',
            postcode: 'SE21 8EZ'
          },
          coordinates: {
            lat: 51.43679,
            lng: -0.09473
          },
          image: 'https://www.therosendale.co.uk/assets/jonathon-flint-photography-1158x500.jpg',
          website: 'https://www.therosendale.co.uk/',
          user: users[2]
        }, {
          name: 'The Tommyfield',
          category: 'pub',
          address: {
            buildingNumber: '185',
            street: 'Kennington Lane',
            city: 'London',
            postcode: 'SE11 4EZ'
          },
          coordinates: {
            lat: 51.48894,
            lng: -0.11042
          },
          image: 'http://www.fancyapint.com/media/61/3073_exterior.jpg',
          website: 'https://www.thetommyfield.com/',
          user: users[2]
        }, {
          name: 'The Queens Arms',
          category: 'pub',
          address: {
            buildingNumber: '11',
            street: 'Warwick Way',
            city: 'London',
            postcode: 'SW1V 1QT'
          },
          coordinates: {
            lat: 51.49255,
            lng: -0.13947
          },
          image: 'http://www.foodandfuel.co.uk/our-pubs/the-queens-arms-pimlico/wp-content/uploads/2013/01/queens-arms-home.jpg',
          website: 'http://www.foodandfuel.co.uk/',
          user: users[2]
        }, {
          name: 'The Three Stags',
          category: 'pub',
          address: {
            buildingNumber: '67-69' ,
            street: 'Kennington Road',
            city: 'London',
            postcode: 'SE1 7PZ'
          },
          coordinates: {
            lat: 51.49689,
            lng: -0.11134
          },
          image: 'http://www.london-se1.co.uk//restaurants/images/031011_threestags.jpg',
          website: 'https://www.thethreestags.london/',
          user: users[2]
        }, {
          name: 'The Ranelagh',
          category: 'pub',
          address: {
            buildingNumber: '82',
            street: 'Bounds Green Road',
            city: 'London',
            postcode: 'N11 2EU'
          },
          coordinates: {
            lat: 51.60784,
            lng: -0.12547
          },
          image: 'https://www.theranelaghn11.co.uk/content/dam/castle/pub-images/theranelaghn11/theranelaghn11-home-1.jpg.asset/1561976017544.jpg',
          website: 'https://www.theranelaghn11.co.uk/',
          user: users[2]
        }, {
          name: 'Near & Far Bar',
          category: 'pub',
          address: {
            buildingNumber: '95a' ,
            street: 'Rye Lane',
            city: 'London',
            postcode: 'SE15 4ST'
          },
          coordinates: {
            lat: 51.46985,
            lng: -0.06800
          },
          image: 'https://media.drinkup.london/images/media/0c21c22d4259438a65de541a527084c7.jpg',
          website: 'https://www.peckhamlevels.org/member/near-and-far/',
          user: users[2]
        }, {
          name: 'Good Neighbour',
          category: 'pub',
          address: {
            buildingNumber: '21',
            street: 'Camberwell Church Street',
            city: 'London',
            postcode: 'SE5 8TR'
          },
          coordinates: {
            lat: 51.47405,
            lng: -0.08959
          },
          image: 'https://www.justopenedlondon.com/wp-content/uploads/2018/03/good-neighbour-exterior.jpg',
          website: 'https://www.goodneighbour.uk.com/',
          user: users[2]
        }, {
          name: 'Pied Bull',
          category: 'pub',
          address: {
            buildingNumber: '498' ,
            street: 'Streatham High Road',
            city: 'London',
            postcode: 'SW16 3QB'
          },
          coordinates: {
            lat: 51.41943,
            lng: -0.12828
          },
          image: 'https://www.thebullstreatham.co.uk/youngs/uploads/sites/144/2018/07/1111_TheBull_June15_63-1024x683.jpg',
          website: 'https://www.thebullstreatham.co.uk/',
          user: users[2]
        }, {
          name: 'Richard the First',
          category: 'pub',
          address: {
            buildingNumber: '52-54',
            street: 'Royal Hill',
            city: 'London',
            postcode: 'SE10 8RT'
          },
          coordinates: {
            lat: 51.47654,
            lng: -0.00985
          },
          image: 'https://www.allthingsgreenwich.co.uk/images/richardthefirst-404(600px).jpg',
          website: 'https://www.richardthefirst.co.uk/',
          user: users[2]
        }, {
          name: 'The Rosemary Branch',
          category: 'pub',
          address: {
            buildingNumber: '2' ,
            street: 'Shepperton Road',
            city: 'London',
            postcode: 'N1 3DT'
          },
          coordinates: {
            lat: 51.53762,
            lng: -0.08696
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/84/1c/52/shepperton-road-entrance.jpg',
          website: 'https://www.rosemarybranchtheatre.co.uk/',
          user: users[2]
        }, {
          name: 'Piebury Corner',
          category: 'pub',
          address: {
            buildingNumber: '3',
            street: 'Caledonian Rd',
            city: 'London',
            postcode: 'N1 9DX'
          },
          coordinates: {
            lat: 51.53146,
            lng: -0.12122
          },
          image: 'https://www.pieburycorner.com/wp-content/uploads/2017/11/Piebury_065.jpg',
          website: 'https://pieburycorner.com/',
          user: users[0]
        }, {
          name: 'Honor Oak Pub',
          category: 'pub',
          address: {
            buildingNumber: '1',
            street: 'St German\'s Road',
            city: 'London',
            postcode: 'SE23 1RH'
          },
          coordinates: {
            lat: 51.44337,
            lng: -0.04151
          },
          image: 'http://listofpubs.co.uk/uploads/300526/x0.jpg.pagespeed.ic.Tjh2EXjrhp.jpg',
          website: 'https://www.honoroak.pub/',
          user: users[0]
        }, {
          name: 'The King & Co',
          category: 'pub',
          address: {
            buildingNumber: '100',
            street: 'Clapham Park Road',
            city: 'London',
            postcode: 'SW4 7BZ'
          },
          coordinates: {
            lat: 51.45918,
            lng: -0.13402
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/de/7e/24/king-and-co-pub.jpg',
          website: 'https://thekingandco.uk/',
          user: users[0]
        }, {
          name: 'Megan\'s Old Town',
          category: 'restaurant',
          address: {
            buildingNumber: '55-57',
            street: 'The Pavement',
            city: 'London',
            postcode: 'SW4 0JQ'
          },
          coordinates: {
            lat: 51.46363,
            lng: -0.14095
          },
          image: 'https://static.designmynight.com/uploads/2019/02/clapham-restaurants-optimised.jpg',
          website: 'https://megans.co.uk//',
          user: users[0]
        }, {
          name: 'Bronte',
          category: 'restaurant',
          address: {
            buildingNumber: '1-3',
            street: 'Strand',
            city: 'London',
            postcode: 'WC2N 5EJ'
          },
          coordinates: {
            lat: 51.50752,
            lng: -0.12618
          },
          image: 'https://www.coventgarden.london/sites/default/d8files/styles/square_image_style_/public/cg_images/Bronte-square-copco%202.jpg?itok=1dQPDyWk',
          website: 'hhttps://www.coventgarden.london/bars/bronte/',
          user: users[0]
        },
        {
          name: 'Marquess Tavern',
          category: 'pub',
          address: {
            buildingNumber: '32',
            street: 'Canonbury Street',
            city: 'London',
            postcode: 'N1 2TB'
          },
          coordinates: {
            lat: 51.54318,
            lng: -0.09535
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/de/7e/24/king-and-co-pub.jpg',
          website: 'https://static.wixstatic.com/media/96851f_cc647a5b9465413986c8e083954f6be4~mv2_d_1280_1280_s_2.jpg/v1/fill/w_421,h_421,al_c,q_80,usm_0.66_1.00_0.01/96851f_cc647a5b9465413986c8e083954f6be4~mv2_d_1280_1280_s_2.webp',
          user: users[0]
        },  {
          name: 'Duchy Arms',
          category: 'pub',
          address: {
            buildingNumber: '63',
            street: 'Sandcroft Street',
            city: 'London',
            postcode: 'SE11 5UG'
          },
          coordinates: {
            lat: 51.48892,
            lng: -0.11288
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/be/25/09/the-duchy-arms.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d3846295-Reviews-The_Duchy_Arms-London_England.html',
          user: users[0]
        }, {
          name: 'Coach And Horses',
          category: 'pub',
          address: {
            buildingNumber: '13',
            street: 'Greenwich Market',
            city: 'London',
            postcode: 'SE10 9HZ'
          },
          coordinates: {
            lat: 51.48148,
            lng: -0.00899
          },
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/KWFsrbEJ5Y3-d1QiIBhF-Q/ls.jpg',
          website: 'https://www.the-coach-and-horses.co.uk/',
          user: users[0]
        },  {
          name: 'Lemongrass Restaurant',
          category: 'restaurant',
          address: {
            buildingNumber: '243',
            street: 'Royal College Street',
            city: 'London',
            postcode: 'NW1 9LT'
          },
          coordinates: {
            lat: 51.54237,
            lng: -0.13912
          },
          image: 'https://www.allinlondon.co.uk/images/livelistings/9806-ailsize.jpg',
          website: 'https://www.lemongrass-restaurant.co.uk/',
          user: users[0]
        }, {
          name: 'Victoria Stakes',
          category: 'pub',
          address: {
            buildingNumber: '1',
            street: 'Muswell Hill',
            city: 'London',
            postcode: 'N10 3TH'
          },
          coordinates: {
            lat: 51.58747,
            lng: -0.13419
          },
          image: 'https://static1.squarespace.com/static/58cfb3c03a041149f32f60ea/t/59065e91d482e95dce713eb4/1497953300643/stakes-10-small.jpg?format=2500w',
          website: 'https://www.victoriastakes.com/',
          user: users[0]
        },  {
          name: 'The Horse and Stables',
          category: 'pub',
          address: {
            buildingNumber: '122-124',
            street: 'Westminster Bridge Road',
            city: 'London',
            postcode: 'SE1 7RW'
          },
          coordinates: {
            lat: 51.49977,
            lng: -0.11369
          },
          image: 'https://static.wixstatic.com/media/42c891_4a471cd548d441769489d28fb616ba3c~mv2.jpeg',
          website: 'https://www.thehorseandstables.co.uk/',
          user: users[0]
        }, {
          name: 'The Running Horse',
          category: 'pub',
          address: {
            buildingNumber: '7',
            street: 'Leman Street',
            city: 'London',
            postcode: 'E1 8FU'
          },
          coordinates: {
            lat: 51.51341,
            lng: -0.06951
          },
          image: 'https://resizer.otstatic.com/v2/photos/wide-huge/25148555.jpg',
          website: 'http://www.therunninghorsealdgate.co.uk/',
          user: users[0]
        }, {
          name: 'The Lord Palmerston',
          category: 'pub',
          address: {
            buildingNumber: '33',
            street: 'Dartmouth Park Hill',
            city: 'London',
            postcode: 'NW5 1HU'
          },
          coordinates: {
            lat: 51.55959,
            lng: -0.14069
          },
          image: 'http://www.fullpint.com/i/pubs/694.jpg',
          website: 'https://www.thelordpalmerston.co.uk/',
          user: users[0]
        }, {
          name: 'The Alma',
          category: 'pub',
          address: {
            buildingNumber: '59',
            street: 'Newington Green Road',
            city: 'London',
            postcode: 'N1 4QU'
          },
          coordinates: {
            lat: 51.54876,
            lng: -0.08767
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/61/c3/e7/the-alma.jpg',
          website: 'http://thealmapubn1.com/home',
          user: users[0]
        }, {
          name: 'Buckingham Arms',
          category: 'pub',
          address: {
            buildingNumber: '62',
            street: 'Buckingham Arms',
            city: 'London',
            postcode: 'SW1H 9EU'
          },
          coordinates: {
            lat: 51.49912,
            lng: -0.13694
          },
          image: 'https://www.buckinghamarms.com/youngs/uploads/sites/67/2017/03/BUCKINGHAM-03-17_13-1-1770x1124.jpg',
          website: 'https://www.buckinghamarms.com/',
          user: users[0]
        }, {
          name: 'glo',
          category: 'cafe',
          address: {
            buildingNumber: '63',
            street: 'Wingate Square',
            city: 'London',
            postcode: 'SW4 0AF'
          },
          coordinates: {
            lat: 51.46362,
            lng: -0.14033
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/6b/4a/4d/glo.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d6610608-Reviews-Glo-London_England.html',
          user: users[0]
        },{
          name: 'Dulwich Wood House',
          category: 'pub',
          address: {
            buildingNumber: '39',
            street: 'Sydenham Hill',
            city: 'London',
            postcode: 'SE26 6RS'
          },
          coordinates: {
            lat: 51.43274,
            lng: -0.07277
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/9c/7d/f7/paxton-lounge.jpg',
          website: 'https://www.thewoodhousedulwich.co.uk/',
          user: users[0]
        }, {
          name: 'The Beehive',
          category: 'pub',
          address: {
            buildingNumber: '197',
            street: 'St John\'s Hill',
            city: 'London',
            postcode: 'SW11 1TH'
          },
          coordinates: {
            lat: 51.45970,
            lng: -0.17881
          },
          image: 'https://www.beehivewandsworth.co.uk/-/media/a796808ad4da47c7b48b48a9c8781f97.jpg?as=0',
          website: 'https://www.beehivewandsworth.co.uk/',
          user: users[0]
        }, {
          name: 'The Colonel Fawcett',
          category: 'pub',
          address: {
            buildingNumber: '1',
            street: 'Randolph Street',
            city: 'London',
            postcode: 'NW1 0SS'
          },
          coordinates: {
            lat: 51.54169,
            lng: -0.13621
          },
          image: 'https://whatpub.com/img/NLD/5912/colonel-fawcett-london/298/224',
          website: 'http://thecolonelfawcett.co.uk/',
          user: users[0]
        }, {
          name: 'The Village Pub',
          category: 'pub',
          address: {
            buildingNumber: '31',
            street: 'Orford Road',
            city: 'London',
            postcode: 'E17 9NL'
          },
          coordinates: {
            lat: 51.58273,
            lng: -0.01174
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/d5/8f/6f/the-newly-refurbished.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g10259438-d4161879-Reviews-The_Village-Walthamstow_Waltham_Forest_Greater_London_England.html/',
          user: users[0]
        }, {
          name: 'The Kenton',
          category: 'pub',
          address: {
            buildingNumber: '38',
            street: 'Kenton Road',
            city: 'London',
            postcode: 'E9 7AB'
          },
          coordinates: {
            lat: 51.54395,
            lng: -0.04415
          },
          image: 'https://media.timeout.com/images/105265213/630/472/image.jpg',
          website: 'https://www.kentonpub.co.uk/',
          user: users[0]
        }, {
          name: 'The Albion',
          category: 'pub',
          address: {
            buildingNumber: '10',
            street: 'Thornhill Road',
            city: 'London',
            postcode: 'N1 1HW'
          },
          coordinates: {
            lat: 51.53960,
            lng: -0.10947
          },
          image: 'https://pubshistory.com/LondonPubs//Islington/AlbionThornhill.jpg',
          website: 'https://www.the-albion.co.uk/',
          user: users[0]
        }, {
          name: 'Mc & Sons',
          category: 'pub',
          address: {
            buildingNumber: '160',
            street: 'Union Street',
            city: 'London',
            postcode: 'SE1 0LH'
          },
          coordinates: {
            lat: 51.50387,
            lng: -0.10038
          },
          image: 'https://media.timeout.com/images/105152523/630/472/image.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d12964321-Reviews-Mc_Sons-London_England.html',
          user: users[0]
        }, {
          name: 'Clockhouse',
          category: 'pub',
          address: {
            buildingNumber: '196',
            street: 'Peckham Rye',
            city: 'London',
            postcode: 'SE22 9QA'
          },
          coordinates: {
            lat: 51.45970,
            lng: -0.06660
          },
          image: 'https://images.squaremeal.co.uk/cloud/restaurants/8580/the-clock-house-exterior.jpg?w=900&h=600&fit=crop',
          website: 'http://clockhousepub.com/',
          user: users[0]
        }, {
          name: 'Buckingham Arms',
          category: 'pub',
          address: {
            buildingNumber: '62',
            street: 'Petty France',
            city: 'London',
            postcode: 'SW1H 9EU'
          },
          coordinates: {
            lat: 51.49912,
            lng: -0.13694
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/18/30/d2/the-buck.jpg',
          website: 'https://www.buckinghamarms.com/',
          user: users[0]
        }, {
          name: 'The General Store',
          category: 'pub',
          address: {
            buildingNumber: '20-22',
            street: 'Highbury Corner',
            city: 'London',
            postcode: 'N5 1RD'
          },
          coordinates: {
            lat: 51.54670,
            lng: -0.10384
          },
          image: 'https://media.timeout.com/images/103858894/630/472/image.jpg',
          website: 'http://thegarage.london/',
          user: users[0]
        },{
          name: 'The Vine',
          category: 'pub',
          address: {
            buildingNumber: '86',
            street: 'Highgate Road',
            city: 'London',
            postcode: 'NW5 1PB'
          },
          coordinates: {
            lat: 51.55522,
            lng: -0.14483
          },
          image: 'https://pubshistory.com/LondonPubs/StPancras/Vine.jpg',
          website: 'http://www.thevinenw5.co.uk/',
          user: users[0]
        }, {
          name: 'Islington Townhouse',
          category: 'pub',
          address: {
            buildingNumber: '13',
            street: 'Liverpool Road',
            city: 'London',
            postcode: 'N1 0RW'
          },
          coordinates: {
            lat: 51.53389,
            lng: -0.10743
          },
          image: 'https://www.justopenedlondon.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-13-at-11.34.35.png',
          website: 'https://www.islingtontownhouse.co.uk/',
          user: users[0]
        }, {
          name: 'The Kings Arms',
          category: 'pub',
          address: {
            buildingNumber: '251',
            street: 'Tooley Street',
            city: 'London',
            postcode: 'SE1 2JX'
          },
          coordinates: {
            lat: 51.50222,
            lng: -0.07703
          },
          image: 'https://live.staticflickr.com/3226/3053129381_3dcd28329d_b.jpg',
          website: 'https://www.thekingsarmstooley.com/',
          user: users[0]
        }, {
          name: 'Grove',
          category: 'pub',
          address: {
            buildingNumber: '39',
            street: 'Oldridge Road',
            city: 'London',
            postcode: 'SW12 8PN'
          },
          coordinates: {
            lat: 51.44832,
            lng: -0.15133
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/09/6f/fe/the-grove.jpg',
          website: 'https://www.grovebalham.com/',
          user: users[0]
        }, {
          name: 'Nightingale',
          category: 'pub',
          address: {
            buildingNumber: '97',
            street: 'Nightingale Lane',
            city: 'London',
            postcode: 'SW12 8NX'
          },
          coordinates: {
            lat: 51.45019,
            lng: -0.15745
          },
          image: 'http://www.thenightingalebalham.co.uk/assets/img/transitions/index/03.jpg',
          website: 'http://www.thenightingalebalham.co.uk/',
          user: users[0]
        }, {
          name: 'Park Road Kitchen',
          category: 'pub',
          address: {
            buildingNumber: '316-318',
            street: 'Battersea Park Road',
            city: 'London',
            postcode: 'SW11 3BX'
          },
          coordinates: {
            lat: 51.47123,
            lng: -0.16925
          },
          image: 'https://lds.localdataimages.com/large/2357/23571175.jpg',
          website: 'http://parkroadkitchen.com/',
          user: users[0]
        }, {
          name: 'Trinity Arms',
          category: 'pub',
          address: {
            buildingNumber: '45',
            street: 'Trinity Gardens',
            city: 'London',
            postcode: 'SW9 8DR'
          },
          coordinates: {
            lat: 51.46192,
            lng: -0.11877
          },
          image: 'https://static.designmynight.com/uploads/2019/04/best-beer-gardens-brixton-optimised.jpg',
          website: 'https://www.trinityarms.co.uk/',
          user: users[0]
        }, {
          name: 'Duke on the Green',
          category: 'pub',
          address: {
            buildingNumber: '235',
            street: 'New King\'s Road',
            city: 'London',
            postcode: 'SW6 4XG'
          },
          coordinates: {
            lat: 51.47257,
            lng: -0.19992
          },
          image: 'https://photos.smugmug.com/Work-Portfolio/Pubs-and-lifestyle/The-Duke-on-Green-Parsons-Greens-for-Youngs/i-63bfZ7X/0/ac12b69f/S/dukeongreen-3-S.jpg',
          website: 'https://www.dukeonthegreen.co.uk/menu',
          user: users[0]
        }, {
          name: 'Goat',
          category: 'restaurant',
          address: {
            buildingNumber: '333',
            street: 'Fulham Road',
            city: 'London',
            postcode: 'SW10 9QL'
          },
          coordinates: {
            lat: 51.48630,
            lng: -0.17998
          },
          image: 'https://whatpub.com/img/WLD/16323/goat-chelsea/298/224',
          website: 'https://goatchelsea.com/',
          user: users[0]
        }, {
          name: 'The Sir Richard Steele',
          category: 'pub',
          address: {
            buildingNumber: '97',
            street: 'Haverstock Hill',
            city: 'London',
            postcode: 'NW3 4RL'
          },
          coordinates: {
            lat: 51.54667,
            lng: -0.15859
          },
          image: 'https://assets.londonist.com/uploads/2014/01/i875/steeleold.jpg',
          website: 'https://www.thesteelespub.co/',
          user: users[0]
        },  {
          name: 'Blue Anchor',
          category: 'pub',
          address: {
            buildingNumber: '13',
            street: 'Lower Mall',
            city: 'London',
            postcode: 'W6 9DJ'
          },
          coordinates: {
            lat: 51.48984,
            lng: -0.23186
          },
          image: 'https://c8.alamy.com/comp/CB48G4/blue-anchor-est-1722-lower-mall-hammersmith-london-england-CB48G4.jpg',
          website: 'https://www.blueanchorlondon.com/',
          user: users[0]
        },  {
          name: 'The Queen Adelaide',
          category: 'pub',
          address: {
            buildingNumber: '35',
            street: 'Putney Bridge Road',
            city: 'London',
            postcode: 'SW18 1NP'
          },
          coordinates: {
            lat: 51.46047,
            lng: -0.20095
          },
          image: 'https://media.timeout.com/images/102940925/630/472/image.jpg',
          website: 'https://www.thequeenadelaide.co.uk/',
          user: users[0]
        }, {
          name: 'The Castle',
          category: 'pub',
          address: {
            buildingNumber: '38',
            street: 'Tooting High Street',
            city: 'London',
            postcode: 'SW17 0RG'
          },
          coordinates: {
            lat: 51.42888,
            lng: -0.16753
          },
          image: 'https://media.timeout.com/images/101590443/630/472/image.jpg',
          website: 'https://www.castletooting.com/',
          user: users[0]
        },{
          name: 'Old Ship',
          category: 'pub',
          address: {
            buildingNumber: '3',
            street: 'King Street',
            city: 'London',
            postcode: 'TW9 1ND'
          },
          coordinates: {
            lat: 51.45995,
            lng: -0.30694
          },
          image: 'http://www.rampubcompany.co.uk/data/venues/431_image.rampub.jpg?1533383133',
          website: 'https://www.theoldshiprichmond.com/',
          user: users[0]
        }, {
          name: 'The Pilot',
          category: 'pub',
          address: {
            buildingNumber: '56',
            street: 'Wellesley Road',
            city: 'London',
            postcode: 'W4 4BZ'
          },
          coordinates: {
            lat: 51.49029,
            lng: -0.27722
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/76/96/37/the-pilot-chiswick.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d733510-Reviews-The_Pilot-London_England.html',
          user: users[0]
        }, {
          name: 'No.1 Duke Street',
          category: 'pub',
          address: {
            buildingNumber: '1',
            street: 'Duke Street',
            city: 'London',
            postcode: 'TW9 1HP'
          },
          coordinates: {
            lat: 51.46151,
            lng: -0.30422
          },
          image: 'https://static1.squarespace.com/static/55f951eae4b0c432ff79fcd7/t/5bf28b80f950b7299bbc3ec4/1542622084545/No1.DukeSt_171%402x.jpg?format=2500w',
          website: 'https://www.no1adukestreet.co.uk/',
          user: users[0]
        },  {
          name: 'Old Stationhouse',
          category: 'pub',
          address: {
            buildingNumber: '2',
            street: 'Grove Park Road',
            city: 'London',
            postcode: 'W4 3SG'
          },
          coordinates: {
            lat: 51.48161,
            lng: -0.26930
          },
          image: 'https://whatpub.com/img/WLD/16255/station-house-chiswick/298/224/43143',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d4368305-Reviews-Old_Station_House_Pub-London_England.html',
          user: users[0]
        },  {
          name: 'Hand in Hand',
          category: 'pub',
          address: {
            buildingNumber: '6',
            street: 'Crooked Billet',
            city: 'London',
            postcode: 'SW19 4RQ'
          },
          coordinates: {
            lat: 51.42129,
            lng: -0.22827
          },
          image: 'https://www.theresident.co.uk/wp-content/uploads/sites/10/2016/05/1074_HandinHand_Sept14-110-.jpg',
          website: 'https://www.thehandinhandwimbledon.co.uk/',
          user: users[0]
        }, {
          name: 'County Arms',
          category: 'pub',
          address: {
            buildingNumber: '345',
            street: 'Trinity Road',
            city: 'London',
            postcode: 'SW18 3SH'
          },
          coordinates: {
            lat: 51.45009,
            lng: -0.17427
          },
          image: 'hhttps://pubshistory.com/LondonPubs/Wandsworth/CountyArms.jpg',
          website: 'https://www.countyarms.co.uk/',
          user: users[0]
        }, {
          name: 'The Thatched House',
          category: 'pub',
          address: {
            buildingNumber: '115',
            street: 'Dalling Road',
            city: 'London',
            postcode: 'W6 0ET'
          },
          coordinates: {
            lat: 51.49779,
            lng: -0.23490
          },
          image: 'https://pbs.twimg.com/media/DRF1AWKW0AEgRmq.jpg',
          website: 'https://www.thatchedhouse.com/',
          user: users[0]
        }, {
          name: 'The Broadway Bar and Grill',
          category: 'pub',
          address: {
            buildingNumber: '474 - 476',
            street: 'Fulham Road',
            city: 'London',
            postcode: 'SW6 1BY'
          },
          coordinates: {
            lat: 51.48060,
            lng: -0.19495
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/87/06/d1/the-broadway-bar-and.jpg',
          website: 'http://www.broadwaybandg.co.uk/',
          user: users[0]
        }, {
          name: 'Villa di Geggiano',
          category: 'restaurant',
          address: {
            buildingNumber: '66-68',
            street: 'Chiswick High Road',
            city: 'London',
            postcode: 'W4 1SY'
          },
          coordinates: {
            lat: 51.49341,
            lng: -0.24951
          },
          image: 'https://img.static-bookatable.com/villa-di-geggiano-chiswick-london-45.jpg?id=da733e24-c962-4308-bdda-ed25e809e9ff.jpg&404=bat2/404-restaurant.jpg&width=600&height=400&scale=both&mode=crop',
          website: 'http://www.villadigeggiano.co.uk/',
          user: users[0]
        }, {
          name: 'The Old Frizzle',
          category: 'pub',
          address: {
            buildingNumber: '74-78',
            street: 'The Broadway',
            city: 'London',
            postcode: 'SW19 1RQ'
          },
          coordinates: {
            lat: 51.42000,
            lng: -0.20284
          },
          image: 'https://lovewimbledon.org/wp-content/uploads/2017/03/The-Old-Frizzle.jpg',
          website: 'https://www.theoldfrizzle.co.uk/',
          user: users[0]
        }, {
          name: 'The British Queen, Locksbottom',
          category: 'pub',
          address: {
            buildingNumber: '427',
            street: 'Crofton Road',
            city: 'London',
            postcode: 'BR6 8NL'
          },
          coordinates: {
            lat: 51.36676,
            lng: 0.05454
          },
          image: 'https://britishqueenlocksbottom.com/wp-content/uploads/sites/12/2016/11/The-British-Queen-020.jpg',
          website: 'https://britishqueenlocksbottom.com/',
          user: users[0]
        }, {
          name: 'Bishop out of Residence',
          category: 'pub',
          address: {
            buildingNumber: '1',
            street: 'Allen Street',
            city: 'London',
            postcode: 'W8 6UX'
          },
          coordinates: {
            lat: 51.49712,
            lng: -0.19461
          },
          image: 'https://pubshistory.com/LondonPubs/Kensington/BritanniaAllen.jpg',
          website: 'https://www.britanniakensington.co.uk/',
          user: users[0]
        }, {
          name: 'The Vanbrugh',
          category: 'pub',
          address: {
            buildingNumber: '91',
            street: 'Colomb Street',
            city: 'London',
            postcode: 'SE10 9EZ'
          },
          coordinates: {
            lat: 51.48366,
            lng: 0.00741
          },
          image: 'https://thevanbrugh.co.uk/2013/wp-content/uploads/2015/07/IMG_15021.jpg',
          website: 'https://thevanbrugh.co.uk/',
          user: users[0]
        }, {
          name: 'Coach & Horses',
          category: 'pub',
          address: {
            buildingNumber: '183',
            street: 'London Road',
            city: 'London',
            postcode: 'TW7 5BQ'
          },
          coordinates: {
            lat: 51.47943,
            lng: -0.32020
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/78/ec/57/main-entrance.jpg',
          website: 'http://www.coachandhorsesisleworth.co.uk/',
          user: users[0]
        }, {
          name: 'The George Pub',
          category: 'pub',
          address: {
            buildingNumber: '114',
            street: 'Glengall Grove',
            city: 'London',
            postcode: 'E14 3ND'
          },
          coordinates: {
            lat: 51.49571,
            lng: -0.01197
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/29/4f/5b/the-george.jpg',
          website: 'https://www.georgepub.co.uk/',
          user: users[0]
        }, {
          name: 'Duke of Wellington',
          category: 'pub',
          address: {
            buildingNumber: '179',
            street: 'Portobello Road',
            city: 'London',
            postcode: 'W11 2ED'
          },
          coordinates: {
            lat: 51.51553,
            lng: -0.20509
          },
          image: 'https://www.thedukeofwellingtonpub.com/youngs/uploads/sites/95/2017/10/dukeofwellington-131-1770x1180.jpg',
          website: 'https://www.thedukeofwellingtonpub.com/',
          user: users[0]
        }, {
          name: 'Dial Arch',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Major Draper Street',
            city: 'London',
            postcode: 'SE18 6GH'
          },
          coordinates: {
            lat: 51.49228,
            lng: 0.06910
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/09/3a/ea/grade-ii-listed-building.jpg',
          website: 'https://www.dialarch.com/',
          user: users[0]
        }, {
          name: 'Alexandra',
          category: 'pub',
          address: {
            buildingNumber: '33',
            street: 'Wimbledon Hill Road',
            city: 'London',
            postcode: 'SW19 7NE'
          },
          coordinates: {
            lat: 51.42189,
            lng: -0.20780
          },
          image: 'https://pbs.twimg.com/profile_images/1441138641/370.JPG',
          website: 'https://www.alexandrawimbledon.com/',
          user: users[0]
        }, {
          name: 'The Duke\'s Head',
          category: 'pub',
          address: {
            buildingNumber: '8',
            street: 'Lower Richmond Road',
            city: 'London',
            postcode: 'SW15 1JN'
          },
          coordinates: {
            lat: 51.46725,
            lng: -0.21659
          },
          image: 'https://static.designmynight.com/uploads/2016/05/1052_DukesHead_Aug14-135-optimised.jpg',
          website: 'https://www.dukesheadputney.com/',
          user: users[0]
        }, {
          name: 'The Cumberland Arms',
          category: 'pub',
          address: {
            buildingNumber: '29',
            street: 'North End Road',
            city: 'London',
            postcode: 'W14 8SZ'
          },
          coordinates: {
            lat: 51.49411,
            lng: -0.20985
          },
          image: 'https://lh3.googleusercontent.com/R1sZdrF2i0WoXVdNa45btH8EXbyeORhg0rV6MFxJMVgRlbr7hac3iszqOSdGPnrdOM9h953P45YKTBwC=s0',
          website: 'http://www.thecumberlandarmspub.co.uk/',
          user: users[0]
        }, {
          name: 'The White Bears',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Ickenham Road',
            city: 'London',
            postcode: 'HA4 7DF'
          },
          coordinates: {
            lat: 51.57184,
            lng: -0.43120
          },
          image: 'https://whitebearruislip.com/wp-content/uploads/sites/10/2016/11/BB-THE-WHITE-BEAR-10.jpg',
          website: 'https://whitebearruislip.com/',
          user: users[0]
        }, {
          name: 'The Hare, Old Redding',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Brookshill Harrow Weald',
            city: 'London',
            postcode: 'HA3 6SD'
          },
          coordinates: {
            lat: 51.62057,
            lng: -0.34299
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/ec/76/62/the-hare-at-old-redding.jpg',
          website: 'https://hareoldredding.com/',
          user: users[0]
        }, {
          name: 'Halfway House',
          category: 'pub',
          address: {
            buildingNumber: '521',
            street: 'Garratt Lane',
            city: 'London',
            postcode: 'SW18 4SR'
          },
          coordinates: {
            lat: 51.44107,
            lng: -0.18683
          },
          image: 'https://www.thehalfway.com/youngs/uploads/sites/89/2017/06/halfwayhouse-101-1770x1259.jpg',
          website: 'https://www.thehalfway.com/',
          user: users[0]
        }, {
          name: 'White Hart',
          category: 'pub',
          address: {
            buildingNumber: '521',
            street: 'The Terrace',
            city: 'London',
            postcode: 'SW13 0NR'
          },
          coordinates: {
            lat: 51.47132,
            lng: -0.25459
          },
          image: 'https://c8.alamy.com/comp/AD8DBR/ye-white-hart-public-house-the-terrace-barnes-london-AD8DBR.jpg',
          website: 'https://www.whitehartbarnes.co.uk/terrace-kitchen?id=504255',
          user: users[0]
        }, {
          name: 'The White Swan',
          category: 'pub',
          address: {
            buildingNumber: '521',
            street: 'Riverside',
            city: 'London',
            postcode: 'TW1 3DN'
          },
          coordinates: {
            lat: 51.44715,
            lng: -0.32123
          },
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-1i6VKVpCaP7Lpob0eXYB5P3Gh7ZMnUTrZ7jLfc2tUXUVvqA',
          website: 'http://www.whiteswantwickenham.co.uk/',
          user: users[0]
        }, {
          name: 'Megan\'s Fulham',
          category: 'restaurant',
          address: {
            buildingNumber: '571',
            street: 'Kings Road',
            city: 'London',
            postcode: 'SW6 2EB'
          },
          coordinates: {
            lat: 51.47899,
            lng: -0.18762
          },
          image: 'https://megans.co.uk/wp-content/uploads/2016/01/megans-offers-specials.jpg',
          website: 'https://megans.co.uk/',
          user: users[0]
        }, {
          name: 'The King\'s Head',
          category: 'pub',
          address: {
            buildingNumber: '123',
            street: 'High Street',
            city: 'London',
            postcode: 'TW11 8HG'
          },
          coordinates: {
            lat: 51.42736,
            lng: -0.32958
          },
          image: 'https://whatpub.com/img/HOU/6826/kings-head-teddington/298/224',
          website: 'https://kingsheadteddington.com/',
          user: users[0]
        }, {
          name: 'Pearl and Groove',
          category: 'cafe',
          address: {
            buildingNumber: '341',
            street: 'Portobello Road',
            city: 'London',
            postcode: 'W10 5SA'
          },
          coordinates: {
            lat: 51.52137,
            lng: -0.21058
          },
          image: 'https://glowcation.com/wp-content/uploads/2019/02/Photo-06-02-2019-09-59-50-800x1067.jpg',
          website: 'https://www.pearlandgroove.com/',
          user: users[0]
        }, {
          name: 'Green Man',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Wildcroft Road',
            city: 'London',
            postcode: 'SW15 3NG'
          },
          coordinates: {
            lat: 51.45293,
            lng: -0.22123
          },
          image: 'https://www.greenmanputney.co.uk/youngs/uploads/sites/164/2018/09/1067_GreenMan_Sept16_33.jpg',
          website: 'https://www.greenmanputney.co.uk/',
          user: users[0]
        }, {
          name: 'Marlborough',
          category: 'pub',
          address: {
            buildingNumber: '46',
            street: 'Friars Stile Road',
            city: 'London',
            postcode: 'TW10 6NQ'
          },
          coordinates: {
            lat: 51.45520,
            lng: -0.29674
          },
          image: 'http://www.themarlboroughrichmond.co.uk/assets/img/transition/index/02.jpg',
          website: 'http://www.themarlboroughrichmond.co.uk/',
          user: users[0]
        }, {
          name: 'Dog & Fox',
          category: 'pub',
          address: {
            buildingNumber: '24',
            street: 'High Street',
            city: 'London',
            postcode: 'SW19 5EA'
          },
          coordinates: {
            lat: 51.42510,
            lng: -0.21765
          },
          image: 'https://enjoyminded.com/media/uploads/places/261/thumb_ae779ced-e548-4e75-b869-acee9a89fab3.small.jpg',
          website: 'https://www.dogandfoxwimbledon.co.uk/',
          user: users[0]
        }, {
          name: 'Coffee in the Wood',
          category: 'cafe',
          address: {
            buildingNumber: '99',
            street: 'Colliers Wood High Street',
            city: 'London',
            postcode: 'SW19 2JF'
          },
          coordinates: {
            lat: 51.41961,
            lng: -0.17642
          },
          image: 'https://enjoyminded.com/media/uploads/places/261/thumb_ae779ced-e548-4e75-b869-acee9a89fab3.small.jpg',
          website: 'https://www.coffeeinthewood.co.uk/',
          user: users[0]
        }, {
          name: 'Porchester',
          category: 'pub',
          address: {
            buildingNumber: '88',
            street: 'Bishop\'s Bridge Road',
            city: 'London',
            postcode: 'W2 5AA'
          },
          coordinates: {
            lat: 51.51612,
            lng: -0.18792
          },
          image: 'https://whatpub.com/img/WLD/16128/porchester-paddington/298/224',
          website: 'http://www.theporchester.co.uk/',
          user: users[0]
        }, {
          name: 'The Park Tavern',
          category: 'pub',
          address: {
            buildingNumber: '212',
            street: 'Merton Road',
            city: 'London',
            postcode: 'SW18 5SW'
          },
          coordinates: {
            lat: 51.45091,
            lng: -0.19898
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/48/35/95/welcome-to-the-park-tavern.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d5572679-Reviews-The_Park_Tavern-London_England.html',
          user: users[0]
        }, {
          name: 'Coopers Arms',
          category: 'pub',
          address: {
            buildingNumber: '87',
            street: 'Flood Street',
            city: 'London',
            postcode: 'SW3 5TB'
          },
          coordinates: {
            lat: 51.48608,
            lng: -0.16497
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/73/f2/64/ground-floor-bar-area.jpg',
          website: 'https://www.coopersarms.co.uk/',
          user: users[0]
        }, {
          name: 'George IV',
          category: 'pub',
          address: {
            buildingNumber: '185',
            street: 'Chiswick High Road',
            city: 'London',
            postcode: 'W4 2DR'
          },
          coordinates: {
            lat: 51.49222,
            lng: -0.25710
          },
          image: 'https://www.georgeiv.co.uk/-/media/sites/microsites/g/the-george-iv-_-p034/images/2017-new-images/august2017gallery/george-iv-2017/ext/exteriorfront001.jpg',
          website: 'https://www.georgeiv.co.uk/',
          user: users[0]
        }, {
          name: 'Coach & Horses',
          category: 'pub',
          address: {
            buildingNumber: '27',
            street: 'High Street',
            city: 'London',
            postcode: 'SW13 9LW'
          },
          coordinates: {
            lat: 51.47359,
            lng: -0.24930
          },
          image: 'https://www.coachandhorsesbarnes.co.uk/youngs/uploads/sites/68/2017/10/349A6530.jpg',
          website: 'https://www.coachandhorsesbarnes.co.uk/',
          user: users[0]
        }, {
          name: 'Belle Vue',
          category: 'pub',
          address: {
            buildingNumber: '1',
            street: 'Clapham Common Southside',
            city: 'London',
            postcode: 'SW4 7AA'
          },
          coordinates: {
            lat: 51.46155,
            lng: -0.13782
          },
          image: 'https://whatpub.com/img/SWL/2698/belle-vue-clapham/298/224',
          website: 'https://www.bellevueclapham.com/',
          user: users[0]
        }, {
          name: 'The Bolton',
          category: 'pub',
          address: {
            buildingNumber: '326',
            street: 'Earls Court Road',
            city: 'London',
            postcode: 'SW5 9BQ'
          },
          coordinates: {
            lat: 51.48979,
            lng: -0.19083
          },
          image: 'https://www.theboltonearlscourt.co.uk/content/dam/castle/pub-images/theboltonearlscourt/theboltonearlscourt-home-1.jpg.asset/1561976000701.jpg',
          website: 'https://www.theboltonearlscourt.co.uk/',
          user: users[0]
        }, {
          name: 'Mitre',
          category: 'pub',
          address: {
            buildingNumber: '24',
            street: 'Craven Terrace',
            city: 'London',
            postcode: 'W2 3QH'
          },
          coordinates: {
            lat: 51.51244,
            lng: -0.17864
          },
          image: 'https://whatpub.com/img/WLD/15941/mitre-paddington/298/224',
          website: 'http://www.mitrelancastergate.com/',
          user: users[0]
        }, {
          name: 'Urban Meadow',
          category: 'cafe',
          address: {
            buildingNumber: '150',
            street: 'Bayswater',
            city: 'London',
            postcode: 'W2 4RT'
          },
          coordinates: {
            lat: 51.51030,
            lng: -0.19074
          },
          image: 'https://media.timeout.com/images/103379933/630/472/image.jpg',
          website: 'https://urbanmeadowcafe.com/',
          user: users[0]
        }, {
          name: 'Spring Grove',
          category: 'pub',
          address: {
            buildingNumber: '13',
            street: 'Bloomfield Road',
            city: 'London',
            postcode: 'KT1 2SF'
          },
          coordinates: {
            lat: 51.40325,
            lng: -0.29946
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/1e/fa/b8/the-spring-grove.jpg',
          website: 'https://www.thespringgrove.co.uk/menu',
          user: users[0]
        }, {
          name: 'Hare and Hounds',
          category: 'pub',
          address: {
            buildingNumber: '216',
            street: 'Upper Richmond Road West',
            city: 'London',
            postcode: 'SW14 8AH'
          },
          coordinates: {
            lat: 51.46510,
            lng: -0.26483
          },
          image: 'https://whatpub.com/img/HOU/6814/hare-hounds-east-sheen/298/224g',
          website: 'https://www.theharesheen.co.uk/',
          user: users[0]
        }, {
          name: 'Waterfront',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Juniper Drive',
            city: 'London',
            postcode: 'SW18 1TS'
          },
          coordinates: {
            lat: 51.46426,
            lng: -0.18545
          },
          image: 'https://www.thewaterfrontlondon.co.uk/youngs/uploads/sites/84/2019/03/thewaterfront-73-1.jpg',
          website: 'https://www.thewaterfrontlondon.co.uk/ju',
          user: users[0]
        }, {
          name: 'Star and Anchor',
          category: 'pub',
          address: {
            buildingNumber: '94',
            street: 'Uxbridge Road',
            city: 'London',
            postcode: 'W13 8RA'
          },
          coordinates: {
            lat: 51.51174,
            lng: -0.31504
          },
          image: 'https://whatpub.com/img/MDX/12145/star-anchor-west-ealing/298/224',
          website: 'https://www.starandanchor.com/',
          user: users[0]
        }, {
          name: 'The Hammersmith Ram',
          category: 'pub',
          address: {
            buildingNumber: '81',
            street: 'King Street',
            city: 'London',
            postcode: 'W6 0HW'
          },
          coordinates: {
            lat: 51.49236,
            lng: -0.23882
          },
          image: 'https://whatpub.com/img/WLD/16130/hammersmith-ram-hammersmith/298/224',
          website: 'https://www.thehammersmithram.co.uk/',
          user: users[0]
        }, {
          name: 'Duke of Cambridge',
          category: 'pub',
          address: {
            buildingNumber: '228',
            street: 'Battersea Bridge Road',
            city: 'London',
            postcode: 'SW11 3AA'
          },
          coordinates: {
            lat: 51.47258,
            lng: -0.16597
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/ca/3a/02/duke-of-cambridge.jpg',
          website: 'http://www.thedukeofcambridge.com/',
          user: users[0]
        }, {
          name: 'Snaps + Rye',
          category: 'cafe',
          address: {
            buildingNumber: '93',
            street: 'Golborne Road',
            city: 'London',
            postcode: 'W10 5NL'
          },
          coordinates: {
            lat: 51.52147,
            lng: -0.20879
          },
          image: 'https://theresident.wpms.greatbritishlife.co.uk/wp-content/uploads/sites/10/2016/01/MAIN-Snaps-and-Rye.jpg',
          website: 'https://snapsandrye.com/',
          user: users[0]
        }, {
          name: 'Leather Bottle',
          category: 'pub',
          address: {
            buildingNumber: '538',
            street: 'Garratt Lane',
            city: 'London',
            postcode: 'SW17 0NY'
          },
          coordinates: {
            lat: 51.43684,
            lng: -0.18727
          },
          image: 'https://secretldn.com/wp-content/uploads/2016/08/london-beer-gardens.jpg',
          website: 'https://www.leatherbottlepub.co.uk/',
          user: users[0]
        }, {
          name: 'Prince Alfred',
          category: 'pub',
          address: {
            buildingNumber: '5A',
            street: 'Formosa Street',
            city: 'London',
            postcode: 'W9 1EE'
          },
          coordinates: {
            lat: 51.52466,
            lng: -0.18475
          },
          image: 'http://www.fullpint.com/i/pubs/488.jpg',
          website: 'http://www.theprincealfred.com/',
          user: users[0]
        }, {
          name: 'The Chelsea Pensioner',
          category: 'pub',
          address: {
            buildingNumber: '358',
            street: 'Fulham Road',
            city: 'London',
            postcode: 'SW10 9UU'
          },
          coordinates: {
            lat: 51.48148,
            lng: -0.18786
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/17/e9/54/our-pride-and-joy.jpg',
          website: 'https://www.thechelseapensioner.co.uk/',
          user: users[0]
        }, {
          name: 'The Cat & Mutton',
          category: 'pub',
          address: {
            buildingNumber: '76',
            street: 'Broadway Market',
            city: 'London',
            postcode: 'E8 4QJ'
          },
          coordinates: {
            lat: 51.53658,
            lng: -0.06161
          },
          image: 'https://pubshistory.com/LondonPubs/Hackney/CatMut3.jpg',
          website: 'https://www.catandmutton.com/',
          user: users[0]
        }, {
          name: 'The White Cross',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Riverside',
            city: 'London',
            postcode: 'TW9 1TH'
          },
          coordinates: {
            lat: 51.45891,
            lng: -0.30760
          },
          image: 'http://thewhitecrossrichmond.com/assets/img/hero/index/2.jpg',
          website: 'http://thewhitecrossrichmond.com/',
          user: users[0]
        },  {
          name: 'The Lillie Langtry',
          category: 'pub',
          address: {
            buildingNumber: '19',
            street: 'Lillie Road',
            city: 'London',
            postcode: 'SW6 1UE'
          },
          coordinates: {
            lat: 51.48627,
            lng: -0.19829
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/29/63/38/the-lillie-langtry.jpg',
          website: 'https://www.thelillielangtry.co.uk/',
          user: users[0]
        }, {
          name: 'The Princess Victoria',
          category: 'pub',
          address: {
            buildingNumber: '217',
            street: 'Uxbridge Road',
            city: 'London',
            postcode: 'W12 9DH'
          },
          coordinates: {
            lat: 51.50632,
            lng: -0.24025
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ce/41/2c/looking-stunning-at-night.jpg',
          website: 'http://princessvictoria.co.uk/',
          user: users[0]
        }, {
          name: 'The Rylston',
          category: 'pub',
          address: {
            buildingNumber: '197',
            street: 'Lillie Road',
            city: 'London',
            postcode: 'SW6 7LW'
          },
          coordinates: {
            lat: 51.48368,
            lng: -0.20777
          },
          image: 'https://www.therylston.com/wp-content/uploads/2012/09/MG_1477_resize1.jpg',
          website: 'https://www.therylston.com/',
          user: users[0]
        }, {
          name: 'The Elm Park Tavern',
          category: 'pub',
          address: {
            buildingNumber: '76',
            street: 'Elm Park',
            city: 'London',
            postcode: 'SW2 2UB'
          },
          coordinates: {
            lat: 51.45004,
            lng: -0.11876
          },
          image: 'https://whatpub.com/img/SWL/3922/elm-park-tavern-brixton/298/224',
          website: 'https://elmparktavern.co.uk/',
          user: users[0]
        }, {
          name: 'The Ship',
          category: 'pub',
          address: {
            buildingNumber: '41',
            street: 'Jews Row',
            city: 'London',
            postcode: 'SW18 1TB'
          },
          coordinates: {
            lat: 51.46294,
            lng: -0.18792
          },
          image: 'http://cdn.ltstatic.com/2007/April/GH657347_942long.jpg',
          website: 'https://www.theship.co.uk/',
          user: users[0]
        }, {
          name: 'The Windmill Pub',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Clapham Common South Side',
            city: 'London',
            postcode: 'SW4 9DE'
          },
          coordinates: {
            lat: 51.45758,
            lng: -0.14488
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/4f/b0/11/the-windmill-pub.jpg',
          website: 'https://www.windmillclapham.co.uk/',
          user: users[0]
        }, {
          name: 'Prince of Wales',
          category: 'pub',
          address: {
            buildingNumber: '23',
            street: 'Bridge Road',
            city: 'London',
            postcode: 'KT8 9EU'
          },
          coordinates: {
            lat: 51.40283,
            lng: -0.34439
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/16/7e/87/the-prince-of-wales.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g504169-d2628247-Reviews-The_Prince_of_Wales-East_Molesey_Molesey_Surrey_England.html',
          user: users[0]
        }, {
          name: 'Wags N Tales Coffee Bar',
          category: 'cafe',
          address: {
            buildingNumber: '7-9',
            street: 'Brighton Road',
            city: 'London',
            postcode: 'KT6 5LX'
          },
          coordinates: {
            lat: 51.39096,
            lng: -0.30909
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/db/c5/01/exterior.jpg',
          website: 'https://www.tripadvisor.co.uk/Restaurant_Review-g1752250-d11907014-Reviews-Wags_N_Tales-Surbiton_Kingston_upon_Thames_Greater_London_England.html',
          user: users[0]
        }, {
          name: 'The Albert',
          category: 'pub',
          address: {
            buildingNumber: '57',
            street: 'Kingston Hill',
            city: 'London',
            postcode: 'KT2 7PX'
          },
          coordinates: {
            lat: 51.41706,
            lng: -0.28286
          },
          image: 'https://www.thealbertkingston.co.uk/youngs/uploads/sites/169/2019/06/image.png',
          website: 'https://www.thealbertkingston.co.uk/',
          user: users[0]
        }, {
          name: 'Duke of York',
          category: 'pub',
          address: {
            buildingNumber: '64-65',
            street: 'Victoria Road',
            city: 'London',
            postcode: 'KT6 4NQ'
          },
          coordinates: {
            lat: 51.39192,
            lng: -0.30706
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7e/5a/41/sunflowers-summer-is.jpg',
          website: 'https://www.greeneking-pubs.co.uk/pubs/surrey/duke-of-york/',
          user: users[0]
        }, {
          name: 'The Cricketers',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Downside Common',
            city: 'London',
            postcode: 'KT11 3NX'
          },
          coordinates: {
            lat: 51.31172,
            lng: -0.41178
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/ef/85/07/outside.jpg',
          website: 'https://cricketerscobham.com/',
          user: users[0]
        }, {
          name: 'The Haycutter',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'Tanhouse Road',
            city: 'London',
            postcode: 'RH8 9PE'
          },
          coordinates: {
            lat: 51.24386,
            lng: -0.00695
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/01/7a/50/the-haycutter-oxted.jpg',
          website: 'https://www.brunningandprice.co.uk/haycutter/',
          user: users[0]
        }, {
          name: 'Bishop out of Residence',
          category: 'pub',
          address: {
            buildingNumber: '2',
            street: 'Bishop\'s Hall',
            city: 'London',
            postcode: 'KT1 1PY'
          },
          coordinates: {
            lat: 51.41031,
            lng: -0.30801
          },
          image: 'https://live.staticflickr.com/3084/3093191243_651e6e1b67_b.jpg',
          website: 'https://www.thebishopkingston.co.uk/',
          user: users[0]
        }, {
          name: 'The Victoria',
          category: 'pub',
          address: {
            buildingNumber: '',
            street: 'High Street ',
            city: 'London',
            postcode: 'KT22 0JR'
          },
          coordinates: {
            lat: 51.33202,
            lng: -0.35640
          },
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/45/19/32/a-traditional-pub.jpg',
          website: 'https://victoriaoxshott.com/',
          user: users[0]
        }


      ])
    })
    .then(locations => console.log(`${locations.length} locations created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
