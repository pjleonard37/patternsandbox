console.log("loaded main.js");

// ID of the Google Spreadsheet


// Make sure it is public or set to Anyone with link can view

(function() {
  console.log("function sent");
  var spreadsheetID = "140f-u3YxCg3xlspx-xNWPbkXVPSHOOMopCWtsV-Wdao"
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  console.log(url)
  $.getJSON(url,
    // function(data) {
    //   var entry = data.feed.entry;
    //
    //   var datap = [];
    //   console.log(entry);
    //   for (var i = 0; i < entry.length; i++) {
    //     datap.push([entry[i][gsx$regions].$t, entry[i][3].$t]);
    //   }
    //   console.log(datap);
    //   var chart = c3.generate({
    //       bindto: '#chart',
    //       data: {
    //         columns: datap,
    //         type: 'bar'
    //       },
    //       color: {
    //         pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
    //       },
    //       legend: {
    //           position: 'bottom'
    //       }
    //   });
    // });
    function (data) {
      for (var i = 0; i < data.feed.entry.length; i++) {
          for (var key in data.feed.entry[i]) {
              if (data.feed.entry[i].hasOwnProperty(key) && key.substr(0,4) === 'gsx$') {
                  // copy the value in the key up a level and delete the original key
                  data.feed.entry[i][key.substr(4)] = data.feed.entry[i][key].$t;
                  delete data.feed.entry[i][key];
              }
              else
              {
                delete data.feed.entry[i][key];
              }
          }
      }
      var datap = data.feed.entry;
      console.log(datap);
      var chart = c3.generate({
          bindto: '#chart',
          data: {
            json: datap,
            keys: {
              x: 'name'
            },
            type: 'bar'
          },
          color: {
            pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
          },
          legend: {
              position: 'bottom'
          },
          axis: {
            x: {
              type: 'category'
            }
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
