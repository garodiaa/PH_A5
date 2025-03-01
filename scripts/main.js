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
