const mogoose = require("mongoose");
const dbUser = process.env.DB_USERNAME;
const dbPassWord = process.env.DB_PASSWORD;

const conn = async () => {
  try {
    const dbConn = await mogoose.connect(
      `mongodb+srv://${dbUser}:${dbPassWord}@cluster0.r3df3cd.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
