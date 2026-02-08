let task = [];
let list = document.getElementById('taskList');

function addTask() {
  let input = document.getElementById('taskInput')
  if (input.value === '') return;
  task.push(input.value);
  input.value = '';
  showTask();
}

function showTask() {
  list.innerHTML = '';
  for (let i = 0; i < task.length; i++) {
    let li = document.createElement('li');
    li.innerText = task[i];
    let deleteItem = document.createElement('button');
    deleteItem.innerText = 'X';
    deleteItem.onclick = function () {
      task.splice(i, 1);
      showTask();
    }
    li.appendChild(deleteItem);
    list.appendChild(li);
  }
}
