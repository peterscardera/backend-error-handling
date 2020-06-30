import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares/error-handler";
import { authRouter } from "./routers/authRouter";



const app = express();
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
