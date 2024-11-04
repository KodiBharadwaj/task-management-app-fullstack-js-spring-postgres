const baseUrl = "http://localhost:8150/api/v1/tasks";

async function getTasks() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
}

async function getTaskById(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    return data;
}

async function getTaskByName(name) {
    const response = await fetch(`${baseUrl}?name=${name}`);
    const data = await response.json();
    return data;
}

async function addTask(trainee) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainee)
    });
    const data = await response.json();
    return data;
}

// async function deleteTask(id) {
//     const response = await fetch(`${baseUrl}/${id}`,
//         {
//             method: 'DELETE'
//         });
//     const data = await response.json();
//     return data;
// }

async function deleteTask(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {    
            alert('Task deleted successfully!');
            loadTasks(); 
        } else {
            console.error('Failed to delete task');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}


async function updateTask(id, task) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const data = await response.json();
    return data;
}


async function fetchTasksSortedByDate() {
    const response = await fetch(`${baseUrl}/by-dates`);
    const data = await response.json();
    return data;
}
async function fetchTaskByOverdue() {
    const response = await fetch(`${baseUrl}/overdue-dates`);
    const data = await response.json();
    return data;
}
async function fetchTasksByStatusCompleted() {
    const response = await fetch(`${baseUrl}/status?name=Completed`);
    const data = await response.json();
    return data;
}
async function fetchTasksByStatusNotCompleted() {
    const response = await fetch(`${baseUrl}/status?name=Not-Completed`);
    const data = await response.json();
    return data;
}
async function fetchDeletedTasksData(){
    const response = await fetch(`${baseUrl}/deleted-tasks`);
    const data = await response.json();
    return data;
}

