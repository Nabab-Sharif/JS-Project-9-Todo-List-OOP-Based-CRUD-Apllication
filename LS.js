


class LS {

  fetchTask() {
    let tasks = localStorage.getItem('tasks');

    // if (tasks) {
    //   tasks = JSON.parse(tasks);
    // } else {
    //   tasks = [];
    // }

    tasks = (tasks) ? JSON.parse(tasks) : [];
    return tasks;
  }




  storeTask(task) {

    let tasks = this.fetchTask();
    tasks.unshift(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }



  deleteTask(id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }



  completeTask(id) {
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




  findTask(id) {
    let tasks = this.fetchTask();
    let result = tasks.find((task) => task.id === id)

    return result;
  }




  updateTask(id, title) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id === id);
    tasks[index].title = title;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }




}




export default LS;

