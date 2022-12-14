import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

// Initialise app
const app = express();
app.use(cors());
app.use(express.json());

// Controllers
HelloController(app);
UserController(app);
TuitsController(app);

// Listen on port 4000
app.listen(process.env.PORT || 4000);