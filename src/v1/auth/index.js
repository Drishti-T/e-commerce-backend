import { Hono } from "Hono";
import traditionalAuth from "./traditional";
import OauthRouter from "./0auth";

const authRouter = new Hono();

authRouter.route("/" , traditionalAuth );
authRouter.route("/0auth" , OauthRouter);



export default authRouter;