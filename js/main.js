document.addEventListener("click", function (e) {
	if (e.target.classList.contains("gallery-img")) {
		let src = e.target.getAttribute("src");
		document.querySelector(".modal-img").src = src;
		let myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
		myModal.show();
	};
});
