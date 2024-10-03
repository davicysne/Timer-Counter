function getInitialTime() {
    const storedTime = localStorage.getItem('startTime');
  
    if (storedTime === null) {
      const initialTime = Date.now() - (18 * 24 * 60 * 60 * 1000); 
      localStorage.setItem('startTime', initialTime); 
      return initialTime; 
    }
  
    return parseInt(storedTime, 10);
  }
  
  let startTime = getInitialTime();
  
  function updateTime() {
    let currentTime = Date.now();
    let timePassed = currentTime - startTime;
  
    let seconds = Math.floor((timePassed / 1000) % 60);
    let minutes = Math.floor((timePassed / (1000 * 60)) % 60);
    let hours = Math.floor((timePassed / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
  
    document.getElementById('dias').textContent = days;
    document.getElementById('horas').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutes).padStart(2, '0');
    document.getElementById('segundos').textContent = String(seconds).padStart(2, '0');
  }
  
  setInterval(updateTime, 1000);
  