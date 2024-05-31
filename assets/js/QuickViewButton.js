const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content');
const closeButton = document.querySelector('.close_button');
const modalImage = document.querySelector('.modal_image');
const productList = document.querySelectorAll('.products');
const detailTitle = document.querySelector('.detail_title');
const detailPrice = document.querySelector('.detail_price');
const addButton = document.querySelector('button');

const productCost = ['390,000đ','390,000đ','390,000đ','390,000đ','390,000đ','390,000đ','390,000đ','390,000đ'];
productList.forEach((list,index) => {
    const view = list.querySelector('.quick-view');
    const pro_img = list.querySelector('.product-thumb');

    view.addEventListener('click',() => {
        modal.classList.add('.modal--bg');
        modalContent.classList.add('.modal_content--show');
        modalImage.setAttribute('src', pro_img);
        detailTitle.innerText = '.product-name ${index +1}';
        productCost.innerText = productCost[index];
    })
})
closeButton.addEventListener('click',() => {
    modal.classList.remove('modal--bg');
    modalContent.classList.remove('modal_content--show');
})
modal.addEventListener('click',() => {
    modal.classList.remove('modal--bg');
    modalContent.classList.remove('modal_content--show')
    addButton.foreach(function (button,index){
        addButton.addEventListener("click",function (event){
            var btnitem = event.target
            var product = btnitem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.quest.add('.modal_content--show');
})rySelector('.product-name').innerText
        var productPrice = product.querySelector('.product-price').innerText
         addCart(productPrice,productImg,productName)
    })
})
function addCart(produrctPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var trcontent = '<td> <img src="'+productImg+'"></td><td> <div> <p>'+productName+'</p><small>Price: '+produrctPrice+'</small><br><a href="">Remove</a></div></td><td><input type="number" value="1"></td></div>'
    var cartTable = document.querySelector('.cart-info')
    cartTable.append(addtr)
}