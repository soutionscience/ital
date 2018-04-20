webpackJsonp(["main"],{

/***/ "../../../../../src/client/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin.module": [
		"../../../../../src/client/app/app-routing/admin.module.ts",
		"admin.module"
	],
	"./website.module": [
		"../../../../../src/client/app/app-routing/website.module.ts",
		"website.module"
	],
	"./welcome.module": [
		"../../../../../src/client/app/app-routing/welcome.module.ts",
		"welcome.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/client/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/client/app/add-image/add-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<input  #fileInput type=\"file\"/>\n<button class=\"button is-primary\"(click)=\"addFile()\">Add</button>\n"

/***/ }),

/***/ "../../../../../src/client/app/add-image/add-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/add-image/add-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_service__ = __webpack_require__("../../../../../src/client/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/client/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddImageComponent = /** @class */ (function () {
    function AddImageComponent(uploadService, apiService, data, matDialogRef) {
        this.uploadService = uploadService;
        this.apiService = apiService;
        this.data = data;
        this.matDialogRef = matDialogRef;
        this.myNotify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddImageComponent.prototype.ngOnInit = function () {
    };
    AddImageComponent.prototype.addFile = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            this.uploadService
                .upload(fileToUpload)
                .subscribe(function (res) {
                // this.myNotify.emit(res)
                console.log('is this the res', res);
                _this.apiService.postTypes('packages', _this.data.myId, res, 'images');
            });
        }
        this.close();
    };
    AddImageComponent.prototype.close = function () {
        this.matDialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddImageComponent.prototype, "myNotify", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AddImageComponent.prototype, "fileInput", void 0);
    AddImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-image',
            template: __webpack_require__("../../../../../src/client/app/add-image/add-image.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/add-image/add-image.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */]])
    ], AddImageComponent);
    return AddImageComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/client/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', loadChildren: './website.module#WebsiteModule' },
    { path: 'admin', loadChildren: './admin.module#AdminModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/client/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/client/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/client/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_restangular_config__ = __webpack_require__("../../../../../src/client/app/shared/restangular.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("../../../../../src/client/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__package_dialog_package_dialog_component__ = __webpack_require__("../../../../../src/client/app/package-dialog/package-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__types_dialog_types_dialog_component__ = __webpack_require__("../../../../../src/client/app/types-dialog/types-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_image_add_image_component__ = __webpack_require__("../../../../../src/client/app/add-image/add-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_upload_service__ = __webpack_require__("../../../../../src/client/app/services/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_9__package_dialog_package_dialog_component__["a" /* PackageDialogComponent */], __WEBPACK_IMPORTED_MODULE_11__types_dialog_types_dialog_component__["a" /* TypesDialogComponent */], __WEBPACK_IMPORTED_MODULE_12__add_image_add_image_component__["a" /* AddImageComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__["RestangularModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__shared_restangular_config__["a" /* restangularConfigFactory */]),
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__package_dialog_package_dialog_component__["a" /* PackageDialogComponent */], __WEBPACK_IMPORTED_MODULE_11__types_dialog_types_dialog_component__["a" /* TypesDialogComponent */], __WEBPACK_IMPORTED_MODULE_12__add_image_add_image_component__["a" /* AddImageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_13__services_upload_service__["a" /* UploadService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/package-dialog/package-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\" [formGroup]=\"myForm\">\n    <div class=\"field\">\n        <label class=\"label\">Title</label>\n        <div class=\"control\">\n          <input class=\"input\" type=\"text\" placeholder=\"Text input\" formControlName= \"title\">\n        </div>\n      </div>\n      \n\n    \n  \n      <div class=\"field\">\n        <label class=\"label\">Description</label>\n        <div class=\"control\">\n          <textarea class=\"textarea\" placeholder=\"Textarea\" formControlName=\"desc\"></textarea>\n        </div>\n      </div>\n      \n\n    \n      \n      <div class=\"field is-grouped\">\n        <div class=\"control\">\n          <button class=\"button is-link\" (click)=\"onSubmit()\">Submit</button>\n        </div>\n        <div class=\"control\">\n          <button class=\"button is-text\"(click)=\"close()\">Cancel</button>\n        </div>\n      </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/client/app/package-dialog/package-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/package-dialog/package-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/client/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackageDialogComponent = /** @class */ (function () {
    function PackageDialogComponent(fb, apiService, dialogRef) {
        this.fb = fb;
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.createForm();
    }
    PackageDialogComponent.prototype.ngOnInit = function () {
    };
    PackageDialogComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            title: '',
            desc: ''
        });
    };
    PackageDialogComponent.prototype.onSubmit = function () {
        console.log('submiting ', this.myForm.value);
        this.apiService.postResource('packages', this.myForm.value);
        this.close();
    };
    PackageDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    PackageDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-package-dialog',
            template: __webpack_require__("../../../../../src/client/app/package-dialog/package-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/package-dialog/package-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */]])
    ], PackageDialogComponent);
    return PackageDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(restangular) {
        this.restangular = restangular;
    }
    ApiService.prototype.getResource = function (apiRoute) {
        return this.restangular.all(apiRoute).getList();
    };
    ApiService.prototype.postResource = function (apiRoute, message) {
        return this.restangular.all(apiRoute).post(message);
    };
    ApiService.prototype.postTypes = function (apiRoute, id, message, item) {
        return this.restangular.one(apiRoute, id).all(item).post(message);
    };
    ApiService.prototype.deleteAll = function (apiRoute) {
        this.restangular.all(apiRoute).delete();
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/client/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (fileToUpload) {
        var input = new FormData();
        input.append('file', fileToUpload);
        return this.http
            .post('/api/uploads', input);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/client/app/shared/baseUrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
var baseUrl = '/api';


/***/ }),

/***/ "../../../../../src/client/app/shared/restangular.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = restangularConfigFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseUrl__ = __webpack_require__("../../../../../src/client/app/shared/baseUrl.ts");

// tslint:disable-next-line:prefer-const
function restangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_0__baseUrl__["a" /* baseUrl */]);
    // RestangularProvider.setDefaultHeaders({Authorization: localStorage.getItem('solution-science-jwt')});
}


