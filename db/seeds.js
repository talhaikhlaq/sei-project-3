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
          image: 'http://www.londondateguide.com/wp-content/uploads/2013/11/Carpenters-Arms.jpg',
          website: '',
          user: users[0]
        },
        {
          name: 'The Stonhouse',
          category: 'pub',
          address: {
            buildingNumber: '165',
            street: 'Stonhouse Street',
            city: 'London',
            postcode: 'SW4 6BJ'
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
            postcode: 'SW11 6RE '
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
            postcode: 'SE21 8EZ '
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
            postcode: 'SE11 4EZ '
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
            postcode: 'N11 2EU '
          },image: 'https://www.theranelaghn11.co.uk/content/dam/castle/pub-images/theranelaghn11/theranelaghn11-home-1.jpg.asset/1561976017544.jpg',
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
            postcode: 'SE10 8RT '
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
            postcode: 'N1 3DT '
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
            postcode: 'N1 9DX '
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
            postcode: 'WC2N 5EJ '
          },
          image: 'https://www.coventgarden.london/sites/default/d8files/styles/square_image_style_/public/cg_images/Bronte-square-copco%202.jpg?itok=1dQPDyWk',
          website: 'hhttps://www.coventgarden.london/bars/bronte/',
          user: users[0]
        }, {
          name: 'Marquess Tavern',
          category: 'pub',
          address: {
            buildingNumber: '32',
            street: 'Canonbury Street',
            city: 'London',
            postcode: 'N1 2TB'
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
            postcode: 'SE11 5UG '
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
            postcode: 'N1 4QU U'
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
          image: 'https://static.designmynight.com/uploads/2019/04/best-beer-gardens-brixton-optimised.jpg',
          website: 'https://www.trinityarms.co.uk/',
          user: users[0]
        }, {
          name: 'Duke on the Greens',
          category: 'pub',
          address: {
            buildingNumber: '45',
            street: 'Trinity Gardens',
            city: 'London',
            postcode: 'SW9 8DR'
          },
          image: 'https://static.designmynight.com/uploads/2019/04/best-beer-gardens-brixton-optimised.jpg',
          website: 'https://www.trinityarms.co.uk/',
          user: users[0]
        }
      ])
    })
    .then(locations => console.log(`${locations.length} locations created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
