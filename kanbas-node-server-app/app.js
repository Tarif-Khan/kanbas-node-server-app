import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";

const app = express();
app.use(express.json());
app.use(express.json());
app.use(cors());
Lab5(app);
Hello(app);
CourseRoutes(app);
app.listen(4000);
