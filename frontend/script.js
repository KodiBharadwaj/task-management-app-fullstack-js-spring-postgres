function postTask() {
    event.preventDefault();
    let id = document.getElementById('id').value;
    let username = document.getElementById('username').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let status = document.getElementById('status').value;

    if(isNaN(id)){
        alert("Id should be a number!");
    }
    if(id && username && description && date && status && !isNaN(id)){
        let data = {
            id: id,
            username: username,
            description: description,
            date: date,
            status : status
        }
    
        addTask(data).then(response => {
            alert('Task added successfully!');
        }).catch(error => {
            console.log(error);
        });
       loadTasks();
    }
}

async function loadTasks(){
    const tasks = await getTasks();
    displayTasks(tasks);
}

function displayTasks(tasks) {
    const displayTasksDiv = document.getElementById('displayTasks');
  
    displayTasksDiv.innerHTML = '';
  
    tasks.forEach(task => {
      const taskCard = document.createElement('div');
      taskCard.classList.add('col-md-4', 'mb-4'); 
  
      taskCard.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Task ID: ${task.id}</h5>
            <h6 class="card-text"><strong> Username:</strong> ${task.username}</h6>
            <p class="card-text"><strong>Description:</strong> ${task.description}</p>
            <p class="card-text"><strong>Date:</strong> ${task.date}</p>
            <p class="card-text"><strong>Status:</strong> ${task.status}</p>
            <button type = "submit" class = "btn btn-danger" onclick="deleteTask(${task.id})"> Delete Task </button>
          </div>
        </div>
      `;
  
      displayTasksDiv.appendChild(taskCard);
    });
  }
  

  async function getTaskobjById(){
      event.preventDefault();
      const id = document.getElementById('searchid').value;
      const data = await getTaskById(id);
      console.log(data);
      displaySingleTask(data);
  }

  function displaySingleTask(task) {
    const displayTasksDiv = document.getElementById('displayTasks');
  
    displayTasksDiv.innerHTML = '';
  
    const taskCard = document.createElement('div');
    taskCard.classList.add('col-md-4', 'mb-4');
  
    taskCard.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Task ID: ${task.id}</h5>
          <h6 class="card-text"><strong> Username: </strong> ${task.username}</h6>
          <p class="card-text"><strong>Description:</strong> ${task.description}</p>
          <p class="card-text"><strong>Date:</strong> ${task.date}</p>
          <p class="card-text"><strong>Status:</strong> ${task.status}</p>
          <button type="button" class="btn btn-danger" onclick="deleteTask(${task.id})">Delete Task</button>
        </div>
      </div>
    `;
  
    displayTasksDiv.appendChild(taskCard);
}

function displayDeletedTasks(tasks) {
  const displayTasksDiv = document.getElementById('displayTasks');

  displayTasksDiv.innerHTML = '';

  tasks.forEach(task => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('col-md-4', 'mb-4'); 

    taskCard.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Task ID: ${task.id}</h5>
          <h6 class="card-text"><strong> Username:</strong> ${task.username}</h6>
          <p class="card-text"><strong>Description:</strong> ${task.description}</p>
          <p class="card-text"><strong>Date:</strong> ${task.date}</p>
          <p class="card-text"><strong>Status:</strong> ${task.status}</p>
        </div>
      </div>
    `;

    displayTasksDiv.appendChild(taskCard);
  });
}




async function fetchByDate(){
    const data = await fetchTasksSortedByDate();
    displayTasks(data);
}
async function fetchByOverdue(){
    const data = await fetchTaskByOverdue();
    displayTasks(data);
}
async function fetchByStatusCompleted(){
    const data = await fetchTasksByStatusCompleted();
    displayTasks(data);
}
async function fetchByStatusNotCompleted(){
    const data = await fetchTasksByStatusNotCompleted();
    displayTasks(data);
}

async function fetchDeletedTasks(){
  const data = await fetchDeletedTasksData();
  displayDeletedTasks(data);
}

function updateFunction() {
    event.preventDefault();
    let id = document.getElementById('id').value;
    let username = document.getElementById('username').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let status = document.getElementById('status').value;

    let data = {
        id: id,
        username: username,
        description: description,
        date: date,
        status : status
    }

    updateTask(id, data).then(response => {
        alert('Task updated successfully!');
    }).catch(error => {
        console.log(error);
    });
   loadTasks();
}



loadTasks();