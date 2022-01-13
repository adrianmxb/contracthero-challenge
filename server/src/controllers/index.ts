import { Router } from "express";
import analyze from "./analyze";

export const registerContollers = (app: Router) => {
    app.use("/analyze", analyze());
}