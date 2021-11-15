// #23 Практика

// Хранилищем будет объект, а имена задач - ключами.

// const list = {
//    "create a task": "In Progress",
//    "make a bed": "Done",
//    "write a post": "To Do",
// }

// Функция changeStatus - будет менять статус задачи
// changeStatus("write a post", "Done")

// Функция addTask - добавляет новую задачу
// addTask('have a walk')

// Функция deleteTask - удаляет задачу
// deleteTask('have a walk')

// Функция showList будет выводить весь список дел в виде

// Todo:
//  "create a task",
//  "make a bed",
// In Progress:
//  "write a post"
// Done:
//  -

// Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль

const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
  "check a task": "In Progress",
  "make a toilet": "Done",
  "write a letter": "To Do",
  "go to school": "In Progress",
  "play the football": "Done",
  "read the book": "To Do",
};

function changeStatus(task, status) {
  list[task] = status;
}
changeStatus("write a post", "Done");

function addTask(newTask) {
  list[newTask] = "To Do";
}
addTask("have a walk");

function deleteTask(task) {
  delete list[task];
}
deleteTask("make a toilet");

function showList() {
  let todo = "";
  let inProg = "";
  let done = "";

  console.log();

  for (task in list) {
    if (list[task] === "To Do") {
      todo += " " + task + "\n";
    } else if (list[task] === "In Progress") {
      inProg += " " + task + "\n";
    } else if (list[task] === "Done") {
      done += " " + task + "\n";
    }
  }

  console.log("Todo:\n" + todo);
  console.log("In Progress:\n" + inProg);
  console.log("Done:\n" + done);
}

showList();
