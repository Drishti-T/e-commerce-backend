import { Hono } from "hono";
import adminRoute from "./admin";
import userRoute from "./user";

const v1route = new Hono;

v1route.route("/admin" , adminRoute)
v1route.route("/user" , userRoute)

export default v1route;