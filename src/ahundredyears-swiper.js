/**
 * Angular Swiper
 * @version v0.0.0 - 2013-12-04
 * @author Bobby Santiago <bobby@100yea.rs>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('ahundredyears.swiper', [])

angular.module('ahundredyears.swiper')

.directive('swiper', [function() {

  var link = function(scope, element, attrs){
    var config;

    config = {};

    if (attrs.auto) {
      config.auto = !!attrs.auto;
    }

    if (attrs.speed) {
      config.speed = parseInt(attrs.speed, 10);
    }

    if (attrs.disableScroll) {
      config.disableScroll = !!attrs.disableScroll;
    }

    if (attrs.continuous) {
      config.continuous = !!attrs.continuous;
    }

    scope.swipe = new Swipe(document.getElementById("slider"), config);

  };

  var controller = function($scope, $element){
    $scope.next = function(){
      $scope.swipe.next();
    }
    $scope.prev = function(){
      $scope.swipe.prev();
    }
    $scope.slide = function(index){
      $scope.swipe.slide(index);
    }
  };

  return {
    restrict: "E",
    link: link,
    controller: controller,
    template: "<div id='slider' class='swipe'><div class='swipe-wrap' ng-transclude></div></div>",
    transclude: true,
    replace: true
  }

}]);
