function showTime() {
    const options = { 
        timeZone: 'America/Chicago', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    };
    const dateTimeString = new Date().toLocaleString('en-US', options);
    document.getElementById('currentTime').innerHTML = dateTimeString;
}
showTime();
setInterval(showTime, 1000);
