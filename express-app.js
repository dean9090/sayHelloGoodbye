const express = require("express")

const app = express();

app.get("/", (request, response) => {
  response.send("Just main page bro")
})


app.get("/hello", (request, response) => {
  response.send("Hello!!!")
})

app.get("/goodbye", (request, response) => {
  response.send("Goodbye!!!")
})

app.get("/hello/:name", (request, response) => {
  response.send("Hello " + request.param("name") + "!")

})

app.listen(3000, () => {
   console.log('Listening on port 3000')
 })
