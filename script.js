document.getElementById('holidayButton').addEventListener('click', getHolidays);

function getHolidays() {
    fetch('https://www.gov.uk/bank-holidays.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayHolidays(data);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

function displayHolidays(data) {
    const holidayContainer = document.getElementById('holidayContainer');
    holidayContainer.innerHTML = '';
    const holidays = data['england-and-wales'].events;
    holidays.forEach(holiday => {
        const holidayElement = document.createElement('div');
        holidayElement.classList.add('alert', 'alert-info');
        holidayElement.textContent = `${holiday.title}: ${holiday.date}`;
        holidayContainer.appendChild(holidayElement);
    });
}
