let tasks = [];
let nextId = 1;

const buildTask = ({ title, description = '' }) => {
  const now = new Date();

  return {
    id: nextId++,
    title,
    description,
    completed: false,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
};

const listTasks = () => tasks;

const findTaskById = (id) => tasks.find((task) => task.id === id);

const updateTask = (id, updates) => {
  const task = findTaskById(id);

  if (!task) {
    return null;
  }

  Object.assign(task, {
    ...(updates.title !== undefined ? { title: updates.title } : {}),
    ...(updates.description !== undefined ? { description: updates.description } : {}),
    ...(updates.completed !== undefined ? { completed: updates.completed } : {}),
    updatedAt: new Date().toISOString(),
  });

  return task;
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  const [deletedTask] = tasks.splice(taskIndex, 1);
  return deletedTask;
};

module.exports = {
  tasks,
  buildTask,
  listTasks,
  findTaskById,
  updateTask,
  deleteTask,
};
