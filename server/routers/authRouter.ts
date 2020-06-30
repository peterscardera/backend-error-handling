import express, { Request, Response } from "express";
import { body } from "express-validator";

import { handleSignUp } from "../controllers/handleSignUp";

const router = express.Router();

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("email must be in a valid format"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 15 })
      .withMessage("password must be between 6 to 25 characters"),
  ],
  handleSignUp
);

export { router as authRouter };


