(self["webpackChunkVDKW"] = self["webpackChunkVDKW"] || []).push([["src_app_details-news_details-news_module_ts"],{

/***/ 7194:
/*!*************************************************************!*\
  !*** ./src/app/details-news/details-news-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsNewsPageRoutingModule": () => (/* binding */ DetailsNewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _details_news_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-news.page */ 2225);




const routes = [
    {
        path: '',
        component: _details_news_page__WEBPACK_IMPORTED_MODULE_0__.DetailsNewsPage
    }
];
let DetailsNewsPageRoutingModule = class DetailsNewsPageRoutingModule {
};
DetailsNewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsNewsPageRoutingModule);



/***/ }),

/***/ 3819:
/*!*****************************************************!*\
  !*** ./src/app/details-news/details-news.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsNewsPageModule": () => (/* binding */ DetailsNewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _details_news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-news-routing.module */ 7194);
/* harmony import */ var _details_news_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-news.page */ 2225);







let DetailsNewsPageModule = class DetailsNewsPageModule {
};
DetailsNewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_news_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsNewsPageRoutingModule
        ],
        declarations: [_details_news_page__WEBPACK_IMPORTED_MODULE_1__.DetailsNewsPage]
    })
], DetailsNewsPageModule);



/***/ }),

/***/ 2225:
/*!***************************************************!*\
  !*** ./src/app/details-news/details-news.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsNewsPage": () => (/* binding */ DetailsNewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_details_news_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details-news.page.html */ 8768);
/* harmony import */ var _details_news_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-news.page.scss */ 9786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let DetailsNewsPage = class DetailsNewsPage {
    constructor(actRoute) {
        this.actRoute = actRoute;
        this.actRoute.queryParams.subscribe((res) => {
            console.log("dffdff ", res.data);
            this.detailsNews = res.data;
        });
    }
    ngOnInit() {
    }
};
DetailsNewsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
DetailsNewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-details-news',
        template: _raw_loader_details_news_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_details_news_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailsNewsPage);



/***/ }),

/***/ 9786:
/*!*****************************************************!*\
  !*** ./src/app/details-news/details-news.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLW5ld3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8768:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-news/details-news.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <img src=\"../../assets/image/title-image.png\" style=\"width: 100%;\">\n</ion-header>\n\n<ion-content style=\"--background: #E0E0E0;\">\n  <ion-grid style=\"padding: 5px 0px;height: 90%;\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <img [src]=\"detailsNews.img\" style=\"width: 100%;height: 100%;padding-top: 10px;\">\n      </ion-col>\n      <ion-col size=\"12\" style=\"padding: 0px;\">\n        <h4>{{detailsNews.title}}</h4>\n        <p>{{detailsNews.desc}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div style=\"position: fixed;bottom: -5px;width: 100%;height: 10%;\">\n    <img src=\"../../assets/image/footer.png\" style=\"width: 100%;\">\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_details-news_details-news_module_ts.js.map