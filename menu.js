const iconMenu = document.querySelector('.menu__btn');
if(iconMenu){
	const menuBody = document.querySelector('.menu__box');
	iconMenu.addEventListener("click", function(e){
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}