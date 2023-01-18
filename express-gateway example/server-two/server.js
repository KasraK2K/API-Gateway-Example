const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/two', (req, res) => {
  return res.json({ result: "two" })
})

app.listen(4000, () => console.log("Server run on port 4000"))