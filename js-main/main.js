let btnStart = document.querySelector('#button');
let insert = document.querySelector('#insert');
let emptyField = [];

btnStart.addEventListener('click', function(){
	let show = document.querySelector('.field');

	if(insert.value !=''){

		function test1(){
			let input = insert.value;
			emptyField.push(input);
		}; //End of test1

		function test2 (){

			show.innerHTML="";
			for (var i = 0; i < emptyField.length; i++) {

				var item = document.createElement('div');
				item.setAttribute('id', 'inner');
				let elementBtn = document.createElement('button');
				elementBtn.setAttribute("id","remove");
				let elementTextBtn = document.createTextNode("Remove");

				let elementEdt = document.createElement('button');
				elementEdt.setAttribute("id","edit");
				let elementTextEdt = document.createTextNode("Edit");

				elementBtn.appendChild(elementTextBtn);
				elementEdt.appendChild(elementTextEdt);
				var listItem = item.appendChild(document.createTextNode(emptyField[i]));
				item.appendChild(listItem);
				item.appendChild(elementBtn);
				item.appendChild(elementEdt);

				show.appendChild(item);

			}  //End of For

		} //End of test2

		test1();
		test2();

		insert.value='';
	}

	else {
		alert("Insert text")
	}

});



















