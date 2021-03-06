/* Code from validatejs.org's example */
(function() {
	// Before using it we must add the parse and format functions
	// Here is a sample implementation using moment.js
	console.log("Agatthe");
	validate.extend(validate.validators.datetime, {
	  // The value is guaranteed not to be null or undefined but otherwise it
	  // could be anything.
	  parse: function(value, options) {
		return +moment.utc(value);
	  },
	  // Input is a unix timestamp
	  format: function(value, options) {
		var format = options.dateOnly ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss";
		return moment.utc(value).format(format);
	  }
	});

	// CONSTRAINTS ARE DEFINED WITH THE NAME constraints IN THE <page>Spec.js files
	// console.log("Constraints done")

	// Hook up the form so we can prevent it from being posted
	var form = document.querySelector("form#main");
	form.addEventListener("submit", function(ev) {
	  ev.preventDefault();
	  handleFormSubmit(form);
	});
	console.log("Hooked up")

	// Hook up the inputs to validate on the fly
	var inputs = document.querySelectorAll("input, textarea, select")
	for (var i = 0; i < inputs.length; ++i) {
	  inputs.item(i).addEventListener("keyup", function(ev) {
		var errors = validate(form, constraints) || {};
		showErrorsForInput(this, errors[this.name])
		});
		console.log(inputs.item(i));
	}

	function handleFormSubmit(form, input) {
	  // validate the form aainst the constraints
	  var errors = validate(form, constraints);
	  // then we update the form to reflect the results
	  showErrors(form, errors || {});
	  if (!errors) {
		form.submit();
	  }
	}

	// Updates the inputs with the validation errors
	function showErrors(form, errors) {
	  // We loop through all the inputs and show the errors for that input
	  _.each(form.querySelectorAll("input[name], select[name]"), function(input) {
		// Since the errors can be null if no errors were found we need to handle
		// that
		showErrorsForInput(input, errors && errors[input.name]);
	  });
	}

	// Shows the errors for a specific input
	function showErrorsForInput(input, errors) {
	  // This is the root of the input
	  var formGroup = closestParent(input.parentNode, "field")
		// Find where the error messages will be insert into
		, messages = formGroup.querySelector(".messages");
	  // First we remove any old messages and resets the classes
	  resetFormGroup(formGroup);
	  // If we have errors
	  if (errors) {
		// we first mark the group has having errors

		//formGroup.classList.add("has-error");
		input.classList.add("is-danger");

		// then we append all the errors
		_.each(errors, function(error) {
		  addError(messages, error);
		});
	  } else {
		// otherwise we simply mark it as success

		//formGroup.classList.add("has-success");
		input.classList.add("is-success");
	  }
	}

	// Recusively finds the closest parent that has the specified class
	function closestParent(child, className) {
	  if (!child || child == document) {
		return null;
	  }
	  if (child.classList.contains(className)) {
		return child;
	  } else {
		return closestParent(child.parentNode, className);
	  }
	}

	function resetFormGroup(formGroup) {
	  // Remove the success and error classes

	  //formGroup.classList.remove("has-error");
		//formGroup.classList.remove("has-success");
		_.each(form.querySelectorAll("input[name], select[name]"), function(input) {
			input.classList.remove("is-danger");
			input.classList.remove("is-success");
		})

	  // and remove any old messages
	  _.each(formGroup.querySelectorAll(".help"), function(el) {
		el.parentNode.removeChild(el);
	  });
	}

	// Adds the specified error with the following markup
	// <p class="help-block error">[message]</p>
	function addError(messages, error) {
	  var block = document.createElement("p");
	  block.classList.add("help");
	  block.classList.add("is-danger");
	  block.innerText = error;
	  messages.appendChild(block);
	}

	function showSuccess() {
	  // We made it \:D/
	  alert("Success!");
	}
  })();