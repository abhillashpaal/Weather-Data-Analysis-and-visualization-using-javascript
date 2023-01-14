
  var container = document.getElementById('visualization');
  
var json=JSON.parse(items_real);
var graph_arr=[];
json.forEach(function (val,key) {
   var temp={};
   temp.x=val.timestamp;
   temp.y=val.temperature;
   graph_arr.push(temp); 

});
  var dataset = new vis.DataSet(graph_arr);
  var options = {
      start: '2016-07-03T08:14:39.631Z',
      end: '2016-09-30T09:24:26.704Z',
      barChart:{
        align:"center",
        sideBySide:false,
        width:50
      }
  };
  var Graph2d = new vis.Graph2d(container, dataset, options);
console.log("done");