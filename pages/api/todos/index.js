import connectDB from "../../../middlewares/connectDB";
import Todo from "../../../models/Todo";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name } = req.body;

    const date = new Date();
    try {
      const newTask = new Todo({
        name,
        date: date,
        isDone: false,
      });
      await newTask.save();

      res.status(200).json(newTask);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } else if (req.method === "GET") {
    try {
      const allTasks = await Todo.find();
      res.status(200).json(allTasks);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } else return res.status(404).json("Route not found");
};

export default connectDB(handler);
