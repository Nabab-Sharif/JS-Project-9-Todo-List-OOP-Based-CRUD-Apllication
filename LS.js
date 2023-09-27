
function LS() { }



LS.prototype.fetchTask = function () {
  let tasks = localStorage.getItem('tasks');
  if (tasks) {
    tasks = JSON.parse(tasks);
  } else {
    tasks = [];
  }
  return tasks;
}



LS.prototype.storeTask = function (task) {
  let tasks = this.fetchTask();
  tasks.unshift(task)
}

export default LS;