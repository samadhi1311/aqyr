import { Hono } from 'hono';
import { hashPassword, verifyPassword } from './lib';

const app = new Hono();

// Register a new user
app.post('/register', async (c) => {
	const { email, password } = await c.req.json();

	// Validate input
	if (!email || !password) {
		return c.json({ error: 'Email and password are required' }, 400);
	}

	// ☑️ Todo: Check if the user already exists in your database
	// if ('☑️ USER EXISTS') {
	// 	return c.json({ error: 'User already exists' }, 400);
	// }

	// Hash the password
	const hashedPassword = hashPassword(password);

	// ☑️ Todo: Save the user to your database
	// users.set(email, { hashedPassword });
	// return c.json({ message: 'User registered successfully' });
});

// Login a user
app.post('/login', async (c) => {
	const { email, password } = await c.req.json();

	// Validate input
	if (!email || !password) {
		return c.json({ error: 'Email and password are required' }, 400);
	}

	// ☑️ Todo: Check if the user exists
	// const user = users.get(email);
	// if ('☑️ USER DOES NOT EXIST') {
	// 	return c.json({ error: 'Invalid email or password' }, 401);
	// }

	// ☑️ Todo: Verify the password
	const isValid = verifyPassword(password, '☑️ HASHED PASSWORD');
	if (!isValid) {
		return c.json({ error: 'Invalid email or password' }, 401);
	}

	return c.json({ message: 'Login successful' });
});

export default app;
