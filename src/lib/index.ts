import { hashSync } from 'bcrypt-edge';

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
