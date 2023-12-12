// export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

import crypto from 'crypto';

// Generar una cadena aleatoria de 32 bytes
export const TOKEN_SECRET = crypto.randomBytes(32).toString('hex');

console.log(TOKEN_SECRET);