// bg color change
document.getElementById('btn-theme').addEventListener('click', function() {
    const r = Math.floor(Math.random() * 56) + 200;
    const g = Math.floor(Math.random() * 56) + 200;
    const b = Math.floor(Math.random() * 56) + 200;
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    console.log(bgColor);
    document.body.style.backgroundColor = bgColor;
});

// current date in calendar
const date = new Date();
const day = date.getDate();
const month = date.toLocaleString('en-US', { month: 'short' });
const year = date.getFullYear();
const weekday = date.toLocaleString('en-US', { weekday: 'short' });
// console.log(day, month, year, weekday);
document.getElementById('weekday').innerText = weekday;
document.getElementById('date').innerText = `${month} ${day} ${year}`;

// current time in clock
function clock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const twelveHour = hour > 12 ? hour - 12 : hour;
    const time = `${twelveHour}:${minute}:${second} ${ampm}`;
    return time;
}

// clear history
document.getElementById('btn-clear').addEventListener('click', function() {
    activityLogElement.innerHTML = '';
});

// activity update
const activityLogElement  = document.getElementById('activity-logs');
function activityUpdate(taskTitle) {
    const div = document.createElement('div');
    div.classList.add("bg-slate-200", "rounded-xl", "p-4", "mb-4" , "text-sm");
    const p = document.createElement('p');
    p.innerText = `You have completed the task ${taskTitle} at ${clock()}`;
    div.appendChild(p);
    activityLogElement.appendChild(div);
}



// getting element of task assigned
const tasksAssigned = document.getElementById('tasks-assigned');
// getting element of total completed task
const totalCompleted = document.getElementById('total-completed');

// alert after clicking completed button
const btnCompleted = document.querySelectorAll('.btn-completed');
// console.log(btnCompleted);
for(let i = 0; i < btnCompleted.length; i++) {
    
    btnCompleted[i].addEventListener('click', function() {
        if (confirm('Board Updated Successfully')) {
            const taskTitle = btnCompleted[i].parentElement.parentElement.querySelector('.task-title').innerText;
            btnCompleted[i].disabled = true;
            btnCompleted[i].classList.remove('text-white','font-light');
            btnCompleted[i].classList.add('opacity-50', 'cursor-not-allowed', 'text-gray-800','font-bold');
            
            // proti click a task assigned count fetch hobe and then kombe
            const tasksAssignedCount = parseInt(tasksAssigned.innerText);
            tasksAssigned.innerText = `0${tasksAssignedCount - 1}`;

            const totalCompletedCount = parseInt(totalCompleted.innerText);
            totalCompleted.innerText = totalCompletedCount + 1;

            activityUpdate(taskTitle);
        }
    });
}


