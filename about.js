console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Your form has been submitted successfully')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
document.querySelector('img').addEventListener('mouseover', ()=>alert(`Are you from Tennessee, because you're the only Ten-I-See ;)`));