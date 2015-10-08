console.log("loaded main.js");

// Revealing Module Pattern
// Example from https://carldanley.com/js-revealing-module-pattern/
var MyModule = (function(window, undefined){
	
	function myMethod(){
		alert('my Method');
	}

	function myOtherMethod(){
		alert('my other Method');
	}

	//return public methods explicitly
	return{
		someMethod: myMethod,
		someOtherMethod: myOtherMethod
	};
})(window);

//MyModule.myMethod();
//MyModule.myOtherMethod();
MyModule.someMethod();
MyModule.someOtherMethod();