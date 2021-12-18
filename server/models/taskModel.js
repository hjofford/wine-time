const db = require("../database/db");

const Tasks = {
  getAllTasks() {
    const sql = `SELECT * FROM tasks`;
    return db.query(sql).then((dbResult) => dbResult.rows);
  },

  addTask(title, content, stream) {
    const sql = {
      text: `INSERT INTO tasks (title, content, stream) VALUES ($1, $2, $3)`,
      values: [title, content, stream],
    };
    return db.query(sql);
  },
  deleteTask(id) {
    const sql = {
      text: `DELETE FROM tasks WHERE (id) VALUES ($1)`,
      values: [id],
    };
    return db.query(sql);
  },
};

module.exports = Tasks;