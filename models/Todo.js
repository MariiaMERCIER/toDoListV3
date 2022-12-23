import { Schema, models, model } from "mongoose";

const todo = new Schema({
  name: String,
  data: Object,
});

const Todo = models.Todo || model("Todo", todo);

export default Todo;
