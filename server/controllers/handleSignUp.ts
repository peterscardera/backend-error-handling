import express, { Request, Response } from "express";

export const handleSignUp = (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email);
  //   if (email.length < 3) {
  //     throw new Error("too small");
  //   }

  res.send("ok");
};
