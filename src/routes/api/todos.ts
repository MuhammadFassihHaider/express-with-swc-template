import express from "express";
const router = express.Router();
import { TodosController } from "../../todos";

router.get("/", TodosController.getAllTodos);
router.get("/:id", TodosController.getTodo);
router.post("/", TodosController.createTodo);
router.patch("/:id", TodosController.updateTodo);
router.delete("/:id", TodosController.deleteTodo);

export default router;
