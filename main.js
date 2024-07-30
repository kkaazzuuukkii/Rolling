const goods = document.querySelector(".second_main_goods")
const good = document.querySelector(".second_main_good")

const array = [
    {
        image: './img/good2.jpg'
    },
    {
        image: './img/good3.jpg'
    },
    {
        image: './img/good4.jpg'
    },
    {
        image: './img/good5.jpg'
    },
    {
        image: './img/good6.jpg'
    },
    {
        image: './img/good7.jpg'
    },
    {
        image: './img/good8.jpg'
    },
    {
        image: './img/good9.jpg'
    },
    {
        image: './img/good10.jpg'
    },
    {
        image: './img/good11.jpg'
    },
    {
        image: './img/good12.jpg'
    }
]


array.map((value) => {
    const clone = good.cloneNode(true);
    clone.querySelector('.second_main_good_photo').src = value.image;
    goods.appendChild(clone);
})


// Таймер

const sec = document.querySelector('.main_time_seconds');
const min = document.querySelector('.main_time_minutes');
const hour = document.querySelector('.main_time_hours');

let sectext = parseInt(sec.innerText);
let mintext = parseInt(min.innerText);
let hourtext = parseInt(hour.innerText);

const interval = setInterval(() => {
  if (hourtext === 0 && mintext === 0 && sectext === 0) {
    clearInterval(interval);
    return;
  }

  sectext -= 1;

  if (sectext < 0) {
    sectext = 59;
    mintext -= 1;

    if (mintext < 0) {
      mintext = 59;
      hourtext -= 1;

      if (hourtext < 0) {
        hourtext = 0;
      }

      hour.innerHTML = hourtext;
    }

    min.innerHTML = mintext;
  }

  sec.innerHTML = sectext;
}, 1000);