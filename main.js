function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "pic/menu.png"
        }else{
            nav.style.left = "0%";
            bar.src = "pic/x.png"
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}

const product = [
    {
        id: 1,
        image: 'pic/picture-1.png',
        title: 'hot coffee 1',
        price: 120,
    },
    {
        id: 2,
        image: 'pic/picture-2.png',
        title: 'hot coffee 2',
        price: 60,
    },
    {
        id: 3,
        image: 'pic/picture-3.png',
        title: 'hot coffee 3',
        price: 230,
    },
    {
        id: 4,
        image: 'pic/picture-4.png',
        title: 'hot coffee 4',
        price: 230,
    },
    {
        id: 5,
        image: 'pic/m1.png',
        title: 'coffee machines 1',
        price: 230,
    },
    {
        id: 6,
        image: 'pic/m2.png',
        title: 'coffee machines 2',
        price: 230,
    },
    {
        id: 7,
        image: 'pic/m3.png',
        title: 'coffee machines 3',
        price: 230,
    },
    {
        id: 8,
        image: 'pic/m4.png',
        title: 'hot coffee 5',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

