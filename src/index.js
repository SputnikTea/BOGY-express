import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import {engine} from "express-handlebars";
import nodeExercises from './exercises/node-exercises.js'
import expressExercises from './exercises/express-exercises.js'
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const engineConfig = {
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main'
}

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.engine('hbs', engine(engineConfig))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/exercises', nodeExercises)
app.use('/exercises', expressExercises)

app.get("/", (req, res) => {
  res.render('main', {layout: 'index'})
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
