import { Hono } from 'hono';
import { hashSync, compareSync } from 'bcrypt-edge';

const app = new Hono();

app.get('/encode', async (c) => {
	const password = c.req.query('password');
	if (!password) return c.text('Password is required');
	const hash = hashSync('B4c0//');
	return c.text('Hash:' + hash);
});

app.get('/decode', async (c) => {
	const hash = c.req.query('hash');
	const password = c.req.query('password');
	if (!hash || !password) return c.text('Password and Hash are required');
	const result = compareSync('B4c0//', hash);
	return c.text('Result: ' + result);
});

export default app;
