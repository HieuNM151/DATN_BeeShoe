myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    // .when("/dashboard", {
    //   templateUrl: "./pages/thong-ke.html",
    //   controller: "thongKeController",
    // })
    .when("/admin/login", {
      templateUrl: "./pages/authentication-login.html",
      controller: "loginController",
    })
    .when("/order-counter", {
      templateUrl: "./pages/bantaiquay.html",
      controller: "BanTaiQuayController",
    })
    .when("/order-detail/:id", {
      templateUrl: "./pages/chi-tiet-hoa-don.html",
      controller: "hoaDonChiTietController",
    })
    .when("/admin/login", {
      templateUrl: "./pages/login-admin.html",
      controller: "loginController",
    })
    .otherwise({
      redirectTo: "/dashboard",
    });
});
