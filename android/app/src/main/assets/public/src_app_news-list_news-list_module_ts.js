(self["webpackChunkVDKW"] = self["webpackChunkVDKW"] || []).push([["src_app_news-list_news-list_module_ts"],{

/***/ 8642:
/*!*******************************************************!*\
  !*** ./src/app/news-list/news-list-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListPageRoutingModule": () => (/* binding */ NewsListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-list.page */ 5950);




const routes = [
    {
        path: '',
        component: _news_list_page__WEBPACK_IMPORTED_MODULE_0__.NewsListPage
    }
];
let NewsListPageRoutingModule = class NewsListPageRoutingModule {
};
NewsListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewsListPageRoutingModule);



/***/ }),

/***/ 8204:
/*!***********************************************!*\
  !*** ./src/app/news-list/news-list.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListPageModule": () => (/* binding */ NewsListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _news_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-list-routing.module */ 8642);
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-list.page */ 5950);







let NewsListPageModule = class NewsListPageModule {
};
NewsListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _news_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsListPageRoutingModule
        ],
        declarations: [_news_list_page__WEBPACK_IMPORTED_MODULE_1__.NewsListPage]
    })
], NewsListPageModule);



/***/ }),

/***/ 5950:
/*!*********************************************!*\
  !*** ./src/app/news-list/news-list.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListPage": () => (/* binding */ NewsListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_news_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./news-list.page.html */ 586);
/* harmony import */ var _news_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-list.page.scss */ 1264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let NewsListPage = class NewsListPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.newsList = [];
    }
    ngOnInit() {
        this.newsList = [
            {
                img: '../../assets/image/li-1.png',
                title: 'Title 1',
                desc: "item 1 description"
            },
            {
                img: '../../assets/image/li-2.png',
                title: 'Title 2',
                desc: "item 2 description"
            },
            {
                img: '../../assets/image/li-3.png',
                title: 'Title 3',
                desc: "item 3 description"
            },
            {
                img: '../../assets/image/li-4.png',
                title: 'Title 4',
                desc: "item 4 description"
            },
            {
                img: '../../assets/image/li-1.png',
                title: 'Title 1',
                desc: "item 1 description"
            },
            {
                img: '../../assets/image/li-2.png',
                title: 'Title 2',
                desc: "item 2 description"
            }
        ];
    }
    openDetailsNews(news) {
        console.log("news", news);
        this.detailsNews = news;
    }
    goBack() {
        this.detailsNews = '';
    }
};
NewsListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
NewsListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-news-list',
        template: _raw_loader_news_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_news_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewsListPage);



/***/ }),

/***/ 1264:
/*!***********************************************!*\
  !*** ./src/app/news-list/news-list.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 586:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <img src=\"../../assets/image/title-image.png\" style=\"width: 100%;\">\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"--background: #E0E0E0;\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">News</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- News List -->\n  <ion-grid style=\"padding: 5px 0px;height: 90%;\" *ngIf=\"!detailsNews\">\n    <ion-row *ngFor=\"let news of newsList; let i=index\" style=\"border-bottom: 1px solid #555;\" \n    (click)=\"openDetailsNews(news)\">\n      <ion-col size=\"8\">\n        <h4>{{news.title}}</h4>\n        <p>{{news.desc}}</p>\n      </ion-col>\n      <ion-col size=\"4\" style=\"padding: 0px;\">\n        <img [src]=\"news.img\" style=\"width: 100%;height: 100%;padding-top: 10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Detail News -->\n  <ion-grid style=\"padding: 5px 0px;height: 90%;\" *ngIf=\"detailsNews\">\n    <ion-row>\n      <ion-col size=\"12\" style=\"padding: 5px 0px 0px;\">\n        <ion-icon style=\"font-size: 25px;\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\">\n        <img [src]=\"detailsNews.img\" style=\"width: 100%;height: 100%;padding-top: 10px;\">\n      </ion-col>\n      <ion-col size=\"12\" style=\"padding: 0px;\">\n        <h4>{{detailsNews.title}}</h4>\n        <p>{{detailsNews.desc}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div style=\"position: fixed;bottom: -5px;width: 100%;height: 10%;\">\n    <img src=\"../../assets/image/footer.png\" style=\"width: 100%;\">\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_news-list_news-list_module_ts.js.map