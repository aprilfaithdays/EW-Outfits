document.addEventListener("DOMContentLoaded", function() {
    getTops();
    getBottoms();
    getShoes();

    selectTop();
    selectBottoms();
    selectShoes;
});


const getTops = () => {
    const articleCon = document.getElementById("top-inner")
    const articleIndic = document.getElementById("top-indicators")
    const article = "top"
    fetch("http://localhost:3000/tops")
    .then( resp => resp.json())
    .then( tops => renderItems(tops, articleCon, articleIndic, article))
}

const getBottoms = () => {
    const articleCon = document.getElementById("bottom-inner")
    const articleIndic = document.getElementById("bottom-indicators")
    const article = "bottom"
    fetch("http://localhost:3000/bottoms")
    .then( resp => resp.json())
    .then( bottoms => renderItems(bottoms, articleCon, articleIndic, article))
}
const getShoes = () => {
    const articleCon = document.getElementById("shoe-inner")
    const articleIndic = document.getElementById("shoe-indicators")
    const article = "shoe"
    fetch("http://localhost:3000/shoes")
    .then( resp => resp.json())
    .then( shoes => renderItems(shoes, articleCon, articleIndic, article))
}

function renderItems(items, articleCon, articleIndic, article) {
    let num = 0
    items.forEach( item => {
        const indicLineItem = document.createElement("li")
        indicLineItem.innerHTML = `
            <li data-target="#${article}CarouselIndicators" data-slide-to="${num}"></li>
        `
        num++
        articleIndic.appendChild(indicLineItem)

        const carouselItem = document.createElement("div")
        carouselItem.className="carousel-item" //first should be active(use if statement)
        carouselItem.innerHTML = `
            <img class="d-block w-100" src=${item.img_url} alt="item_id_${item.id}">
        `
        articleCon.appendChild(carouselItem)
    })
    let activeTop = articleCon.children[0]
    activeTop.className = "carousel-item active"

    let activeTopIndicator = articleIndic.children[0]
    activeTopIndicator.className = "active"
}

const selectTop = () => {
    const topOptions = document.getElementById("top-inner")
    const currentTop = document.getElementById("top-user-input")
    topOptions.addEventListener("click", e => {
        currentTop.src = e.target.src
        return currentTop
    })
}

const selectBottoms = () => {
    const bottomOptions = document.getElementById("bottom-inner")
    const currentBottom = document.getElementById("bottom-user-input")
    bottomOptions.addEventListener("click", e => {
        currentBottom.src = e.target.src
        return currentBottom
    })
}

const selectShoes = () => {
    const shoeOptions = document.getElementById("shoe-inner")
    const currentShoe = document.getElementById("shoe-user-input")
    shoeOptions.addEventListener("click", e => {
        currentShoe.src = e.target.src
        return currentShoe
    })
}



// const renderItems = items => {
//     const topCon= document.getElementById('carouselExampleIndicators')
//     const topOl = document.createElement("ol")
//     const topDiv = document.createElement("div")
//     let num = 0
//     topDiv.className = "carousel-inner"
//     topOl.className = "carousel-indicators"
//     tops.forEach( top => {
        
//         let topOlInfo = setCaroLi(num)
//         topOl.appendChild(topOlInfo)
//         num++
//         let renderedTop = renderTopDiv(top)
//         topDiv.appendChild(renderedTop)
//     })
//     topCon.prepend(topDiv)
//     const fart = topDiv.getElementsByTagName("div")[0]
//     fart.className = "carousel-item active"
//     topCon.prepend(topOl)
//     const poop = topOl.getElementsByTagName("li")
//     poop[0].className = "active"
//     console.log(poop)
// }

// const setCaroLi = (num) => {
//     const topCard = document.createElement("li")
//     topCard.dataset.target = "#carouselExampleIndicators"
//     topCard.dataset.slideTo = num
//     return topCard
// }

// const renderTopDiv = top => {
//     const topCard = document.createElement("div")
//     topCard.className = "carousel-item"
//     topCard.innerHTML = `
//                 <img class="d-block w-100" src="${top.img_url}" alt="First slide">
//     `
//     return topCard
// }



