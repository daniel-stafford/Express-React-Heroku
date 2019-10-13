const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/api", async (req, res) => {
  const user = req.query.user || "daniel-stafford"
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    res.json({ user: response.data })
  } catch (e) {
    console.log("error with github get", e.message)
  }
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log("listening on port", PORT)
})
