// let resultWrapperEl = document.querySelector('#show-field');
// let todoValueInput = document.querySelector('#insert');
// let addBtn = document.querySelector('#button');

// let result=[];
// let idCounter = 0;


// Add and remove id in array //

// function addTodoItem() {
// 	const item = {
// 		id: idCounter,
// 		todo: todoValueInput.value
// 	}

// 	// Add todo item to result array
// 	result.push(item);

// 	// Increase id counter
// 	idCounter++;

// 	// Clear input value
// 	todoValueInput.value = '';

// 	console.log(result);
// 	addResultToHtml();
// }

// function removeeee(){
// 	wrapper.remove();
// }

// function addResultToHtml() {
// 	let resultHtml = '';

// 	result.forEach(res => {
// 		resultHtml += `
// 		<div class="item" style="display: flex;">
// 		<p class="item__id">ID: ${res.id}</p>
// 		<p class="item__text">${res.todo}</p>
// 		<button class="remove-btn" data-id="${res.id}">Remove</button>
// 		</div>
// 		`;
// 	});

// 	resultWrapperEl.innerHTML = resultHtml;
// }

// function removeItem(id) {
// 	const removeItemId = result.findIndex(x => x.id === id);
// 	result.splice(removeItemId, 1);
// 	addResultToHtml();
// }

// document.addEventListener('click',function(e) {
// 	if(e.target && e.target.classList.contains('remove-btn')){
// 		const id = e.target.getAttribute('data-id');
// 		removeItem(parseInt(id));
// 	}
// });

// addBtn.addEventListener('click', function(){
// 	if(todoValueInput.value !== ''){
// 		addTodoItem();
// 	}else{
// 		alert('Insert text')
// 	}
// });

// END Add and remove id in array //

// LA LAKERS TIM //

// const Lakers = [
// {
// 	id: 1,
// 	name: 'Lebron',
// 	points: 500,
// 	rebounds: 140,
// 	assists: 120
// },
// {
// 	id: 2,
// 	name: 'Davis',
// 	points: 420,
// 	rebounds: 100,
// 	assists: 44
// },
// {
// 	id: 3,
// 	name: 'Carmelo',
// 	points: 340,
// 	rebounds: 100,
// 	assists: 67
// },
// {
// 	id: 4,
// 	name: 'Howard',
// 	points: 2255,
// 	rebounds: 224,
// 	assists: 55
// },
// {
// 	id: 5,
// 	name: 'Westbruk',
// 	points: 360,
// 	rebounds: 110,
// 	assists: 33
// },
// {
// 	id: 6,
// 	name: 'Rivs',
// 	points: 124,
// 	rebounds: 36,
// 	assists: 10
// },
// ];
// const numberOfGames = 5;

// // 1. koliko su ukupno poena dali lejkersi za 5 utakmice
// let allPoints = function(){
// 	let sum = 0;
// 	Lakers.forEach((e, a) => {
// 		sum += e.points;
// 	})
// 	console.log(`They had ${sum} points all`)
// }
// allPoints()
// // 2. koliko u proseku poena daju po utakmici
// let avergePoints = function(){
// 	let pointsAvg;
// 	Lakers.forEach((e,a)=>{
// 		console.log(e.points)
// 		pointsAvg= e.points/numberOfGames;
// 		console.log(`Averge points: ${e.name}:${pointsAvg} for number of game: ${numberOfGames}`)
// 	})
// }
// avergePoints();

// // 3. ko je najbolji strelac
// let theBestply=[];
// const ids = Lakers.map(object => {
// 	theBestply.push(object.points);
// });
// console.log(theBestply)

// const max = Math.max.apply(null, theBestply);
// console.log(`This is the best pointer ${max}`);

// // 4. koliko poena po utakmici daje najbolji strelac
// let avergPlayerPoints = max/numberOfGames;
// console.log(avergPlayerPoints)


// // 5. ko ima najvise skokova
// let theBestRebounds=[];

