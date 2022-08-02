import { Request, Response } from "express"

class TodosController {
  public static async getAllTodos (req: Request, res: Response) {
    res.send("getAllTodos")
  }

  public static async getTodo (req: Request, res: Response) {
    res.send("getTodo")
  }

  public static async createTodo (req: Request, res: Response) {
    res.send("createTodo")
  }

  public static async deleteTodo (req: Request, res: Response) {
    res.send("deleteTodo")
  }

  public static async updateTodo (req: Request, res: Response) {
    res.send("updateTodo")
  }
}

export default TodosController