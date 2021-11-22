$(document).on('click', '.jeremy .period p', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

let classForjs = document.querySelector('.class-for-js');
let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

var arr = [daily, weekly, monthly];

arr.forEach(item => {
    item.onclick = () => {
        fetchData(item.innerText);
    }
});

function fetchData(timeframe){
    var tf;
    var dwm;
    switch(timeframe){
        case "Daily":
          dwm = "Day";
          tf = "daily";
        break;

        case "Weekly":
          tf = "weekly";
          dwm = "Week";
        break;

        case "Monthly":
          dwm = "Month";
          tf = "monthly";
        break;
        
        default:
          tf = "none";
        break;
        
    }
fetch('data.json')
.then(response => response.json())
.then(data => {
    classForjs.innerHTML = "";
    data.forEach(item => {
        classForjs.innerHTML+=`<div class="${item.title.toLowerCase().replace(" ", "-")} card">
        <div class="icon">
          <img src="/images/icon-${item.title.toLowerCase().replace(" ", "-")}.svg" alt="${item.title.toLowerCase().replace(" ", "-")}" />
        </div>
        <div class="detail">
          <div class="title">
            <p>${item.title}</p>
            <div class="ellipsis">
              <img src="images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
          </div>
          <div class="data">
            <h1><span id="work-data">${item.timeframes[tf].current}</span>hrs</h1>
            <p>Last ${dwm} - <span id="work-prev-data">${item.timeframes[tf].previous}</span>hrs</p>
          </div>
        </div>
      </div>`
        
    })
})
}

fetchData("Weekly");