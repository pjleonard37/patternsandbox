console.log("loaded main.js");

var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 1000, 100, 400, 150, 250],
				['data1', 130, 900, 100, 400, 150, 250],
				['data1', 230, 800, 100, 400, 150, 250],
				['data1', 330, 700, 100, 400, 150, 250],
				['data1', 430, 600, 100, 400, 150, 250],
				['data1', 530, 500, 100, 400, 150, 250],
				['data1', 630, 400, 100, 400, 150, 250],
				['data1', 730, 300, 100, 400, 150, 250],
				['data1', 830, 200, 100, 400, 150, 250],
				['data1', 930, 200, 100, 400, 150, 250],
				['data1', 130, 100, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
});


// Revealing Module Pattern
// Example from https://carldanley.com/js-revealing-module-pattern/

/*
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
*/

//MyModule.myMethod();
//MyModule.myOtherMethod();
//MyModule.someMethod();
//MyModule.someOtherMethod();

// Modular JS with Object Literal Pattern
// From: https://www.youtube.com/watch?v=HkFlM73G-hk&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f

// object Literal
// var MyModule = {
// 	name: 'PJ',
// 	year: 2014,
// 	sayName: function(){
// 		console.log(this.name);
// 	},
// 	setName: function(newName){
// 		this.name = newName;
// 	}
// };
//
// myModule.setName('Raphael');
// myModule.sayName();
