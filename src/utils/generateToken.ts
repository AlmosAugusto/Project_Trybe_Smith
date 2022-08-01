import jwt from 'jsonwebtoken';

const secretKey = 'secretKey';

const jwtConfig:object = {
  expiresIn: '48h',
  algorithm: 'HS256',
};

const generateJWT = (username: string, id?: number) => {
  const token = jwt.sign({ data: { username, id } }, secretKey, jwtConfig);

  return token;
};

export default generateJWT;