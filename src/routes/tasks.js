const { buildTask, listTasks, findTaskById, updateTask, deleteTask } = require('../data/tasksStore');

const router = require('express').Router();

router.get('/', (_req, res) => {
  res.json({
    success: true,
    data: listTasks(),
    count: listTasks().length,
  });
});

router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Title is required and must be a non-empty string.',
    });
  }

  const newTask = buildTask({
    title: title.trim(),
    description: description || '',
  });

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: newTask,
  });
});

router.put('/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = findTaskById(taskId);

  if (!task) {
    return res.status(404).json({
      success: false,
      error: 'Task not found',
    });
  }

  const { title, description, completed } = req.body;

  if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
    return res.status(400).json({
      success: false,
      error: 'Title must be a non-empty string when provided.',
    });
  }

  const updatedTask = updateTask(taskId, {
    title: title?.trim(),
    description,
    completed,
  });

  res.json({
    success: true,
    message: 'Task updated successfully',
    data: updatedTask,
  });
});

router.delete('/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = findTaskById(taskId);

  if (!task) {
    return res.status(404).json({
      success: false,
      error: 'Task not found',
    });
  }

  const deletedTask = deleteTask(taskId);

  res.json({
    success: true,
    message: 'Task deleted successfully',
    data: deletedTask,
  });
});

module.exports = router;
