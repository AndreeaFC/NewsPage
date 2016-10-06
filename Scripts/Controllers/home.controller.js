/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";
            $scope.newPost = {};

            console.log($scope.subscribedAuthors);

            $scope.subscribe = function (author) {
                $scope.subscribedAuthors.push(author);
            };

            $scope.addPost = function () {
                postsApi.addPost($scope.newPost)
                .then(function (data) {
                    console.log(data);
                    $scope.posts.push(data);
                });
            };

            $scope.deletePost = function (index) {
                postsApi.deletePost($scope.posts[index].id)
                    .then(function () {
                        $scope.posts.splice(index, 1);
                    });
            };
        }
    ]);