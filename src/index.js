document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')

  function createTask(t) {
    let newItem = document.createElement('li')
    newItem.textContent = form.querySelector('#new-task-description').value
    document.getElementById('tasks').appendChild(newItem)
    t.preventDefault()
    t.target.reset()
  }
  form.addEventListener('submit', createTask)
});
