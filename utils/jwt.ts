import jwt from "jsonwebtoken"

const verifiedToken = (token: string, secret: string) => {
    try {
        const verifiedToken = jwt.verify(token, secret);
        return verifiedToken;
    } catch (error) {
        throw new Error(`Invalid token. Error:${error}`);
    }
}

export const jwtUtils = {
    verifiedToken
}