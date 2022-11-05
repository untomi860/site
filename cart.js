var cart = {};

function loadCart() {
	//проверка есть ли в LocalStorage запись cart
	if(localStorage.getItem('cart')){
		// если есть - расшифровываю и записываю переменную cart
		cart = JSON.parse(localStorage.getItem('cart'));
		// showMiniCart();
		if (!isEmpty(cart)) {
			$('.main-cart').html('Корзина пуста' );
		}
		else{
			showCart();
		}
		
	}
	else {
		$('.main-cart').html('Ваша корзина пуста');
	}
}

function showCart() {
	$.getJSON('goods.json', function (data){
		var goods = data;
		var out = '';
		var buybtn = ``;
		for( var id in cart){
			out += `<div class="column">`;
			out += `<div class="text1">${goods[id].name}</div>`;
			out += `${cart[id]} `;
			out += '<br>';
			out += `<button data-id="${id}" class="delg-goods"><ion-icon class="text69" name="remove"></ion-icon></button>`;
			out += `<button data-id="${id}" class="plus-goods"><ion-icon class="text69" name="add"></ion-icon></button>`;
			out += '<br>';
			
			out += '<br>';
			// out += `<div class="cost">${goods[id].cost}</div>`;
			out += `<img src="${goods[id].img}" width="${goods[id].width}" height="${goods[id].height}">`;
			out += '<br>';
			out += `<div class="coin">${cart[id]*goods[id].cost} <b>${goods[id].P}</b></div>`;
			// out += `<div class="text1">${goods[id].descript}</div>`;
			out += `</div>`;
			
		}
		buybtn +=`<button class="buybutton">Купить</button>`;
		$('.main-cart').html(out);
		$('.buybuttonshow').html(buybtn);
		if (cart[id]>0) {
			$('.buybuttonshow').html(buybtn);
		} else {
			$('.buybuttonshow').html('Ваша корзина пуста');
		}
		$('.delg-goods').on('click', delGoods);
		$('.plus-goods').on('click', plusGoods);
	});
}

function delGoods() {
	var id = $(this).attr('data-id');
	cart[id]--;
	if (cart[id] == 0)
		delete cart[id];
	saveCart();
	showCart();
}

function plusGoods() {
	//dob tovar
	var id = $(this).attr('data-id');
	cart[id]++;
	saveCart();
	showCart();
}

function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart));
}

function isEmpty(object) {
	for (var key in object)
		if (object.hasOwnProperty(key)) return true;
	return false;
}

$(document).ready(function () {
	loadCart();
})