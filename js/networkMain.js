 function drawNodes_0() {
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3, dashes:false},
    {from: 1, to: 2},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
  ]);

  // create a network
  var container = document.getElementById('vzNetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  
  var options = {
    autoResize: true,
    //height: '100%',
    //width: '100%'
    locale: 'en',
    //locales: locales,
    clickToUse: false,
    //configure: {...},    // defined in the configure module.
    //edges: {width: 1, smooth: {enabled: true, roundness: 0.1}, color: {color: 'black', highlight: 'grey'}},        // defined in the edges module.
    //nodes: {...},        // defined in the nodes module.
    //groups: {...},       // defined in the groups module.
    //layout: {...},       // defined in the layout module.
    //interaction: {...},  // defined in the interaction module.
    //manipulation: {...}, // defined in the manipulation module.
    physics: {enabled: false},      // defined in the physics module.
  }
  //options = {};
  var network = new vis.Network(container, data, options);
 }
 
 
 
 
function drawNodes() {
    var nodes = null;
    var edges = null;
    var network = null;

    var DIR = '../graph/img/';
    var EDGE_LENGTH_MAIN = 100;
    var EDGE_LENGTH_SUB = 20;

    // Called when the Visualization API is loaded.

      // Create a data table with nodes.
      nodes = [];

      // Create a data table with links.
      edges = [];

      nodes.push({id: 1, label: 'Main', image: DIR + 'switchBlue.png', shape: 'image'});
      nodes.push({id: 2, label: 'Office', image: DIR + 'switchBlue.png', shape: 'image'});
      nodes.push({id: 3, label: 'Wireless', image: DIR + 'switchBlue.png', shape: 'image'});
      edges.push({from: 1, to: 2, length: EDGE_LENGTH_MAIN});
      edges.push({from: 1, to: 3, length: EDGE_LENGTH_MAIN});
      edges.push({from: 1, to: 3, length: EDGE_LENGTH_MAIN});
      
      for (var i = 4; i <= 7; i++) {
        nodes.push({id: i, label: '10.0.0.21', image: DIR + 'server.png', shape: 'image'});
        edges.push({id: 400+i, from: 2, to: i, length: EDGE_LENGTH_SUB});
      }

      nodes.push({id: 101, label: 'Printer', image: DIR + 'switchBlue.png', shape: 'image'});
      edges.push({from: 2, to: 101, length: EDGE_LENGTH_SUB});

      nodes.push({id: 102, label: 'Laptop', image: DIR + 'switchBlue.png', shape: 'image'});
      edges.push({from: 3, to: 102, length: EDGE_LENGTH_SUB});

      nodes.push({id: 103, label: 'network drive', image: DIR + 'switchBlue.png', shape: 'image'});
      edges.push({from: 1, to: 103, length: EDGE_LENGTH_SUB});

      nodes.push({id: 104, label: 'Internet', image: DIR + 'switchBlue.png', shape: 'image'});
      edges.push({from: 1, to: 104, length: EDGE_LENGTH_SUB});

      for (var i = 200; i <= 201; i++ ) {
        nodes.push({id: i, label: 'Smartphone', image: DIR + 'switchBlue.png', shape: 'image'});
        edges.push({from: 3, to: i, length: EDGE_LENGTH_SUB});
      }

      // create a network
      var container = document.getElementById('vzNetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      network = new vis.Network(container, data, options);
          network.on("selectEdge", function (params) {
          if(params.nodes[0]) alert(params.nodes[0]);
          console.log('selectEdge Event:', params);
      });
      network.on("selectEdge", function (params) {
        //if(params.edges[0]) alert(params.edges[0]);
        ngDialog.open({template: 'ext.html'});
      });
}
    
    
    
    