/***/ }),

/***/ "../../../../../src/client/app/types-dialog/types-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\" [formGroup]=\"myForm\">\n    <div class=\"field\">\n        <label class=\"label\">Title</label>\n        <div class=\"control\">\n          <input class=\"input\" type=\"text\" placeholder=\"Text input\" formControlName= \"title\">\n        </div>\n      </div>\n      \n\n    \n  \n      <div class=\"field\">\n        <label class=\"label\">Description</label>\n        <div class=\"control\">\n          <textarea class=\"textarea\" placeholder=\"Textarea\" formControlName=\"desc\"></textarea>\n        </div>\n      </div>\n      \n\n    \n      \n      <div class=\"field is-grouped\">\n        <div class=\"control\">\n          <button class=\"button is-link\" (click)=\"onSubmit()\">Submit</button>\n        </div>\n        <div class=\"control\">\n          <button class=\"button is-text\"(click)=\"close()\">Cancel</button>\n        </div>\n      </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/client/app/types-dialog/types-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/types-dialog/types-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypesDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/client/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TypesDialogComponent = /** @class */ (function () {
    function TypesDialogComponent(fb, data, apiService, dialogRef) {
        this.fb = fb;
        this.data = data;
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.createForm();
    }
    TypesDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data.myId);
    };
    TypesDialogComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            title: '',
            desc: ''
        });
    };
    TypesDialogComponent.prototype.onSubmit = function () {
        this.apiService.postTypes(this.data.routes, this.data.myId, this.myForm.value, this.data.item);
        this.close();
    };
    TypesDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    TypesDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-types-dialog',
            template: __webpack_require__("../../../../../src/client/app/types-dialog/types-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/types-dialog/types-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], Object, __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */]])
    ], TypesDialogComponent);
    return TypesDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map