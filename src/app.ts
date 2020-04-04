import express from 'express';
import mongoose = require("mongoose");
import apiv1Router from "./apps/v1/apiv1-router";

class InitApp {
  public app: express.Application;
  public config: any;

  constructor() {
      this.app = express();
      this.config = {
        connectStr: 'yourConnectionString/mongodb+srv://<username>:<password>@cluster0-nou5c.gcp.mongodb.net/test?retryWrites=true&w=majority',
        port: 3000
      }
  }

  private InitController(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello world default Page');
    });
    this.app.use('/v1', apiv1Router);
  }

  private async InitMongoDB() {
    try {
        await mongoose.connect(this.config.connectStr, {
            useNewUrlParser: true,
            useUnifiedTopology: false,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (error) {
        console.log("Mongoose Connect Error : " + error.message);
        setTimeout(() => {
          // retry per 3s
          this.InitMongoDB();
        }, 3000);
    }
  }

  public async ExecuterEx(): Promise<void> {
    await this.InitController();
    await this.InitMongoDB();

    this.app.listen(this.config.port, () => 
      console.log(`Server listening on port ${this.config.port}`)
    );
  }
}

let exService = new InitApp();
exService.ExecuterEx().then(() => {
  console.log("Init solution ok");
}).catch((err) => {
  console.log(`Init Error : ${err}`);
});