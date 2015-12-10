console.log("loaded main.js");

// ID of the Google Spreadsheet


// Make sure it is public or set to Anyone with link can view

(function() {
  console.log("function sent");
  var spreadsheetID = ""
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json-in-script&callback=";
  console.log(url)
  $.getJSON(url, function(data) {
    console.log(data);
    var entry = data.feed.entry;
    console.log(entry);
    $(entry).each(function(){
     // Column names are name, age, etc.
     $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
    });
  });
})();


var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 1000, 100, 400, 150, 250],
				['data2', 130, 900, 100, 400, 150, 250],
				['data3', 230, 800, 100, 400, 150, 250],
				['data4', 330, 700, 100, 400, 150, 250],
				['data5', 430, 600, 100, 400, 150, 250],
				['data6', 530, 500, 100, 400, 150, 250],
				['data7', 630, 400, 100, 400, 150, 250],
				['data8', 730, 300, 100, 400, 150, 250],
				['data9', 830, 200, 100, 400, 150, 250],
				['data10', 930, 200, 100, 400, 150, 250],
				['data11', 130, 100, 100, 400, 150, 250],
        ['data12', 50, 20, 10, 40, 15, 25]
      ],
			types: {
				data11: 'pie'
			},
			axis: {
				y: {
					label: {
						show: true,
						text: 'Y Label',
						position: 'outer-middle'
					}
				},
				y2: {
					show: true,
					label: {
						text: 'Y2 Label',
						position: 'outer-middle'
					}
				}
			}
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
