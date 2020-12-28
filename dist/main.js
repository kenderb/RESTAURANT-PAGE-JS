/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/images/Backgorund4.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "adbc9da2de892928d5ec055524e5901a.jpg");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/Backgorund4.jpg?')},"./src/images/food_01.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d07a28818f8a6360362b3a526fef261d.jpg");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/food_01.jpg?')},"./src/images/food_02.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "aa94c39bbefc09a352b5109bb1bf5633.jpg");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/food_02.jpg?')},"./src/images/food_04.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "75e258864bf07cd53f3e1b62f2233628.jpg");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/food_04.jpg?')},"./src/images/logo.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "db269a7d1522b754cfd5235dd19d69e2.png");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/logo.png?')},"./src/images/pexels-snapwire-245535.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4943c5a2a2a05816fdf595f6178bb864.jpg");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/pexels-snapwire-245535.jpg?')},"./src/images/phone.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "befc94a2a583cd8bbf9ce341187832db.png");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/phone.png?')},"./src/styles/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page-js/./src/styles/style.scss?")},"./src/button-actions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _images_Backgorund4_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Backgorund4.jpg */ \"./src/images/Backgorund4.jpg\");\n\n\n\nconst navButton = () => {\n  const menu = document.querySelectorAll('.menu');\n  function onclickAction(item, position, bg) {\n    item.onclick = () => {\n      const content = document.querySelectorAll('.contentInfo');\n      content[position].style.display = 'grid';\n      const body = document.querySelector('body');\n      body.style.backgroundImage = `url(${bg})`;\n\n      item.style.backgroundColor = '#ff9035';\n      item.style.color = 'rgb(53, 7, 1)';\n      for (let index = 0; index < content.length; index += 1) {\n        if (index !== position) {\n          content[index].style.display = 'none';\n        }\n        if (index !== position - 1) {\n          menu[index].style.color = '#ff9035';\n          menu[index].style.backgroundColor = '';\n        }\n      }\n    };\n  }\n\n  onclickAction(menu[0], 1, _images_Backgorund4_jpg__WEBPACK_IMPORTED_MODULE_0__.default);\n  onclickAction(menu[1], 2, _images_Backgorund4_jpg__WEBPACK_IMPORTED_MODULE_0__.default);\n  onclickAction(menu[2], 3, _images_Backgorund4_jpg__WEBPACK_IMPORTED_MODULE_0__.default);\n  onclickAction(menu[3], 4, _images_Backgorund4_jpg__WEBPACK_IMPORTED_MODULE_0__.default);\n\n  return menu;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navButton);\n\n//# sourceURL=webpack://restaurant-page-js/./src/button-actions.js?")},"./src/history.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _images_pexels_snapwire_245535_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pexels-snapwire-245535.jpg */ \"./src/images/pexels-snapwire-245535.jpg\");\n\n\nconst historyContent = () => {\n  const container = document.getElementById('container');\n  const div = document.createElement('div');\n  const articule = document.createElement('article');\n  div.classList.add('contentInfo');\n  div.id = 'historyFrame';\n  const textArt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n                    quis nostrud exercitation ullamco laboris nisi ut aliquip \n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \n                    cillum dolore eu fugiat nulla pariatur. \n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \n                    mollit anim id est laborum.\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n                    quis nostrud exercitation ullamco laboris nisi ut aliquip \n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \n                    cillum dolore eu fugiat nulla pariatur. \n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \n                    mollit anim id est laborum.\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n                    quis nostrud exercitation ullamco laboris nisi ut aliquip \n                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \n                    cillum dolore eu fugiat nulla pariatur. \n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \n                    mollit anim id est laborum.`;\n\n  const articuleText = document.createTextNode(textArt);\n  const h1Articule = document.createElement('h1');\n  const h1ArticuleText = document.createTextNode('This is our history');\n  const pArticule = document.createElement('p');\n  const historyImage = document.createElement('img');\n  historyImage.src = _images_pexels_snapwire_245535_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n  historyImage.id = 'historyImage';\n\n  h1Articule.appendChild(h1ArticuleText);\n  articule.appendChild(h1Articule);\n  pArticule.appendChild(articuleText);\n  articule.appendChild(pArticule);\n  div.appendChild(articule);\n  div.appendChild(historyImage);\n  container.appendChild(div);\n  const content = document.querySelectorAll('.contentInfo');\n  content[2].style.display = 'none';\n\n  return div;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (historyContent);\n\n//# sourceURL=webpack://restaurant-page-js/./src/history.js?")},"./src/home.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _logo_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-image */ \"./src/logo-image.js\");\n/* harmony import */ var _phone_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-image */ \"./src/phone-image.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\n\n\n\nconst homePage = () => {\n  const container = document.getElementById('container');\n\n  const header = document.createElement('header');\n  header.classList.add('head');\n  header.classList.add('content');\n\n  const logoDiv = document.createElement('div');\n  logoDiv.classList.add('item');\n\n  const navBar = document.createElement('nav');\n  navBar.classList.add('item');\n\n\n  const infoDivPhone = document.createElement('div');\n  infoDivPhone.classList.add('item');\n  infoDivPhone.classList.add('info');\n  infoDivPhone.id = 'phone';\n\n\n  const infoDivPhoneText = document.createTextNode('01800-857865');\n  infoDivPhone.appendChild((0,_phone_image__WEBPACK_IMPORTED_MODULE_1__.default)());\n  infoDivPhone.appendChild(infoDivPhoneText);\n\n\n  const menuSpan = document.createElement('span');\n  menuSpan.classList.add('menu');\n  menuSpan.classList.add('hover');\n  menuSpan.id = 'menu';\n\n  const historySpan = document.createElement('span');\n  historySpan.classList.add('menu');\n  historySpan.id = 'history';\n\n  const galerySpan = document.createElement('span');\n  galerySpan.classList.add('menu');\n  galerySpan.id = 'galery';\n\n  const contactSpan = document.createElement('span');\n  contactSpan.classList.add('menu');\n  contactSpan.id = 'contact';\n\n\n  const menuSpanText = document.createTextNode('Menu');\n  menuSpan.appendChild(menuSpanText);\n\n  const historySpanText = document.createTextNode('Our history');\n  historySpan.appendChild(historySpanText);\n\n  const galerySpanText = document.createTextNode('Galery');\n  galerySpan.appendChild(galerySpanText);\n\n  const contactSpanText = document.createTextNode('Contact');\n  contactSpan.appendChild(contactSpanText);\n\n  const sectionContent = document.createElement('section');\n  sectionContent.classList.add('content');\n  sectionContent.classList.add('contentInfo');\n  sectionContent.id = 'section1';\n\n\n  const h1 = document.createElement('h1');\n  const textH1 = document.createTextNode('You are especial for us.');\n  h1.appendChild(textH1);\n\n\n  const TextPVar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n                  quis nostrud exercitation ullamco laboris nisi ut aliquip \n                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \n                  cillum dolore eu fugiat nulla pariatur. \n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \n                  mollit anim id est laborum.\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n                  quis nostrud exercitation ullamco laboris nisi ut aliquip \n                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \n                  cillum dolore eu fugiat nulla pariatur. \n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \n                  mollit anim id est laborum.`;\n\n  const pSection = document.createElement('p');\n  const pText = document.createTextNode(TextPVar);\n  pSection.appendChild(pText);\n\n\n  const divMore = document.createElement('div');\n  const spanBotton = document.createElement('span');\n  spanBotton.classList.add('info');\n  const textBotton = document.createTextNode('Read more');\n  spanBotton.appendChild(textBotton);\n  divMore.appendChild(spanBotton);\n\n  header.appendChild(logoDiv);\n  header.appendChild(navBar);\n  header.appendChild(infoDivPhone);\n\n\n  logoDiv.appendChild((0,_logo_image__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n  navBar.appendChild(menuSpan);\n  navBar.appendChild(historySpan);\n  navBar.appendChild(galerySpan);\n  navBar.appendChild(contactSpan);\n\n  sectionContent.appendChild(h1);\n  sectionContent.appendChild(pSection);\n  sectionContent.appendChild(divMore);\n\n  container.appendChild(header);\n  container.appendChild(sectionContent);\n\n  return container;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page-js/./src/home.js?")},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");\n/* harmony import */ var _button_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-actions */ "./src/button-actions.js");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");\n/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history */ "./src/history.js");\n\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_button_actions__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_history__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://restaurant-page-js/./src/index.js?')},"./src/logo-image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n\n\nfunction logoImage() {\n  const logoImg = document.createElement('img');\n  logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  logoImg.alt = 'logo';\n  logoImg.id = 'logo';\n  logoImg.onclick = () => {\n    window.location.reload();\n  };\n  return logoImg;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoImage);\n\n//# sourceURL=webpack://restaurant-page-js/./src/logo-image.js?")},"./src/menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _images_food_01_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food_01.jpg */ \"./src/images/food_01.jpg\");\n/* harmony import */ var _images_food_02_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/food_02.jpg */ \"./src/images/food_02.jpg\");\n/* harmony import */ var _images_food_04_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food_04.jpg */ \"./src/images/food_04.jpg\");\n\n\n\n\nconst menuContent = () => {\n  const container = document.getElementById('container');\n  const menuContent = document.createElement('div');\n  menuContent.classList.add('contentInfo');\n  menuContent.classList.add('foodMenu');\n  function createImage(rute) {\n    const image = document.createElement('img');\n    image.src = rute;\n    image.classList.add('menuImage');\n    menuContent.appendChild(image);\n  }\n  createImage(_images_food_01_jpg__WEBPACK_IMPORTED_MODULE_0__.default);\n  createImage(_images_food_02_jpg__WEBPACK_IMPORTED_MODULE_1__.default);\n  createImage(_images_food_04_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n  container.appendChild(menuContent);\n  const content = document.querySelectorAll('.contentInfo');\n  content[1].style.display = 'none';\n  return content[1];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);\n\n//# sourceURL=webpack://restaurant-page-js/./src/menu.js?")},"./src/phone-image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/phone.png */ \"./src/images/phone.png\");\n\n\nfunction phoneImage() {\n  const phoneIcon = document.createElement('img');\n  phoneIcon.id = 'phoneIcon';\n  phoneIcon.alt = 'phoneIcon';\n  phoneIcon.src = _images_phone_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  return phoneIcon;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneImage);\n\n//# sourceURL=webpack://restaurant-page-js/./src/phone-image.js?")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,_)=>{for(var n in _)__webpack_require__.o(_,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:_[n]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="",__webpack_require__("./src/index.js")})();