// const rb = Lakers.map(object => {
// 	theBestRebounds.push(object.rebounds);
// });
// console.log(theBestRebounds);

// const rbMax = Math.max.apply(null, theBestRebounds);
// console.log(`This is a player who had the most rebounds ${rbMax}`);
// // 6. najbolji skakac koliko ima skokova po utakmici

// let avergPlayerRebounds = rbMax/numberOfGames;
// console.log(avergPlayerRebounds);



// // 6 Nadji ime u array-u i izbaci ga da se printa
// let testDisplay = [];

// Lakers.forEach(function(e,a,r){
// 	if(e.name.includes("Rivs") || e.name.includes("Lebron")){
// 		testDisplay.push(JSON.stringify(e.name + ` `+ `points:` + e.points));
// 	}
// })
// console.log(testDisplay)
// resultWrapperEl.textContent=testDisplay


// END LA LAKERS TIM  //

// // API and FETCH
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((res)=>{return res.json()})
// .then((data)=>{
// 	console.log(data.stats)
// 	data.stats.forEach(r=>{
// 		console.log(r.stat.url)
// 	})
// 	// let dd = [];

// 	// data.forEach(e=>{

// 	// 	e.films.forEach(r=>{
// 	// 		fetch(r)
// 	// 		.then((res)=>{return res.json()})
// 	// 		.then((data)=>{
// 	// 			console.log(data);
// 	// 			console.log(data.title);
// 	// 			let field = document.createElement('div');
// 	// 			let name = data.title;
// 	// 			field.innerHTML=name;
// 	// 			dd.push(field)
// 	// 			console.log(dd)

// 	// 		});
// 	// 	})
// 	// })
// })


// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 12);

// // window.addEventListener('load', ()=>{

// // 	let long;
// // 	let lat;

// // 	if(navigator.geolocation) {
// // 		navigator.geolocation.getCurrentPosition(position => {
// // 			long = position.coords.longitude;
// // 			lat = position.coords.latitude;

// // 			const api = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={e520d030be367f82367d0ae398cf29e3}`
// // 			fetch(api)
// // 			.then((res)=>{return res.json()})
// // 			.then((data)=>{
// // 				console.log(data)
// // 			})
// // 		})
// // 	}
// // })




// // fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
// // .then((res)=>{return res.json()})
// // .then((data)=>{
// // 	console.log(data)
// // })



/* BUILD THE PROJECT SHOPING CARD */

let btn = document.querySelectorAll('.btn');
let shopCard = document.querySelectorAll('.shop-item');
let image = document.querySelectorAll('.cart-item-image');
let cart = document.querySelectorAll('.cart-row');


btn.forEach(e=>{
	e.addEventListener('click', r=>{
		let parentWithClass = r.target.closest('.shop-item');
		console.log(parentWithClass)
		cart.forEach(e=>{
			e.innerHTML+=parentWithClass.innerHTML
		})


	})
})


// Remove element from cart
// remove.forEach(e=>{
// 	e.addEventListener('click', function(){
// 		e.parentElement.parentElement.remove();
// 		minus();
// 	})
// })

// function minus(){
// 	let price = document.querySelectorAll('.cart-price');
// 	price.forEach(e=>{
// 		let go = e.innerText.replace('$', '');
// 		parseFloat(go);
// 	})
// }

// Calcilate the item and substract from price
// function shopCard(){
// 	let shopField = document.querySelectorAll('.shop-item');
// 	let equaly = document.querySelector('.cart-total-price').innerText.replace('$', '');

// 	shopField.forEach(e=>{
// 		e.addEventListener('click', function(){

// 			let shopItem = e.querySelector('.shop-item-price').innerText.replace('$', '');
// 			let tt = equaly- shopItem;
// 			equaly=tt
// 			console.log(equaly)
// 			if(tt < 0){
// 				alert ('Stop')
// 			}
// 		})

// 	})
// }
// shopCard()



