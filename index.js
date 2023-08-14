let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express Route
const usersRoute = require('../server/routes/users.route')
const commentsRoute = require('../server/routes/comments.route')
const teamRoute = require('../server/routes/team.route')
const mainCategoryRoute = require('../server/routes/maincategory.route')
const courseListRoute = require('../server/routes/courselist.route')
const courseSectionRoute = require('../server/routes/coursesection.route')
const courseThemaRoute = require('../server/routes/coursethema.route')
const courseInformationRoute = require('../server/routes/courseinformation.route')
const courseAbautRoute = require('../server/routes/courseabaut.route')
const courseFlashCardRoute = require('../server/routes/courseflashcard.route')
const courseVideoRoute = require('../server/routes/coursevideo.route')
const courseTestRoute = require('../server/routes/coursetest.route')
const loginRoute = require('../server/routes/login.route')
const userInfoRoute = require('../server/routes/userinfo.route')

// Connecting mongoDB Database
mongoose
  .connect('mongodb://127.0.0.1:27017/DataBase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/users',usersRoute )
app.use('/comments',commentsRoute)
app.use('/team',teamRoute)
app.use('/maincategory',mainCategoryRoute)
app.use('/courselist',courseListRoute)
app.use('/coursesection',courseSectionRoute)
app.use('/coursethema',courseThemaRoute)
app.use('/courseinformation',courseInformationRoute)
app.use('/courseabaut',courseAbautRoute)
app.use('/courseflashcard',courseFlashCardRoute)
app.use('/coursevideo',courseVideoRoute)
app.use('/coursetest',courseTestRoute)
app.use('/login',loginRoute)
app.use('/userinfo',userInfoRoute)


// PORT
const hostname = '4000'
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


