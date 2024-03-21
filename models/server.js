import express from "express";
import topics from "../routes/topics.js";
import dbConnection from "../database/config.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.topicsPath = "/api/topics";

    this.router();
    this.middleware();
    this.connectDB();
  }

  async connectDB() {
    await dbConnection();
  }

  middleware() {
    this.app.use(express.static("public"));
  }

  router() {
    this.app.use(this.topicsPath, topics);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server online en port ${this.port}`);
    });
  }
}

export default Server;
