const clockContainer = document.getElementById("time");
const timeH1 = document.createElement("h1");
timeH1.classList.add("time");

const getCurrentTime = () => {
  const date = new Date();
  //Change time from 24 to 12 clock
  const hour = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amPm = date.getHours() >= 12 ? "PM" : "AM";

  //Add a leading zero to minute and second
  const leadingZeroM = () => {
    if (minutes < 10) {
      return `0${minutes}`;
    } else {
      return minutes;
    }
  };
  const leadingZeroS = () => {
    if (seconds < 10) {
      return `0${seconds}`;
    } else {
      return seconds;
    }
  };
  const time = `${hour}:${leadingZeroM()}:${leadingZeroS()} ${amPm}`;
  timeH1.innerHTML = time;
  clockContainer.appendChild(timeH1);

  //refresh time
  setInterval(getCurrentTime, 500);
};

getCurrentTime();
