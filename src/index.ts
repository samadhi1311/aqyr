import { Hono } from 'hono';
import { hashPassword } from './lib';

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

export default app;
