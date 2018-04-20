webpackJsonp(["website.module"],{

/***/ "../../../../../src/client/app/app-routing/website.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_menu_home_menu_component__ = __webpack_require__("../../../../../src/client/app/home-menu/home-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banner_banner_component__ = __webpack_require__("../../../../../src/client/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bottom_bottom_component__ = __webpack_require__("../../../../../src/client/app/bottom/bottom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/client/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], children: [
            { path: 'home', loadChildren: './welcome.module#WelcomeModule' }
        ] }
];
var WebsiteModule = /** @class */ (function () {
    function WebsiteModule() {
    }
    WebsiteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__home_menu_home_menu_component__["a" /* HomeMenuComponent */], __WEBPACK_IMPORTED_MODULE_5__banner_banner_component__["a" /* BannerComponent */], __WEBPACK_IMPORTED_MODULE_6__bottom_bottom_component__["a" /* BottomComponent */], __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */]]
        })
    ], WebsiteModule);
    return WebsiteModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner is-hidden-mobile\">\n \n  \n</div>\n<div class=\"banner-mobile is-hidden-desktop\">\n        \n    </div>"

/***/ }),

/***/ "../../../../../src/client/app/banner/banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\n  background-image: url(\"/assets/images/elephants.jpeg\");\n  background-size: cover;\n  position: relative;\n  height: 400px; }\n\n.banner-mobile {\n  background-image: url(\"/assets/images/elephants-mobile.jpg\");\n  background-size: cover;\n  position: relative;\n  height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
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

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__("../../../../../src/client/app/banner/banner.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/bottom/bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"light-background-color bottom\">\n<div class=\"container\">\n  <p>Contact us on:</p>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/client/app/bottom/bottom.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottom {\n  height: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/bottom/bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomComponent; });
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

var BottomComponent = /** @class */ (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () {
    };
    BottomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bottom',
            template: __webpack_require__("../../../../../src/client/app/bottom/bottom.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/bottom/bottom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/client/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: black;\n  color: gainsboro; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/client/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/home-menu/home-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top dark-primary-background-color\">\n  <div class=\"contacts container\">\n      <p class=\"is-small\">  <i class=\"fas fa-phone-square\"></i> 0720000000</p>\n    <p class=\"is-small\"> <i class=\"fas fa-envelope-square\"></i>\tinfo@italsafaris.co.ke</p>\n  </div>\n\n</div>\n<div class=\"primary-background-color menu\">\n<div class=\"mymenu is-hidden-mobile\">\n  <a href=\"\"><p>Home</p></a>\n  <p>|</p>\n  <a href=\"\"><p>Packages</p></a>\n  <p>|</p>\n  <a href=\"\"><p>Services</p></a>\n  <p>|</p>\n  <a href=\"\"><p>About us</p></a>\n  <p>|</p>\n  <a href=\"\"><p>Contact us</p></a>\n</div>\n<div class=\"burger is-hidden-desktop\" >\n    <div class=\"navbar-burger\" (click)=\"toggle()\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n</div>\n<div class=\"dropdown is-hidden-desktop\">\n    <div *ngIf=\"shown\" class=\"navbar-dropdown\">\n        <a class=\"navbar-item\">\n        Home\n        </a>\n        <a class=\"navbar-item\">\n            Packages\n        </a>\n        <a class=\"navbar-item\">\n            Services\n        </a>\n        <a class=\"navbar-item\">\n            About us\n        </a>\n        <a class=\"navbar-item\">\n            Contact us\n        </a>\n      </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/home-menu/home-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top {\n  height: 30px; }\n\n.is-small {\n  color: white; }\n\n.contacts p {\n  float: left;\n  margin: 8px; }\n\n.menu {\n  height: auto; }\n\n.menu .mymenu {\n  height: 40px; }\n\n.menu .mymenu a {\n  color: white; }\n\n.menu .mymenu p {\n  float: left;\n  margin: 4px; }\n\n.menu .dropdown a {\n  color: white; }\n\n.menu .mymenu p:hover {\n  color: #ffff00;\n  font-size: 1.1em; }\n\n.navbar-dropdown a:hover {\n  background-color: gray;\n  color: #ffff00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/home-menu/home-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMenuComponent; });
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

var HomeMenuComponent = /** @class */ (function () {
    function HomeMenuComponent() {
        this.shown = false;
    }
    HomeMenuComponent.prototype.ngOnInit = function () {
    };
    HomeMenuComponent.prototype.toggle = function () {
        this.shown = !this.shown;
        console.log(this.shown);
    };
    HomeMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-menu',
            template: __webpack_require__("../../../../../src/client/app/home-menu/home-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/home-menu/home-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeMenuComponent);
    return HomeMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home-menu></app-home-menu>\r\n<app-banner></app-banner>\r\n<app-bottom></app-bottom>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/client/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

});
//# sourceMappingURL=website.module.chunk.js.map