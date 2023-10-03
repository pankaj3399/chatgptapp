import jwt from "jsonwebtoken";
import config from "../../server/config.js";

export default (data, isRemembered) => {
  const payload = {
    email: data.email,
    role: data.role,
    _id: data._id,
    name: data.name,
  };
  const token = jwt.sign(payload, config.TOKEN_SECRET, {
    expiresIn: isRemembered ? "30d" : config.TOKEN_SECRET_EXP,
  });
  return token;
};
