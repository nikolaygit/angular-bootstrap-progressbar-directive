(function() {
  'use strict';

  /**
   * @name bootstrap.progressbar
   * @description progressbar directive for Bootstrap
   */
  angular.module('bootstrap')
    .directive('progressbar', progressbar);

  function progressbar() {
    var linker = function($scope, element, attrs) {
      updateProgressBar(element, attrs);
      var transitionProperty = attrs.transitionProperty;
      if (transitionProperty) {
        $scope.$watch(transitionProperty, function() {
          updateProgressBar(element, attrs);
        });
      }
    };

    var updateProgressBar = function(element, attrs) {
      element.attr('data-transitiongoal', attrs.transitiongoal);
      /* jshint camelcase:false */
      element.progressbar(
        {display_text: 'fill'}
      );
    };

    return {
      restrict: 'A',
      link: linker
    };
  }

})();