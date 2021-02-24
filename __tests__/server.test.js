import "babel-polyfill";
const app = require('../src/server/server.js')
const supertest = require('supertest');
const request = supertest(app);
// code snippet from https://zellwk.com/blog/endpoint-testing/
app.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
  })

  it('gets the test endpoint', async done => {
    const response = await request.get('/test')
  
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
  })
