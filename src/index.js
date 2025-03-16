// add all imports at top
import { Hono } from "hono";
import dotenv from "dotenv";
import authRouter from "./v1/auth";
import v1route from "./routes";


//load environment variables from .env file
dotenv.config();
const env = process.env.NODE_ENV || "development";

//Load appropriate env file using dotenv
config({ path: env === 'test' ? '.env.test' : env === 'development' ? '.env.development' : '.env' });


// variables
const app = new Hono();
const PORT = 3000 || process.env.PORT //default route


//.

//default route 
app.get('/', (c) => {
    // for example: hono template below for request and response


    // request:-
    // const userId = c.req.param('id'); // Similar to req.params.id in Express
    // const query = c.req.query('search'); // Similar to req.query.search in Express
    // const body = await c.req.parseBody(); // Similar to req.body in Express


    // response:-
    // c.text("hello")

    // c.html(<html>
    //     <body>
    //         <div>
    //             hello
    //         </div>
    //     </body>
    // </html>)


    c.json({
        "message": "hello from server"
    })
});


app.route('/api/v1/auth' , authRouter);
app.route('/api/v1' , v1route);



//port
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});