import { hashSync, compareSync } from 'bcrypt-edge';

/**
 * Hash a plain-text password.
 * @param {string} password - The plain-text password.
 * @param {number} saltRounds - Optional, number of salt rounds to use (Default is 10 means 2^10 = 1024 salt rounds).
 * @returns {string} - The hashed password.
 *
 * @example
 * const hash = hashPassword('password');
 */
export function hashPassword(password: string, saltRounds: number = 10) {
	return hashSync(password, saltRounds);
}

/**
 * Compare a plain-text password with a hashed password.
 * @param {string} password - The plain-text password.
 * @param {string} hashedPassword - The hashed password.
 * @returns {boolean} - True if the password matches, false otherwise.
 */
export function verifyPassword(password: string, hashedPassword: string) {
	return compareSync(password, hashedPassword);
}
