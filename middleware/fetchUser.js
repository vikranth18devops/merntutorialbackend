import 'dotenv/config';
import jwt from "jsonwebtoken";

const fetchUser = (req, res, next) => {
    //* Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');

    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

    try {
        const { userId}   = jwt.verify(token, "" + process.env.JWT_SECRET);
        req.userId = userId
        console.log("fetchuser",userId)
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

export default fetchUser;