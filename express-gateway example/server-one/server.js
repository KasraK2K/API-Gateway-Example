const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/one', (req, res) => {
  return res.json({ result: "one" })
})

app.listen(3000, () => console.log("Server run on port 3000"))