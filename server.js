const app = require("./index");
const connect = require("./database/db");

app.listen(5000, async () => {
  try {
    await connect();
    console.log("server is running");
  } catch (error) {
    console.log("server error", error);
  }
});
