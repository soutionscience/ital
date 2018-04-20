webpackJsonp(["welcome.module"],{

/***/ "../../../../../src/client/app/app-routing/welcome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__("../../../../../src/client/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__packages_packages_component__ = __webpack_require__("../../../../../src/client/app/packages/packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/client/app/side-menu/side-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */], }
];
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */], __WEBPACK_IMPORTED_MODULE_4__packages_packages_component__["a" /* PackagesComponent */], __WEBPACK_IMPORTED_MODULE_5__side_menu_side_menu_component__["a" /* SideMenuComponent */]]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/packages/packages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"packages\">\n<div class=\"container\">\n<div class=\"columns\">\n  <div class=\"column is-one-third\" *ngFor=\"let p of packages\">\n    <div class=\"card\">\n        <div class=\"card-image\">\n            <figure class=\"image is-2by1\">\n                <img [src]=\"'/uploads/' + p.images[0]?.filename\">\n            </figure>\n          </div>\n          <div class=\"\">\n              <p class=\"title is-4\">{{p.title}}</p>\n              <p class=\"subtitle is-6\">@johnsmith</p>\n            </div>\n            <div class=\"content\">\n              <p>{{p.desc}}...</p>\n                <br>\n                \n              </div>\n              <footer class=\"card-footer\">\n                 <div class=\"card-footer-item\">\n                  <img href=\"#\" class=\"\" src=\"assets/images/palm-icon.png\" width=\"auto\"></div>\n                  <a href=\"#\" class=\"card-footer-item\">Read More</a>\n                  <a href=\"#\" class=\"card-footer-item\">Book now</a>\n                </footer>\n\n    </div>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/packages/packages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".packages {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  min-height: 400px;\n  background-image: url(\"/assets/images/mara.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.card {\n  padding: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/packages/packages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/client/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackagesComponent = /** @class */ (function () {
    function PackagesComponent(apiService) {
        this.apiService = apiService;
    }
    PackagesComponent.prototype.ngOnInit = function () {
        this.getPackages();
    };
    PackagesComponent.prototype.getPackages = function () {
        var _this = this;
        this.apiService.getResource('packages').subscribe(function (resp) { return _this.packages = resp; });
    };
    PackagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-packages',
            template: __webpack_require__("../../../../../src/client/app/packages/packages.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/packages/packages.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], PackagesComponent);
    return PackagesComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"circles\">\n  <div class=\"circle\">Services</div>\n  <div class=\"circle2\"></div>\n  <div class=\"circle3\"></div>\n</div> -->\n\n\n<div class=\"icons hidden-small\">\n  <div class=\"icon\"></div>\n  <div class=\"icon2\"></div>\n  <div class=\"icon3\"></div>\n</div>\n<div class=\"foots\">\n  <div><p>Packages</p></div>\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/side-menu/side-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".circles {\n  position: relative;\n  margin: 4px; }\n\n.circle {\n  background-image: url(\"/assets/images/contact.png\");\n  height: 125px;\n  width: 125px;\n  border-radius: 75%;\n  position: absolute;\n  left: 0px; }\n\n.circle2 {\n  background-image: url(\"/assets/images/mboys.jpeg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 125px;\n  width: 125px;\n  border-radius: 75%;\n  position: absolute;\n  left: 195px; }\n\n.circle3 {\n  background-image: url(\"/assets/images/boat.jpeg\");\n  height: 125px;\n  width: 125px;\n  border-radius: 75%;\n  position: absolute;\n  left: 350px; }\n\n.body, .services {\n  height: 400px;\n  padding-top: 8px; }\n\n.box {\n  margin-top: 8px;\n  height: 350px; }\n\n.icons div {\n  float: left; }\n\n.icon {\n  background-image: url(\"/assets/images/palm.png\"); }\n\n.icon2 {\n  background-image: url(\"/assets/images/card.png\"); }\n\n.icon3 {\n  background-image: url(\"/assets/images/contact.png\"); }\n\n.icon, .icon2, .icon3 {\n  margin: 4px;\n  height: 128px;\n  width: 128px;\n  background-repeat: no-repeat; }\n\n@media only screen and (max-width: 800px) {\n  .circle, .circle2, .circle3 {\n    position: static;\n    float: left; }\n  .circle {\n    height: 100px;\n    width: 100px; }\n  .circle2 {\n    height: 75px;\n    width: 75px; }\n  .circle3 {\n    height: 50px;\n    width: 50px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__("../../../../../src/client/app/side-menu/side-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/side-menu/side-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" welcome\">\n<div class=\"container\">\n  <div class=\"main\">\n\n   \n    <div class=\"columns\">\n      <div class=\"column is-three-quaters box\">\n          <p class=\"title\">Welcome</p>\n          <p>Welcome to Ital Safaris Kenya's leading tours and travel company. Offering diversified ways of \n            delivering their services across East Africa. We provide transport services in Kenya & \n            East Africa as well. We also book hotels for our local and foreign visitors, \n            book recreational places for clients and chauffer driven Taxi Cabs</p>\n      \n      </div>\n      <div class=\"column is-hidden-mobile\">\n        <app-side-menu></app-side-menu>\n      </div>\n  \n    </div>\n    \n  </div>\n</div>\n</div>\n<div class=\"body primary-background-color\">\n  <div class=\"\">\n <app-packages></app-packages>\n  </div>\n</div>\n\n<div class=\"services dark-primary-background-color\">\n  <div class=\"container\">\n \n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/client/app/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome {\n  padding: 8px; }\n\n.main {\n  padding: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/client/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ })

});
//# sourceMappingURL=welcome.module.chunk.js.map