import z from "@zod/index"

const userSignupSchema = z.object({
    name: z.string().max(50),
    email: z.string().email().max(100),
    password: z.string().min(8, "password must be atleast 8 characters").regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "Password must contain at least one number , one uppercase , and one lowercase letter"),
    DOB: z.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "DOB must be in YYYY-MM-DD format")
        .refine((dob) => {
            const date = new Date(dob);
            return !isNaN(date.getTime());
        }, "Invalid date"),
        country : z.string(),
        phoneNumber : z.string().min(10).max(10),
        type : z.enum(["user" , "admin"])

})

export default userSignupSchema;
