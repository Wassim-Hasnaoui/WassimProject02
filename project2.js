var products = [
    {
        id: 1,
        img: "pictures/Radeon.jpg",
        name: "Radeon RX 7600 XT",
        price: "$1,538"
      },
      {
        id: 2,
        img: "pictures/IntelCore.jpg",
        name: "I9-14900K 14th Gen",
        price: "$540"
      },
      {
        id: 3,
        img: "pictures/AMD.jpg",
        name: "Ryzen 8000 Zen 5",
        price: "$599"
      },
      {
        id: 4,
        img: "pictures/ASUS GeForce GTX 1660 Super.jpg",
        name: "GeForce GTX 1660 Super",
        price: "$299.95"
      },
      {
        id: 5,
        img: "pictures/ROG Zephyrus G14.jpg",
        name: "ROG Zephyrus G14",
        price: "$1,499"
      },
      {
        id: 6,
        img: "pictures/GS66 Stealth.jpg",
        name: "GS66 Stealth",
        price: "$1,899"
      },
      {
        id: 7,
        img: "pictures/Razer Blade 15.jpg",
        name: "Blade 15",
        price: "$1,999"
      },
      {
        id: 8,
        img: "pictures/Aurora R11.jpg",
        name: "Aurora R11",
        price: "$2,199"
      },
      {
        id: 9,
        img: "pictures/Predator XB273K.jpg",
        name: "Predator XB273K",
        price: "$1,299"
      },
      {
        id: 10,
        img: "pictures/UltraGear 27GN950-B.jpg",
        name: "UltraGear 27GN950-B",
        price: "$899"
      },
      {
        id: 11,
        img: "pictures/ROG Swift PG279Q.jpg",
        name: "ROG Swift PG279Q",
        price: "$699"
      },
      {
        id: 12,
        img: "pictures/Zowie XL2546.jpg",
        name: "Zowie XL2546",
        price: "$499"
      },
      {
        id: 13,
        img: "pictures/ps5.jpg",
        name: "PlayStation 5",
        price: "$499"
      },
      {
        id: 14,
        img: "pictures/xbox.jpg",
        name: "Xbox Series X",
        price: "$499"
      },
      {
        id: 15,
        img: "pictures/switch.jpg",
        name: "Nintendo Switch",
        price: "$299"
      }
];

const categories = [...new Set(products.map((item)=> {return item}))]

document.getElementById("searchb").addEventListener("keyup", (e)=>{
    const searchData = e.target.value.tolowerCase();
    const filtData = categories.filter((item)=>{
        return(
            item.name.tolocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filtData)
})

const displayItem = (items)=> {
    document.getElementById("procontainer").innerHTML = items.map((item)=>{
        var {img, name, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='img' src=${pictures}></img>
                </div>
                <div class='bottom'>
                    <p>${name}</p>
                    <h2>${price}</h2>
                    <button>add to cart</button>
                </div>
            </div>`
        )
}).join('')
};
displayItem(categories);

////////////////////////////////////////////////////


var products = [];

document.querySelectorAll(".pro").forEach(function(pro) {
    var img = pro.querySelector("img");
    var name = pro.querySelector("h5");
    var price = pro.querySelector("h4");

    products.push({
        "image": img.src,
        "name": name.innerText,
        "price": price.innerText
    });
});




////////////////////////////////////////////////////



document.querySelectorAll(".pro").forEach(function(pro) {
    var img = pro.querySelector("img");
    var name = pro.querySelector("h5");
    var price = pro.querySelector("h4");

    products.push({
        "image": img.src,
        "name": name.innerText,
        "price": price.innerText
    });
});














var procontainer = new Array();

document.getElementById("trans").onclick = function() {
    for (let i = 0; i < procontainer.length; i++) {
        if(procontainer[i]===procontainer){
            procontainer[i].price += parseFloat(document.getElementsByClassName("h4")[i].innerText);
        }else {
            procontainer.push({
                "src": document.getElementsByClassName("pro")[i].src,
                "price": parseFloat(document.getElementsByClassName("h4")[i].innerText)
            });
        }
    }
}