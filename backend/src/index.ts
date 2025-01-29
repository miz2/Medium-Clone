import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  return c.text('signup route')
})

app.post('/api/v1/signin', (c) => {
	return c.text('signin route')
})

app.get('api/v1/blog/:id', (c) => { 
  return c.text('blog route')
})
app.post('/api/v1/blog', (c) => {
  const id=c.req.param('id')
	return c.text('signin route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})

export default app;
