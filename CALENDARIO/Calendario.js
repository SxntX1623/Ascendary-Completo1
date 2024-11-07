let currentYear = 2024;
let currentMonth = 0; // Enero
let currentDay = 1;

const calendarElement = document.getElementById('calendar');
const yearDisplay = document.getElementById('currentYear');
const monthDisplay = document.getElementById('currentMonth');
const dayDisplay = document.getElementById('currentDay');

function changeYear(delta) {
    currentYear += delta;
    yearDisplay.textContent = currentYear;
    renderCalendar();
}

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    monthDisplay.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
    renderCalendar();
}

function changeDay(delta) {
    currentDay += delta;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    if (currentDay < 1) {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        currentDay = new Date(currentYear, currentMonth + 1, 0).getDate(); // Último día del mes anterior
    } else if (currentDay > daysInMonth) {
        currentDay = 1;
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
    }
    dayDisplay.textContent = currentDay;
    renderCalendar();
}

function renderCalendar() {
    calendarElement.innerHTML = ''; // Limpiar el calendario
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `<strong>${d}</strong>`;
        const tasks = JSON.parse(localStorage.getItem(`tasks-${currentYear}-${currentMonth + 1}-${d}`)) || [];
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.style.backgroundColor = task.color;
            taskDiv.innerText = task.text;
            dayDiv.appendChild(taskDiv);
        });
        calendarElement.appendChild(dayDiv);
    }
}

function addTask() {
    const taskInput = document.getElementById('task');
    const colorPicker = document.getElementById('colorPicker');
    const task = {
        text: taskInput.value,
        color: colorPicker.value
    };
    const tasks = JSON.parse(localStorage.getItem(`tasks-${currentYear}-${currentMonth + 1}-${currentDay}`)) || [];
    tasks.push(task);
    localStorage.setItem(`tasks-${currentYear}-${currentMonth + 1}-${currentDay}`, JSON.stringify(tasks));
    taskInput.value = '';
    colorPicker.value = '#000000';
    renderCalendar();
}

function removeTask() {
    const taskInput = document.getElementById('task');
    const tasks = JSON.parse(localStorage.getItem(`tasks-${currentYear}-${currentMonth + 1}-${currentDay}`)) || [];
    const taskIndex = tasks.findIndex(task => task.text === taskInput.value);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem(`tasks-${currentYear}-${currentMonth + 1}-${currentDay}`, JSON.stringify(tasks));
    }
    taskInput.value = '';
    renderCalendar();
}

// Renderizar el calendario al cargar la página
monthDisplay.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
dayDisplay.textContent = currentDay;
renderCalendar();