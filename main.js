var cart = {};//корзина
function init() {
	// вывод товара на главную стр
	$.getJSON("goods.json", goodsOut);
}

function goodsOut(data){
	
	console.log(data);
	var out='';
	for (var key in data){
		out += '<div class="cart">';
		out +=`<div class="text1">${data[key].name}</div>`;
		out +=`<img id="photo" src="${data[key].img}" alt="da" width="${data[key].width}" height="${data[key].height}">`;
		out +=`<div class="coin">${data[key].cost} <b>${data[key].P}</b></div>`;
		out +=`<button class="add-to-cart" data-id="${key}">Купить</button>`;
		out +='</div>';
	}
	$('.goods-out').html(out);
	$('.add-to-cart').on('click', addToCart);
}


function addToCart() {
	//доб товар в корзину
	var id = $(this).attr('data-id');
	// console.log(id);
	if (cart[id]==undefined){
		cart[id] = 1;
	}
	else {
		cart[id]++;
	}
	alert("Товар добавлен в корзину");
	showMiniCart();
	saveCart();

}


function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart));
}

function showMiniCart() {
	var out="";
	for (var key in cart){
out += key + ' ---- ' + cart[key] + '<br>';
	}
	$('.mini-cart').html(out);

}

function loadCart() {
	//проверка есть ли в LocalStorage запись cart
	if(localStorage.getItem('cart')){
		// если есть - расшифровываю и записываю переменную cart
		cart = JSON.parse(localStorage.getItem('cart'));
		showMiniCart();
	}
}

$(document).ready(function (){
	init();
	goodsOut();

})