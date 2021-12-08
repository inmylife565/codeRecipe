'use strict';

{
	const searchWord = document.getElementById('searchWord');
	const list = document.querySelectorAll('li');
	const headline = document.querySelectorAll('h4');

	searchWord.focus();

	searchWord.addEventListener('keyup', () => {
		list.forEach((element) => {
			const sw = searchWord.value;
			if (!sw || sw === '') {
				element.classList.remove('hide');
					headline.forEach((el) => {
								el.classList.remove('hide');
					});
				return;
			}
			const listText = element.innerText;

			if (listText.includes(sw)) {
				element.classList.remove('hide');
			} else {
				element.classList.add('hide');
				headline.forEach((el) => {
					el.classList.add('hide');
				});				
			}
		});
	});

}