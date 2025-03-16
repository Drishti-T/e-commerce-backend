import { Hono } from "hono";

const traditionalAuth = new Hono();

traditionalAuth.post("/signup", async (req, res) => {
    try {
        // parse the request
        const body = await c.req.json();
        const parsedBody  = signupSchema.safeParse(body)
        const { name, email, password, DOB, country, phoneNumber, type, refreshToken } = req.body;
        
        // validate the required fields
        
        
        // logic to add user  to db


        c.json({
            userId ,
            token,
            type,
            expiresIn
        });
    } catch (e) {

    }


})
traditionalAuth.post("/login")
traditionalAuth.post("/forgot-password")
traditionalAuth.post("/logout")
traditionalAuth.post("/refreshToken")


export default traditionalAuth;
