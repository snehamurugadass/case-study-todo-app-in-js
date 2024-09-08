document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password.');
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     const logoutButton = document.getElementById('logout');
//     const todoList = document.getElementById('todoList');

//     // Fetch todos from the API
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(data => {
//             let completedCount = 0;

//             data.forEach(todo => {
//                 const listItem = document.createElement('li');
//                 listItem.className = 'list-group-item';
                
//                 const checkbox = document.createElement('input');
//                 checkbox.type = 'checkbox';
//                 checkbox.checked = todo.completed;
//                 checkbox.disabled = true; // Disabled initially

//                 if (todo.completed) {
//                     completedCount++;
//                 }

//                 const text = document.createTextNode(` ${todo.title}`);
//                 listItem.appendChild(checkbox);
//                 listItem.appendChild(text);
//                 todoList.appendChild(listItem);
//             });

//             // Use a promise to check completed tasks
//             const checkCompletedTasks = new Promise((resolve, reject) => {
//                 if (completedCount >= 5) {
//                     resolve();
//                 } else {
//                     reject();
//                 }
//             });

//             checkCompletedTasks
//                 .then(() => alert('Congrats. 5 Tasks have been Successfully Completed'))
//                 .catch(() => console.log('Less than 5 tasks completed'));
//         });

//     // Handle logout
//     logoutButton.addEventListener('click', function() {
//         window.location.href = 'index.html';
//     });
// });
