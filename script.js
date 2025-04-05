const imgElement = document.querySelector('#imageAdd');
const formElement = document.querySelector('#myForm');
const imageContainer = document.querySelector('.container');

window.addEventListener("DOMContentLoaded", () => {
  const savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
  savedImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("ImagesElement");
    imageContainer.appendChild(img);
  });
});
function saveToLocalStorage(imageSrc) {
	let savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
	savedImages.push(imageSrc);
	localStorage.setItem("galleryImages", JSON.stringify(savedImages));
};
formElement.addEventListener('submit', (e) => {
	e.preventDefault();
	const valueImgElement = imgElement.value.trim();
	const newImg = document.createElement('img');
	
	function isImage(valueImgElement, callback) {
		const newImage = new Image();
		newImage.src = valueImgElement;
		
		newImage.onload = () => callback(true);
		newImage.onerror = () => callback(false);
	}
	
	isImage(valueImgElement, (result) => {
		if (result) {
			newImg.classList.add("ImagesElement");
			newImg.src = valueImgElement;
			saveToLocalStorage(newImg.src);
			imageContainer.appendChild(newImg);
		} else {
			alert('Invalid Link');
		}
	});
	imgElement.value = '';
});


imageContainer.addEventListener('dblclick', (e) => {
	if (e.target.classList.contains("ImagesElement")) {
		e.target.remove();
		
		let savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
		savedImages = savedImages.filter(src => src !== e.target.src);
		localStorage.setItem("galleryImages", JSON.stringify(savedImages));
	}
});