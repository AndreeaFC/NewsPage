/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ArticleController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.newPost = {};

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

            $scope.deletePost = function (index) {      //deletes posts from client
                postsApi.deletePost($scope.posts[index].id)
                    .then(function () {
                        $scope.posts.splice(index, 1);
                    });
            };
        }
    ])