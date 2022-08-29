require("dotenv/config");

export default {
  port: process.env.PORT,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z7ytsjn.mongodb.net/?retryWrites=true&w=majority`,
  env: 'development'
}
