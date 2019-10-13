require("dotenv").config()
const express = require("express")
const axios = require("axios")
const cors = require("cors")
const mongoose = require("mongoose")
const { ApolloServer } = require("apollo-server-express")
const typeDefs = require("./graphql/typeDefs.js")
const resolvers = require("./graphql/resolvers")

const app = express()
app.use(cors())

const url = process.env.MONGODB_URI

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch(error => {
    console.log("error connection to MongoDB:", error.message)
  })

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

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
