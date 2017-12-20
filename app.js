 document.addEventListener("DOMContentLoaded", function(event) {  // Код запускається після загрузки сторінки (закривається вкінці)

	var productsCount = document.getElementById("products-count");
	console.log(productsCount);

	var addToCardBottons = document.querySelectorAll(".addtocard");
	console.log(addToCardBottons);

	for (var i = 0; i < addToCardBottons.length; i++) {
		addToCardBottons[i].addEventListener("click", function (e) { // Обробник подій (e - скороченно від event)
			e.preventDefault();                                      // Відміняє перехід ссилки
			console.log("clicked");
			var prevProductsCount = +productsCount.textContent;       // Считує текст, який є в середені блоку
			productsCount.textContent = prevProductsCount +1;
		})
	}

	$('.slider').slick({
	});

	var productLikeBottons1 = document.querySelectorAll(".like-btm1");
	console.log(productLikeBottons1);
	var productLikeBottons2 = document.querySelectorAll(".like-btm2");
	console.log(productLikeBottons2);

	for (var l = 0; l < productLikeBottons2.length; l++) {
		productLikeBottons2[l].addEventListener("click", function (e) {
			e.preventDefault();
			console.log("clicked");
			console.log(productLikeBottons2[l].classList);
			console.log(productLikeBottons1[l].classList);
			this.classList.toggle("liked-btn");
			productLikeBottons2[l].addEventListener("mouseout", function (e) {
				e.preventDefault();
				productLikeBottons2[l] = this.classList.add("btm-unhov");
				productLikeBottons2[l] = this.classList.remove("btm-hov");					
			})
				
		})
	}
});