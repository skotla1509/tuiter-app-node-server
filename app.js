import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

// Initialise app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';

mongoose.connect(CONNECTION_STRING, options);

// Controllers
HelloController(app);
UserController(app);
TuitsController(app);

// Listen on port 4000
app.listen(process.env.PORT || 4000);