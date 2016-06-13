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
        physics: {enabled: false}      // defined in the physics module.
	};
	
	$scope.onNodeSelect = function(properties) {
        /*
            $mdDialog.show({
            templateUrl: 'info.html',
            parent: angular.element(document.body),
            transclude: true,      
            locals: {
                to: "",
                cc: "ccTest",
                subject: "",
                body: "body",
                emailUpdates: ""
            },
            controller: ['$scope', '$sce', 'to', 'cc', 'subject', 'body', 'emailUpdates', '$mdDialog',  '$http', function($scope, $sce, to, cc, subject, body, emailUpdates, $mdDialog, $http) {
                $scope.to = '';
                $scope.cc = '';
                $scope.subject = '';
                $scope.body = "";
                $scope.emailUpdates = emailUpdates;
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                    
                };
                $scope.cmdSend = function() {
                };                
   
            }]
        }) 
        */

        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#map')))
            .parent(angular.element(document.body))
            .clickOutsideToClose(false)
            .escapeToClose(false)
            .title("title")
            .content("text")
            .ariaLabel("title")
            .ok('OK')   
        ); 


       $mdDialog.show({
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content>'+
           '    <md-list>'+
           '      <md-list-item ng-repeat="item in items">'+
           '       <p>Number {{item}}</p>' +
           '      '+
           '    </md-list-item></md-list>'+
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         locals: {
           items: $scope.items
         }
      });
	};
	
	$scope.nodes.add([
		{id: 1, label: 'Node 1'},
		{id: 2, label: 'Node 2'},
		{id: 3, label: 'Node 3'},
		{id: 4, label: 'Node 4'},
		{id: 5, label: 'Node 5'}]);
	
	$scope.edges.add([
		{id: 1, from: 1, to: 2},
		{id: 2, from: 3, to: 2}
	]);
});
