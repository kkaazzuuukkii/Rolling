function load() { 
const goods = document.querySelector(".second_main_goods")

const div_goods = document.querySelector('.second_main_goods')

const array = [
    {
        image: './img/good1.jpg'
    },
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

for (let i = 0; i < array.length; i++) {
    
    const div_good = document.createElement('div')
    const img_good = document.createElement('img')
    const h1_good = document.createElement('h1')

    const good_cost = document.createElement('div')
    const good_cost_person = document.createElement('div')
    const good_cost_autor = document.createElement('img')
    const good_cost_p = document.createElement('p')

    const good_bid = document.createElement('div')
    const good_cbid = document.createElement('p')
    const good_ethbid = document.createElement('p')

    div_goods.appendChild(div_good)
    div_good.classList.add('second_main_good')

    div_good.appendChild(img_good)
    img_good.classList.add('second_main_good_photo')
    img_good.src = array[i].image

    div_good.appendChild(h1_good)
    h1_good.innerHTML = "3D Soft Curves"

    div_good.appendChild(good_cost)
    good_cost.classList.add('second_main_good_cost')

    good_cost.appendChild(good_cost_person)
    good_cost_person.classList.add('second_main_good_cost_person')

    good_cost_person.appendChild(good_cost_autor)
    good_cost_autor.src = './img/autor.jpg'

    good_cost_person.appendChild(good_cost_p)
    good_cost_p.innerHTML = 'Esther Howard'

    good_cost.appendChild(good_bid)
    good_bid.classList.add('second_main_good_cost_bid')

    good_bid.appendChild(good_cbid)
    good_cbid.classList.add('c_bid')
    good_cbid.innerHTML = 'Current Bid'

    good_bid.appendChild(good_ethbid)
    good_ethbid.classList.add('eth_bid')
    good_ethbid.innerHTML = '0.85 ETH'
}

}

// Сохранение в инпут
const input = document.querySelector('.search_input');

const save = () => {
    localStorage.setItem('input-text', input.value)
}


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
}, 1);