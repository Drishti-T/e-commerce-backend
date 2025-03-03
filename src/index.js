// add all imports at top
import Hono from "hono";
import dotenv, { config } from "dotenv";


//load environment variables from .env file
dotenv.config();
const env = process.env.NODE_ENV || "development";

//Load appropriate env file using dotenv
config({  path: env === 'test' ? '.env.test'   : env === 'development'   ? '.env.development'  : '.env' });


// variables
const app = new Hono();
const PORT = 3000 || process.env.PORT //default route


//routes
app.get('/' , (c) => {

})



//port
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})