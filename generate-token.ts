import jwt from 'jsonwebtoken';

const secret = 'seuSegredoAqui'; // mesma chave usada no backend

const payload = {
  sub: 'rayana123',
  role: 'advisor'
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('Token JWT gerado:');
console.log(token);
