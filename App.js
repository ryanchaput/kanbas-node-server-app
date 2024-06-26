import "dotenv/config";
import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './Users/routes.js';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import session from "express-session";

const CONNECTION_STRING = process.env.DB_CONECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
})
);
app.use(express.json());
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        sameSite: "none",
        secure: true,
        //domain: "https://kanbas-node-server-app-gas8.onrender.com",
    },
}
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
ModuleRoutes(app);
CourseRoutes(app);
QuizRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);