const imgElement = document.querySelector('#imageAdd');
const formElement = document.querySelector('#myForm');
const imageContainer = document.querySelector('.container');

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
			imageContainer.appendChild(newImg);
		} else {
			alert('Invalid Link');
		}
	});
	imgElement.value = '';
});

imageContainer.addEventListener('mouseover', (e) => {
	if (e.target.classList.contains("ImagesElement")) {
			e.target.style.transform = "scale(1.3)";
			e.target.style.transition = "transform 0.5s";		
	}
});
imageContainer.addEventListener('mouseout', (e) => {
	if (e.target.classList.contains("ImagesElement")) {
			e.target.style.transform = "scale(1)";
			e.target.style.transition = "transform 0.5s";		
	}
});

imageContainer.addEventListener('dblclick', (e) => {
	if (e.target.classList.contains("ImagesElement")) {
		e.target.remove();
	}
});