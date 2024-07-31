function search() {
	const input = document.getElementById('searchInput').value.trim();
  if (input.includes('.') && !input.includes(' ')) {
    const url = input.startsWith('http://') || input.startsWith('https://') ? input : 'http://' + input;
    window.location.href = url;
  } 
	else {
		const query = encodeURIComponent(input);
    window.location.href = `https://www.google.com/search?q=${query}`;
	}
}
function checkForEnter(event) {
	if (event.keyCode === 13) {
		search();
	}
}
