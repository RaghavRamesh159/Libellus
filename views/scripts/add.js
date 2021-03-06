
function addAuthor() {
	let base = document.getElementById("authors");
	let num = base.childElementCount+1;
	if(num<=5)
		base.appendChild(newAuth(num));
}

function deleteAuthor() {
	let base = document.getElementById("authors");
	let num = base.childElementCount;
	if(num>1)
		base.removeChild(base.lastChild);
}

function newAuth(num) {
	let field = document.createElement("div");
	field.setAttribute('class', 'field is-horizontal');

	let fieldLabel = document.createElement("div");
	fieldLabel.setAttribute('class', 'field-label is-medium');
	let label = document.createElement("label");
	label.setAttribute('class', 'label');
	label.innerHTML = "Author " + num;
	fieldLabel.appendChild(label);

	field.appendChild(fieldLabel);

	let fieldBody = document.createElement("div"); fieldBody.setAttribute('class', 'field-body');
	let inputField = document.createElement("div"); inputField.setAttribute('class', 'field');
	let control = document.createElement("div"); control.setAttribute('class', 'control');
	let messages = document.createElement("div"); messages.setAttribute("class", "messages");
	let input = document.createElement("input");
	input.setAttribute('class', 'input is-medium');
	input.setAttribute('name', 'author'+num);
	input.setAttribute('id', 'author'+num);

	control.appendChild(input);
	inputField.appendChild(control);
	inputField.appendChild(messages);

	fieldBody.appendChild(inputField);

	field.appendChild(fieldBody);

	return field;
}