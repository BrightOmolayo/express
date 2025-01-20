// const express = require('express')
// const app = express()

// app.get('/', (req, res) => res.send('Hello, world from Layo!, Tada!'))

// const PORT = 3000
// app.listen(PORT, () => {
//   console.log(`My first Express app - listening seriously on port ${PORT}!`)
// })

// app.js
const express = require('express')
const app = express()
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/bookRouter')
const indexRouter = require('./routes/indexRouter')

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`)
})
