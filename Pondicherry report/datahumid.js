
  var container = document.getElementById('visualization');
  var items = [
      {x: '2014-06-11', y: 10},
      {x: '2014-06-12', y: 25},
      {x: '2014-06-13', y: 30},
      {x: '2014-06-14', y: 10},
      {x: '2014-06-15', y: 15},
      {x: '2014-06-16', y: 30}
  ];

var json=JSON.parse(items_real);
var graph_arr=[];
json.forEach(function (val,key) {
   var temp={};
   temp.x=val.timestamp;
   temp.y=val.humidity;
   graph_arr.push(temp); 
});
  var dataset = new vis.DataSet(graph_arr);
  var options = {
      start: '2016-07-03T08:14:39.631Z',
      end: '2016-09-30T13:51:22.573Z'
  };
  var Graph2d = new vis.Graph2d(container, dataset, options);
console.log("done");