let itemcontainer = document.querySelector(".items-container")
let bagitemcount = document.querySelector(".bag-item-count")
let bagitem=[]
onload()
function onload(){
    displayitemcontainer()
    bagitemicon()
    let localstr = localStorage.getItem('bagitem')
    bagitem = localstr?JSON.parse(localstr):[];  
}
function addtobag(item){
    bagitem.push(item)
    console.log(bagitem)
    localStorage.setItem('bagitem',JSON.stringify(bagitem))
    bagitemicon()

}

function bagitemicon(){
    if(!bagitemcount){
        return;
    }
    if(bagitem.length<=0){
        bagitemcount.style.display = 'none';
    }else{
        bagitemcount.innerHTML = bagitem.length;
        bagitemcount.style.display = 'block';  
    }  
}
console.log(bagitemcount)
bagitemicon()
function displayitemcontainer(){
    let innerhtml = '';
    if(!itemcontainer){
        return;
    }
    items.forEach(item =>{
        innerhtml+= `<div class="item-container">
        <img class="item-image" src="${item.image}" alt="">
        <div class="rating">
            <p>${item.rating.stars}</p>
            <p>${item.rating.count}</p>
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">${item.discount_percentage}%</span>
        </div>
        <button class="btn-add-bag" onclick= "addtobag(${item.id})">Add to Bag</button>
        </div>`
    })
    itemcontainer.innerHTML =  innerhtml
}
displayitemcontainer()


