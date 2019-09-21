"use strict";

var addForm = document.querySelector('.addElem');

function addItem(){
	var title = addForm.querySelector('input').value,
		todo = addForm.querySelector('textarea').value,
		errorElem = addForm.querySelector('.error');

	var todoArr = todo.split(',');
	todoArr = todoArr.map((item)=>{
		var todo = item.trim().toLowerCase().split(':');
		var todoObj = {};
		todoObj['doneFlg'] = Boolean(+todo[0].trim());
		todoObj['title']   = todo[1].trim();
		return todoObj
	});

	todoArr = todoArr.filter((item)=>{return item.title});

	todoArr = todoArr.map((item)=>{
		item.title = (workCheck(item.title)) ? 'не '+ item.title: item.title;
		return item
	});
	console.log(todoArr)

	if (title){
		errorElem.style.display = 'none';
		addTodo(title, todoArr);
	}else{
		errorElem.innerText = 'Вы не заполнили заголовок';
		errorElem.style.display = 'block';
	}

}

function workCheck(str){
	return str.includes('работ') && !str.includes('за');
}


function addTodo(todoTitle, todoList){
	var cardElem = document.createElement('div');
	var titleElem = document.createElement('h2');
	titleElem.innerText = todoTitle;
	cardElem.appendChild(titleElem);

	if (!todoList.length){
		var emptyTodo = document.createElement('p');
		emptyTodo.innerText = 'Ты ленив или все сделал( но это вряд ли).';
		cardElem.appendChild(emptyTodo);

	}else{


		var doneUlElem = document.createElement('ul');

		todoList.filter(item=>item.doneFlg).forEach((item)=>{
			var liElem = document.createElement('li');
			liElem.innerText = item.title;
			doneUlElem.appendChild(liElem);
		});		
		cardElem.appendChild(doneUlElem);

		var notDoneUlElem = document.createElement('ul');
		//todoList.filter((item)=>{return item.doneFlg});
		todoList.filter(item=>!item.doneFlg).forEach((item)=>{
			var liElem = document.createElement('li');
			liElem.innerText = item.title;
			notDoneUlElem.appendChild(liElem);
		});		
		cardElem.appendChild(notDoneUlElem);


	};
	document.body.appendChild(cardElem);
}

var addBtn = addForm.querySelector('button');
addBtn.addEventListener('click', ()=>addItem());



/*var x1 = 10

switch(x1) {
  case 9:  
    console.log('9')
    break

  case 10:  
    console.log('10')
    break

  default:
    console.log('значение по умолчанию')
    break
}*/


var arr = [1, 12, 12, 14, 3, 32, 32, 423, 9];

function sortFunc(next, cur){
	
	if (next<cur){
		return 1
	}else if (next>cur){
		return -1
	}else{
		return 0
	}
}








