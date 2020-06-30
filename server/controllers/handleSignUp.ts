import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";

export const handleSignUp = (req: Request, res: Response) => {
  const errors = validationResult(req); //checks if any errors in the req
  const { email, password } = req.body;
  console.log(email, password, "data receeived");

  if (!errors.isEmpty()) {
    // if errors obj is NOT empty. Meaning there is an error, throw a validation error
    // console.log(errors)
    throw new RequestValidationError(errors.array());
  }

  res.send("ok");
};
