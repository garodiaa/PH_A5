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
            btnCompleted[i].disabled = true;
            btnCompleted[i].classList.remove('text-white','font-light');
            btnCompleted[i].classList.add('opacity-50', 'cursor-not-allowed', 'text-gray-800','font-bold');
            
            // proti click a task assigned count fetch hobe and then kombe
            const tasksAssignedCount = parseInt(tasksAssigned.innerText);
            tasksAssigned.innerText = `0${tasksAssignedCount - 1}`;

            const totalCompletedCount = parseInt(totalCompleted.innerText);
            totalCompleted.innerText = totalCompletedCount + 1;
        }
    });
}


