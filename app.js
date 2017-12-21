 document.addEventListener("DOMContentLoaded", function(event) {

	var productsCount = document.getElementById("products-count");
	console.log(productsCount);

	var addToCardBottons = document.querySelectorAll(".addtocard");
	console.log(addToCardBottons);

	for (var i = 0; i < addToCardBottons.length; i++) {
		addToCardBottons[i].addEventListener("click", function (e) {
			e.preventDefault();
			console.log("clicked");
			var prevProductsCount = +productsCount.textContent;
			productsCount.textContent = prevProductsCount +1;
		})
	}

	$('.slider').slick({
	});

	var productLikeBottons = document.querySelectorAll(".like-btm2");
	console.log(productLikeBottons);
	for (var l = 0; l < productLikeBottons.length; l++) {
		productLikeBottons[l].addEventListener("click", function (e) {
			e.preventDefault();
			this.classList.toggle("liked-btn");
			this.addEventListener("mouseout", function (e) {
				this.classList.toggle("btm-hov");
				this.classList.toggle("btm-unhov");          
        	});
		})
	}
	var productLikeBottons2 = document.querySelectorAll(".like-btm-2");
	console.log(productLikeBottons2);
	for (var l = 0; l < productLikeBottons2.length; l++) {
		productLikeBottons2[l].addEventListener("click", function (e) {
			e.preventDefault();
			this.classList.toggle("liked-btn");
		})
	}
});