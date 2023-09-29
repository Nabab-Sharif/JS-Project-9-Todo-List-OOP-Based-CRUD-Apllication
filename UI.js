import LS from './LS.js';


const ls = new LS();

class UI {


  //...........................Add Task To UI Start...............................
  addToUI(task) {

    ls.storeTask(task);

    let newHtml = `
      <div class="task" data-createdat="${task.id}">
        <div class="task__details">
          <input type="checkbox" class="task-check" />
          <label class="task-title">${task.title}</label>
        </div>

        <div class="task__op">
          <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
          <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
        </div>

      </div>
    
    `
    document.querySelector('.task-list').insertAdjacentHTML('afterbegin', newHtml);

  }

  //...........................Add Task To UI End...............................




  //...........................Form Reset Start...............................
  resetForm() {
    document.querySelector('#newtaskID').value = ''
  }
  //...........................Form Reset End...............................




  //...........................Delete Task Start...............................
  deleteTask(e) {

    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    ls.deleteTask(id);
    task.remove();
  }
  //...........................Delete Task End...............................





  //...........................Complete Task Start...............................
  completeTask(e) {
    const task = e.target.parentElement.parentElement;

    const id = task.dataset.createdat;
    ls.completeTask(id);
    task.classList.toggle('completed');
  }
  //...........................Complete Task End...............................




  //...........................Show List of tasks from LocalStorage Start...............................

  showAllTasks() {
    let tasks = ls.fetchTask();

    let newHtml = '';
    tasks.forEach(task => {
      newHtml += `
      <div class="task  ${task.isCompleted ? "completed" : " "} " data-createdat="${task.id}">
        <div class="task__details">
          <input type="checkbox"  class="task-check"  ${task.isCompleted ? "checked" : " "} />
          <label class="task-title">${task.title}</label>
        </div>

        <div class="task__op">
          <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
          <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
        </div>

      </div>
      `
    })

    document.querySelector('.task-list').innerHTML = newHtml;

  }
  //...........................Show List of tasks from LocalStorage End...............................




  //...........................Edit Task Start...............................

  editTask(e) {
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    const data = ls.findTask(id);

    document.querySelector('#newtaskID').value = data.title;
    document.querySelector('#updateTaskId').value = data.id;


    document.querySelector('.AddTaskBtn').style.display = 'none';
    document.querySelector('.EditTaskBtn').style.display = 'inline';
    document.querySelector('.CancelTaskBtn').style.display = 'inline';

  };

  //...........................Edit Task End...............................




  //...........................Update Task replace Start...............................

  updateTask(e) {
    const taskId = document.querySelector('#updateTaskId').value;
    const taskTitle = document.querySelector('#newtaskID').value;
    const tasks = document.querySelectorAll('.task-title');


    if (taskTitle.length > 0) {

      ls.updateTask(taskId, taskTitle);

      tasks.forEach(title => {
        if (title.parentElement.parentElement.dataset.createdat === taskId) {
          title.innerText = taskTitle;
        }

      });

    }


    document.querySelector('#newtaskID').value = '';
    document.querySelector('#updateTaskId').value = '';


    document.querySelector('.AddTaskBtn').style.display = 'inline';
    document.querySelector('.EditTaskBtn').style.display = 'none';
    document.querySelector('.CancelTaskBtn').style.display = 'none';


  }

  //...........................Update Task replace End...............................


  //...........................Cancel Task Start Here...............................

  cancelTask(e) {

    document.querySelector('#newtaskID').value = '';
    document.querySelector('#updateTaskId').value = '';


    document.querySelector('.AddTaskBtn').style.display = 'inline';
    document.querySelector('.EditTaskBtn').style.display = 'none';
    document.querySelector('.CancelTaskBtn').style.display = 'none';
  }
  //...........................Cancel Task End Here...............................





}




export default UI;

