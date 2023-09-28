
function LS() { }



LS.prototype.fetchTask = function () {
  let tasks = localStorage.getItem('tasks');

  // if (tasks) {
  //   tasks = JSON.parse(tasks);
  // } else {
  //   tasks = [];
  // }

  tasks = (tasks) ? JSON.parse(tasks) : [];
  return tasks;
}



LS.prototype.storeTask = function (task) {

  let tasks = this.fetchTask();
  tasks.unshift(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}



LS.prototype.deleteTask = function (id) {
  let tasks = this.fetchTask();
  let index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}



LS.prototype.completeTask = function (id) {
  let tasks = this.fetchTask();
  let index = tasks.findIndex((task) => task.id === id)

  if (tasks[index].isCompleted) {
    tasks[index].isCompleted = false;
  } else {
    tasks[index].isCompleted = true;
  }

  // tasks[index].isCompleted=!tasks[index].isCompleted;

  localStorage.setItem('tasks', JSON.stringify(tasks))
}




export default LS;

