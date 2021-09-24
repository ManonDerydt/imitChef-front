(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header img {\n  height: 80px;\n  margin-top: 4px;\n}\n\n.title {\n  font-size: 20px;\n  text-align: center;\n}\n\n.text-stories {\n  display: flex;\n  justify-content: space-between;\n  font-size: smaller;\n  font-weight: 700;\n  color: #171717;\n  margin-left: 7px;\n  margin-right: 7px;\n}\n\n.stories {\n  display: flex;\n  overflow: scroll;\n}\n\n.stories .img-box {\n  margin-left: 8px;\n  margin-right: 12px;\n  background-image: url('color-instagram.jpg');\n  background-size: contain;\n  border-radius: 50%;\n  padding: 2px;\n}\n\n.stories img {\n  width: 68px;\n  max-width: none;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid white;\n  margin-bottom: -3px;\n}\n\n.stories p {\n  font-size: 11px;\n  text-align: center;\n  margin: 4px 0px 0px 0px;\n  font-weight: 500;\n  color: #383a3e;\n}\n\n.add_story {\n  position: relative;\n  margin-left: 7px;\n  margin-right: 12px;\n  border-radius: 50%;\n  padding: 2px;\n}\n\n.add_story ion-icon {\n  position: absolute;\n  bottom: 8px;\n  right: 6px;\n  border-radius: 50%;\n  background-color: white;\n}\n\nhr {\n  height: 2px !important;\n  width: 100% !important;\n  background: #d5d5d5 !important;\n}\n\nion-avatar {\n  margin-left: 8px;\n  margin-right: 12px;\n  background-image: url('color-instagram.jpg');\n  background-size: contain;\n  border-radius: 50%;\n  padding: 2px;\n}\n\nion-avatar img {\n  border: 2px solid white;\n}\n\nion-label {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e2023 !important;\n  margin-left: 5px;\n}\n\n.post_img {\n  width: 100%;\n}\n\n.flex-button {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flex-button ion-icon {\n  font-size: 22px;\n  margin: 4px;\n  color: #86888f;\n}\n\n.insta-text {\n  font-size: 15px;\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpbWd7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1zdG9yaWVze1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxNzE3MTc7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4uc3Rvcmllc3tcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnN0b3JpZXMgLmltZy1ib3h7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2NvbG9yLWluc3RhZ3JhbS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5zdG9yaWVzIGltZ3tcbiAgd2lkdGg6IDY4cHg7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cblxuLnN0b3JpZXMgcHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNHB4IDBweCAwcHggMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM4M2EzZTtcbn1cblxuLmFkZF9zdG9yeXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uYWRkX3N0b3J5IGlvbi1pY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICByaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5ocntcbiAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2Q1ZDVkNSAhaW1wb3J0YW50O1xufVxuXG5pb24tYXZhdGFye1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jb2xvci1pbnN0YWdyYW0uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24tYXZhdGFyIGltZ3tcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbmlvbi1sYWJlbHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFlMjAyMyAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucG9zdF9pbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1idXR0b257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZsZXgtYnV0dG9uIGlvbi1pY29ue1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogNHB4O1xuICBjb2xvcjogIzg2ODg4Zjtcbn1cblxuLmluc3RhLXRleHR7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab2Page = class Tab2Page {
    constructor() { }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <h1 class=\"title\">KIFERS</h1>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\">\n        <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"text-stories\">\n    <p>Choisissez votre arrondissement</p>\n    <p>Voir tout</p>\n  </div>\n\n  <div class=\"stories\">\n\n    <div class=\"story\">\n      <div class=\"add_story\">\n        <img src=\"../../assets/profile-img-4.jpg\">\n        <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>\n      </div>\n      <p style=\"color: #86888f\">Manon Derydt</p>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-4.jpg\">\n      </div>\n      <div>\n        <p></p>\n      </div>\n    </div>\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-5.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-4.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-5.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-4.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-5.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-4.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-5.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-4.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-5.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n    <div class=\"story\">\n      <div class=\"img-box\">\n        <img src=\"../../assets/profile-img-4.jpg\">\n      </div>\n      <div>\n        <p>Ivan Boole</p>\n      </div>\n    </div>\n\n  </div>\n  <hr>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/profile-img-5.jpg\">\n    </ion-avatar>\n    <ion-label>Booling</ion-label>\n    <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n  </ion-item>\n\n  <img class=\"post_img\" src=\"../../assets/post-1.jpg\">\n\n  <div class=\"flex-button\">\n    <div>\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n      <ion-icon name=\"send\"></ion-icon>\n    </div>\n    <ion-icon name=\"bookmark\"></ion-icon>\n  </div>\n\n  <p class=\"insta-text\"><b>2.875 Likes</b></p>\n  <p class=\"insta-text\">\n    <b>Le lorem ipsum</b> est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant\n    remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.\n  </p>\n  <br>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/profile-img-4.jpg\">\n    </ion-avatar>\n    <ion-label>Concert</ion-label>\n    <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n  </ion-item>\n\n  <img class=\"post_img\" src=\"../../assets/post-2.jpg\">\n\n  <div class=\"flex-button\">\n    <div>\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n      <ion-icon name=\"send\"></ion-icon>\n    </div>\n    <ion-icon name=\"bookmark\"></ion-icon>\n  </div>\n\n  <p class=\"insta-text\"><b>2.875 Likes</b></p>\n  <p class=\"insta-text\">\n    <b>Le lorem ipsum</b> est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant\n    remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.\n  </p>\n  <br>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/profile-img-5.jpg\">\n    </ion-avatar>\n    <ion-label>Réalité virtuelle</ion-label>\n    <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n  </ion-item>\n\n  <img class=\"post_img\" src=\"../../assets/post-6.jpg\">\n\n  <div class=\"flex-button\">\n    <div>\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n      <ion-icon name=\"send\"></ion-icon>\n    </div>\n    <ion-icon name=\"bookmark\"></ion-icon>\n  </div>\n\n  <p class=\"insta-text\"><b>2.875 Likes</b></p>\n  <p class=\"insta-text\">\n    <b>Le lorem ipsum</b> est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant\n    remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.\n  </p>\n  <br>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/profile-img-4.jpg\">\n    </ion-avatar>\n    <ion-label>Restaurant</ion-label>\n    <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n  </ion-item>\n\n  <img class=\"post_img\" src=\"../../assets/post-4.jpg\">\n\n  <div class=\"flex-button\">\n    <div>\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n      <ion-icon name=\"send\"></ion-icon>\n    </div>\n    <ion-icon name=\"bookmark\"></ion-icon>\n  </div>\n\n  <p class=\"insta-text\"><b>2.875 Likes</b></p>\n  <p class=\"insta-text\">\n    <b>Le lorem ipsum</b> est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant\n    remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.\n  </p>\n  <br>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/profile-img-5.jpg\">\n    </ion-avatar>\n    <ion-label>Cinéma</ion-label>\n    <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n  </ion-item>\n\n  <img class=\"post_img\" src=\"../../assets/post-5.jpg\">\n\n  <div class=\"flex-button\">\n    <div>\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n      <ion-icon name=\"send\"></ion-icon>\n    </div>\n    <ion-icon name=\"bookmark\"></ion-icon>\n  </div>\n\n  <p class=\"insta-text\"><b>2.875 Likes</b></p>\n  <p class=\"insta-text\">\n    <b>Le lorem ipsum</b> est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant\n    remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.\n  </p>\n  <br>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map