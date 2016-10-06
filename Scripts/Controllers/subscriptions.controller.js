/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("SubscriptionsController", [
        "$scope",
        function ($scope) {
        	$scope.title = "Subscriptions";
        	$scope.feed = [];

        	$scope.getFeed = function () {
        		$scope.feed = $scope.posts.filter(function (post) {
        			return $scope.subscribedAuthors.indexOf(post.author) != -1;
        		});

        		console.log($scope.subscribedAuthors);
        	};

        	$scope.unsubscribe = function (author) {
        		$scope.subscribedAuthors = $scope.subscribedAuthors.filter(function (subscribedAuthor) {
        			return subscribedAuthor != author;
        		});

        		$scope.getFeed();
        	};

        	$scope.getFeed();
        }
    ]);