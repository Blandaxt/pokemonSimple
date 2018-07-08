const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const multer = require('multer')

const storages = multer.diskStorage({
  destination: function( req, file, cb){
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalName);
  }
})

const fileFilter = (req, file, cb) => {
  //reject a file
  if(file.mimtype === 'image/jpeg' || file.mimetype === 'image/png'){
  cb(null, true)

  } else {
  cb(new Error('message'))
  cb(null, false)
  }
}

const uploads = multer({
  storage: storages,
  limit: {
  fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
});

// const Product = require("../models/product")

var db

MongoClient.connect('mongodb://demo:demodemo1@ds125871.mlab.com:25871/bland', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 8000, () => {
    console.log('listening on 8000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

app.post('/up', upload.single('file-to-upload'), (req, res, next) => {

    insertDocuments(db, 'uploads/' + req.file.filename, () => {
        db.close();
        res.json({'message': 'File uploaded successfully'});
    });
});

var insertDocuments = function(db, filePath, callback) {
    var collection = db.collection('user');
    collection.insertOne({'imagePath' : filePath }, (err, result) => {
        //assert.equal(err, null);
        callback(result);
    });
}

app.get('/', (req, res) => {
  db.collection('pokemon').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {messages: result})
  })
})

// app.get('/react', (req, res) => {
//   db.collection('messages').find().toArray((err, result) => {
//     if (err) return console.log(err)
//     res.json(result)
//   })
// })

app.post('/messages', upload.single('productImage'), (req, res) => {
  console.log(req.file);
  db.collection('pokemon').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/messages', (req, res) => {
  db.collection('pokemon')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
    $set: {
      thumbUp:req.body.thumbUp + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/messages2', (req, res) => {
  db.collection('pokemon')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
    $set: {
      thumbDown:req.body.thumbDown + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/messages', (req, res) => {
  db.collection('pokemon').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
