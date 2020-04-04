import { Request, Response } from "express";
var { User } = require('../../../models/user')

const insert = [
  async (req: Request, res: Response) => {
    let user = new User({
      email : `emailtest@gmail.com`,
      password: `passwordtest12345`
    });

    let userSaved = await user.save();
    if (userSaved)
    {
      await res.status(200).json(
        {
          code: 200,
          message: "Insert Succeed",
          data: userSaved
        }
      )
    } else {
      await res.status(400).json(
        {
          code: 400,
          message: "Insert Failed"
        }
      )
    }
  }
]

const list = [
  async (req: Request, res: Response) => {
    let users = await User.find();
    if (users) {
      await res.status(200).json(
        {
          code: 200,
          message: "List Information",
          data: users
        }
      )
    } else {
      await res.status(400).json(
        {
          code: 400,
          message: "Get List Failed"
        }
      )
    }
  }
]

const get = [
    async (req: Request, res: Response) => {
        await res.status(200).json(
          {
            code: 200,
            message: "Get Information"
          }
        );
    }
]

const find = [
  async (req: Request, res: Response) => {
      await res.status(200).json(
        {
          code: 200,
          message: "Find Information"
        }
      );
  }
]

export default {
  insert,
  get,
  find,
  list
}