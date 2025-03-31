import { Hono } from "hono";
import { errorResponse } from "@utils/responseHandler";
import userSignupSchema from "@zod/schemas/user";

const traditionalAuth = new Hono();

traditionalAuth.post("/signup", async (c) => {
    try {
        // parse the request
        const body = await c.req.json();

        //validate the request body
        const parsedBody  = userSignupSchema.safeParse(body);
        if (!parsedBody.success) {
            return c.json({ error: parsedBody.error.format() }, 400);
        }

        // extract the data from parsed body
        const { name, email, password, DOB, country, phoneNumber, type, refreshToken } = parsedBody;      


        //check if the email already exists
        //const existingEmail = // check in the db for existing email;
        if(existingEmail) {
            return errorResponse(c, 409, "Email already exists")
        }
 
                
        // logic to add user to db

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
