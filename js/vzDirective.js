app.directive('vzNetwork', function() {
    return {
        restrict: 'E',
        require: '^ngModel',
        scope: {
            ngModel: '=',
            onSelect: '&',
            options: '='
        },
        link: function($scope, $element, $attrs, ngModel) {
            var network = new vis.Network($element[0], $scope.ngModel, $scope.options || {});
            network.once('initRedraw', function() {
                network.moveTo({offset:{x:- (0.5 * 120),y:- (0.5 * 80)}})
            })            
            //network.on("click", function (params) {
            //    params.event = "[original event]";
            //    document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
            //});

            var onSelect = $scope.onSelect() || function(prop) {};
            network.on('select', function(params) {
                onSelect(params);
                params.event = "[original event]";
                if(params.nodes.length){
                    var divNode = document.getElementById('node-popUp');
                    params.pointer.DOM.y += 100;
                    divNode.style.left = params.pointer.DOM.x+'px';
                    divNode.style.top = params.pointer.DOM.y+'px';
                    $('#node-popUp input#node-id').val(params.nodes);
                    $('#node-popUp input#edge-id').val(JSON.stringify(params.edges));                 
                    divNode.style.display = 'block';
                } else {
                    var divEdge = document.getElementById('edge-popUp');
                    params.pointer.DOM.y += 100;
                    divEdge.style.left = params.pointer.DOM.x+'px';
                    divEdge.style.top = params.pointer.DOM.y+'px';
                    $('#edge-popUp input#node-id').val(params.nodes);
                    $('#edge-popUp input#edge-id').val(JSON.stringify(params.edges));
                    $('#edge-popUp #edge-info').hide();
                    $('#edge-popUp #edge-menu').show();                                                        
                    divEdge.style.display = 'block';                    
                }



            });
        }
    }
});

app.directive('drag', function() {
  return {
    restrict: 'A',
    link: function(scope, elm, attrs) {
      var options = scope.$eval(attrs.drag); //allow options to be passed in
      elm.draggable(options);
    }
  };
});