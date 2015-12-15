console.log("loaded main.js");

// ID of the Google Spreadsheet


// Make sure it is public or set to Anyone with link can view

(function() {
  var spreadsheetID = "140f-u3YxCg3xlspx-xNWPbkXVPSHOOMopCWtsV-Wdao"
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  console.log(url)
  $.getJSON(url,
    function (data) {
      console.log(data);
      var datafeed = data.feed.entry;
      console.log(datafeed);
      var xaxisoptions = [];
      var labeloptions = [];
      for (var i = 0; i < datafeed.length; i++) {
          for (var key in datafeed[i]) {
              if (datafeed[i].hasOwnProperty(key) && key.substr(0,4) === 'gsx$') {
                datafeed[i][key.substr(4)] = datafeed[i][key].$t;
                if (i === datafeed.length-1)
                {
                  xaxisoptions.push(key.substr(4));
                  labeloptions.push(datafeed[i][key].$t);
                }
                delete datafeed[i][key];
              }
              else
              {
                delete datafeed[i][key];
              }
          }
      }
      console.log(datafeed);
      console.log(xaxisoptions);
      console.log(labeloptions);
      var chart = c3.generate({
          bindto: '#chart',
          data: {
            json: datafeed,
            keys: {
              x: xaxisoptions[0],
              value: xaxisoptions
            },
            type: 'bar'
          },
          color: {
            pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
          },
          legend: {
              position: 'right'
          },
          axis: {
            x: {
              type: 'category'//,
              //categories: labeloptions
            }
          }
      });
    });
})();
