const goods = document.querySelector(".second_main_goods")
const good = document.querySelector(".second_main_good")

const array = [
    {
        image: '/img/good2.jpg'
    },
    {
        image: '/img/good3.jpg'
    },
    {
        image: '/img/good4.jpg'
    },
    {
        image: '/img/good5.jpg'
    },
    {
        image: '/img/good6.jpg'
    },
    {
        image: '/img/good7.jpg'
    },
    {
        image: '/img/good8.jpg'
    },
    {
        image: '/img/good9.jpg'
    },
    {
        image: '/img/good10.jpg'
    },
    {
        image: '/img/good11.jpg'
    },
    {
        image: '/img/good12.jpg'
    }
]


array.map((value) => {
    const clone = good.cloneNode(true);
    clone.querySelector('.second_main_good_photo').src = value.image;
    goods.appendChild(clone);
})