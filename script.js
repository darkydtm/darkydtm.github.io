const warning = document.querySelector('.dr-warning');

function checkDarkReader() {
	if (document.documentElement.hasAttribute('data-darkreader-mode')) {
		warning.classList.add('visible');
	} else {
		warning.classList.remove('visible');
	}
}

checkDarkReader();

const observer = new MutationObserver(checkDarkReader);

observer.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-darkreader-mode']
});
