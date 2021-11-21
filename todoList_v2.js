// #29.2 TODO. Теперь уже по-настоящему

// Согласитесь, после чтения статьи, вам стало очевидно что для задачи с TODO вам нужен именно массив, а никак не объект?

// Вы знаете что делать :)

// node main.js

const list = [
  {
    id: 1,
    name: "create a post",
    status: "To Do",
    priority: "low",
  },
  {
    id: 2,
    name: "Write",
    status: "To Do",
    priority: "high",
  },
  {
    id: 3,
    name: "Coding",
    status: "Done",
    priority: "high",
  },
  {
    id: 4,
    name: "Reading",
    status: "Done",
    priority: "high",
  },
  {
    id: 5,
    name: "Test",
    status: "Done",
    priority: "high",
  },
];

function changeStatus(task, status) {
  const el = list.find((item) => item.name === task);
  el.status = status;
  console.log(list);
}
changeStatus("create a post", "Done");

function addTask(newTask) {
  const newArr = {
    id: list.length + 1,
    name: newTask,
    status: "To do",
    priority: "normal",
  };
  list.push(newArr);
  console.log(list);
}
addTask("have a walk");

function deleteTask(task) {
  const delIdx = list.findIndex((item) => item.name === task);
  list.splice(delIdx, 1);
  console.log(list);
}
deleteTask("create a post");

function showList() {
  let todo = "";
  let inProg = "";
  let done = "";

  list.forEach((item) => {
    switch (item.status) {
      case "To Do":
        todo += " " + item.name + "\n";
        break;
      case "In Progress":
        inProg += " " + item.name + "\n";
        break;
      case "Done":
        done += " " + item.name + "\n";
        break;
    }
  });

  if (todo === "") todo = " -";
  if (inProg === "") inProg = " -";
  if (done === "") done = " -";

  console.log("Todo:\n" + todo);
  console.log("In Progress:\n" + inProg);
  console.log("Done:\n" + done);
}

showList();
