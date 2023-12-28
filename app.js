let container = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.querySelector('button');
// let warning = document.querySelector('.warning');

function createItem() {
	let sign = document.createElement('p');
	if (input.value == '') {
		// sign.textContent = 'There is no input item!';
		// warning.appendChild(sign);
		alert('No input item!');
	} else {
		sign.remove();
		let value = input.value;
		let li = document.createElement('li');
		let span = document.createElement('span');
		let del = document.createElement('button');
		let edit = document.createElement('button');
		let editInput = document.createElement('input');
		let editDone = document.createElement('button');
		li.textContent = value;
		function addButtons() {
			li.appendChild(span);
			li.appendChild(del);
			li.appendChild(edit);
		}
		addButtons();
		editDone.textContent = 'Done';
		del.textContent = 'Delete';
		edit.textContent = 'Edit';
		container.appendChild(li);
		del.addEventListener('click', function () {
			li.remove();
		});
		edit.addEventListener('click', () => {
			li.appendChild(editInput);
			li.appendChild(editDone);
			editInput.setAttribute('class', 'updateItem');
		});
		editDone.addEventListener('click', () => {
			let updateItem = document.querySelector('.updateItem');
			li.textContent = updateItem.value;
			addButtons();
			editDone.remove();
			editInput.remove();
		});
		input.focus();
		input.value = '';
	}
}
