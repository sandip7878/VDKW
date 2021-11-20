(self["webpackChunkVDKW"] = self["webpackChunkVDKW"] || []).push([["src_app_media_media_module_ts"],{

/***/ 6028:
/*!***********************************************!*\
  !*** ./src/app/media/media-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPageRoutingModule": () => (/* binding */ MediaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media.page */ 6960);




const routes = [
    {
        path: '',
        component: _media_page__WEBPACK_IMPORTED_MODULE_0__.MediaPage
    }
];
let MediaPageRoutingModule = class MediaPageRoutingModule {
};
MediaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MediaPageRoutingModule);



/***/ }),

/***/ 1173:
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPageModule": () => (/* binding */ MediaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _media_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-routing.module */ 6028);
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.page */ 6960);







let MediaPageModule = class MediaPageModule {
};
MediaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _media_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaPageRoutingModule
        ],
        declarations: [_media_page__WEBPACK_IMPORTED_MODULE_1__.MediaPage]
    })
], MediaPageModule);



/***/ }),

/***/ 6960:
/*!*************************************!*\
  !*** ./src/app/media/media.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPage": () => (/* binding */ MediaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_media_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./media.page.html */ 3713);
/* harmony import */ var _media_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.page.scss */ 8957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MediaPage = class MediaPage {
    constructor() {
        this.mediaList = [];
        this.mediaList = [
            {
                title: 'title 1',
                audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
            },
            {
                title: 'title 2',
                audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
            },
            {
                title: 'title 3',
                audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
            }
        ];
    }
    ngOnInit() {
    }
};
MediaPage.ctorParameters = () => [];
MediaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-media',
        template: _raw_loader_media_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_media_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MediaPage);



/***/ }),

/***/ 8957:
/*!***************************************!*\
  !*** ./src/app/media/media.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3713:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/media/media.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <img src=\"../../assets/image/title-image.png\" style=\"width: 100%;\">\n</ion-header>\n\n<ion-content>\n\n  <ion-grid style=\"padding: 5px 0px;height: 90%;\">\n    <ion-row *ngFor=\"let media of mediaList; let i=index\" style=\"border-bottom: 1px solid #555;\">\n      <ion-col size=\"12\">\n        <p style=\"text-align: center;\">{{media.title}}</p>\n      </ion-col>\n      <ion-col size=\"12\" style=\"padding: 0px;\" style=\"text-align: center;\">\n        <!-- <audio controls>\n          <source [src]=\"media.audio\" type=\"audio/mp3\">\n        </audio> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div style=\"position: fixed;bottom: -5px;width: 100%;height: 10%;\">\n    <img src=\"../../assets/image/footer.png\" style=\"width: 100%;\">\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_media_media_module_ts.js.map