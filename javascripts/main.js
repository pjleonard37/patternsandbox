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
        ['data1', 30],
				['data2', 130],
				['data3', 230],
				['data4', 330],
				['data5', 430],
				['data6', 530],
				['data7', 630],
				['data8', 730],
				['data9', 830],
				['data10', 930],
				['data11', 130],
        ['data111', 30],
        ['data112', 130],
        ['data113', 230],
        ['data411', 330],
        ['data511', 430],
        ['data611', 530],
        ['data711', 630],
        ['data811', 730],
        ['data911', 830],
        ['data1011', 930],
        ['data1111', 130],
        ['data122', 30],
        ['data222', 130],
        ['data322', 230],
        ['data422', 330],
        ['data521', 430],
        ['data622', 530],
        ['data722', 630],
        ['data822', 730],
        ['data92', 830],
        ['data102', 930],
        ['data1122', 130],
        ['data133', 30],
        ['data244', 130],
        ['data355', 230],
        ['data466', 330],
        ['data577', 430],
        ['data688', 530],
        ['data799', 630],
        ['data8101', 730],
        ['data95432', 830],
        ['data10532', 930],
        ['data13521', 130],
        ['data1325', 30],
        ['da3452ta2', 130],
        ['data3253', 230],
        ['da5ta4', 330],
        ['data5', 430],
        ['da2ta6', 530],
        ['da3ta7', 630],
        ['dat3a8', 730],
        ['da4ta9', 830],
        ['dat54a10', 930],
        ['dat53a11', 130],
        ['8data1', 30],
        ['d7ata2', 130],
        ['da65ta3', 230],
        ['data44', 330],
        ['data235', 430],
        ['data2353a6', 530],
        ['dat4a7', 630],
        ['dagta9', 830],
        ['datva10', 930],
        ['datgfa11', 130],
        ['dasgta12', 50]
      ],
			type: 'pie'
			// },
			// axis: {
			// 	y: {
			// 		label: {
			// 			show: true,
			// 			text: 'Y Label',
			// 			position: 'outer-middle'
			// 		}
			// 	},
			// 	y2: {
			// 		show: true,
			// 		label: {
			// 			text: 'Y2 Label',
			// 			position: 'outer-middle'
			// 		}
			// 	}
			// }
    },
    color: {
      pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    legend: {
        position: 'bottom'
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
