console.log("loaded main.js");

// ID of the Google Spreadsheet


// Make sure it is public or set to Anyone with link can view

(function() {
  console.log("function sent");
  var spreadsheetID = "140f-u3YxCg3xlspx-xNWPbkXVPSHOOMopCWtsV-Wdao"
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  console.log(url)
  $.getJSON(url, function(data) {
    var entry = data.feed.entry;
    var datap = [];
    console.log(entry);
    for (var i = 0; i < entry.length; i++) {
      datap.push([entry[i][gsx$regions]$t, entry[i][3]$t]);
    }
    console.log(datap);
    var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: datap,
          type: 'bar'
        },
        color: {
          pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
        },
        legend: {
            position: 'bottom'
        }
    });
  });
})();



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
