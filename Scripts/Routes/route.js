/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })

                .when("/Article", {
                    templateUrl: "Views/Article.html",
                    controller: "ArticleController",
                    caseInsensitiveMatch: true,
                    activeTab: "Article"
                })

                .when("/Subscriptions", {
                    templateUrl: "Views/Subscriptions.html",
                    controller: "SubscriptionsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Subscriptions"
                });
        }
    ]);