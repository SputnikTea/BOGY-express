import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import nodeExercises from './exercises/node-exercises.js'
import expressExercises from './exercises/express-exercises.js'

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use('/exercises', nodeExercises)
app.use('/exercises', expressExercises)

app.get("/", (req, res) => {
  res.send("Nothing here, try http://localhost:3000/exercises/node-01/test");
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
