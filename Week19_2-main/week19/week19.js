	
function makeTwo() {
	let section = document.getElementById('section');
	fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    return response.json();
})
.then(posts => {
	posts.forEach((post) => {
		const h2 = document.createElement('h2');
		h2.textContent = post.title;
		const postElement = document.createElement('span');
		postElement.textContent = post.body;
		const div = document.createElement('div');
		div.append(h2);
		div.append(postElement);
		section.append(div);
	})
	
	.catch((err) => {
		console.log('Ошибка. Запрос не выполнен');
	})
})
}
makeTwo();

