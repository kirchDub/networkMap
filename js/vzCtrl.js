'use strict';
var app = angular.module('vzApp', ['ui.router','ngMaterial', 'ngMessages']);
app.controller('vzCtrl', function($scope, $mdDialog) {
	$scope.nodes = new vis.DataSet();
	$scope.edges = new vis.DataSet();
	$scope.network_data = {
		nodes: $scope.nodes,
		edges: $scope.edges
	};
	$scope.network_options = {
        autoResize: false,
        //height: '100%',
        //width: '100%'
        locale: 'en',
        //locales: locales,
        clickToUse: false,
        //configure: {...},    // defined in the configure module.
        edges: {width: 3,  color: {color: 'green', highlight: 'lightblue'}},        // defined in the edges module.
        nodes: {borderWidth: 1, size: 12, fixed: {x: true, y: true}},        // defined in the nodes module.
        //groups: {...},       // defined in the groups module.
        layout: {randomSeed:0},
        //interaction: {...},  // defined in the interaction module.
        //manipulation: {...}, // defined in the manipulation module.
        physics: {enabled: false}      // defined in the physics module.
	};
	
	$scope.onNodeSelect = function(properties) {
          //var div = document.getElementById('graph-popUp');
          //div.style.display = 'block';
	};
	
	var DIR = '../networkMap/img/';
        $scope.nodes.add([
                {id: 101, x: 580, y: 170},
                {id: 102, label: '102', image: DIR + 'switchBrown.png', shape: 'image', x: 580, y: 250},
                {id: 103, label: '103', image: DIR + 'switchBlue.png', shape: 'image', x: 630, y: 310},
                {id: 104, label: '104', image: DIR + 'switchBlue.png', shape: 'image', x: 630, y: 520},
                {id: 105, label: '105', image: DIR + 'switchOrange.png', shape: 'image', x: 650, y: 500},
                {id: 106, label: '106', image: DIR + 'switchBrown.png', shape: 'image', x: 700, y: 610},
                {id: 107, label: '107', image: DIR + 'switchBlue.png', shape: 'image', x: 720, y: 640},
                {id: 108, label: '108', image: DIR + 'switchBlue.png', shape: 'image', x: 860, y: 440},
                {id: 109, label: '109', image: DIR + 'switchOrange.png', shape: 'image', x: 1020, y: 460},             
                {id: 110, label: '110', image: DIR + 'switchBlue.png', shape: 'image', x: 860, y: 640},
                {id: 111, label: '111', image: DIR + 'switchBlue.png', shape: 'image', x: 1020, y: 680},                
                {id: 112, label: '112', image: DIR + 'switchBlue.png', shape: 'image', x: 1160, y: 760},                    
                {id: 113, label: '113', image: DIR + 'switchBlue.png', shape: 'image', x: 1260, y: 760},
                {id: 114, label: '114', image: DIR + 'switchOrange.png', shape: 'image', x: 1200, y: 660}, 
                {id: 115, label: '115', image: DIR + 'switchOrange.png', shape: 'image', x: 1270, y: 500},                                
                {id: 116, label: '116', image: DIR + 'switchBlue.png', shape: 'image', x: 1375, y: 510},                 
                {id: 117, label: '117', image: DIR + 'switchOrange.png', shape: 'image', x: 1375, y: 760},                    
                {id: 118, label: '118', image: DIR + 'switchBlue.png', shape: 'image', x: 1580, y: 800},         
                {id: 119, label: '119', image: DIR + 'switchBlue.png', shape: 'image', x: 1530, y: 630},  
                {id: 120, label: '120', image: DIR + 'switchBlue.png', shape: 'image', x: 1470, y: 550},  
                {id: 121, label: '121', image: DIR + 'switchOrange.png', shape: 'image', x: 1460, y: 400},
                {id: 122, label: '122', image: DIR + 'switchOrange.png', shape: 'image', x: 1590, y: 410},                  
                {id: 123, label: '123', image: DIR + 'switchBlue.png', shape: 'image', x: 1690, y: 470},                                   
                {id: 124, label: '124', image: DIR + 'switchBlue.png', shape: 'image', x: 1650, y: 570},                 
                {id: 125, label: '125', image: DIR + 'switchBlue.png', shape: 'image', x: 1770, y: 400},
                {id: 126, label: '126', image: DIR + 'switchOrange.png', shape: 'image', x: 1770, y: 320},            
                {id: 203, label: '203', image: DIR + 'server.png', shape: 'image', x: 600, y: 340},
                {id: 205, label: '205', image: DIR + 'server.png', shape: 'image', x: 680, y: 470},
                {id: 206, label: '206', image: DIR + 'server.png', shape: 'image', x: 660, y: 630},
                {id: 207, label: '207', image: DIR + 'server.png', shape: 'image', x: 680, y: 660},
                
                //{id: 1004,  x: 635, y: 525},
                //{id: 10004, x: 640, y: 530},
                //{id: 1006, x: 705, y: 615},
                //{id: 10006, x: 708, y: 618},
                
                
        ]);
        $scope.nodes.update({id:101,color:"rgba(0,0,0,0)",fontColor:"rgba(0,0,0,0)"})                                        
	
	$scope.edges.add([
		{id: 301, from: 102, to: 103},
		{id: 302, from: 103, to: 104},
		{id: 303, from: 104, to: 106},
		{id: 304, from: 104, to: 108},
		{id: 305, from: 105, to: 108},
		{id: 306, from: 105, to: 109},
		{id: 307, from: 105, to: 115}, 

		{id: 308, from: 107, to: 110}, 
                {id: 309, from: 107, to: 106},

                {id: 310, from: 114, to: 111},                 
                {id: 311, from: 114, to: 112}, 
                {id: 312, from: 114, to: 113}, 
                {id: 313, from: 114, to: 117},                 
                {id: 314, from: 114, to: 116}, 
                {id: 315, from: 114, to: 115}, 
                {id: 316, from: 114, to: 104},                 
                {id: 317, from: 114, to: 120}, 
                {id: 318, from: 114, to: 119}, 


                {id: 319, from: 108, to: 109}, 
                {id: 320, from: 109, to: 115}, 
                {id: 321, from: 115, to: 116},
                {id: 322, from: 116, to: 120}, 
                {id: 323, from: 120, to: 119},                                                    
                {id: 324, from: 119, to: 118}, 
                
                {id: 325, from: 116, to: 121}, 
                {id: 326, from: 116, to: 122}, 
                
                {id: 327, from: 121, to: 102},  
                {id: 328, from: 121, to: 108},                                                                  
                                                                                                      
	]);       
});
