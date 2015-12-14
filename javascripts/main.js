console.log("loaded main.js");

// ID of the Google Spreadsheet


// Make sure it is public or set to Anyone with link can view

(function() {
  console.log("function sent");
  var spreadsheetID = "140f-u3YxCg3xlspx-xNWPbkXVPSHOOMopCWtsV-Wdao"
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  console.log(url)
  $.getJSON(url,
    function (data) {
      var xaxisoptions = [];
      for (var i = 0; i < data.feed.entry.length; i++) {
          for (var key in data.feed.entry[i]) {
              if (data.feed.entry[i].hasOwnProperty(key) && key.substr(0,4) === 'gsx$') {
                  data.feed.entry[i][key.substr(4)] = data.feed.entry[i][key].$t;
                  xaxisoptions.push(key);
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
      var xaxistitle = datap[0][0];
      console.log(xaxistitle);
      console.log(xaxisoptions);
      var chart = c3.generate({
          bindto: '#chart',
          data: {
            json: datap,
            keys: {
              x: 'category',
              value: ['year2012', 'year2013', 'year2014']
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
