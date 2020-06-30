import express from "express";
import { handleSignUp } from "./"

const router = new express.Router();

router.post("/signup", handleSignUp);

export { router as authRouter };
