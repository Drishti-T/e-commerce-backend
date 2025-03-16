import { Hono } from "hono";

const  traditionalAuth = new Hono();

traditionalAuth.post("/signup")
traditionalAuth.post("/login")
traditionalAuth.post("/forgot-password")
traditionalAuth.post("/logout")
traditionalAuth.post("/refreshToken")


export default traditionalAuth;
