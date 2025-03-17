export const errorResponse = (c, code , message , errors = []) => {
    return c.json({
        success: false,
        code , 
        message,
        errors
    }, code )
}