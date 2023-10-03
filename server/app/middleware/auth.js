import ApiError from "../../utils/errors/ApiError.js";
import httpStatus from "http-status";
import verifyToken from "../../utils/helpers/jwt/verifyToken.js";
import config from "../../utils/server/config.js";

export default (...requiredRoles) => async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access');

        // getting token
        const token = authHeader.split(' ')[1];

        // verify token
        let verifiedUser = null;
        verifiedUser = verifyToken(token, config.TOKEN_SECRET);
        req.user = verifiedUser; // role  , userid

        // role diye guard korar jnno
        if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
        }

        next();
    } catch (error) {
        next(error);
    }
}