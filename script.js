let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")


function clock(){
  let dt = new Date();
  let hr = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();
  
  hour.innerHTML = hr
  minute.innerHTML = min
  second.innerHTML = sec
}

setInterval(clock, 1000)

// console.log(hr, min, sec)
// console.log(dt)