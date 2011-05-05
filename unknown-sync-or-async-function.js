/*
 * In nodejs, sometimes a function needs to be called passing it a callback function if it is asynchronous. Otherwise
 * you can just call the function as is. But what if you want to write functions where you don't want to take the callback
 * function as an argument because you don't know if the function will need to behave in an async manner?
 * 
 * Also, what if when you call the function, you don't know if it is asynchronous or not? In this test code, I propose a
 * standard of returning a function from a function which
 * 
 */

function DoSomethingAsync(callback) {
	setTimeout(function () {
		console.log('done doing whatever we need to do');
		console.log('execute the callback');
		
		callback("beefcake");
	}, 1000);
	
	if (!callback) {
		var calledBack = false;
		var args = null;
		
		callback = function () {
			args = arguments;
			calledBack = true;
		}
		
		return function (cb) {
			if (calledBack) {
				cb.apply(null, args);
			}
			else {
				callback = cb;
			}
		}
	}
}

/*
 * 
 * Test DoSomethingAsync by passing the callback function directly.
 * 
 */

DoSomethingAsync(function (result) {
	console.log("Called back from callback passed directly to DoSomethingAsync :" + result);
});


/*
 * 
 * Test DoSomethingAsync by passing the callback to the function returned from it.
 * 
 */

result = DoSomethingAsync();

if (typeof(result) == "function") {
	result(function(result) {
		console.log("Called back from result callback mechanism :" + result);
	});
}


/*
 * 
 * Test DoSomethingAsync by passing the callback to the function returned from it.
 * 
 * In this case we will set the callback function after the original function tried to call the callback function.
 * 
 */

result = DoSomethingAsync();

if (typeof(result) == "function") {
	setTimeout(function () {
		result(function(result) {
			console.log("Called back from result callback mechanism, 6 seconds later :" + result);
		});
	}, 6000);
}


/*
 * 
 * There is a lot of extra coding involved in checking the return value. Can we create a wrapper?
 * 
 */



/*
 * 
 * I haven't tried to create a wrapper yet, because this looks like a lot of additional BS just to enable being a lazy coder.
 * 
 */
