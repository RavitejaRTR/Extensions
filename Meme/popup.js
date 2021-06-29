function getMeaning() {
	
	console.log("Here");
	
	// Cancel the form submit
    event.preventDefault();
	
	let userInput = document.getElementById('user-input');
	console.log(userInput.value);
	
	let word = document.getElementById('word');
	word.innerHTML = userInput.value;
	
	userInput.value = "";
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	
	// Handle the bookmark form submit event with our addBookmark function
    document.getElementById('getMeaning')
            .addEventListener('submit', getMeaning);
});