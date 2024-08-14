import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hare Krishna!')
})

app.post('/api/v1/user/signup', (c) =>{
  return c.text('hello bro')
} )
app.post('/api/v1/user/signin', (c) =>{
  return c.text('hello bro')
} )
app.post('/api/v1/blog', (c) =>{
  return c.text('hello bro')
} )
app.put('/api/v1/blog', (c) =>{
  return c.text('hello bro')
} )
app.get('/api/v1/blog/:id', (c) =>{
  return c.text('hello bro')
} )
app.get('/api/v1/blog/bulk/:id', (c) =>{
  return c.text('hello bro')
} )

export default app
