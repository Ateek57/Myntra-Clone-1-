let bagitemcontainer = document.querySelector(".bag-items-container")
let bagitemobject=[]
let total;
let totals;
let totaldis;
onload()
function onload(){
    bagitemobjectconverter()
    displayaddtobag()
    displaycounticon()
    totalmrp()
    totalamount()
    discount()   
}
function bagitemobjectconverter(){
    bagitemobject = bagitem.map((item) => {
        for(let i = 0; i< items.length;i++){
            if(items[i].id == item){
                return items[i];
            }
        
        }

    })

console.log(bagitemobject)
}


function displayaddtobag(){
    let innerto='';
    bagitemobject.forEach((item) =>{
        innerto += generateitemelement(item)
    })
    bagitemcontainer.innerHTML = innerto
}

function removefrombag(item){
    bagitem=bagitem.filter((itemid)=>{
        return itemid!=item
    })
    localStorage.setItem('bagitem',JSON.stringify(bagitem))
    bagitemobjectconverter()
    displayaddtobag()
    displaycounticon()
    totalmrp()
    totalamount()
    discount()

    
}

function generateitemelement(items){
    return`<div class="bag-item-container">
    <div class="item-left-part">
    <img class="bag-item-img" src="${items.image}">
    </div>
    <div class="item-right-part">
    <div class="company">${items.company}</div>
    <div class="item-name">${items.item_name}</div>
    <div class="price-container">
        <span class="current-price">${items.current_price}</span>
        <span class="original-price">${items.original_price}</span>
        <span class="discount-percentage">${items.discount_percentage}</span>
    </div>
    <div class="return-period">
        <span class="return-period-days">${items.return_period}</span> return available
    </div>
    <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${items.delivery_date}</span>
    </div>
    </div>

    <div class="remove-from-cart"  onclick="removefrombag(${items.id})" >X</div>
    </div>`;
}
function displaycounticon(){
    let bagitemcount = document.querySelector(".bag-item-count")
    if(bagitem.length>0){
        bagitemcount.style.display = "block";
        bagitemcount.innerHTML = bagitem.length;
}else{
    bagitemcount.style.display = "none";
} 
}
function totalmrp(){
    let orgprice = document.querySelector(".org-price")
    total = bagitemobject.reduce(function reducer(acc,currentitem){
        return acc+currentitem.original_price;
        
    },0)
    orgprice.innerHTML = total

}
function totalamount(){
    let totalsamount = document.querySelector(".total-amount")
    totals = bagitemobject.reduce(function reducer(acc,currentitem){
        return acc+currentitem.current_price;
    },0)
    totalsamount.innerHTML = totals;

}
function discount(){
    let dis = document.querySelector(".dis");
    dis.innerHTML = total-totals;
    
    

}

