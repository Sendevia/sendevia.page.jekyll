/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./webpack/_components/modal.js":
/*!**************************************!*\
  !*** ./webpack/_components/modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./webpack/app.js");


const openModal = () => {
  (0,_app__WEBPACK_IMPORTED_MODULE_0__.toggleDim)(true);
  _app__WEBPACK_IMPORTED_MODULE_0__.modalTips.style.animation = `JTM-C-Dialog-Show var(--md-sys-motion-duration-long1) var(--md-sys-motion-easing-emphasized) 1 normal both`;
  _app__WEBPACK_IMPORTED_MODULE_0__.modalTips.showModal();
};

const closeModal = () => {
  (0,_app__WEBPACK_IMPORTED_MODULE_0__.toggleDim)(false);
  _app__WEBPACK_IMPORTED_MODULE_0__.modalTips.style.animation = `JTM-C-Dialog-Close var(--md-sys-motion-duration-medium1) var(--md-sys-motion-easing-emphasized) 1 normal both`;
  setTimeout(() => {
    _app__WEBPACK_IMPORTED_MODULE_0__.modalTips.close();
    _app__WEBPACK_IMPORTED_MODULE_0__.modalTips.style.animation = "";
  }, 400);
};


/***/ }),

/***/ "./webpack/_components/monet.js":
/*!**************************************!*\
  !*** ./webpack/_components/monet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateColorPalette: () => (/* binding */ generateColorPalette),
/* harmony export */   paletteProperty: () => (/* binding */ paletteProperty),
/* harmony export */   setPaletteProperty: () => (/* binding */ setPaletteProperty)
/* harmony export */ });
/* harmony import */ var _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/material-color-utilities */ "./node_modules/@material/material-color-utilities/index.js");


/**
 * 调色板提供器
 * @param {*} 生成调色板
 * @returns
 */
function paletteProperty(source, key, append, tones) {
  const palette = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(source);
  return {
    rawPalette: {
      [key]: palette[append],
    },
    tones: tones,
  };
}

/**
 * 在DOM中设置调色板
 * @param {*} paletteProvider 调色板提供器
 */
function setPaletteProperty(paletteProvider) {
  function updateVariables(variables) {
    var style = document.createElement("style");
    var cssVarsString = ":root {";
    for (var key in variables) {
      cssVarsString += `${key}: ${variables[key]};`;
    }
    cssVarsString += "}";
    style.innerHTML = cssVarsString;
    document.head.appendChild(style);
  }

  for (const [key, palette] of Object.entries(paletteProvider.rawPalette)) {
    var cssTokens = {};
    const paletteKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    for (const tone of paletteProvider.tones) {
      const token = `--md-ref-palette-${paletteKey}${tone}`;
      const color = (0,_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.hexFromArgb)(palette.tone(tone));
      cssTokens[token] = color;
    }
    updateVariables(cssTokens);
  }
}

/**
 * 根据颜色生成调色板
 * @param argbColor 输入一个 argb 颜色
 */
async function generateColorPalette(argbColor) {
  const errorTones = [10, 20, 30, 40, 80, 90, 100];
  setPaletteProperty(paletteProperty(argbColor, "error", "error", errorTones));

  const neutralVariantTones = [30, 50, 60, 80, 90];
  setPaletteProperty(paletteProperty(argbColor, "neutralVariant", "n2", neutralVariantTones));

  const neutralTones = [0, 4, 6, 10, 12, 17, 20, 22, 24, 87, 90, 92, 94, 95, 96, 98, 100];
  setPaletteProperty(paletteProperty(argbColor, "neutral", "n1", neutralTones));

  const tertiaryTones = [10, 20, 30, 40, 80, 90, 100];
  setPaletteProperty(paletteProperty(argbColor, "tertiary", "a3", tertiaryTones));

  const secondaryTones = [10, 20, 30, 40, 80, 90, 100];
  setPaletteProperty(paletteProperty(argbColor, "secondary", "a2", secondaryTones));

  const primaryTones = [10, 20, 30, 40, 80, 90, 100];
  setPaletteProperty(paletteProperty(argbColor, "primary", "a1", primaryTones));
}


/***/ }),

/***/ "./webpack/_components/ripple.js":
/*!***************************************!*\
  !*** ./webpack/_components/ripple.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ripple: () => (/* binding */ ripple)
/* harmony export */ });
/**
 * 添加涟漪效果
 * @param {selector} element
 */
const ripple = (element) => {
  element.addEventListener("mousedown", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const d = Math.max(element.clientWidth, element.clientHeight);

    const rippleC = document.createElement("JTM-E-Ripple");
    element.appendChild(rippleC);

    rippleC.style.setProperty("--JTM-E-Ripple-PosX", x);
    rippleC.style.setProperty("--JTM-E-Ripple-PosY", y);
    rippleC.style.setProperty("--JTM-E-Ripple-Diameter", d);
  });
  element.addEventListener("animationend", () => {
    const rippleR = element.querySelector("JTM-E-Ripple");
    element.removeChild(rippleR);
  });
};


/***/ }),

/***/ "./webpack/app.js":
/*!************************!*\
  !*** ./webpack/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoadScreen: () => (/* binding */ addLoadScreen),
/* harmony export */   carouselControl: () => (/* binding */ carouselControl),
/* harmony export */   carouselElement: () => (/* binding */ carouselElement),
/* harmony export */   carouselPostList: () => (/* binding */ carouselPostList),
/* harmony export */   contentContainer: () => (/* binding */ contentContainer),
/* harmony export */   contentDrawerH1Entries: () => (/* binding */ contentDrawerH1Entries),
/* harmony export */   contentDrawerH2Entries: () => (/* binding */ contentDrawerH2Entries),
/* harmony export */   contentDrawerMenuBtn: () => (/* binding */ contentDrawerMenuBtn),
/* harmony export */   contentNavigation: () => (/* binding */ contentNavigation),
/* harmony export */   contentNavigationDrawer: () => (/* binding */ contentNavigationDrawer),
/* harmony export */   contentPhotograph: () => (/* binding */ contentPhotograph),
/* harmony export */   createSnackbar: () => (/* binding */ createSnackbar),
/* harmony export */   currentPage: () => (/* binding */ currentPage),
/* harmony export */   customThemeColor: () => (/* binding */ customThemeColor),
/* harmony export */   handleLinkDelayRedirection: () => (/* binding */ handleLinkDelayRedirection),
/* harmony export */   handleResize: () => (/* binding */ handleResize),
/* harmony export */   handleScroll: () => (/* binding */ handleScroll),
/* harmony export */   initModal: () => (/* binding */ initModal),
/* harmony export */   linkElements: () => (/* binding */ linkElements),
/* harmony export */   modalTips: () => (/* binding */ modalTips),
/* harmony export */   randomRotationBullet: () => (/* binding */ randomRotationBullet),
/* harmony export */   removeLoadScreen: () => (/* binding */ removeLoadScreen),
/* harmony export */   rippleElements: () => (/* binding */ rippleElements),
/* harmony export */   rotationListItemsBullet: () => (/* binding */ rotationListItemsBullet),
/* harmony export */   scrollTopElements: () => (/* binding */ scrollTopElements),
/* harmony export */   themeRoot: () => (/* binding */ themeRoot),
/* harmony export */   toggleDim: () => (/* binding */ toggleDim),
/* harmony export */   toggleNavigationDrawer: () => (/* binding */ toggleNavigationDrawer),
/* harmony export */   updateSnackbarPositions: () => (/* binding */ updateSnackbarPositions)
/* harmony export */ });
/* harmony import */ var _shown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shown */ "./webpack/shown.js");
/* harmony import */ var _loaded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaded */ "./webpack/loaded.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/modal */ "./webpack/_components/modal.js");




////////////////////
//常用常量配置
///////////////////
/**
 * 需要以此生成调色盘的hex颜色
 */
const customThemeColor = document.body.getAttribute("color");
/**
 * 主题根节点
 */
const themeRoot = document.querySelector(".JTM-Root");
/**
 * 文章内容流
 */
const contentContainer = document.querySelector("#JTM-S-UniversalLayout-ContentFlow");
/**
 * 文章头部印象图
 */
const contentPhotograph = document.querySelector("#JTM-S-Header-Impression img");
/**
 * 页面导航
 */
const contentNavigation = document.querySelector(".JTM-C-Navigation");
/**
 * 展开的页面导航
 */
const contentNavigationDrawer = document.querySelector(".JTM-C-NavigationDrawer");
/**
 * 页面导航的一级目录元素
 */
const contentDrawerH1Entries = contentNavigationDrawer ? contentNavigationDrawer.querySelectorAll("details summary > a") : [];
/**
 * 页面导航的二级目录元素
 */
const contentDrawerH2Entries = contentNavigationDrawer ? contentNavigationDrawer.querySelectorAll("details > a") : [];
/**
 * 选择控制页面导航开关的元素
 */
const contentDrawerMenuBtn = contentNavigationDrawer
  ? document.querySelectorAll("#JTM-C-Navigation-FAB > button, #JTM-C-AppBar-MenuIcon, #JTM-C-NavigationDrawer-MenuCloseIcon")
  : [];
/**
 * 页面加载中的闪屏
 */
const contentSplashScreen = document.querySelector(".JTM-S-LoadingSplash");
/**
 * 定位当前所在的页面
 */
const currentPage = window.location.pathname;
/**
 * 选择移动端的标题栏
 */
const topAppBar = document.querySelector(".JTM-C-AppBar");
/**
 * 选择模态提示框
 */
const modalTips = document.querySelector("#JTM-C-Dialog-ModalTips");
/**
 * 选择可以开启模态提示框的元素
 */
const modalTipsIcon = document.querySelectorAll("#JTM-S-WebsiteInformation, #JTM-C-AppBar-InfoIcon");
/**
 * 选择可以关闭模态提示框的元素
 */
const dialogBtnClose = document.querySelector("#dialog-close");
/**
 * 选择点击后跳转到页面顶端的元素
 */
const scrollTopElements = document.querySelectorAll(".JTM-S-ScrollToTop");
/**
 * 选择需要涟漪效果的元素
 */
const rippleElements = document.querySelectorAll(
  `#JTM-S-UniversalLayout-ContentFiller[spec='article'] li a, #JTM-S-UniversalLayout-ContentFiller[spec='article'] p a, button, .JTM-C-Card[spec='clear'], .JTM-C-Card[spec='focus'], .JTM-C-NavigationDrawer a, #JTM-C-Navigation-DestinationAccent, .JTM-S-WebsiteInformation, .JTM-S-Carousel-PostItem`
);
/**
 * 选择需要延迟跳转的a元素
 */
const linkElements = document.querySelectorAll(
  ".JTM-P-Index-Card, .JTM-S-Carousel-PostItem, #JTM-C-Navigation-Destinations a, #JTM-P-Posts-Timeline-PostCard a, .JTM-S-QuickJump a"
);
/**
 * Carousel元素
 */
const carouselElement = document.querySelector(".JTM-S-Carousel");
/**
 * Carousel的控制按钮
 */
const carouselControl = carouselElement ? carouselElement.querySelectorAll(".JTM-S-Carousel-Control") : [];
/**
 * Carousel的文章列表
 */
const carouselPostList = carouselElement ? carouselElement.querySelector("#JTM-S-Carousel-PostsList") : [];
/**
 * 需要随机旋转的列表Bullet
 */
const rotationListItemsBullet = document.querySelectorAll("ul li");
////////////////////
//常用常量配置结束
///////////////////

/**
 * 控制元素的状态
 * @contentNavigationDrawer show
 * @themeRoot JTM-O-ContentBlur
 * @param {boolean} state
 */
const toggleNavigationDrawer = (state) => {
  contentNavigationDrawer.toggleAttribute("show", state);
  themeRoot.toggleAttribute("JTM-O-ContentBlur", state);
};
/**
 * 控制根元素的状态
 * @param {boolean} state
 */
const toggleDim = (state) => themeRoot.toggleAttribute("JTM-O-BodyBlur", state);

let lastScrollY = 0;
/**
 * 滚动事件
 */
const handleScroll = () => {
  const scrollY = contentContainer.scrollTop;
  const scrollThreshold = 64;
  const scrollDirection = scrollY > lastScrollY ? "down" : "up";
  topAppBar.setAttribute("scroll", scrollY >= scrollThreshold ? "true" : "false");
  if (scrollDirection === "up") {
    themeRoot.setAttribute("JTM-O-OnScrollEvent", "false");
  } else if (scrollDirection === "down" && scrollY >= 500) {
    themeRoot.setAttribute("JTM-O-OnScrollEvent", "true");
  }
  scrollTopElements.forEach((element) => {
    element.style.cssText = `
      opacity: ${scrollY >= 400 ? "1" : "0"};
      visibility: ${scrollY >= 400 ? "visible" : "hidden"};
    `;
  });
  lastScrollY = scrollY;
};

/**
 * 缩放事件
 */
const handleResize = () => {
  contentNavigation.setAttribute("spec", window.innerWidth <= 768 ? "bar" : "rail");
};

/**
 * 链接跳转事件
 * @param {selector} link
 */
const handleLinkDelayRedirection = (link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const delay = 240;
    const target = link.getAttribute("target");

    if (target === "_blank") {
      window.open(link.getAttribute("href"));
    } else {
      addLoadScreen();
      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, delay);
    }
  });
};

/**
 * 初始化模态提示框
 */
const initModal = () => {
  const handleKeyboardEvent = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === modalTips) {
      (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    }
  };

  modalTipsIcon.forEach((element) => element.addEventListener("click", _components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal));
  dialogBtnClose.addEventListener("click", _components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal);
  modalTips.addEventListener("keydown", handleKeyboardEvent);
  modalTips.addEventListener("click", handleClickOutside);
};

/**
 * 移除加载屏幕
 */
const removeLoadScreen = () => {
  const delay = 450;
  themeRoot.setAttribute("JTM-O-OnSiteLoaded", true);
  setTimeout(() => {
    contentSplashScreen.style.display = "none";
  }, delay);
};

/**
 * 增加加载屏幕
 */
const addLoadScreen = () => {
  themeRoot.removeAttribute("JTM-O-OnSiteLoaded");
};

/**
 * 随机旋转列表的Bullet
 */
const randomRotationBullet = () => {
  const style = document.createElement("style");
  document.head.appendChild(style);

  rotationListItemsBullet.forEach((li, index) => {
    const randomRotation = Math.floor(Math.random() * 360);
    style.sheet.insertRule(`ul li:nth-child(${index + 1})::before { transform: rotate(${randomRotation}deg); }`, style.sheet.cssRules.length);
  });
};

var snackbars = [];
/**
 * 创建一个底部提示条
 * @param {*} content
 */
function createSnackbar(content) {
  var snackbar = document.createElement("div");
  snackbar.className = "JTM-C-Snackbar";
  snackbar.setAttribute("visible", "false");

  var p = document.createElement("p");
  p.id = "JTM-C-Snackbar-Supporting";
  p.textContent = content;

  var closeButton = document.createElement("button");
  closeButton.textContent = "close";
  closeButton.id = "JTM-C-Snackbar-Icon";
  closeButton.className = "JTM-C-IconButton";
  closeButton.onclick = function () {
    snackbar.setAttribute("visible", "false");
    setTimeout(function () {
      snackbar.remove();
      var index = snackbars.indexOf(snackbar);
      if (index !== -1) {
        snackbars.splice(index, 1);
        updateSnackbarPositions();
      }
    }, 600);
  };

  snackbar.appendChild(p);
  snackbar.appendChild(closeButton);
  document.body.appendChild(snackbar);

  setTimeout(() => {
    snackbar.setAttribute("visible", "true");
  }, 0);

  snackbars.push(snackbar);
  updateSnackbarPositions();

  setTimeout(() => {
    snackbar.setAttribute("visible", "false");
    snackbar.addEventListener("transitionend", () => {
      if (snackbar.getAttribute("visible") === "false") {
        snackbar.remove();
        var index = snackbars.indexOf(snackbar);
        if (index !== -1) {
          snackbars.splice(index, 1);
          updateSnackbarPositions();
        }
      }
    });
  }, 5000);
}

/**
 * 更新提示条位置
 */
function updateSnackbarPositions() {
  var bottomValue = window.innerWidth >= 768 ? 10 : 90;

  for (var i = snackbars.length - 1; i >= 0; i--) {
    var snackbar = snackbars[i];
    snackbar.style.bottom = bottomValue + "px";

    bottomValue += snackbar.offsetHeight + 10;
  }
}


/***/ }),

/***/ "./webpack/loaded.js":
/*!***************************!*\
  !*** ./webpack/loaded.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/material-color-utilities */ "./node_modules/@material/material-color-utilities/index.js");
/* harmony import */ var _components_monet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/monet */ "./webpack/_components/monet.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./webpack/app.js");




window.onload = () => {
  (0,_app__WEBPACK_IMPORTED_MODULE_2__.randomRotationBullet)();

  document.querySelectorAll("#JTM-S-UniversalLayout-ContentFiller > h1").forEach((h1) => {
    h1.addEventListener("click", function () {
      const anchorLink = this.id ? `#${this.id}` : "";

      if (anchorLink) {
        navigator.clipboard.writeText(window.location.href.split("#")[0] + anchorLink).then(() => (0,_app__WEBPACK_IMPORTED_MODULE_2__.createSnackbar)(`已将内容复制到剪贴板：${anchorLink}`));
      }
    });
  });

  var testButton = document.getElementById("JTM-P-Components-Snackbar-Test");
  if (testButton) {
    testButton.addEventListener("click", function () {
      (0,_app__WEBPACK_IMPORTED_MODULE_2__.createSnackbar)(testButton.innerText);
    });
  }

  setTimeout(() => {
    (0,_app__WEBPACK_IMPORTED_MODULE_2__.removeLoadScreen)();

    if (_app__WEBPACK_IMPORTED_MODULE_2__.customThemeColor) {
      (0,_components_monet__WEBPACK_IMPORTED_MODULE_1__.generateColorPalette)((0,_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.argbFromHex)(_app__WEBPACK_IMPORTED_MODULE_2__.customThemeColor));
    }
  }, 500);
};


/***/ }),

/***/ "./webpack/shown.js":
/*!**************************!*\
  !*** ./webpack/shown.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/ripple */ "./webpack/_components/ripple.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./webpack/app.js");



window.onpageshow = () => {
  _app__WEBPACK_IMPORTED_MODULE_1__.contentNavigation.setAttribute("spec", window.innerWidth <= 768 ? "bar" : "rail");

  try {
    const activatedSegment = document.querySelector(`a[href="${_app__WEBPACK_IMPORTED_MODULE_1__.currentPage}"]`);
    const inactiveSegment = activatedSegment.querySelector("#JTM-C-Navigation-SegmentInactive");
    inactiveSegment.id = "JTM-C-Navigation-SegmentActive";
  } catch (err) {
    document.querySelector(`a[href="/posts/"] #JTM-C-Navigation-SegmentInactive`).id = "JTM-C-Navigation-SegmentActive";
  }

  _app__WEBPACK_IMPORTED_MODULE_1__.scrollTopElements.forEach((element) => element.addEventListener("click", () => _app__WEBPACK_IMPORTED_MODULE_1__.contentContainer.scrollTo({ top: 0 })));
  _app__WEBPACK_IMPORTED_MODULE_1__.rippleElements.forEach(_components_ripple__WEBPACK_IMPORTED_MODULE_0__.ripple);
  _app__WEBPACK_IMPORTED_MODULE_1__.contentContainer.onscroll = _app__WEBPACK_IMPORTED_MODULE_1__.handleScroll;
  window.onresize = _app__WEBPACK_IMPORTED_MODULE_1__.handleResize;

  if (_app__WEBPACK_IMPORTED_MODULE_1__.contentNavigationDrawer) {
    _app__WEBPACK_IMPORTED_MODULE_1__.contentDrawerMenuBtn.forEach((element) => element.addEventListener("click", () => (0,_app__WEBPACK_IMPORTED_MODULE_1__.toggleNavigationDrawer)()));
    _app__WEBPACK_IMPORTED_MODULE_1__.contentDrawerH1Entries.forEach((element) => {
      element.addEventListener("click", () => {
        const parentDetails = element.closest("details");
        if (parentDetails) {
          parentDetails.open = !parentDetails.open;
        }
      });
    });
    _app__WEBPACK_IMPORTED_MODULE_1__.contentDrawerH2Entries.forEach((element) => element.addEventListener("click", () => (0,_app__WEBPACK_IMPORTED_MODULE_1__.toggleNavigationDrawer)(false)));
    document.addEventListener("click", (event) => {
      const isJTM_C_NavigationDrawer = event.target.closest(".JTM-C-NavigationDrawer");
      const isJTM_C_AppBar = event.target.closest(".JTM-C-AppBar");
      const isMAB = event.target.closest("#JTM-C-Navigation-FAB");
      if (!isJTM_C_NavigationDrawer && (window.matchMedia("(max-width: 768px)").matches ? !isJTM_C_AppBar : !isMAB)) {
        (0,_app__WEBPACK_IMPORTED_MODULE_1__.toggleNavigationDrawer)(false);
      }
    });
  }

  (0,_app__WEBPACK_IMPORTED_MODULE_1__.initModal)();

  _app__WEBPACK_IMPORTED_MODULE_1__.linkElements.forEach(_app__WEBPACK_IMPORTED_MODULE_1__.handleLinkDelayRedirection);

  if (_app__WEBPACK_IMPORTED_MODULE_1__.carouselElement && _app__WEBPACK_IMPORTED_MODULE_1__.carouselPostList && _app__WEBPACK_IMPORTED_MODULE_1__.carouselControl.length === 2) {
    var currentValue = 1;
    _app__WEBPACK_IMPORTED_MODULE_1__.carouselPostList.setAttribute("data-scroll", currentValue);

    function updateValue(direction) {
      currentValue += direction;
      if (currentValue > 3) {
        currentValue = 1;
      } else if (currentValue < 1) {
        currentValue = 3;
      }
      _app__WEBPACK_IMPORTED_MODULE_1__.carouselPostList.setAttribute("data-scroll", currentValue);
    }

    _app__WEBPACK_IMPORTED_MODULE_1__.carouselControl[0].addEventListener("click", function () {
      updateValue(-1);
    });

    _app__WEBPACK_IMPORTED_MODULE_1__.carouselControl[1].addEventListener("click", function () {
      updateValue(1);
    });

    _app__WEBPACK_IMPORTED_MODULE_1__.carouselPostList.addEventListener("wheel", function (event) {
      event.preventDefault();
      updateValue(event.deltaY > 0 ? 1 : -1);
    });

    window.addEventListener(
      "wheel",
      function (event) {
        if (event.target === _app__WEBPACK_IMPORTED_MODULE_1__.carouselPostList) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
  }
};


/***/ }),

/***/ "./node_modules/@material/material-color-utilities/blend/blend.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/blend/blend.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blend: () => (/* binding */ Blend)
/* harmony export */ });
/* harmony import */ var _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.




// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Functions for blending in HCT and CAM16.
 */
class Blend {
    /**
     * Blend the design color's HCT hue towards the key color's HCT
     * hue, in a way that leaves the original color recognizable and
     * recognizably shifted towards the key color.
     *
     * @param designColor ARGB representation of an arbitrary color.
     * @param sourceColor ARGB representation of the main theme color.
     * @return The design color with a hue shifted towards the
     * system's color, a slightly warmer/cooler variant of the design
     * color's hue.
     */
    static harmonize(designColor, sourceColor) {
        const fromHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.fromInt(designColor);
        const toHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.fromInt(sourceColor);
        const differenceDegrees = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__.differenceDegrees(fromHct.hue, toHct.hue);
        const rotationDegrees = Math.min(differenceDegrees * 0.5, 15.0);
        const outputHue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__.sanitizeDegreesDouble(fromHct.hue +
            rotationDegrees * _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__.rotationDirection(fromHct.hue, toHct.hue));
        return _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(outputHue, fromHct.chroma, fromHct.tone).toInt();
    }
    /**
     * Blends hue from one color into another. The chroma and tone of
     * the original color are maintained.
     *
     * @param from ARGB representation of color
     * @param to ARGB representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, with a hue blended towards to. Chroma and tone
     * are constant.
     */
    static hctHue(from, to, amount) {
        const ucs = Blend.cam16Ucs(from, to, amount);
        const ucsCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(ucs);
        const fromCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(from);
        const blended = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(ucsCam.hue, fromCam.chroma, _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_2__.lstarFromArgb(from));
        return blended.toInt();
    }
    /**
     * Blend in CAM16-UCS space.
     *
     * @param from ARGB representation of color
     * @param to ARGB representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, blended towards to. Hue, chroma, and tone will
     * change.
     */
    static cam16Ucs(from, to, amount) {
        const fromCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(from);
        const toCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(to);
        const fromJ = fromCam.jstar;
        const fromA = fromCam.astar;
        const fromB = fromCam.bstar;
        const toJ = toCam.jstar;
        const toA = toCam.astar;
        const toB = toCam.bstar;
        const jstar = fromJ + (toJ - fromJ) * amount;
        const astar = fromA + (toA - fromA) * amount;
        const bstar = fromB + (toB - fromB) * amount;
        return _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromUcs(jstar, astar, bstar).toInt();
    }
}
//# sourceMappingURL=blend.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/contrast/contrast.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/contrast/contrast.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contrast: () => (/* binding */ Contrast)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace


/**
 * Utility methods for calculating contrast given two colors, or calculating a
 * color given one color and a contrast ratio.
 *
 * Contrast ratio is calculated using XYZ's Y. When linearized to match human
 * perception, Y becomes HCT's tone and L*a*b*'s' L*. Informally, this is the
 * lightness of a color.
 *
 * Methods refer to tone, T in the the HCT color space.
 * Tone is equivalent to L* in the L*a*b* color space, or L in the LCH color
 * space.
 */
class Contrast {
    /**
     * Returns a contrast ratio, which ranges from 1 to 21.
     *
     * @param toneA Tone between 0 and 100. Values outside will be clamped.
     * @param toneB Tone between 0 and 100. Values outside will be clamped.
     */
    static ratioOfTones(toneA, toneB) {
        toneA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0.0, 100.0, toneA);
        toneB = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0.0, 100.0, toneB);
        return Contrast.ratioOfYs(_utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(toneA), _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(toneB));
    }
    static ratioOfYs(y1, y2) {
        const lighter = y1 > y2 ? y1 : y2;
        const darker = (lighter === y2) ? y1 : y2;
        return (lighter + 5.0) / (darker + 5.0);
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static lighter(tone, ratio) {
        if (tone < 0.0 || tone > 100.0) {
            return -1.0;
        }
        const darkY = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(tone);
        const lightY = ratio * (darkY + 5.0) - 5.0;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
            return -1;
        }
        // Ensure gamut mapping, which requires a 'range' on tone, will still result
        // the correct ratio by darkening slightly.
        const returnValue = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromY(lightY) + 0.4;
        if (returnValue < 0 || returnValue > 100) {
            return -1;
        }
        return returnValue;
    }
    /**
     * Returns a tone <= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static darker(tone, ratio) {
        if (tone < 0.0 || tone > 100.0) {
            return -1.0;
        }
        const lightY = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(tone);
        const darkY = ((lightY + 5.0) / ratio) - 5.0;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
            return -1;
        }
        // Ensure gamut mapping, which requires a 'range' on tone, will still result
        // the correct ratio by darkening slightly.
        const returnValue = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromY(darkY) - 0.4;
        if (returnValue < 0 || returnValue > 100) {
            return -1;
        }
        return returnValue;
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the ratio with tone. For example, there is no color lighter than T100.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 100 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static lighterUnsafe(tone, ratio) {
        const lighterSafe = Contrast.lighter(tone, ratio);
        return (lighterSafe < 0.0) ? 100.0 : lighterSafe;
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the [ratio with [tone]. For example, there is no color darker than T0.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 0 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static darkerUnsafe(tone, ratio) {
        const darkerSafe = Contrast.darker(tone, ratio);
        return (darkerSafe < 0.0) ? 0.0 : darkerSafe;
    }
}
//# sourceMappingURL=contrast.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DislikeAnalyzer: () => (/* binding */ DislikeAnalyzer)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Check and/or fix universally disliked colors.
 * Color science studies of color preference indicate universal distaste for
 * dark yellow-greens, and also show this is correlated to distate for
 * biological waste and rotting food.
 *
 * See Palmer and Schloss, 2010 or Schloss and Palmer's Chapter 21 in Handbook
 * of Color Psychology (2015).
 */
class DislikeAnalyzer {
    /**
     * Returns true if a color is disliked.
     *
     * @param hct A color to be judged.
     * @return Whether the color is disliked.
     *
     * Disliked is defined as a dark yellow-green that is not neutral.
     */
    static isDisliked(hct) {
        const huePasses = Math.round(hct.hue) >= 90.0 && Math.round(hct.hue) <= 111.0;
        const chromaPasses = Math.round(hct.chroma) > 16.0;
        const tonePasses = Math.round(hct.tone) < 65.0;
        return huePasses && chromaPasses && tonePasses;
    }
    /**
     * If a color is disliked, lighten it to make it likable.
     *
     * @param hct A color to be judged.
     * @return A new color if the original color is disliked, or the original
     *   color if it is acceptable.
     */
    static fixIfDisliked(hct) {
        if (DislikeAnalyzer.isDisliked(hct)) {
            return _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hct.hue, hct.chroma, 70.0);
        }
        return hct;
    }
}
//# sourceMappingURL=dislike_analyzer.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContrastCurve: () => (/* binding */ ContrastCurve)
/* harmony export */ });
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A class containing the contrast curve for a dynamic color on its background.
 *
 * The four values correspond to contrast requirements for contrast levels
 * -1.0, 0.0, 0.5, and 1.0, respectively.
 */
class ContrastCurve {
    /**
     * Creates a `ContrastCurve` object.
     *
     * @param low Contrast requirement for contrast level -1.0
     * @param normal Contrast requirement for contrast level 0.0
     * @param medium Contrast requirement for contrast level 0.5
     * @param high Contrast requirement for contrast level 1.0
     */
    constructor(low, normal, medium, high) {
        this.low = low;
        this.normal = normal;
        this.medium = medium;
        this.high = high;
    }
    /**
     * Returns the contrast ratio at a given contrast level.
     *
     * @param contrastLevel The contrast level. 0.0 is the default (normal);
     * -1.0 is the lowest; 1.0 is the highest.
     * @return The contrast ratio, a number between 1.0 and 21.0.
     */
    getContrast(contrastLevel) {
        if (contrastLevel <= -1.0) {
            return this.low;
        }
        else if (contrastLevel < 0.0) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this.low, this.normal, (contrastLevel - (-1)) / 1);
        }
        else if (contrastLevel < 0.5) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
        }
        else if (contrastLevel < 1.0) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
        }
        else {
            return this.high;
        }
    }
}
//# sourceMappingURL=contrast_curve.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicColor: () => (/* binding */ DynamicColor)
/* harmony export */ });
/* harmony import */ var _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contrast/contrast.js */ "./node_modules/@material/material-color-utilities/contrast/contrast.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A color that adjusts itself based on UI state provided by DynamicScheme.
 *
 * Colors without backgrounds do not change tone when contrast changes. Colors
 * with backgrounds become closer to their background as contrast lowers, and
 * further when contrast increases.
 *
 * Prefer static constructors. They require either a hexcode, a palette and
 * tone, or a hue and chroma. Optionally, they can provide a background
 * DynamicColor.
 */
class DynamicColor {
    /**
     * Create a DynamicColor defined by a TonalPalette and HCT tone.
     *
     * @param args Functions with DynamicScheme as input. Must provide a palette
     * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
     */
    static fromPalette(args) {
        return new DynamicColor(args.name ?? '', args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
    }
    /**
     * The base constructor for DynamicColor.
     *
     * _Strongly_ prefer using one of the convenience constructors. This class is
     * arguably too flexible to ensure it can support any scenario. Functional
     * arguments allow  overriding without risks that come with subclasses.
     *
     * For example, the default behavior of adjust tone at max contrast
     * to be at a 7.0 ratio with its background is principled and
     * matches accessibility guidance. That does not mean it's the desired
     * approach for _every_ design system, and every color pairing,
     * always, in every case.
     *
     * @param name The name of the dynamic color. Defaults to empty.
     * @param palette Function that provides a TonalPalette given
     * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
     * replaces the need to specify hue/chroma. By providing a tonal palette, when
     * contrast adjustments are made, intended chroma can be preserved.
     * @param tone Function that provides a tone, given a DynamicScheme.
     * @param isBackground Whether this dynamic color is a background, with
     * some other color as the foreground. Defaults to false.
     * @param background The background of the dynamic color (as a function of a
     *     `DynamicScheme`), if it exists.
     * @param secondBackground A second background of the dynamic color (as a
     *     function of a `DynamicScheme`), if it
     * exists.
     * @param contrastCurve A `ContrastCurve` object specifying how its contrast
     * against its background should behave in various contrast levels options.
     * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
     * constraint between two colors. One of them must be the color being
     * constructed.
     */
    constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
        this.name = name;
        this.palette = palette;
        this.tone = tone;
        this.isBackground = isBackground;
        this.background = background;
        this.secondBackground = secondBackground;
        this.contrastCurve = contrastCurve;
        this.toneDeltaPair = toneDeltaPair;
        this.hctCache = new Map();
        if ((!background) && secondBackground) {
            throw new Error(`Color ${name} has secondBackground` +
                `defined, but background is not defined.`);
        }
        if ((!background) && contrastCurve) {
            throw new Error(`Color ${name} has contrastCurve` +
                `defined, but background is not defined.`);
        }
        if (background && !contrastCurve) {
            throw new Error(`Color ${name} has background` +
                `defined, but contrastCurve is not defined.`);
        }
    }
    /**
     * Return a ARGB integer (i.e. a hex code).
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getArgb(scheme) {
        return this.getHct(scheme).toInt();
    }
    /**
     * Return a color, expressed in the HCT color space, that this
     * DynamicColor is under the conditions in scheme.
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getHct(scheme) {
        const cachedAnswer = this.hctCache.get(scheme);
        if (cachedAnswer != null) {
            return cachedAnswer;
        }
        const tone = this.getTone(scheme);
        const answer = this.palette(scheme).getHct(tone);
        if (this.hctCache.size > 4) {
            this.hctCache.clear();
        }
        this.hctCache.set(scheme, answer);
        return answer;
    }
    /**
     * Return a tone, T in the HCT color space, that this DynamicColor is under
     * the conditions in scheme.
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getTone(scheme) {
        const decreasingContrast = scheme.contrastLevel < 0;
        // Case 1: dual foreground, pair of colors with delta constraint.
        if (this.toneDeltaPair) {
            const toneDeltaPair = this.toneDeltaPair(scheme);
            const roleA = toneDeltaPair.roleA;
            const roleB = toneDeltaPair.roleB;
            const delta = toneDeltaPair.delta;
            const polarity = toneDeltaPair.polarity;
            const stayTogether = toneDeltaPair.stayTogether;
            const bg = this.background(scheme);
            const bgTone = bg.getTone(scheme);
            const aIsNearer = (polarity === 'nearer' ||
                (polarity === 'lighter' && !scheme.isDark) ||
                (polarity === 'darker' && scheme.isDark));
            const nearer = aIsNearer ? roleA : roleB;
            const farther = aIsNearer ? roleB : roleA;
            const amNearer = this.name === nearer.name;
            const expansionDir = scheme.isDark ? 1 : -1;
            // 1st round: solve to min, each
            const nContrast = nearer.contrastCurve.getContrast(scheme.contrastLevel);
            const fContrast = farther.contrastCurve.getContrast(scheme.contrastLevel);
            // If a color is good enough, it is not adjusted.
            // Initial and adjusted tones for `nearer`
            const nInitialTone = nearer.tone(scheme);
            let nTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ?
                nInitialTone :
                DynamicColor.foregroundTone(bgTone, nContrast);
            // Initial and adjusted tones for `farther`
            const fInitialTone = farther.tone(scheme);
            let fTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ?
                fInitialTone :
                DynamicColor.foregroundTone(bgTone, fContrast);
            if (decreasingContrast) {
                // If decreasing contrast, adjust color to the "bare minimum"
                // that satisfies contrast.
                nTone = DynamicColor.foregroundTone(bgTone, nContrast);
                fTone = DynamicColor.foregroundTone(bgTone, fContrast);
            }
            if ((fTone - nTone) * expansionDir >= delta) {
                // Good! Tones satisfy the constraint; no change needed.
            }
            else {
                // 2nd round: expand farther to match delta.
                fTone = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0, 100, nTone + delta * expansionDir);
                if ((fTone - nTone) * expansionDir >= delta) {
                    // Good! Tones now satisfy the constraint; no change needed.
                }
                else {
                    // 3rd round: contract nearer to match delta.
                    nTone = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0, 100, fTone - delta * expansionDir);
                }
            }
            // Avoids the 50-59 awkward zone.
            if (50 <= nTone && nTone < 60) {
                // If `nearer` is in the awkward zone, move it away, together with
                // `farther`.
                if (expansionDir > 0) {
                    nTone = 60;
                    fTone = Math.max(fTone, nTone + delta * expansionDir);
                }
                else {
                    nTone = 49;
                    fTone = Math.min(fTone, nTone + delta * expansionDir);
                }
            }
            else if (50 <= fTone && fTone < 60) {
                if (stayTogether) {
                    // Fixes both, to avoid two colors on opposite sides of the "awkward
                    // zone".
                    if (expansionDir > 0) {
                        nTone = 60;
                        fTone = Math.max(fTone, nTone + delta * expansionDir);
                    }
                    else {
                        nTone = 49;
                        fTone = Math.min(fTone, nTone + delta * expansionDir);
                    }
                }
                else {
                    // Not required to stay together; fixes just one.
                    if (expansionDir > 0) {
                        fTone = 60;
                    }
                    else {
                        fTone = 49;
                    }
                }
            }
            // Returns `nTone` if this color is `nearer`, otherwise `fTone`.
            return amNearer ? nTone : fTone;
        }
        else {
            // Case 2: No contrast pair; just solve for itself.
            let answer = this.tone(scheme);
            if (this.background == null) {
                return answer; // No adjustment for colors with no background.
            }
            const bgTone = this.background(scheme).getTone(scheme);
            const desiredRatio = this.contrastCurve.getContrast(scheme.contrastLevel);
            if (_contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {
                // Don't "improve" what's good enough.
            }
            else {
                // Rough improvement.
                answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
            }
            if (decreasingContrast) {
                answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
            }
            if (this.isBackground && 50 <= answer && answer < 60) {
                // Must adjust
                if (_contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
                    answer = 49;
                }
                else {
                    answer = 60;
                }
            }
            if (this.secondBackground) {
                // Case 3: Adjust for dual backgrounds.
                const [bg1, bg2] = [this.background, this.secondBackground];
                const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
                const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
                if (_contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(upper, answer) >= desiredRatio &&
                    _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
                    return answer;
                }
                // The darkest light tone that satisfies the desired ratio,
                // or -1 if such ratio cannot be reached.
                const lightOption = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.lighter(upper, desiredRatio);
                // The lightest dark tone that satisfies the desired ratio,
                // or -1 if such ratio cannot be reached.
                const darkOption = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.darker(lower, desiredRatio);
                // Tones suitable for the foreground.
                const availables = [];
                if (lightOption !== -1)
                    availables.push(lightOption);
                if (darkOption !== -1)
                    availables.push(darkOption);
                const prefersLight = DynamicColor.tonePrefersLightForeground(bgTone1) ||
                    DynamicColor.tonePrefersLightForeground(bgTone2);
                if (prefersLight) {
                    return (lightOption < 0) ? 100 : lightOption;
                }
                if (availables.length === 1) {
                    return availables[0];
                }
                return (darkOption < 0) ? 0 : darkOption;
            }
            return answer;
        }
    }
    /**
     * Given a background tone, find a foreground tone, while ensuring they reach
     * a contrast ratio that is as close to [ratio] as possible.
     *
     * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
     *     falls outside that range.
     * @param ratio The contrast ratio desired between bgTone and the return
     *     value.
     */
    static foregroundTone(bgTone, ratio) {
        const lighterTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.lighterUnsafe(bgTone, ratio);
        const darkerTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.darkerUnsafe(bgTone, ratio);
        const lighterRatio = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(lighterTone, bgTone);
        const darkerRatio = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(darkerTone, bgTone);
        const preferLighter = DynamicColor.tonePrefersLightForeground(bgTone);
        if (preferLighter) {
            // This handles an edge case where the initial contrast ratio is high
            // (ex. 13.0), and the ratio passed to the function is that high
            // ratio, and both the lighter and darker ratio fails to pass that
            // ratio.
            //
            // This was observed with Tonal Spot's On Primary Container turning
            // black momentarily between high and max contrast in light mode. PC's
            // standard tone was T90, OPC's was T10, it was light mode, and the
            // contrast value was 0.6568521221032331.
            const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 &&
                lighterRatio < ratio && darkerRatio < ratio;
            return lighterRatio >= ratio || lighterRatio >= darkerRatio ||
                negligibleDifference ?
                lighterTone :
                darkerTone;
        }
        else {
            return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone :
                lighterTone;
        }
    }
    /**
     * Returns whether [tone] prefers a light foreground.
     *
     * People prefer white foregrounds on ~T60-70. Observed over time, and also
     * by Andrew Somers during research for APCA.
     *
     * T60 used as to create the smallest discontinuity possible when skipping
     * down to T49 in order to ensure light foregrounds.
     * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
     * 60, it should not be adjusted. Therefore, 60 is excluded here.
     */
    static tonePrefersLightForeground(tone) {
        return Math.round(tone) < 60.0;
    }
    /**
     * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
     * color.
     */
    static toneAllowsLightForeground(tone) {
        return Math.round(tone) <= 49.0;
    }
    /**
     * Adjust a tone such that white has 4.5 contrast, if the tone is
     * reasonably close to supporting it.
     */
    static enableLightForeground(tone) {
        if (DynamicColor.tonePrefersLightForeground(tone) &&
            !DynamicColor.toneAllowsLightForeground(tone)) {
            return 49.0;
        }
        return tone;
    }
}
//# sourceMappingURL=dynamic_color.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialDynamicColors: () => (/* binding */ MaterialDynamicColors)
/* harmony export */ });
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hct/viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/* harmony import */ var _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scheme/variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/* harmony import */ var _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrast_curve.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js");
/* harmony import */ var _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic_color.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js");
/* harmony import */ var _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tone_delta_pair.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







function isFidelity(scheme) {
    return scheme.variant === _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.FIDELITY ||
        scheme.variant === _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.CONTENT;
}
function isMonochrome(scheme) {
    return scheme.variant === _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
    let answer = tone;
    let closestToChroma = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(hue, chroma, tone);
    if (closestToChroma.chroma < chroma) {
        let chromaPeak = closestToChroma.chroma;
        while (closestToChroma.chroma < chroma) {
            answer += byDecreasingTone ? -1.0 : 1.0;
            const potentialSolution = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(hue, chroma, answer);
            if (chromaPeak > potentialSolution.chroma) {
                break;
            }
            if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
                break;
            }
            const potentialDelta = Math.abs(potentialSolution.chroma - chroma);
            const currentDelta = Math.abs(closestToChroma.chroma - chroma);
            if (potentialDelta < currentDelta) {
                closestToChroma = potentialSolution;
            }
            chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
        }
    }
    return answer;
}
function viewingConditionsForAlbers(scheme) {
    return _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.make(
    /*whitePoint=*/ undefined, 
    /*adaptingLuminance=*/ undefined, 
    /*backgroundLstar=*/ scheme.isDark ? 30 : 80, 
    /*surround=*/ undefined, 
    /*discountingIlluminant=*/ undefined);
}
function performAlbers(prealbers, scheme) {
    const albersd = prealbers.inViewingConditions(viewingConditionsForAlbers(scheme));
    if (_dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.tonePrefersLightForeground(prealbers.tone) &&
        !_dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.toneAllowsLightForeground(albersd.tone)) {
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.enableLightForeground(prealbers.tone);
    }
    else {
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.enableLightForeground(albersd.tone);
    }
}
/**
 * DynamicColors for the colors in the Material Design system.
 */
// Material Color Utilities namespaces the various utilities it provides.
// tslint:disable-next-line:class-as-namespace
class MaterialDynamicColors {
    static highestSurface(s) {
        return s.isDark ? MaterialDynamicColors.surfaceBright :
            MaterialDynamicColors.surfaceDim;
    }
}
MaterialDynamicColors.contentAccentToneDelta = 15.0;
MaterialDynamicColors.primaryPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_palette_key_color',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.primaryPalette.keyColor.tone,
});
MaterialDynamicColors.secondaryPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_palette_key_color',
    palette: (s) => s.secondaryPalette,
    tone: (s) => s.secondaryPalette.keyColor.tone,
});
MaterialDynamicColors.tertiaryPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_palette_key_color',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => s.tertiaryPalette.keyColor.tone,
});
MaterialDynamicColors.neutralPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'neutral_palette_key_color',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.neutralPalette.keyColor.tone,
});
MaterialDynamicColors.neutralVariantPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'neutral_variant_palette_key_color',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.neutralVariantPalette.keyColor.tone,
});
MaterialDynamicColors.background = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'background',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 98,
    isBackground: true,
});
MaterialDynamicColors.onBackground = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_background',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.background,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 3, 4.5, 7),
});
MaterialDynamicColors.surface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 98,
    isBackground: true,
});
MaterialDynamicColors.surfaceDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_dim',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 87,
    isBackground: true,
});
MaterialDynamicColors.surfaceBright = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_bright',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 24 : 98,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerLowest = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_lowest',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 4 : 100,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerLow = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_low',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 10 : 96,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 12 : 94,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerHigh = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_high',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 17 : 92,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerHighest = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_highest',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 22 : 90,
    isBackground: true,
});
MaterialDynamicColors.onSurface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.surfaceVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 30 : 90,
    isBackground: true,
});
MaterialDynamicColors.onSurfaceVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_surface_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 80 : 30,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.inverseSurface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'inverse_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 20,
});
MaterialDynamicColors.inverseOnSurface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'inverse_on_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 20 : 95,
    background: (s) => MaterialDynamicColors.inverseSurface,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.outline = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'outline',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 60 : 50,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1.5, 3, 4.5, 7),
});
MaterialDynamicColors.outlineVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'outline_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 30 : 80,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
});
MaterialDynamicColors.shadow = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'shadow',
    palette: (s) => s.neutralPalette,
    tone: (s) => 0,
});
MaterialDynamicColors.scrim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'scrim',
    palette: (s) => s.neutralPalette,
    tone: (s) => 0,
});
MaterialDynamicColors.surfaceTint = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_tint',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
});
MaterialDynamicColors.primary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 100 : 0;
        }
        return s.isDark ? 80 : 40;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, 'nearer', false),
});
MaterialDynamicColors.onPrimary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
    },
    background: (s) => MaterialDynamicColors.primary,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.primaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_container',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isFidelity(s)) {
            return performAlbers(s.sourceColorHct, s);
        }
        if (isMonochrome(s)) {
            return s.isDark ? 85 : 25;
        }
        return s.isDark ? 30 : 90;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, 'nearer', false),
});
MaterialDynamicColors.onPrimaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary_container',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isFidelity(s)) {
            return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s), 4.5);
        }
        if (isMonochrome(s)) {
            return s.isDark ? 0 : 100;
        }
        return s.isDark ? 90 : 10;
    },
    background: (s) => MaterialDynamicColors.primaryContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.inversePrimary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'inverse_primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.isDark ? 40 : 80,
    background: (s) => MaterialDynamicColors.inverseSurface,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.secondary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary',
    palette: (s) => s.secondaryPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, 'nearer', false),
});
MaterialDynamicColors.onSecondary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 100;
        }
        else {
            return s.isDark ? 20 : 100;
        }
    },
    background: (s) => MaterialDynamicColors.secondary,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.secondaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_container',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        const initialTone = s.isDark ? 30 : 90;
        if (isMonochrome(s)) {
            return s.isDark ? 30 : 85;
        }
        if (!isFidelity(s)) {
            return initialTone;
        }
        let answer = findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
        answer = performAlbers(s.secondaryPalette.getHct(answer), s);
        return answer;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, 'nearer', false),
});
MaterialDynamicColors.onSecondaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary_container',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        if (!isFidelity(s)) {
            return s.isDark ? 90 : 10;
        }
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
    },
    background: (s) => MaterialDynamicColors.secondaryContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.tertiary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 90 : 25;
        }
        return s.isDark ? 80 : 40;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, 'nearer', false),
});
MaterialDynamicColors.onTertiary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
    },
    background: (s) => MaterialDynamicColors.tertiary,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.tertiaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_container',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 60 : 49;
        }
        if (!isFidelity(s)) {
            return s.isDark ? 30 : 90;
        }
        const albersTone = performAlbers(s.tertiaryPalette.getHct(s.sourceColorHct.tone), s);
        const proposedHct = s.tertiaryPalette.getHct(albersTone);
        return _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__.DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, 'nearer', false),
});
MaterialDynamicColors.onTertiaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary_container',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 0 : 100;
        }
        if (!isFidelity(s)) {
            return s.isDark ? 90 : 10;
        }
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
    },
    background: (s) => MaterialDynamicColors.tertiaryContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.error = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'error',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, 'nearer', false),
});
MaterialDynamicColors.onError = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_error',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 20 : 100,
    background: (s) => MaterialDynamicColors.error,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.errorContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'error_container',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 30 : 90,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, 'nearer', false),
});
MaterialDynamicColors.onErrorContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_error_container',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.errorContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.primaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_fixed',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 40.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.primaryFixedDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_fixed_dim',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 30.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onPrimaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary_fixed',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 100.0 : 10.0,
    background: (s) => MaterialDynamicColors.primaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.primaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onPrimaryFixedVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary_fixed_variant',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 90.0 : 30.0,
    background: (s) => MaterialDynamicColors.primaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.primaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.secondaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_fixed',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 80.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.secondaryFixedDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_fixed_dim',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 70.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onSecondaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary_fixed',
    palette: (s) => s.secondaryPalette,
    tone: (s) => 10.0,
    background: (s) => MaterialDynamicColors.secondaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onSecondaryFixedVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary_fixed_variant',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 25.0 : 30.0,
    background: (s) => MaterialDynamicColors.secondaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.tertiaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_fixed',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 40.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.tertiaryFixedDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_fixed_dim',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 30.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onTertiaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary_fixed',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 100.0 : 10.0,
    background: (s) => MaterialDynamicColors.tertiaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onTertiaryFixedVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary_fixed_variant',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 90.0 : 30.0,
    background: (s) => MaterialDynamicColors.tertiaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
//# sourceMappingURL=material_dynamic_colors.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToneDeltaPair: () => (/* binding */ ToneDeltaPair)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Documents a constraint between two DynamicColors, in which their tones must
 * have a certain distance from each other.
 *
 * Prefer a DynamicColor with a background, this is for special cases when
 * designers want tonal distance, literally contrast, between two colors that
 * don't have a background / foreground relationship or a contrast guarantee.
 */
class ToneDeltaPair {
    /**
     * Documents a constraint in tone distance between two DynamicColors.
     *
     * The polarity is an adjective that describes "A", compared to "B".
     *
     * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
     * A's tone should be at least 15 darker than B's.
     *
     * 'nearer' and 'farther' describes closeness to the surface roles. For
     * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
     * should be 10 lighter than B in light mode, and 10 darker than B in dark
     * mode.
     *
     * @param roleA The first role in a pair.
     * @param roleB The second role in a pair.
     * @param delta Required difference between tones. Absolute value, negative
     * values have undefined behavior.
     * @param polarity The relative relation between tones of roleA and roleB,
     * as described above.
     * @param stayTogether Whether these two roles should stay on the same side of
     * the "awkward zone" (T50-59). This is necessary for certain cases where
     * one role has two backgrounds.
     */
    constructor(roleA, roleB, delta, polarity, stayTogether) {
        this.roleA = roleA;
        this.roleB = roleB;
        this.delta = delta;
        this.polarity = polarity;
        this.stayTogether = stayTogether;
    }
}
//# sourceMappingURL=tone_delta_pair.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/cam16.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/cam16.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cam16: () => (/* binding */ Cam16)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * CAM16, a color appearance model. Colors are not just defined by their hex
 * code, but rather, a hex code and viewing conditions.
 *
 * CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
 * b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
 * specification, and should be used when measuring distances between colors.
 *
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 */
class Cam16 {
    /**
     * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
     * the following combinations:
     *      -  {j or q} and {c, m, or s} and hue
     *      - jstar, astar, bstar
     * Prefer using a static method that constructs from 3 of those dimensions.
     * This constructor is intended for those methods to use to return all
     * possible dimensions.
     *
     * @param hue
     * @param chroma informally, colorfulness / color intensity. like saturation
     *     in HSL, except perceptually accurate.
     * @param j lightness
     * @param q brightness; ratio of lightness to white point's lightness
     * @param m colorfulness
     * @param s saturation; ratio of chroma to white point's chroma
     * @param jstar CAM16-UCS J coordinate
     * @param astar CAM16-UCS a coordinate
     * @param bstar CAM16-UCS b coordinate
     */
    constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
        this.hue = hue;
        this.chroma = chroma;
        this.j = j;
        this.q = q;
        this.m = m;
        this.s = s;
        this.jstar = jstar;
        this.astar = astar;
        this.bstar = bstar;
    }
    /**
     * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
     * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
     * specification, and is used to measure distances between colors.
     */
    distance(other) {
        const dJ = this.jstar - other.jstar;
        const dA = this.astar - other.astar;
        const dB = this.bstar - other.bstar;
        const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
        const dE = 1.41 * Math.pow(dEPrime, 0.63);
        return dE;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return CAM16 color, assuming the color was viewed in default viewing
     *     conditions.
     */
    static fromInt(argb) {
        return Cam16.fromIntInViewingConditions(argb, _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param argb ARGB representation of a color.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     * @return CAM16 color.
     */
    static fromIntInViewingConditions(argb, viewingConditions) {
        const red = (argb & 0x00ff0000) >> 16;
        const green = (argb & 0x0000ff00) >> 8;
        const blue = (argb & 0x000000ff);
        const redL = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.linearized(red);
        const greenL = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.linearized(green);
        const blueL = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.linearized(blue);
        const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
        const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
        const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        const rAF = Math.pow((viewingConditions.fl * Math.abs(rD)) / 100.0, 0.42);
        const gAF = Math.pow((viewingConditions.fl * Math.abs(gD)) / 100.0, 0.42);
        const bAF = Math.pow((viewingConditions.fl * Math.abs(bD)) / 100.0, 0.42);
        const rA = (_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rD) * 400.0 * rAF) / (rAF + 27.13);
        const gA = (_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gD) * 400.0 * gAF) / (gAF + 27.13);
        const bA = (_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bD) * 400.0 * bAF) / (bAF + 27.13);
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        const b = (rA + gA - 2.0 * bA) / 9.0;
        const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
        const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
        const atan2 = Math.atan2(b, a);
        const atanDegrees = (atan2 * 180.0) / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360.0 :
            atanDegrees >= 360 ? atanDegrees - 360.0 :
                atanDegrees;
        const hueRadians = (hue * Math.PI) / 180.0;
        const ac = p2 * viewingConditions.nbb;
        const j = 100.0 *
            Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const huePrime = hue < 20.14 ? hue + 360 : hue;
        const eHue = 0.25 * (Math.cos((huePrime * Math.PI) / 180.0 + 2.0) + 3.8);
        const p1 = (50000.0 / 13.0) * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) *
            Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const c = alpha * Math.sqrt(j / 100.0);
        const m = c * viewingConditions.fLRoot;
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     */
    static fromJch(j, c, h) {
        return Cam16.fromJchInViewingConditions(j, c, h, _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromJchInViewingConditions(j, c, h, viewingConditions) {
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const m = c * viewingConditions.fLRoot;
        const alpha = c / Math.sqrt(j / 100.0);
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const hueRadians = (h * Math.PI) / 180.0;
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     */
    static fromUcs(jstar, astar, bstar) {
        return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
        const a = astar;
        const b = bstar;
        const m = Math.sqrt(a * a + b * b);
        const M = (Math.exp(m * 0.0228) - 1.0) / 0.0228;
        const c = M / viewingConditions.fLRoot;
        let h = Math.atan2(b, a) * (180.0 / Math.PI);
        if (h < 0.0) {
            h += 360.0;
        }
        const j = jstar / (1 - (jstar - 100) * 0.007);
        return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
    }
    /**
     *  @return ARGB representation of color, assuming the color was viewed in
     *     default viewing conditions, which are near-identical to the default
     *     viewing conditions for sRGB.
     */
    toInt() {
        return this.viewed(_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param viewingConditions Information about the environment where the color
     *     will be viewed.
     * @return ARGB representation of color
     */
    viewed(viewingConditions) {
        const alpha = this.chroma === 0.0 || this.j === 0.0 ?
            0.0 :
            this.chroma / Math.sqrt(this.j / 100.0);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
        const hRad = (this.hue * Math.PI) / 180.0;
        const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
        const ac = viewingConditions.aw *
            Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = ac / viewingConditions.nbb;
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = (23.0 * (p2 + 0.305) * t) /
            (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
        const rC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rA) * (100.0 / viewingConditions.fl) *
            Math.pow(rCBase, 1.0 / 0.42);
        const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
        const gC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gA) * (100.0 / viewingConditions.fl) *
            Math.pow(gCBase, 1.0 / 0.42);
        const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
        const bC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bA) * (100.0 / viewingConditions.fl) *
            Math.pow(bCBase, 1.0 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
        const z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
        const argb = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromXyz(x, y, z);
        return argb;
    }
    /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
    /// CAM16.
    static fromXyzInViewingConditions(x, y, z, viewingConditions) {
        // Transform XYZ to 'cone'/'rgb' responses
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
        // Discount illuminant
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        // chromatic adaptation
        const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100.0, 0.42);
        const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100.0, 0.42);
        const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100.0, 0.42);
        const rA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rD) * 400.0 * rAF / (rAF + 27.13);
        const gA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gD) * 400.0 * gAF / (gAF + 27.13);
        const bA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bD) * 400.0 * bAF / (bAF + 27.13);
        // redness-greenness
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        // yellowness-blueness
        const b = (rA + gA - 2.0 * bA) / 9.0;
        // auxiliary components
        const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
        const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
        // hue
        const atan2 = Math.atan2(b, a);
        const atanDegrees = atan2 * 180.0 / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360.0 :
            atanDegrees >= 360 ? atanDegrees - 360 :
                atanDegrees;
        const hueRadians = hue * Math.PI / 180.0;
        // achromatic response to color
        const ac = p2 * viewingConditions.nbb;
        // CAM16 lightness and brightness
        const J = 100.0 *
            Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const Q = (4.0 / viewingConditions.c) * Math.sqrt(J / 100.0) *
            (viewingConditions.aw + 4.0) * (viewingConditions.fLRoot);
        const huePrime = (hue < 20.14) ? hue + 360 : hue;
        const eHue = (1.0 / 4.0) * (Math.cos(huePrime * Math.PI / 180.0 + 2.0) + 3.8);
        const p1 = 50000.0 / 13.0 * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) *
            Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        // CAM16 chroma, colorfulness, chroma
        const C = alpha * Math.sqrt(J / 100.0);
        const M = C * viewingConditions.fLRoot;
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        // CAM16-UCS components
        const jstar = (1.0 + 100.0 * 0.007) * J / (1.0 + 0.007 * J);
        const mstar = Math.log(1.0 + 0.0228 * M) / 0.0228;
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
    }
    /// XYZ representation of CAM16 seen in [viewingConditions].
    xyzInViewingConditions(viewingConditions) {
        const alpha = (this.chroma === 0.0 || this.j === 0.0) ?
            0.0 :
            this.chroma / Math.sqrt(this.j / 100.0);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
        const hRad = this.hue * Math.PI / 180.0;
        const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
        const ac = viewingConditions.aw *
            Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = (ac / viewingConditions.nbb);
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = 23.0 * (p2 + 0.305) * t /
            (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
        const rC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rA) * (100.0 / viewingConditions.fl) *
            Math.pow(rCBase, 1.0 / 0.42);
        const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
        const gC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gA) * (100.0 / viewingConditions.fl) *
            Math.pow(gCBase, 1.0 / 0.42);
        const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
        const bC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bA) * (100.0 / viewingConditions.fl) *
            Math.pow(bCBase, 1.0 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
        const z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
        return [x, y, z];
    }
}
//# sourceMappingURL=cam16.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/hct.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/hct.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hct: () => (/* binding */ Hct)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _cam16_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _hct_solver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hct_solver.js */ "./node_modules/@material/material-color-utilities/hct/hct_solver.js");
/* harmony import */ var _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */




/**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */
class Hct {
    static from(hue, chroma, tone) {
        return new Hct(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(hue, chroma, tone));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return HCT representation of a color in default viewing conditions
     */
    static fromInt(argb) {
        return new Hct(argb);
    }
    toInt() {
        return this.argb;
    }
    /**
     * A number, in degrees, representing ex. red, orange, yellow, etc.
     * Ranges from 0 <= hue < 360.
     */
    get hue() {
        return this.internalHue;
    }
    /**
     * @param newHue 0 <= newHue < 360; invalid values are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set hue(newHue) {
        this.setInternalState(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
    }
    get chroma() {
        return this.internalChroma;
    }
    /**
     * @param newChroma 0 <= newChroma < ?
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set chroma(newChroma) {
        this.setInternalState(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
    }
    /** Lightness. Ranges from 0 to 100. */
    get tone() {
        return this.internalTone;
    }
    /**
     * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set tone(newTone) {
        this.setInternalState(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
    }
    constructor(argb) {
        this.argb = argb;
        const cam = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromArgb(argb);
        this.argb = argb;
    }
    setInternalState(argb) {
        const cam = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromArgb(argb);
        this.argb = argb;
    }
    /**
     * Translates a color into different [ViewingConditions].
     *
     * Colors change appearance. They look different with lights on versus off,
     * the same color, as in hex code, on white looks different when on black.
     * This is called color relativity, most famously explicated by Josef Albers
     * in Interaction of Color.
     *
     * In color science, color appearance models can account for this and
     * calculate the appearance of a color in different settings. HCT is based on
     * CAM16, a color appearance model, and uses it to make these calculations.
     *
     * See [ViewingConditions.make] for parameters affecting color appearance.
     */
    inViewingConditions(vc) {
        // 1. Use CAM16 to find XYZ coordinates of color in specified VC.
        const cam = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromInt(this.toInt());
        const viewedInVc = cam.xyzInViewingConditions(vc);
        // 2. Create CAM16 of those XYZ coordinates in default VC.
        const recastInVc = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__.ViewingConditions.make());
        // 3. Create HCT from:
        // - CAM16 using default VC with XYZ coordinates in specified VC.
        // - L* converted from Y in XYZ coordinates in specified VC.
        const recastHct = Hct.from(recastInVc.hue, recastInVc.chroma, _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromY(viewedInVc[1]));
        return recastHct;
    }
}
//# sourceMappingURL=hct.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/hct_solver.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/hct_solver.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HctSolver: () => (/* binding */ HctSolver)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _cam16_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.




// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * A class that solves the HCT equation.
 */
class HctSolver {
    /**
     * Sanitizes a small enough angle in radians.
     *
     * @param angle An angle in radians; must not deviate too much
     * from 0.
     * @return A coterminal angle between 0 and 2pi.
     */
    static sanitizeRadians(angle) {
        return (angle + Math.PI * 8) % (Math.PI * 2);
    }
    /**
     * Delinearizes an RGB component, returning a floating-point
     * number.
     *
     * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
     * linear R/G/B channel
     * @return 0.0 <= output <= 255.0, color channel converted to
     * regular RGB space
     */
    static trueDelinearized(rgbComponent) {
        const normalized = rgbComponent / 100.0;
        let delinearized = 0.0;
        if (normalized <= 0.0031308) {
            delinearized = normalized * 12.92;
        }
        else {
            delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
        }
        return delinearized * 255.0;
    }
    static chromaticAdaptation(component) {
        const af = Math.pow(Math.abs(component), 0.42);
        return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(component) * 400.0 * af / (af + 27.13);
    }
    /**
     * Returns the hue of a linear RGB color in CAM16.
     *
     * @param linrgb The linear RGB coordinates of a color.
     * @return The hue of the color in CAM16, in radians.
     */
    static hueOf(linrgb) {
        const scaledDiscount = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.matrixMultiply(linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
        const rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
        const gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
        const bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
        // redness-greenness
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        // yellowness-blueness
        const b = (rA + gA - 2.0 * bA) / 9.0;
        return Math.atan2(b, a);
    }
    static areInCyclicOrder(a, b, c) {
        const deltaAB = HctSolver.sanitizeRadians(b - a);
        const deltaAC = HctSolver.sanitizeRadians(c - a);
        return deltaAB < deltaAC;
    }
    /**
     * Solves the lerp equation.
     *
     * @param source The starting number.
     * @param mid The number in the middle.
     * @param target The ending number.
     * @return A number t such that lerp(source, target, t) = mid.
     */
    static intercept(source, mid, target) {
        return (mid - source) / (target - source);
    }
    static lerpPoint(source, t, target) {
        return [
            source[0] + (target[0] - source[0]) * t,
            source[1] + (target[1] - source[1]) * t,
            source[2] + (target[2] - source[2]) * t,
        ];
    }
    /**
     * Intersects a segment with a plane.
     *
     * @param source The coordinates of point A.
     * @param coordinate The R-, G-, or B-coordinate of the plane.
     * @param target The coordinates of point B.
     * @param axis The axis the plane is perpendicular with. (0: R, 1:
     * G, 2: B)
     * @return The intersection point of the segment AB with the plane
     * R=coordinate, G=coordinate, or B=coordinate
     */
    static setCoordinate(source, coordinate, target, axis) {
        const t = HctSolver.intercept(source[axis], coordinate, target[axis]);
        return HctSolver.lerpPoint(source, t, target);
    }
    static isBounded(x) {
        return 0.0 <= x && x <= 100.0;
    }
    /**
     * Returns the nth possible vertex of the polygonal intersection.
     *
     * @param y The Y value of the plane.
     * @param n The zero-based index of the point. 0 <= n <= 11.
     * @return The nth possible vertex of the polygonal intersection
     * of the y plane and the RGB cube, in linear RGB coordinates, if
     * it exists. If this possible vertex lies outside of the cube,
     * [-1.0, -1.0, -1.0] is returned.
     */
    static nthVertex(y, n) {
        const kR = HctSolver.Y_FROM_LINRGB[0];
        const kG = HctSolver.Y_FROM_LINRGB[1];
        const kB = HctSolver.Y_FROM_LINRGB[2];
        const coordA = n % 4 <= 1 ? 0.0 : 100.0;
        const coordB = n % 2 === 0 ? 0.0 : 100.0;
        if (n < 4) {
            const g = coordA;
            const b = coordB;
            const r = (y - g * kG - b * kB) / kR;
            if (HctSolver.isBounded(r)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
        else if (n < 8) {
            const b = coordA;
            const r = coordB;
            const g = (y - r * kR - b * kB) / kG;
            if (HctSolver.isBounded(g)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
        else {
            const r = coordA;
            const g = coordB;
            const b = (y - r * kR - g * kG) / kB;
            if (HctSolver.isBounded(b)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
    }
    /**
     * Finds the segment containing the desired color.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return A list of two sets of linear RGB coordinates, each
     * corresponding to an endpoint of the segment containing the
     * desired color.
     */
    static bisectToSegment(y, targetHue) {
        let left = [-1.0, -1.0, -1.0];
        let right = left;
        let leftHue = 0.0;
        let rightHue = 0.0;
        let initialized = false;
        let uncut = true;
        for (let n = 0; n < 12; n++) {
            const mid = HctSolver.nthVertex(y, n);
            if (mid[0] < 0) {
                continue;
            }
            const midHue = HctSolver.hueOf(mid);
            if (!initialized) {
                left = mid;
                right = mid;
                leftHue = midHue;
                rightHue = midHue;
                initialized = true;
                continue;
            }
            if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
                uncut = false;
                if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                    right = mid;
                    rightHue = midHue;
                }
                else {
                    left = mid;
                    leftHue = midHue;
                }
            }
        }
        return [left, right];
    }
    static midpoint(a, b) {
        return [
            (a[0] + b[0]) / 2,
            (a[1] + b[1]) / 2,
            (a[2] + b[2]) / 2,
        ];
    }
    static criticalPlaneBelow(x) {
        return Math.floor(x - 0.5);
    }
    static criticalPlaneAbove(x) {
        return Math.ceil(x - 0.5);
    }
    /**
     * Finds a color with the given Y and hue on the boundary of the
     * cube.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return The desired color, in linear RGB coordinates.
     */
    static bisectToLimit(y, targetHue) {
        const segment = HctSolver.bisectToSegment(y, targetHue);
        let left = segment[0];
        let leftHue = HctSolver.hueOf(left);
        let right = segment[1];
        for (let axis = 0; axis < 3; axis++) {
            if (left[axis] !== right[axis]) {
                let lPlane = -1;
                let rPlane = 255;
                if (left[axis] < right[axis]) {
                    lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
                }
                else {
                    lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
                }
                for (let i = 0; i < 8; i++) {
                    if (Math.abs(rPlane - lPlane) <= 1) {
                        break;
                    }
                    else {
                        const mPlane = Math.floor((lPlane + rPlane) / 2.0);
                        const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
                        const mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
                        const midHue = HctSolver.hueOf(mid);
                        if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                            right = mid;
                            rPlane = mPlane;
                        }
                        else {
                            left = mid;
                            leftHue = midHue;
                            lPlane = mPlane;
                        }
                    }
                }
            }
        }
        return HctSolver.midpoint(left, right);
    }
    static inverseChromaticAdaptation(adapted) {
        const adaptedAbs = Math.abs(adapted);
        const base = Math.max(0, 27.13 * adaptedAbs / (400.0 - adaptedAbs));
        return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(adapted) * Math.pow(base, 1.0 / 0.42);
    }
    /**
     * Finds a color with the given hue, chroma, and Y.
     *
     * @param hueRadians The desired hue in radians.
     * @param chroma The desired chroma.
     * @param y The desired Y.
     * @return The desired color as a hexadecimal integer, if found; 0
     * otherwise.
     */
    static findResultByJ(hueRadians, chroma, y) {
        // Initial estimate of j.
        let j = Math.sqrt(y) * 11.0;
        // ===========================================================
        // Operations inlined from Cam16 to avoid repeated calculation
        // ===========================================================
        const viewingConditions = _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__.ViewingConditions.DEFAULT;
        const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const eHue = 0.25 * (Math.cos(hueRadians + 2.0) + 3.8);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const hSin = Math.sin(hueRadians);
        const hCos = Math.cos(hueRadians);
        for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            const jNormalized = j / 100.0;
            const alpha = chroma === 0.0 || j === 0.0 ? 0.0 : chroma / Math.sqrt(jNormalized);
            const t = Math.pow(alpha * tInnerCoeff, 1.0 / 0.9);
            const ac = viewingConditions.aw *
                Math.pow(jNormalized, 1.0 / viewingConditions.c / viewingConditions.z);
            const p2 = ac / viewingConditions.nbb;
            const gamma = 23.0 * (p2 + 0.305) * t /
                (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
            const a = gamma * hCos;
            const b = gamma * hSin;
            const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
            const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
            const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
            const rCScaled = HctSolver.inverseChromaticAdaptation(rA);
            const gCScaled = HctSolver.inverseChromaticAdaptation(gA);
            const bCScaled = HctSolver.inverseChromaticAdaptation(bA);
            const linrgb = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.matrixMultiply([rCScaled, gCScaled, bCScaled], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
                return 0;
            }
            const kR = HctSolver.Y_FROM_LINRGB[0];
            const kG = HctSolver.Y_FROM_LINRGB[1];
            const kB = HctSolver.Y_FROM_LINRGB[2];
            const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
            if (fnj <= 0) {
                return 0;
            }
            if (iterationRound === 4 || Math.abs(fnj - y) < 0.002) {
                if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
                    return 0;
                }
                return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLinrgb(linrgb);
            }
            // Iterates with Newton method,
            // Using 2 * fn(j) / j as the approximation of fn'(j)
            j = j - (fnj - y) * j / (2 * fnj);
        }
        return 0;
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return A hexadecimal representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToInt(hueDegrees, chroma, lstar) {
        if (chroma < 0.0001 || lstar < 0.0001 || lstar > 99.9999) {
            return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLstar(lstar);
        }
        hueDegrees = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesDouble(hueDegrees);
        const hueRadians = hueDegrees / 180 * Math.PI;
        const y = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(lstar);
        const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
        if (exactAnswer !== 0) {
            return exactAnswer;
        }
        const linrgb = HctSolver.bisectToLimit(y, hueRadians);
        return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLinrgb(linrgb);
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return An CAM16 object representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToCam(hueDegrees, chroma, lstar) {
        return _cam16_js__WEBPACK_IMPORTED_MODULE_2__.Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
    }
}
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
    [
        0.001200833568784504,
        0.002389694492170889,
        0.0002795742885861124,
    ],
    [
        0.0005891086651375999,
        0.0029785502573438758,
        0.0003270666104008398,
    ],
    [
        0.00010146692491640572,
        0.0005364214359186694,
        0.0032979401770712076,
    ],
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
    [
        1373.2198709594231,
        -1100.4251190754821,
        -7.278681089101213,
    ],
    [
        -271.815969077903,
        559.6580465940733,
        -32.46047482791194,
    ],
    [
        1.9622899599665666,
        -57.173814538844006,
        308.7233197812385,
    ],
];
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
HctSolver.CRITICAL_PLANES = [
    0.015176349177441876, 0.045529047532325624, 0.07588174588720938,
    0.10623444424209313, 0.13658714259697685, 0.16693984095186062,
    0.19729253930674434, 0.2276452376616281, 0.2579979360165119,
    0.28835063437139563, 0.3188300904430532, 0.350925934958123,
    0.3848314933096426, 0.42057480301049466, 0.458183274052838,
    0.4976837250274023, 0.5391024159806381, 0.5824650784040898,
    0.6277969426914107, 0.6751227633498623, 0.7244668422128921,
    0.775853049866786, 0.829304845476233, 0.8848452951698498,
    0.942497089126609, 1.0022825574869039, 1.0642236851973577,
    1.1283421258858297, 1.1946592148522128, 1.2631959812511864,
    1.3339731595349034, 1.407011200216447, 1.4823302800086415,
    1.5599503113873272, 1.6398909516233677, 1.7221716113234105,
    1.8068114625156377, 1.8938294463134073, 1.9832442801866852,
    2.075074464868551, 2.1693382909216234, 2.2660538449872063,
    2.36523901573795, 2.4669114995532007, 2.5710888059345764,
    2.6777882626779785, 2.7870270208169257, 2.898822059350997,
    3.0131901897720907, 3.1301480604002863, 3.2497121605402226,
    3.3718988244681087, 3.4967242352587946, 3.624204428461639,
    3.754355295633311, 3.887192587735158, 4.022731918402185,
    4.160988767090289, 4.301978482107941, 4.445716283538092,
    4.592217266055746, 4.741496401646282, 4.893568542229298,
    5.048448422192488, 5.20615066083972, 5.3666897647573375,
    5.5300801301023865, 5.696336044816294, 5.865471690767354,
    6.037501145825082, 6.212438385869475, 6.390297286737924,
    6.571091626112461, 6.7548350853498045, 6.941541251256611,
    7.131223617812143, 7.323895587840543, 7.5195704746346665,
    7.7182615035334345, 7.919981813454504, 8.124744458384042,
    8.332562408825165, 8.543448553206703, 8.757415699253682,
    8.974476575321063, 9.194643831691977, 9.417930041841839,
    9.644347703669503, 9.873909240696694, 10.106627003236781,
    10.342513269534024, 10.58158024687427, 10.8238400726681,
    11.069304815507364, 11.317986476196008, 11.569896988756009,
    11.825048221409341, 12.083451977536606, 12.345119996613247,
    12.610063955123938, 12.878295467455942, 13.149826086772048,
    13.42466730586372, 13.702830557985108, 13.984327217668513,
    14.269168601521828, 14.55736596900856, 14.848930523210871,
    15.143873411576273, 15.44220572664832, 15.743938506781891,
    16.04908273684337, 16.35764934889634, 16.66964922287304,
    16.985093187232053, 17.30399201960269, 17.62635644741625,
    17.95219714852476, 18.281524751807332, 18.614349837764564,
    18.95068293910138, 19.290534541298456, 19.633915083172692,
    19.98083495742689, 20.331304511189067, 20.685334046541502,
    21.042933821039977, 21.404114048223256, 21.76888489811322,
    22.137256497705877, 22.50923893145328, 22.884842241736916,
    23.264076429332462, 23.6469514538663, 24.033477234264016,
    24.42366364919083, 24.817520537484558, 25.21505769858089,
    25.61628489293138, 26.021211842414342, 26.429848230738664,
    26.842203703840827, 27.258287870275353, 27.678110301598522,
    28.10168053274597, 28.529008062403893, 28.96010235337422,
    29.39497283293396, 29.83362889318845, 30.276079891419332,
    30.722335150426627, 31.172403958865512, 31.62629557157785,
    32.08401920991837, 32.54558406207592, 33.010999283389665,
    33.4802739966603, 33.953417292456834, 34.430438229418264,
    34.911345834551085, 35.39614910352207, 35.88485700094671,
    36.37747846067349, 36.87402238606382, 37.37449765026789,
    37.87891309649659, 38.38727753828926, 38.89959975977785,
    39.41588851594697, 39.93615253289054, 40.460400508064545,
    40.98864111053629, 41.520882981230194, 42.05713473317016,
    42.597404951718396, 43.141702194811224, 43.6900349931913,
    44.24241185063697, 44.798841244188324, 45.35933162437017,
    45.92389141541209, 46.49252901546552, 47.065252796817916,
    47.64207110610409, 48.22299226451468, 48.808024568002054,
    49.3971762874833, 49.9904556690408, 50.587870934119984,
    51.189430279724725, 51.79514187861014, 52.40501387947288,
    53.0190544071392, 53.637271562750364, 54.259673423945976,
    54.88626804504493, 55.517063457223934, 56.15206766869424,
    56.79128866487574, 57.43473440856916, 58.08241284012621,
    58.734331877617365, 59.39049941699807, 60.05092333227251,
    60.715611475655585, 61.38457167773311, 62.057811747619894,
    62.7353394731159, 63.417162620860914, 64.10328893648692,
    64.79372614476921, 65.48848194977529, 66.18756403501224,
    66.89098006357258, 67.59873767827808, 68.31084450182222,
    69.02730813691093, 69.74813616640164, 70.47333615344107,
    71.20291564160104, 71.93688215501312, 72.67524319850172,
    73.41800625771542, 74.16517879925733, 74.9167682708136,
    75.67278210128072, 76.43322770089146, 77.1981124613393,
    77.96744375590167, 78.74122893956174, 79.51947534912904,
    80.30219030335869, 81.08938110306934, 81.88105503125999,
    82.67721935322541, 83.4778813166706, 84.28304815182372,
    85.09272707154808, 85.90692527145302, 86.72564993000343,
    87.54890820862819, 88.3767072518277, 89.2090541872801,
    90.04595612594655, 90.88742016217518, 91.73345337380438,
    92.58406282226491, 93.43925555268066, 94.29903859396902,
    95.16341895893969, 96.03240364439274, 96.9059996312159,
    97.78421388448044, 98.6670533535366, 99.55452497210776,
];
//# sourceMappingURL=hct_solver.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/viewing_conditions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewingConditions: () => (/* binding */ ViewingConditions)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 *
 * This class caches intermediate values of the CAM16 conversion process that
 * depend only on viewing conditions, enabling speed ups.
 */
class ViewingConditions {
    /**
     * Create ViewingConditions from a simple, physically relevant, set of
     * parameters.
     *
     * @param whitePoint White point, measured in the XYZ color space.
     *     default = D65, or sunny day afternoon
     * @param adaptingLuminance The luminance of the adapting field. Informally,
     *     how bright it is in the room where the color is viewed. Can be
     *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
     *     or 200 lux.
     * @param backgroundLstar The lightness of the area surrounding the color.
     *     measured by L* in L*a*b*. default = 50.0
     * @param surround A general description of the lighting surrounding the
     *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
     *     dimly light room, like watching TV at home at night. 2.0 means there
     *     is no difference between the lighting on the color and around it.
     *     default = 2.0
     * @param discountingIlluminant Whether the eye accounts for the tint of the
     *     ambient lighting, such as knowing an apple is still red in green light.
     *     default = false, the eye does not perform this process on
     *       self-luminous objects like displays.
     */
    static make(whitePoint = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.whitePointD65(), adaptingLuminance = (200.0 / Math.PI) * _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(50.0) / 100.0, backgroundLstar = 50.0, surround = 2.0, discountingIlluminant = false) {
        const xyz = whitePoint;
        const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
        const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
        const bW = xyz[0] * -0.002079 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
        const f = 0.8 + surround / 10.0;
        const c = f >= 0.9 ? _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.lerp(0.59, 0.69, (f - 0.9) * 10.0) :
            _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.lerp(0.525, 0.59, (f - 0.8) * 10.0);
        let d = discountingIlluminant ?
            1.0 :
            f * (1.0 - (1.0 / 3.6) * Math.exp((-adaptingLuminance - 42.0) / 92.0));
        d = d > 1.0 ? 1.0 : d < 0.0 ? 0.0 : d;
        const nc = f;
        const rgbD = [
            d * (100.0 / rW) + 1.0 - d,
            d * (100.0 / gW) + 1.0 - d,
            d * (100.0 / bW) + 1.0 - d,
        ];
        const k = 1.0 / (5.0 * adaptingLuminance + 1.0);
        const k4 = k * k * k * k;
        const k4F = 1.0 - k4;
        const fl = k4 * adaptingLuminance +
            0.1 * k4F * k4F * Math.cbrt(5.0 * adaptingLuminance);
        const n = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(backgroundLstar) / whitePoint[1];
        const z = 1.48 + Math.sqrt(n);
        const nbb = 0.725 / Math.pow(n, 0.2);
        const ncb = nbb;
        const rgbAFactors = [
            Math.pow((fl * rgbD[0] * rW) / 100.0, 0.42),
            Math.pow((fl * rgbD[1] * gW) / 100.0, 0.42),
            Math.pow((fl * rgbD[2] * bW) / 100.0, 0.42),
        ];
        const rgbA = [
            (400.0 * rgbAFactors[0]) / (rgbAFactors[0] + 27.13),
            (400.0 * rgbAFactors[1]) / (rgbAFactors[1] + 27.13),
            (400.0 * rgbAFactors[2]) / (rgbAFactors[2] + 27.13),
        ];
        const aw = (2.0 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
        return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
    }
    /**
     * Parameters are intermediate values of the CAM16 conversion process. Their
     * names are shorthand for technical color science terminology, this class
     * would not benefit from documenting them individually. A brief overview
     * is available in the CAM16 specification, and a complete overview requires
     * a color science textbook, such as Fairchild's Color Appearance Models.
     */
    constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
        this.n = n;
        this.aw = aw;
        this.nbb = nbb;
        this.ncb = ncb;
        this.c = c;
        this.nc = nc;
        this.rgbD = rgbD;
        this.fl = fl;
        this.fLRoot = fLRoot;
        this.z = z;
    }
}
/** sRGB-like viewing conditions.  */
ViewingConditions.DEFAULT = ViewingConditions.make();
//# sourceMappingURL=viewing_conditions.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blend: () => (/* reexport safe */ _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__.Blend),
/* harmony export */   Cam16: () => (/* reexport safe */ _hct_cam16_js__WEBPACK_IMPORTED_MODULE_5__.Cam16),
/* harmony export */   Contrast: () => (/* reexport safe */ _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_1__.Contrast),
/* harmony export */   CorePalette: () => (/* reexport safe */ _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_8__.CorePalette),
/* harmony export */   DislikeAnalyzer: () => (/* reexport safe */ _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_2__.DislikeAnalyzer),
/* harmony export */   DynamicColor: () => (/* reexport safe */ _dynamiccolor_dynamic_color_js__WEBPACK_IMPORTED_MODULE_3__.DynamicColor),
/* harmony export */   DynamicScheme: () => (/* reexport safe */ _scheme_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_14__.DynamicScheme),
/* harmony export */   Hct: () => (/* reexport safe */ _hct_hct_js__WEBPACK_IMPORTED_MODULE_6__.Hct),
/* harmony export */   MaterialDynamicColors: () => (/* reexport safe */ _dynamiccolor_material_dynamic_colors_js__WEBPACK_IMPORTED_MODULE_4__.MaterialDynamicColors),
/* harmony export */   QuantizerCelebi: () => (/* reexport safe */ _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_10__.QuantizerCelebi),
/* harmony export */   QuantizerMap: () => (/* reexport safe */ _quantize_quantizer_map_js__WEBPACK_IMPORTED_MODULE_11__.QuantizerMap),
/* harmony export */   QuantizerWsmeans: () => (/* reexport safe */ _quantize_quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_12__.QuantizerWsmeans),
/* harmony export */   QuantizerWu: () => (/* reexport safe */ _quantize_quantizer_wu_js__WEBPACK_IMPORTED_MODULE_13__.QuantizerWu),
/* harmony export */   Scheme: () => (/* reexport safe */ _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_15__.Scheme),
/* harmony export */   SchemeAndroid: () => (/* reexport safe */ _scheme_scheme_android_js__WEBPACK_IMPORTED_MODULE_16__.SchemeAndroid),
/* harmony export */   SchemeContent: () => (/* reexport safe */ _scheme_scheme_content_js__WEBPACK_IMPORTED_MODULE_17__.SchemeContent),
/* harmony export */   SchemeExpressive: () => (/* reexport safe */ _scheme_scheme_expressive_js__WEBPACK_IMPORTED_MODULE_18__.SchemeExpressive),
/* harmony export */   SchemeFidelity: () => (/* reexport safe */ _scheme_scheme_fidelity_js__WEBPACK_IMPORTED_MODULE_19__.SchemeFidelity),
/* harmony export */   SchemeMonochrome: () => (/* reexport safe */ _scheme_scheme_monochrome_js__WEBPACK_IMPORTED_MODULE_20__.SchemeMonochrome),
/* harmony export */   SchemeNeutral: () => (/* reexport safe */ _scheme_scheme_neutral_js__WEBPACK_IMPORTED_MODULE_21__.SchemeNeutral),
/* harmony export */   SchemeTonalSpot: () => (/* reexport safe */ _scheme_scheme_tonal_spot_js__WEBPACK_IMPORTED_MODULE_22__.SchemeTonalSpot),
/* harmony export */   SchemeVibrant: () => (/* reexport safe */ _scheme_scheme_vibrant_js__WEBPACK_IMPORTED_MODULE_23__.SchemeVibrant),
/* harmony export */   Score: () => (/* reexport safe */ _score_score_js__WEBPACK_IMPORTED_MODULE_24__.Score),
/* harmony export */   TemperatureCache: () => (/* reexport safe */ _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_25__.TemperatureCache),
/* harmony export */   TonalPalette: () => (/* reexport safe */ _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_9__.TonalPalette),
/* harmony export */   ViewingConditions: () => (/* reexport safe */ _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_7__.ViewingConditions),
/* harmony export */   alphaFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.alphaFromArgb),
/* harmony export */   applyTheme: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.applyTheme),
/* harmony export */   argbFromHex: () => (/* reexport safe */ _utils_string_utils_js__WEBPACK_IMPORTED_MODULE_28__.argbFromHex),
/* harmony export */   argbFromLab: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromLab),
/* harmony export */   argbFromLinrgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromLinrgb),
/* harmony export */   argbFromLstar: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromLstar),
/* harmony export */   argbFromRgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromRgb),
/* harmony export */   argbFromRgba: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromRgba),
/* harmony export */   argbFromXyz: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromXyz),
/* harmony export */   blueFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.blueFromArgb),
/* harmony export */   clampDouble: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.clampDouble),
/* harmony export */   clampInt: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.clampInt),
/* harmony export */   customColor: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.customColor),
/* harmony export */   delinearized: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.delinearized),
/* harmony export */   differenceDegrees: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.differenceDegrees),
/* harmony export */   greenFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.greenFromArgb),
/* harmony export */   hexFromArgb: () => (/* reexport safe */ _utils_string_utils_js__WEBPACK_IMPORTED_MODULE_28__.hexFromArgb),
/* harmony export */   isOpaque: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.isOpaque),
/* harmony export */   labFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.labFromArgb),
/* harmony export */   lerp: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.lerp),
/* harmony export */   linearized: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.linearized),
/* harmony export */   lstarFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.lstarFromArgb),
/* harmony export */   lstarFromY: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.lstarFromY),
/* harmony export */   matrixMultiply: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.matrixMultiply),
/* harmony export */   redFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.redFromArgb),
/* harmony export */   rgbaFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.rgbaFromArgb),
/* harmony export */   rotationDirection: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.rotationDirection),
/* harmony export */   sanitizeDegreesDouble: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.sanitizeDegreesDouble),
/* harmony export */   sanitizeDegreesInt: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.sanitizeDegreesInt),
/* harmony export */   signum: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.signum),
/* harmony export */   sourceColorFromImage: () => (/* reexport safe */ _utils_image_utils_js__WEBPACK_IMPORTED_MODULE_29__.sourceColorFromImage),
/* harmony export */   themeFromImage: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.themeFromImage),
/* harmony export */   themeFromSourceColor: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.themeFromSourceColor),
/* harmony export */   whitePointD65: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.whitePointD65),
/* harmony export */   xyzFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.xyzFromArgb),
/* harmony export */   yFromLstar: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.yFromLstar)
/* harmony export */ });
/* harmony import */ var _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blend/blend.js */ "./node_modules/@material/material-color-utilities/blend/blend.js");
/* harmony import */ var _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrast/contrast.js */ "./node_modules/@material/material-color-utilities/contrast/contrast.js");
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _dynamiccolor_dynamic_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamiccolor/dynamic_color.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js");
/* harmony import */ var _dynamiccolor_material_dynamic_colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamiccolor/material_dynamic_colors.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js");
/* harmony import */ var _hct_cam16_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hct/cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hct/viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quantize/quantizer_celebi.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js");
/* harmony import */ var _quantize_quantizer_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quantize/quantizer_map.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_map.js");
/* harmony import */ var _quantize_quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quantize/quantizer_wsmeans.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js");
/* harmony import */ var _quantize_quantizer_wu_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quantize/quantizer_wu.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js");
/* harmony import */ var _scheme_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scheme/dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scheme/scheme.js */ "./node_modules/@material/material-color-utilities/scheme/scheme.js");
/* harmony import */ var _scheme_scheme_android_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scheme/scheme_android.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_android.js");
/* harmony import */ var _scheme_scheme_content_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scheme/scheme_content.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_content.js");
/* harmony import */ var _scheme_scheme_expressive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scheme/scheme_expressive.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_expressive.js");
/* harmony import */ var _scheme_scheme_fidelity_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scheme/scheme_fidelity.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js");
/* harmony import */ var _scheme_scheme_monochrome_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scheme/scheme_monochrome.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js");
/* harmony import */ var _scheme_scheme_neutral_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scheme/scheme_neutral.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_neutral.js");
/* harmony import */ var _scheme_scheme_tonal_spot_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scheme/scheme_tonal_spot.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js");
/* harmony import */ var _scheme_scheme_vibrant_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scheme/scheme_vibrant.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js");
/* harmony import */ var _score_score_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./score/score.js */ "./node_modules/@material/material-color-utilities/score/score.js");
/* harmony import */ var _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./temperature/temperature_cache.js */ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js");
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _utils_string_utils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils/string_utils.js */ "./node_modules/@material/material-color-utilities/utils/string_utils.js");
/* harmony import */ var _utils_image_utils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/image_utils.js */ "./node_modules/@material/material-color-utilities/utils/image_utils.js");
/* harmony import */ var _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/theme_utils.js */ "./node_modules/@material/material-color-utilities/utils/theme_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/palettes/core_palette.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/palettes/core_palette.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CorePalette: () => (/* binding */ CorePalette)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * An intermediate concept between the key color for a UI theme, and a full
 * color scheme. 5 sets of tones are generated, all except one use the same hue
 * as the key color, and all vary in chroma.
 */
class CorePalette {
    /**
     * @param argb ARGB representation of a color
     */
    static of(argb) {
        return new CorePalette(argb, false);
    }
    /**
     * @param argb ARGB representation of a color
     */
    static contentOf(argb) {
        return new CorePalette(argb, true);
    }
    /**
     * Create a [CorePalette] from a set of colors
     */
    static fromColors(colors) {
        return CorePalette.createPaletteFromColors(false, colors);
    }
    /**
     * Create a content [CorePalette] from a set of colors
     */
    static contentFromColors(colors) {
        return CorePalette.createPaletteFromColors(true, colors);
    }
    static createPaletteFromColors(content, colors) {
        const palette = new CorePalette(colors.primary, content);
        if (colors.secondary) {
            const p = new CorePalette(colors.secondary, content);
            palette.a2 = p.a1;
        }
        if (colors.tertiary) {
            const p = new CorePalette(colors.tertiary, content);
            palette.a3 = p.a1;
        }
        if (colors.error) {
            const p = new CorePalette(colors.error, content);
            palette.error = p.a1;
        }
        if (colors.neutral) {
            const p = new CorePalette(colors.neutral, content);
            palette.n1 = p.n1;
        }
        if (colors.neutralVariant) {
            const p = new CorePalette(colors.neutralVariant, content);
            palette.n2 = p.n2;
        }
        return palette;
    }
    constructor(argb, isContent) {
        const hct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
        const hue = hct.hue;
        const chroma = hct.chroma;
        if (isContent) {
            this.a1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, chroma);
            this.a2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, chroma / 3);
            this.a3 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue + 60, chroma / 2);
            this.n1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4));
            this.n2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8));
        }
        else {
            this.a1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma));
            this.a2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, 16);
            this.a3 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue + 60, 24);
            this.n1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, 4);
            this.n2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, 8);
        }
        this.error = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(25, 84);
    }
}
//# sourceMappingURL=core_palette.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/palettes/tonal_palette.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TonalPalette: () => (/* binding */ TonalPalette)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  A convenience class for retrieving colors that are constant in hue and
 *  chroma, but vary in tone.
 */
class TonalPalette {
    /**
     * @param argb ARGB representation of a color
     * @return Tones matching that color's hue and chroma.
     */
    static fromInt(argb) {
        const hct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
        return TonalPalette.fromHct(hct);
    }
    /**
     * @param hct Hct
     * @return Tones matching that color's hue and chroma.
     */
    static fromHct(hct) {
        return new TonalPalette(hct.hue, hct.chroma, hct);
    }
    /**
     * @param hue HCT hue
     * @param chroma HCT chroma
     * @return Tones matching hue and chroma.
     */
    static fromHueAndChroma(hue, chroma) {
        return new TonalPalette(hue, chroma, TonalPalette.createKeyColor(hue, chroma));
    }
    constructor(hue, chroma, keyColor) {
        this.hue = hue;
        this.chroma = chroma;
        this.keyColor = keyColor;
        this.cache = new Map();
    }
    static createKeyColor(hue, chroma) {
        const startTone = 50.0;
        let smallestDeltaHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, chroma, startTone);
        let smallestDelta = Math.abs(smallestDeltaHct.chroma - chroma);
        // Starting from T50, check T+/-delta to see if they match the requested
        // chroma.
        //
        // Starts from T50 because T50 has the most chroma available, on
        // average. Thus it is most likely to have a direct answer and minimize
        // iteration.
        for (let delta = 1.0; delta < 50.0; delta += 1.0) {
            // Termination condition rounding instead of minimizing delta to avoid
            // case where requested chroma is 16.51, and the closest chroma is 16.49.
            // Error is minimized, but when rounded and displayed, requested chroma
            // is 17, key color's chroma is 16.
            if (Math.round(chroma) === Math.round(smallestDeltaHct.chroma)) {
                return smallestDeltaHct;
            }
            const hctAdd = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, chroma, startTone + delta);
            const hctAddDelta = Math.abs(hctAdd.chroma - chroma);
            if (hctAddDelta < smallestDelta) {
                smallestDelta = hctAddDelta;
                smallestDeltaHct = hctAdd;
            }
            const hctSubtract = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, chroma, startTone - delta);
            const hctSubtractDelta = Math.abs(hctSubtract.chroma - chroma);
            if (hctSubtractDelta < smallestDelta) {
                smallestDelta = hctSubtractDelta;
                smallestDeltaHct = hctSubtract;
            }
        }
        return smallestDeltaHct;
    }
    /**
     * @param tone HCT tone, measured from 0 to 100.
     * @return ARGB representation of a color with that tone.
     */
    tone(tone) {
        let argb = this.cache.get(tone);
        if (argb === undefined) {
            argb = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(this.hue, this.chroma, tone).toInt();
            this.cache.set(tone, argb);
        }
        return argb;
    }
    /**
     * @param tone HCT tone.
     * @return HCT representation of a color with that tone.
     */
    getHct(tone) {
        return _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(this.tone(tone));
    }
}
//# sourceMappingURL=tonal_palette.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/lab_point_provider.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/lab_point_provider.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabPointProvider: () => (/* binding */ LabPointProvider)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides conversions needed for K-Means quantization. Converting input to
 * points, and converting the final state of the K-Means algorithm to colors.
 */
class LabPointProvider {
    /**
     * Convert a color represented in ARGB to a 3-element array of L*a*b*
     * coordinates of the color.
     */
    fromInt(argb) {
        return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.labFromArgb(argb);
    }
    /**
     * Convert a 3-element array to a color represented in ARGB.
     */
    toInt(point) {
        return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLab(point[0], point[1], point[2]);
    }
    /**
     * Standard CIE 1976 delta E formula also takes the square root, unneeded
     * here. This method is used by quantization algorithms to compare distance,
     * and the relative ordering is the same, with or without a square root.
     *
     * This relatively minor optimization is helpful because this method is
     * called at least once for each pixel in an image.
     */
    distance(from, to) {
        const dL = from[0] - to[0];
        const dA = from[1] - to[1];
        const dB = from[2] - to[2];
        return dL * dL + dA * dA + dB * dB;
    }
}
//# sourceMappingURL=lab_point_provider.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerCelebi: () => (/* binding */ QuantizerCelebi)
/* harmony export */ });
/* harmony import */ var _quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantizer_wsmeans.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js");
/* harmony import */ var _quantizer_wu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantizer_wu.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * An image quantizer that improves on the quality of a standard K-Means
 * algorithm by setting the K-Means initial state to the output of a Wu
 * quantizer, instead of random centroids. Improves on speed by several
 * optimizations, as implemented in Wsmeans, or Weighted Square Means, K-Means
 * with those optimizations.
 *
 * This algorithm was designed by M. Emre Celebi, and was found in their 2011
 * paper, Improving the Performance of K-Means for Color Quantization.
 * https://arxiv.org/abs/1101.0395
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerCelebi {
    /**
     * @param pixels Colors in ARGB format.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Map with keys of colors in ARGB format, and values of number of
     *     pixels in the original image that correspond to the color in the
     *     quantized image.
     */
    static quantize(pixels, maxColors) {
        const wu = new _quantizer_wu_js__WEBPACK_IMPORTED_MODULE_1__.QuantizerWu();
        const wuResult = wu.quantize(pixels, maxColors);
        return _quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_0__.QuantizerWsmeans.quantize(pixels, wuResult, maxColors);
    }
}
//# sourceMappingURL=quantizer_celebi.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_map.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_map.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerMap: () => (/* binding */ QuantizerMap)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Quantizes an image into a map, with keys of ARGB colors, and values of the
 * number of times that color appears in the image.
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerMap {
    /**
     * @param pixels Colors in ARGB format.
     * @return A Map with keys of ARGB colors, and values of the number of times
     *     the color appears in the image.
     */
    static quantize(pixels) {
        const countByColor = new Map();
        for (let i = 0; i < pixels.length; i++) {
            const pixel = pixels[i];
            const alpha = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.alphaFromArgb(pixel);
            if (alpha < 255) {
                continue;
            }
            countByColor.set(pixel, (countByColor.get(pixel) ?? 0) + 1);
        }
        return countByColor;
    }
}
//# sourceMappingURL=quantizer_map.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerWsmeans: () => (/* binding */ QuantizerWsmeans)
/* harmony export */ });
/* harmony import */ var _lab_point_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lab_point_provider.js */ "./node_modules/@material/material-color-utilities/quantize/lab_point_provider.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MAX_ITERATIONS = 10;
const MIN_MOVEMENT_DISTANCE = 3.0;
/**
 * An image quantizer that improves on the speed of a standard K-Means algorithm
 * by implementing several optimizations, including deduping identical pixels
 * and a triangle inequality rule that reduces the number of comparisons needed
 * to identify which cluster a point should be moved to.
 *
 * Wsmeans stands for Weighted Square Means.
 *
 * This algorithm was designed by M. Emre Celebi, and was found in their 2011
 * paper, Improving the Performance of K-Means for Color Quantization.
 * https://arxiv.org/abs/1101.0395
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerWsmeans {
    /**
     * @param inputPixels Colors in ARGB format.
     * @param startingClusters Defines the initial state of the quantizer. Passing
     *     an empty array is fine, the implementation will create its own initial
     *     state that leads to reproducible results for the same inputs.
     *     Passing an array that is the result of Wu quantization leads to higher
     *     quality results.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Colors in ARGB format.
     */
    static quantize(inputPixels, startingClusters, maxColors) {
        const pixelToCount = new Map();
        const points = new Array();
        const pixels = new Array();
        const pointProvider = new _lab_point_provider_js__WEBPACK_IMPORTED_MODULE_0__.LabPointProvider();
        let pointCount = 0;
        for (let i = 0; i < inputPixels.length; i++) {
            const inputPixel = inputPixels[i];
            const pixelCount = pixelToCount.get(inputPixel);
            if (pixelCount === undefined) {
                pointCount++;
                points.push(pointProvider.fromInt(inputPixel));
                pixels.push(inputPixel);
                pixelToCount.set(inputPixel, 1);
            }
            else {
                pixelToCount.set(inputPixel, pixelCount + 1);
            }
        }
        const counts = new Array();
        for (let i = 0; i < pointCount; i++) {
            const pixel = pixels[i];
            const count = pixelToCount.get(pixel);
            if (count !== undefined) {
                counts[i] = count;
            }
        }
        let clusterCount = Math.min(maxColors, pointCount);
        if (startingClusters.length > 0) {
            clusterCount = Math.min(clusterCount, startingClusters.length);
        }
        const clusters = new Array();
        for (let i = 0; i < startingClusters.length; i++) {
            clusters.push(pointProvider.fromInt(startingClusters[i]));
        }
        const additionalClustersNeeded = clusterCount - clusters.length;
        if (startingClusters.length === 0 && additionalClustersNeeded > 0) {
            for (let i = 0; i < additionalClustersNeeded; i++) {
                const l = Math.random() * 100.0;
                const a = Math.random() * (100.0 - (-100.0) + 1) + -100;
                const b = Math.random() * (100.0 - (-100.0) + 1) + -100;
                clusters.push(new Array(l, a, b));
            }
        }
        const clusterIndices = new Array();
        for (let i = 0; i < pointCount; i++) {
            clusterIndices.push(Math.floor(Math.random() * clusterCount));
        }
        const indexMatrix = new Array();
        for (let i = 0; i < clusterCount; i++) {
            indexMatrix.push(new Array());
            for (let j = 0; j < clusterCount; j++) {
                indexMatrix[i].push(0);
            }
        }
        const distanceToIndexMatrix = new Array();
        for (let i = 0; i < clusterCount; i++) {
            distanceToIndexMatrix.push(new Array());
            for (let j = 0; j < clusterCount; j++) {
                distanceToIndexMatrix[i].push(new DistanceAndIndex());
            }
        }
        const pixelCountSums = new Array();
        for (let i = 0; i < clusterCount; i++) {
            pixelCountSums.push(0);
        }
        for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
            for (let i = 0; i < clusterCount; i++) {
                for (let j = i + 1; j < clusterCount; j++) {
                    const distance = pointProvider.distance(clusters[i], clusters[j]);
                    distanceToIndexMatrix[j][i].distance = distance;
                    distanceToIndexMatrix[j][i].index = i;
                    distanceToIndexMatrix[i][j].distance = distance;
                    distanceToIndexMatrix[i][j].index = j;
                }
                distanceToIndexMatrix[i].sort();
                for (let j = 0; j < clusterCount; j++) {
                    indexMatrix[i][j] = distanceToIndexMatrix[i][j].index;
                }
            }
            let pointsMoved = 0;
            for (let i = 0; i < pointCount; i++) {
                const point = points[i];
                const previousClusterIndex = clusterIndices[i];
                const previousCluster = clusters[previousClusterIndex];
                const previousDistance = pointProvider.distance(point, previousCluster);
                let minimumDistance = previousDistance;
                let newClusterIndex = -1;
                for (let j = 0; j < clusterCount; j++) {
                    if (distanceToIndexMatrix[previousClusterIndex][j].distance >=
                        4 * previousDistance) {
                        continue;
                    }
                    const distance = pointProvider.distance(point, clusters[j]);
                    if (distance < minimumDistance) {
                        minimumDistance = distance;
                        newClusterIndex = j;
                    }
                }
                if (newClusterIndex !== -1) {
                    const distanceChange = Math.abs((Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)));
                    if (distanceChange > MIN_MOVEMENT_DISTANCE) {
                        pointsMoved++;
                        clusterIndices[i] = newClusterIndex;
                    }
                }
            }
            if (pointsMoved === 0 && iteration !== 0) {
                break;
            }
            const componentASums = new Array(clusterCount).fill(0);
            const componentBSums = new Array(clusterCount).fill(0);
            const componentCSums = new Array(clusterCount).fill(0);
            for (let i = 0; i < clusterCount; i++) {
                pixelCountSums[i] = 0;
            }
            for (let i = 0; i < pointCount; i++) {
                const clusterIndex = clusterIndices[i];
                const point = points[i];
                const count = counts[i];
                pixelCountSums[clusterIndex] += count;
                componentASums[clusterIndex] += (point[0] * count);
                componentBSums[clusterIndex] += (point[1] * count);
                componentCSums[clusterIndex] += (point[2] * count);
            }
            for (let i = 0; i < clusterCount; i++) {
                const count = pixelCountSums[i];
                if (count === 0) {
                    clusters[i] = [0.0, 0.0, 0.0];
                    continue;
                }
                const a = componentASums[i] / count;
                const b = componentBSums[i] / count;
                const c = componentCSums[i] / count;
                clusters[i] = [a, b, c];
            }
        }
        const argbToPopulation = new Map();
        for (let i = 0; i < clusterCount; i++) {
            const count = pixelCountSums[i];
            if (count === 0) {
                continue;
            }
            const possibleNewCluster = pointProvider.toInt(clusters[i]);
            if (argbToPopulation.has(possibleNewCluster)) {
                continue;
            }
            argbToPopulation.set(possibleNewCluster, count);
        }
        return argbToPopulation;
    }
}
/**
 *  A wrapper for maintaining a table of distances between K-Means clusters.
 */
class DistanceAndIndex {
    constructor() {
        this.distance = -1;
        this.index = -1;
    }
}
//# sourceMappingURL=quantizer_wsmeans.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerWu: () => (/* binding */ QuantizerWu)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _quantizer_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantizer_map.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_map.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const INDEX_BITS = 5;
const SIDE_LENGTH = 33; // ((1 << INDEX_INDEX_BITS) + 1)
const TOTAL_SIZE = 35937; // SIDE_LENGTH * SIDE_LENGTH * SIDE_LENGTH
const directions = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
};
/**
 * An image quantizer that divides the image's pixels into clusters by
 * recursively cutting an RGB cube, based on the weight of pixels in each area
 * of the cube.
 *
 * The algorithm was described by Xiaolin Wu in Graphic Gems II, published in
 * 1991.
 */
class QuantizerWu {
    constructor(weights = [], momentsR = [], momentsG = [], momentsB = [], moments = [], cubes = []) {
        this.weights = weights;
        this.momentsR = momentsR;
        this.momentsG = momentsG;
        this.momentsB = momentsB;
        this.moments = moments;
        this.cubes = cubes;
    }
    /**
     * @param pixels Colors in ARGB format.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Colors in ARGB format.
     */
    quantize(pixels, maxColors) {
        this.constructHistogram(pixels);
        this.computeMoments();
        const createBoxesResult = this.createBoxes(maxColors);
        const results = this.createResult(createBoxesResult.resultCount);
        return results;
    }
    constructHistogram(pixels) {
        this.weights = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsR = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsG = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsB = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.moments = Array.from({ length: TOTAL_SIZE }).fill(0);
        const countByColor = _quantizer_map_js__WEBPACK_IMPORTED_MODULE_1__.QuantizerMap.quantize(pixels);
        for (const [pixel, count] of countByColor.entries()) {
            const red = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.redFromArgb(pixel);
            const green = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.greenFromArgb(pixel);
            const blue = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.blueFromArgb(pixel);
            const bitsToRemove = 8 - INDEX_BITS;
            const iR = (red >> bitsToRemove) + 1;
            const iG = (green >> bitsToRemove) + 1;
            const iB = (blue >> bitsToRemove) + 1;
            const index = this.getIndex(iR, iG, iB);
            this.weights[index] = (this.weights[index] ?? 0) + count;
            this.momentsR[index] += count * red;
            this.momentsG[index] += count * green;
            this.momentsB[index] += count * blue;
            this.moments[index] += count * (red * red + green * green + blue * blue);
        }
    }
    computeMoments() {
        for (let r = 1; r < SIDE_LENGTH; r++) {
            const area = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaR = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaG = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaB = Array.from({ length: SIDE_LENGTH }).fill(0);
            const area2 = Array.from({ length: SIDE_LENGTH }).fill(0.0);
            for (let g = 1; g < SIDE_LENGTH; g++) {
                let line = 0;
                let lineR = 0;
                let lineG = 0;
                let lineB = 0;
                let line2 = 0.0;
                for (let b = 1; b < SIDE_LENGTH; b++) {
                    const index = this.getIndex(r, g, b);
                    line += this.weights[index];
                    lineR += this.momentsR[index];
                    lineG += this.momentsG[index];
                    lineB += this.momentsB[index];
                    line2 += this.moments[index];
                    area[b] += line;
                    areaR[b] += lineR;
                    areaG[b] += lineG;
                    areaB[b] += lineB;
                    area2[b] += line2;
                    const previousIndex = this.getIndex(r - 1, g, b);
                    this.weights[index] = this.weights[previousIndex] + area[b];
                    this.momentsR[index] = this.momentsR[previousIndex] + areaR[b];
                    this.momentsG[index] = this.momentsG[previousIndex] + areaG[b];
                    this.momentsB[index] = this.momentsB[previousIndex] + areaB[b];
                    this.moments[index] = this.moments[previousIndex] + area2[b];
                }
            }
        }
    }
    createBoxes(maxColors) {
        this.cubes =
            Array.from({ length: maxColors }).fill(0).map(() => new Box());
        const volumeVariance = Array.from({ length: maxColors }).fill(0.0);
        this.cubes[0].r0 = 0;
        this.cubes[0].g0 = 0;
        this.cubes[0].b0 = 0;
        this.cubes[0].r1 = SIDE_LENGTH - 1;
        this.cubes[0].g1 = SIDE_LENGTH - 1;
        this.cubes[0].b1 = SIDE_LENGTH - 1;
        let generatedColorCount = maxColors;
        let next = 0;
        for (let i = 1; i < maxColors; i++) {
            if (this.cut(this.cubes[next], this.cubes[i])) {
                volumeVariance[next] =
                    this.cubes[next].vol > 1 ? this.variance(this.cubes[next]) : 0.0;
                volumeVariance[i] =
                    this.cubes[i].vol > 1 ? this.variance(this.cubes[i]) : 0.0;
            }
            else {
                volumeVariance[next] = 0.0;
                i--;
            }
            next = 0;
            let temp = volumeVariance[0];
            for (let j = 1; j <= i; j++) {
                if (volumeVariance[j] > temp) {
                    temp = volumeVariance[j];
                    next = j;
                }
            }
            if (temp <= 0.0) {
                generatedColorCount = i + 1;
                break;
            }
        }
        return new CreateBoxesResult(maxColors, generatedColorCount);
    }
    createResult(colorCount) {
        const colors = [];
        for (let i = 0; i < colorCount; ++i) {
            const cube = this.cubes[i];
            const weight = this.volume(cube, this.weights);
            if (weight > 0) {
                const r = Math.round(this.volume(cube, this.momentsR) / weight);
                const g = Math.round(this.volume(cube, this.momentsG) / weight);
                const b = Math.round(this.volume(cube, this.momentsB) / weight);
                const color = (255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) |
                    (b & 0x0ff);
                colors.push(color);
            }
        }
        return colors;
    }
    variance(cube) {
        const dr = this.volume(cube, this.momentsR);
        const dg = this.volume(cube, this.momentsG);
        const db = this.volume(cube, this.momentsB);
        const xx = this.moments[this.getIndex(cube.r1, cube.g1, cube.b1)] -
            this.moments[this.getIndex(cube.r1, cube.g1, cube.b0)] -
            this.moments[this.getIndex(cube.r1, cube.g0, cube.b1)] +
            this.moments[this.getIndex(cube.r1, cube.g0, cube.b0)] -
            this.moments[this.getIndex(cube.r0, cube.g1, cube.b1)] +
            this.moments[this.getIndex(cube.r0, cube.g1, cube.b0)] +
            this.moments[this.getIndex(cube.r0, cube.g0, cube.b1)] -
            this.moments[this.getIndex(cube.r0, cube.g0, cube.b0)];
        const hypotenuse = dr * dr + dg * dg + db * db;
        const volume = this.volume(cube, this.weights);
        return xx - hypotenuse / volume;
    }
    cut(one, two) {
        const wholeR = this.volume(one, this.momentsR);
        const wholeG = this.volume(one, this.momentsG);
        const wholeB = this.volume(one, this.momentsB);
        const wholeW = this.volume(one, this.weights);
        const maxRResult = this.maximize(one, directions.RED, one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW);
        const maxGResult = this.maximize(one, directions.GREEN, one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW);
        const maxBResult = this.maximize(one, directions.BLUE, one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
        let direction;
        const maxR = maxRResult.maximum;
        const maxG = maxGResult.maximum;
        const maxB = maxBResult.maximum;
        if (maxR >= maxG && maxR >= maxB) {
            if (maxRResult.cutLocation < 0) {
                return false;
            }
            direction = directions.RED;
        }
        else if (maxG >= maxR && maxG >= maxB) {
            direction = directions.GREEN;
        }
        else {
            direction = directions.BLUE;
        }
        two.r1 = one.r1;
        two.g1 = one.g1;
        two.b1 = one.b1;
        switch (direction) {
            case directions.RED:
                one.r1 = maxRResult.cutLocation;
                two.r0 = one.r1;
                two.g0 = one.g0;
                two.b0 = one.b0;
                break;
            case directions.GREEN:
                one.g1 = maxGResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g1;
                two.b0 = one.b0;
                break;
            case directions.BLUE:
                one.b1 = maxBResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g0;
                two.b0 = one.b1;
                break;
            default:
                throw new Error('unexpected direction ' + direction);
        }
        one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
        two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
        return true;
    }
    maximize(cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
        const bottomR = this.bottom(cube, direction, this.momentsR);
        const bottomG = this.bottom(cube, direction, this.momentsG);
        const bottomB = this.bottom(cube, direction, this.momentsB);
        const bottomW = this.bottom(cube, direction, this.weights);
        let max = 0.0;
        let cut = -1;
        let halfR = 0;
        let halfG = 0;
        let halfB = 0;
        let halfW = 0;
        for (let i = first; i < last; i++) {
            halfR = bottomR + this.top(cube, direction, i, this.momentsR);
            halfG = bottomG + this.top(cube, direction, i, this.momentsG);
            halfB = bottomB + this.top(cube, direction, i, this.momentsB);
            halfW = bottomW + this.top(cube, direction, i, this.weights);
            if (halfW === 0) {
                continue;
            }
            let tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1.0;
            let tempDenominator = halfW * 1.0;
            let temp = tempNumerator / tempDenominator;
            halfR = wholeR - halfR;
            halfG = wholeG - halfG;
            halfB = wholeB - halfB;
            halfW = wholeW - halfW;
            if (halfW === 0) {
                continue;
            }
            tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1.0;
            tempDenominator = halfW * 1.0;
            temp += tempNumerator / tempDenominator;
            if (temp > max) {
                max = temp;
                cut = i;
            }
        }
        return new MaximizeResult(cut, max);
    }
    volume(cube, moment) {
        return (moment[this.getIndex(cube.r1, cube.g1, cube.b1)] -
            moment[this.getIndex(cube.r1, cube.g1, cube.b0)] -
            moment[this.getIndex(cube.r1, cube.g0, cube.b1)] +
            moment[this.getIndex(cube.r1, cube.g0, cube.b0)] -
            moment[this.getIndex(cube.r0, cube.g1, cube.b1)] +
            moment[this.getIndex(cube.r0, cube.g1, cube.b0)] +
            moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
            moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
    }
    bottom(cube, direction, moment) {
        switch (direction) {
            case directions.RED:
                return (-moment[this.getIndex(cube.r0, cube.g1, cube.b1)] +
                    moment[this.getIndex(cube.r0, cube.g1, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            case directions.GREEN:
                return (-moment[this.getIndex(cube.r1, cube.g0, cube.b1)] +
                    moment[this.getIndex(cube.r1, cube.g0, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            case directions.BLUE:
                return (-moment[this.getIndex(cube.r1, cube.g1, cube.b0)] +
                    moment[this.getIndex(cube.r1, cube.g0, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g1, cube.b0)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            default:
                throw new Error('unexpected direction $direction');
        }
    }
    top(cube, direction, position, moment) {
        switch (direction) {
            case directions.RED:
                return (moment[this.getIndex(position, cube.g1, cube.b1)] -
                    moment[this.getIndex(position, cube.g1, cube.b0)] -
                    moment[this.getIndex(position, cube.g0, cube.b1)] +
                    moment[this.getIndex(position, cube.g0, cube.b0)]);
            case directions.GREEN:
                return (moment[this.getIndex(cube.r1, position, cube.b1)] -
                    moment[this.getIndex(cube.r1, position, cube.b0)] -
                    moment[this.getIndex(cube.r0, position, cube.b1)] +
                    moment[this.getIndex(cube.r0, position, cube.b0)]);
            case directions.BLUE:
                return (moment[this.getIndex(cube.r1, cube.g1, position)] -
                    moment[this.getIndex(cube.r1, cube.g0, position)] -
                    moment[this.getIndex(cube.r0, cube.g1, position)] +
                    moment[this.getIndex(cube.r0, cube.g0, position)]);
            default:
                throw new Error('unexpected direction $direction');
        }
    }
    getIndex(r, g, b) {
        return (r << (INDEX_BITS * 2)) + (r << (INDEX_BITS + 1)) + r +
            (g << INDEX_BITS) + g + b;
    }
}
/**
 * Keeps track of the state of each box created as the Wu  quantization
 * algorithm progresses through dividing the image's pixels as plotted in RGB.
 */
class Box {
    constructor(r0 = 0, r1 = 0, g0 = 0, g1 = 0, b0 = 0, b1 = 0, vol = 0) {
        this.r0 = r0;
        this.r1 = r1;
        this.g0 = g0;
        this.g1 = g1;
        this.b0 = b0;
        this.b1 = b1;
        this.vol = vol;
    }
}
/**
 * Represents final result of Wu algorithm.
 */
class CreateBoxesResult {
    /**
     * @param requestedCount how many colors the caller asked to be returned from
     *     quantization.
     * @param resultCount the actual number of colors achieved from quantization.
     *     May be lower than the requested count.
     */
    constructor(requestedCount, resultCount) {
        this.requestedCount = requestedCount;
        this.resultCount = resultCount;
    }
}
/**
 * Represents the result of calculating where to cut an existing box in such
 * a way to maximize variance between the two new boxes created by a cut.
 */
class MaximizeResult {
    constructor(cutLocation, maximum) {
        this.cutLocation = cutLocation;
        this.maximum = maximum;
    }
}
//# sourceMappingURL=quantizer_wu.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicScheme: () => (/* binding */ DynamicScheme)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Constructed by a set of values representing the current UI state (such as
 * whether or not its dark theme, what the theme style is, etc.), and
 * provides a set of TonalPalettes that can create colors that fit in
 * with the theme style. Used by DynamicColor to resolve into a color.
 */
class DynamicScheme {
    constructor(args) {
        this.sourceColorArgb = args.sourceColorArgb;
        this.variant = args.variant;
        this.contrastLevel = args.contrastLevel;
        this.isDark = args.isDark;
        this.sourceColorHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(args.sourceColorArgb);
        this.primaryPalette = args.primaryPalette;
        this.secondaryPalette = args.secondaryPalette;
        this.tertiaryPalette = args.tertiaryPalette;
        this.neutralPalette = args.neutralPalette;
        this.neutralVariantPalette = args.neutralVariantPalette;
        this.errorPalette = _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(25.0, 84.0);
    }
    /**
     * Support design spec'ing Dynamic Color by schemes that specify hue
     * rotations that should be applied at certain breakpoints.
     * @param sourceColor the source color of the theme, in HCT.
     * @param hues The "breakpoints", i.e. the hues at which a rotation should
     * be apply.
     * @param rotations The rotation that should be applied when source color's
     * hue is >= the same index in hues array, and <= the hue at the next index
     * in hues array.
     */
    static getRotatedHue(sourceColor, hues, rotations) {
        const sourceHue = sourceColor.hue;
        if (hues.length !== rotations.length) {
            throw new Error(`mismatch between hue length ${hues.length} & rotations ${rotations.length}`);
        }
        if (rotations.length === 1) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(sourceColor.hue + rotations[0]);
        }
        const size = hues.length;
        for (let i = 0; i <= size - 2; i++) {
            const thisHue = hues[i];
            const nextHue = hues[i + 1];
            if (thisHue < sourceHue && sourceHue < nextHue) {
                return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(sourceHue + rotations[i]);
            }
        }
        // If this statement executes, something is wrong, there should have been a
        // rotation found using the arrays.
        return sourceHue;
    }
}
//# sourceMappingURL=dynamic_scheme.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheme: () => (/* binding */ Scheme)
/* harmony export */ });
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.

/**
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
class Scheme {
    get primary() {
        return this.props.primary;
    }
    get onPrimary() {
        return this.props.onPrimary;
    }
    get primaryContainer() {
        return this.props.primaryContainer;
    }
    get onPrimaryContainer() {
        return this.props.onPrimaryContainer;
    }
    get secondary() {
        return this.props.secondary;
    }
    get onSecondary() {
        return this.props.onSecondary;
    }
    get secondaryContainer() {
        return this.props.secondaryContainer;
    }
    get onSecondaryContainer() {
        return this.props.onSecondaryContainer;
    }
    get tertiary() {
        return this.props.tertiary;
    }
    get onTertiary() {
        return this.props.onTertiary;
    }
    get tertiaryContainer() {
        return this.props.tertiaryContainer;
    }
    get onTertiaryContainer() {
        return this.props.onTertiaryContainer;
    }
    get error() {
        return this.props.error;
    }
    get onError() {
        return this.props.onError;
    }
    get errorContainer() {
        return this.props.errorContainer;
    }
    get onErrorContainer() {
        return this.props.onErrorContainer;
    }
    get background() {
        return this.props.background;
    }
    get onBackground() {
        return this.props.onBackground;
    }
    get surface() {
        return this.props.surface;
    }
    get onSurface() {
        return this.props.onSurface;
    }
    get surfaceVariant() {
        return this.props.surfaceVariant;
    }
    get onSurfaceVariant() {
        return this.props.onSurfaceVariant;
    }
    get outline() {
        return this.props.outline;
    }
    get outlineVariant() {
        return this.props.outlineVariant;
    }
    get shadow() {
        return this.props.shadow;
    }
    get scrim() {
        return this.props.scrim;
    }
    get inverseSurface() {
        return this.props.inverseSurface;
    }
    get inverseOnSurface() {
        return this.props.inverseOnSurface;
    }
    get inversePrimary() {
        return this.props.inversePrimary;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        return Scheme.lightFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        return Scheme.darkFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material content color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        return Scheme.lightFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material content color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        return Scheme.darkFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb));
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(40),
            onPrimary: core.a1.tone(100),
            primaryContainer: core.a1.tone(90),
            onPrimaryContainer: core.a1.tone(10),
            secondary: core.a2.tone(40),
            onSecondary: core.a2.tone(100),
            secondaryContainer: core.a2.tone(90),
            onSecondaryContainer: core.a2.tone(10),
            tertiary: core.a3.tone(40),
            onTertiary: core.a3.tone(100),
            tertiaryContainer: core.a3.tone(90),
            onTertiaryContainer: core.a3.tone(10),
            error: core.error.tone(40),
            onError: core.error.tone(100),
            errorContainer: core.error.tone(90),
            onErrorContainer: core.error.tone(10),
            background: core.n1.tone(99),
            onBackground: core.n1.tone(10),
            surface: core.n1.tone(99),
            onSurface: core.n1.tone(10),
            surfaceVariant: core.n2.tone(90),
            onSurfaceVariant: core.n2.tone(30),
            outline: core.n2.tone(50),
            outlineVariant: core.n2.tone(80),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(20),
            inverseOnSurface: core.n1.tone(95),
            inversePrimary: core.a1.tone(80)
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(80),
            onPrimary: core.a1.tone(20),
            primaryContainer: core.a1.tone(30),
            onPrimaryContainer: core.a1.tone(90),
            secondary: core.a2.tone(80),
            onSecondary: core.a2.tone(20),
            secondaryContainer: core.a2.tone(30),
            onSecondaryContainer: core.a2.tone(90),
            tertiary: core.a3.tone(80),
            onTertiary: core.a3.tone(20),
            tertiaryContainer: core.a3.tone(30),
            onTertiaryContainer: core.a3.tone(90),
            error: core.error.tone(80),
            onError: core.error.tone(20),
            errorContainer: core.error.tone(30),
            onErrorContainer: core.error.tone(80),
            background: core.n1.tone(10),
            onBackground: core.n1.tone(90),
            surface: core.n1.tone(10),
            onSurface: core.n1.tone(90),
            surfaceVariant: core.n2.tone(30),
            onSurfaceVariant: core.n2.tone(80),
            outline: core.n2.tone(60),
            outlineVariant: core.n2.tone(30),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(90),
            inverseOnSurface: core.n1.tone(20),
            inversePrimary: core.a1.tone(40)
        });
    }
    constructor(props) {
        this.props = props;
    }
    toJSON() {
        return {
            ...this.props
        };
    }
}
//# sourceMappingURL=scheme.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_android.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_android.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeAndroid: () => (/* binding */ SchemeAndroid)
/* harmony export */ });
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents an Android 12 color scheme, a mapping of color roles to colors.
 */
class SchemeAndroid {
    get colorAccentPrimary() {
        return this.props.colorAccentPrimary;
    }
    get colorAccentPrimaryVariant() {
        return this.props.colorAccentPrimaryVariant;
    }
    get colorAccentSecondary() {
        return this.props.colorAccentSecondary;
    }
    get colorAccentSecondaryVariant() {
        return this.props.colorAccentSecondaryVariant;
    }
    get colorAccentTertiary() {
        return this.props.colorAccentTertiary;
    }
    get colorAccentTertiaryVariant() {
        return this.props.colorAccentTertiaryVariant;
    }
    get textColorPrimary() {
        return this.props.textColorPrimary;
    }
    get textColorSecondary() {
        return this.props.textColorSecondary;
    }
    get textColorTertiary() {
        return this.props.textColorTertiary;
    }
    get textColorPrimaryInverse() {
        return this.props.textColorPrimaryInverse;
    }
    get textColorSecondaryInverse() {
        return this.props.textColorSecondaryInverse;
    }
    get textColorTertiaryInverse() {
        return this.props.textColorTertiaryInverse;
    }
    get colorBackground() {
        return this.props.colorBackground;
    }
    get colorBackgroundFloating() {
        return this.props.colorBackgroundFloating;
    }
    get colorSurface() {
        return this.props.colorSurface;
    }
    get colorSurfaceVariant() {
        return this.props.colorSurfaceVariant;
    }
    get colorSurfaceHighlight() {
        return this.props.colorSurfaceHighlight;
    }
    get surfaceHeader() {
        return this.props.surfaceHeader;
    }
    get underSurface() {
        return this.props.underSurface;
    }
    get offState() {
        return this.props.offState;
    }
    get accentSurface() {
        return this.props.accentSurface;
    }
    get textPrimaryOnAccent() {
        return this.props.textPrimaryOnAccent;
    }
    get textSecondaryOnAccent() {
        return this.props.textSecondaryOnAccent;
    }
    get volumeBackground() {
        return this.props.volumeBackground;
    }
    get scrim() {
        return this.props.scrim;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb);
        return SchemeAndroid.lightFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb);
        return SchemeAndroid.darkFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Android color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb);
        return SchemeAndroid.lightFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Android color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb);
        return SchemeAndroid.darkFromCorePalette(core);
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new SchemeAndroid({
            colorAccentPrimary: core.a1.tone(90),
            colorAccentPrimaryVariant: core.a1.tone(40),
            colorAccentSecondary: core.a2.tone(90),
            colorAccentSecondaryVariant: core.a2.tone(40),
            colorAccentTertiary: core.a3.tone(90),
            colorAccentTertiaryVariant: core.a3.tone(40),
            textColorPrimary: core.n1.tone(10),
            textColorSecondary: core.n2.tone(30),
            textColorTertiary: core.n2.tone(50),
            textColorPrimaryInverse: core.n1.tone(95),
            textColorSecondaryInverse: core.n1.tone(80),
            textColorTertiaryInverse: core.n1.tone(60),
            colorBackground: core.n1.tone(95),
            colorBackgroundFloating: core.n1.tone(98),
            colorSurface: core.n1.tone(98),
            colorSurfaceVariant: core.n1.tone(90),
            colorSurfaceHighlight: core.n1.tone(100),
            surfaceHeader: core.n1.tone(90),
            underSurface: core.n1.tone(0),
            offState: core.n1.tone(20),
            accentSurface: core.a2.tone(95),
            textPrimaryOnAccent: core.n1.tone(10),
            textSecondaryOnAccent: core.n2.tone(30),
            volumeBackground: core.n1.tone(25),
            scrim: core.n1.tone(80),
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new SchemeAndroid({
            colorAccentPrimary: core.a1.tone(90),
            colorAccentPrimaryVariant: core.a1.tone(70),
            colorAccentSecondary: core.a2.tone(90),
            colorAccentSecondaryVariant: core.a2.tone(70),
            colorAccentTertiary: core.a3.tone(90),
            colorAccentTertiaryVariant: core.a3.tone(70),
            textColorPrimary: core.n1.tone(95),
            textColorSecondary: core.n2.tone(80),
            textColorTertiary: core.n2.tone(60),
            textColorPrimaryInverse: core.n1.tone(10),
            textColorSecondaryInverse: core.n1.tone(30),
            textColorTertiaryInverse: core.n1.tone(50),
            colorBackground: core.n1.tone(10),
            colorBackgroundFloating: core.n1.tone(10),
            colorSurface: core.n1.tone(20),
            colorSurfaceVariant: core.n1.tone(30),
            colorSurfaceHighlight: core.n1.tone(35),
            surfaceHeader: core.n1.tone(30),
            underSurface: core.n1.tone(0),
            offState: core.n1.tone(20),
            accentSurface: core.a2.tone(95),
            textPrimaryOnAccent: core.n1.tone(10),
            textSecondaryOnAccent: core.n2.tone(30),
            volumeBackground: core.n1.tone(25),
            scrim: core.n1.tone(80),
        });
    }
    constructor(props) {
        this.props = props;
    }
    toJSON() {
        return { ...this.props };
    }
}
//# sourceMappingURL=scheme_android.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_content.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_content.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeContent: () => (/* binding */ SchemeContent)
/* harmony export */ });
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temperature/temperature_cache.js */ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * A scheme that places the source color in `Scheme.primaryContainer`.
 *
 * Primary Container is the source color, adjusted for color relativity.
 * It maintains constant appearance in light mode and dark mode.
 * This adds ~5 tone in light mode, and subtracts ~5 tone in dark mode.
 * Tertiary Container is the complement to the source color, using
 * `TemperatureCache`. It also maintains constant appearance.
 */
class SchemeContent extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_4__.Variant.CONTENT,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, Math.max(sourceColorHct.chroma - 32.0, sourceColorHct.chroma * 0.5)),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromInt(_dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__.DislikeAnalyzer
                .fixIfDisliked(new _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__.TemperatureCache(sourceColorHct).analogous(3, 6)[2])
                .toInt()),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0 + 4.0),
        });
    }
}
//# sourceMappingURL=scheme_content.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_expressive.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_expressive.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeExpressive: () => (/* binding */ SchemeExpressive)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * A Dynamic Color theme that is intentionally detached from the source color.
 */
class SchemeExpressive extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.EXPRESSIVE,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesDouble(sourceColorHct.hue + 240.0), 40.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.secondaryRotations), 24.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.tertiaryRotations), 32.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12.0),
        });
    }
}
/**
 * Hues (in degrees) used at breakpoints such that designers can specify a
 * hue rotation that occurs at a given break point.
 */
SchemeExpressive.hues = [
    0.0,
    21.0,
    51.0,
    121.0,
    151.0,
    191.0,
    271.0,
    321.0,
    360.0,
];
/**
 * Hue rotations (in degrees) of the Secondary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeExpressive.secondaryRotations = [
    45.0,
    95.0,
    45.0,
    20.0,
    45.0,
    90.0,
    45.0,
    45.0,
    45.0,
];
/**
 * Hue rotations (in degrees) of the Tertiary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeExpressive.tertiaryRotations = [
    120.0,
    120.0,
    20.0,
    45.0,
    20.0,
    15.0,
    20.0,
    120.0,
    120.0,
];
//# sourceMappingURL=scheme_expressive.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeFidelity: () => (/* binding */ SchemeFidelity)
/* harmony export */ });
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temperature/temperature_cache.js */ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * A scheme that places the source color in `Scheme.primaryContainer`.
 *
 * Primary Container is the source color, adjusted for color relativity.
 * It maintains constant appearance in light mode and dark mode.
 * This adds ~5 tone in light mode, and subtracts ~5 tone in dark mode.
 * Tertiary Container is the complement to the source color, using
 * `TemperatureCache`. It also maintains constant appearance.
 */
class SchemeFidelity extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_4__.Variant.FIDELITY,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, Math.max(sourceColorHct.chroma - 32.0, sourceColorHct.chroma * 0.5)),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromInt(_dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__.DislikeAnalyzer
                .fixIfDisliked(new _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__.TemperatureCache(sourceColorHct).complement)
                .toInt()),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0 + 4.0),
        });
    }
}
//# sourceMappingURL=scheme_fidelity.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeMonochrome: () => (/* binding */ SchemeMonochrome)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/** A Dynamic Color theme that is grayscale. */
class SchemeMonochrome extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_2__.Variant.MONOCHROME,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
        });
    }
}
//# sourceMappingURL=scheme_monochrome.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_neutral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_neutral.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeNeutral: () => (/* binding */ SchemeNeutral)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/** A Dynamic Color theme that is near grayscale. */
class SchemeNeutral extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_2__.Variant.NEUTRAL,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2.0),
        });
    }
}
//# sourceMappingURL=scheme_neutral.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeTonalSpot: () => (/* binding */ SchemeTonalSpot)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * A Dynamic Color theme with low to medium colorfulness and a Tertiary
 * TonalPalette with a hue related to the source color.
 *
 * The default Material You theme on Android 12 and 13.
 */
class SchemeTonalSpot extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.TONAL_SPOT,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 36.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesDouble(sourceColorHct.hue + 60.0), 24.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 6.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8.0),
        });
    }
}
//# sourceMappingURL=scheme_tonal_spot.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeVibrant: () => (/* binding */ SchemeVibrant)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * A Dynamic Color theme that maxes out colorfulness at each position in the
 * Primary Tonal Palette.
 */
class SchemeVibrant extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_2__.Variant.VIBRANT,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.secondaryRotations), 24.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.tertiaryRotations), 32.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12.0),
        });
    }
}
/**
 * Hues (in degrees) used at breakpoints such that designers can specify a
 * hue rotation that occurs at a given break point.
 */
SchemeVibrant.hues = [
    0.0,
    41.0,
    61.0,
    101.0,
    131.0,
    181.0,
    251.0,
    301.0,
    360.0,
];
/**
 * Hue rotations (in degrees) of the Secondary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeVibrant.secondaryRotations = [
    18.0,
    15.0,
    10.0,
    12.0,
    15.0,
    18.0,
    15.0,
    12.0,
    12.0,
];
/**
 * Hue rotations (in degrees) of the Tertiary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeVibrant.tertiaryRotations = [
    35.0,
    30.0,
    20.0,
    25.0,
    30.0,
    35.0,
    30.0,
    25.0,
    25.0,
];
//# sourceMappingURL=scheme_vibrant.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/variant.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/variant.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Variant: () => (/* binding */ Variant)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Set of themes supported by Dynamic Color.
 * Instantiate the corresponding subclass, ex. SchemeTonalSpot, to create
 * colors corresponding to the theme.
 */
var Variant;
(function (Variant) {
    Variant[Variant["MONOCHROME"] = 0] = "MONOCHROME";
    Variant[Variant["NEUTRAL"] = 1] = "NEUTRAL";
    Variant[Variant["TONAL_SPOT"] = 2] = "TONAL_SPOT";
    Variant[Variant["VIBRANT"] = 3] = "VIBRANT";
    Variant[Variant["EXPRESSIVE"] = 4] = "EXPRESSIVE";
    Variant[Variant["FIDELITY"] = 5] = "FIDELITY";
    Variant[Variant["CONTENT"] = 6] = "CONTENT";
    Variant[Variant["RAINBOW"] = 7] = "RAINBOW";
    Variant[Variant["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));
//# sourceMappingURL=variant.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/score/score.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/score/score.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Score: () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const SCORE_OPTION_DEFAULTS = {
    desired: 4,
    fallbackColorARGB: 0xff4285f4,
    filter: true, // Avoid unsuitable colors.
};
function compare(a, b) {
    if (a.score > b.score) {
        return -1;
    }
    else if (a.score < b.score) {
        return 1;
    }
    return 0;
}
/**
 *  Given a large set of colors, remove colors that are unsuitable for a UI
 *  theme, and rank the rest based on suitability.
 *
 *  Enables use of a high cluster count for image quantization, thus ensuring
 *  colors aren't muddied, while curating the high cluster count to a much
 *  smaller number of appropriate choices.
 */
class Score {
    constructor() { }
    /**
     * Given a map with keys of colors and values of how often the color appears,
     * rank the colors based on suitability for being used for a UI theme.
     *
     * @param colorsToPopulation map with keys of colors and values of how often
     *     the color appears, usually from a source image.
     * @param {ScoreOptions} options optional parameters.
     * @return Colors sorted by suitability for a UI theme. The most suitable
     *     color is the first item, the least suitable is the last. There will
     *     always be at least one color returned. If all the input colors
     *     were not suitable for a theme, a default fallback color will be
     *     provided, Google Blue.
     */
    static score(colorsToPopulation, options) {
        const { desired, fallbackColorARGB, filter } = { ...SCORE_OPTION_DEFAULTS, ...options };
        // Get the HCT color for each Argb value, while finding the per hue count and
        // total count.
        const colorsHct = [];
        const huePopulation = new Array(360).fill(0);
        let populationSum = 0;
        for (const [argb, population] of colorsToPopulation.entries()) {
            const hct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
            colorsHct.push(hct);
            const hue = Math.floor(hct.hue);
            huePopulation[hue] += population;
            populationSum += population;
        }
        // Hues with more usage in neighboring 30 degree slice get a larger number.
        const hueExcitedProportions = new Array(360).fill(0.0);
        for (let hue = 0; hue < 360; hue++) {
            const proportion = huePopulation[hue] / populationSum;
            for (let i = hue - 14; i < hue + 16; i++) {
                const neighborHue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesInt(i);
                hueExcitedProportions[neighborHue] += proportion;
            }
        }
        // Scores each HCT color based on usage and chroma, while optionally
        // filtering out values that do not have enough chroma or usage.
        const scoredHct = new Array();
        for (const hct of colorsHct) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesInt(Math.round(hct.hue));
            const proportion = hueExcitedProportions[hue];
            if (filter && (hct.chroma < Score.CUTOFF_CHROMA || proportion <= Score.CUTOFF_EXCITED_PROPORTION)) {
                continue;
            }
            const proportionScore = proportion * 100.0 * Score.WEIGHT_PROPORTION;
            const chromaWeight = hct.chroma < Score.TARGET_CHROMA ? Score.WEIGHT_CHROMA_BELOW : Score.WEIGHT_CHROMA_ABOVE;
            const chromaScore = (hct.chroma - Score.TARGET_CHROMA) * chromaWeight;
            const score = proportionScore + chromaScore;
            scoredHct.push({ hct, score });
        }
        // Sorted so that colors with higher scores come first.
        scoredHct.sort(compare);
        // Iterates through potential hue differences in degrees in order to select
        // the colors with the largest distribution of hues possible. Starting at
        // 90 degrees(maximum difference for 4 colors) then decreasing down to a
        // 15 degree minimum.
        const chosenColors = [];
        for (let differenceDegrees = 90; differenceDegrees >= 15; differenceDegrees--) {
            chosenColors.length = 0;
            for (const { hct } of scoredHct) {
                const duplicateHue = chosenColors.find(chosenHct => {
                    return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees;
                });
                if (!duplicateHue) {
                    chosenColors.push(hct);
                }
                if (chosenColors.length >= desired)
                    break;
            }
            if (chosenColors.length >= desired)
                break;
        }
        const colors = [];
        if (chosenColors.length === 0) {
            colors.push(fallbackColorARGB);
        }
        for (const chosenHct of chosenColors) {
            colors.push(chosenHct.toInt());
        }
        return colors;
    }
}
Score.TARGET_CHROMA = 48.0; // A1 Chroma
Score.WEIGHT_PROPORTION = 0.7;
Score.WEIGHT_CHROMA_ABOVE = 0.3;
Score.WEIGHT_CHROMA_BELOW = 0.1;
Score.CUTOFF_CHROMA = 5.0;
Score.CUTOFF_EXCITED_PROPORTION = 0.01;
//# sourceMappingURL=score.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/temperature/temperature_cache.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemperatureCache: () => (/* binding */ TemperatureCache)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.



/**
 * Design utilities using color temperature theory.
 *
 * Analogous colors, complementary color, and cache to efficiently, lazily,
 * generate data for calculations when needed.
 */
class TemperatureCache {
    constructor(input) {
        this.input = input;
        this.hctsByTempCache = [];
        this.hctsByHueCache = [];
        this.tempsByHctCache = new Map();
        this.inputRelativeTemperatureCache = -1.0;
        this.complementCache = null;
    }
    get hctsByTemp() {
        if (this.hctsByTempCache.length > 0) {
            return this.hctsByTempCache;
        }
        const hcts = this.hctsByHue.concat([this.input]);
        const temperaturesByHct = this.tempsByHct;
        hcts.sort((a, b) => temperaturesByHct.get(a) - temperaturesByHct.get(b));
        this.hctsByTempCache = hcts;
        return hcts;
    }
    get warmest() {
        return this.hctsByTemp[this.hctsByTemp.length - 1];
    }
    get coldest() {
        return this.hctsByTemp[0];
    }
    /**
     * A set of colors with differing hues, equidistant in temperature.
     *
     * In art, this is usually described as a set of 5 colors on a color wheel
     * divided into 12 sections. This method allows provision of either of those
     * values.
     *
     * Behavior is undefined when [count] or [divisions] is 0.
     * When divisions < count, colors repeat.
     *
     * [count] The number of colors to return, includes the input color.
     * [divisions] The number of divisions on the color wheel.
     */
    analogous(count = 5, divisions = 12) {
        const startHue = Math.round(this.input.hue);
        const startHct = this.hctsByHue[startHue];
        let lastTemp = this.relativeTemperature(startHct);
        const allColors = [startHct];
        let absoluteTotalTempDelta = 0.0;
        for (let i = 0; i < 360; i++) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesInt(startHue + i);
            const hct = this.hctsByHue[hue];
            const temp = this.relativeTemperature(hct);
            const tempDelta = Math.abs(temp - lastTemp);
            lastTemp = temp;
            absoluteTotalTempDelta += tempDelta;
        }
        let hueAddend = 1;
        const tempStep = absoluteTotalTempDelta / divisions;
        let totalTempDelta = 0.0;
        lastTemp = this.relativeTemperature(startHct);
        while (allColors.length < divisions) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesInt(startHue + hueAddend);
            const hct = this.hctsByHue[hue];
            const temp = this.relativeTemperature(hct);
            const tempDelta = Math.abs(temp - lastTemp);
            totalTempDelta += tempDelta;
            const desiredTotalTempDeltaForIndex = allColors.length * tempStep;
            let indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
            let indexAddend = 1;
            // Keep adding this hue to the answers until its temperature is
            // insufficient. This ensures consistent behavior when there aren't
            // [divisions] discrete steps between 0 and 360 in hue with [tempStep]
            // delta in temperature between them.
            //
            // For example, white and black have no analogues: there are no other
            // colors at T100/T0. Therefore, they should just be added to the array
            // as answers.
            while (indexSatisfied && allColors.length < divisions) {
                allColors.push(hct);
                const desiredTotalTempDeltaForIndex = ((allColors.length + indexAddend) * tempStep);
                indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
                indexAddend++;
            }
            lastTemp = temp;
            hueAddend++;
            if (hueAddend > 360) {
                while (allColors.length < divisions) {
                    allColors.push(hct);
                }
                break;
            }
        }
        const answers = [this.input];
        // First, generate analogues from rotating counter-clockwise.
        const increaseHueCount = Math.floor((count - 1) / 2.0);
        for (let i = 1; i < (increaseHueCount + 1); i++) {
            let index = 0 - i;
            while (index < 0) {
                index = allColors.length + index;
            }
            if (index >= allColors.length) {
                index = index % allColors.length;
            }
            answers.splice(0, 0, allColors[index]);
        }
        // Second, generate analogues from rotating clockwise.
        const decreaseHueCount = count - increaseHueCount - 1;
        for (let i = 1; i < (decreaseHueCount + 1); i++) {
            let index = i;
            while (index < 0) {
                index = allColors.length + index;
            }
            if (index >= allColors.length) {
                index = index % allColors.length;
            }
            answers.push(allColors[index]);
        }
        return answers;
    }
    /**
     * A color that complements the input color aesthetically.
     *
     * In art, this is usually described as being across the color wheel.
     * History of this shows intent as a color that is just as cool-warm as the
     * input color is warm-cool.
     */
    get complement() {
        if (this.complementCache != null) {
            return this.complementCache;
        }
        const coldestHue = this.coldest.hue;
        const coldestTemp = this.tempsByHct.get(this.coldest);
        const warmestHue = this.warmest.hue;
        const warmestTemp = this.tempsByHct.get(this.warmest);
        const range = warmestTemp - coldestTemp;
        const startHueIsColdestToWarmest = TemperatureCache.isBetween(this.input.hue, coldestHue, warmestHue);
        const startHue = startHueIsColdestToWarmest ? warmestHue : coldestHue;
        const endHue = startHueIsColdestToWarmest ? coldestHue : warmestHue;
        const directionOfRotation = 1.0;
        let smallestError = 1000.0;
        let answer = this.hctsByHue[Math.round(this.input.hue)];
        const complementRelativeTemp = 1.0 - this.inputRelativeTemperature;
        // Find the color in the other section, closest to the inverse percentile
        // of the input color. This is the complement.
        for (let hueAddend = 0.0; hueAddend <= 360.0; hueAddend += 1.0) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(startHue + directionOfRotation * hueAddend);
            if (!TemperatureCache.isBetween(hue, startHue, endHue)) {
                continue;
            }
            const possibleAnswer = this.hctsByHue[Math.round(hue)];
            const relativeTemp = (this.tempsByHct.get(possibleAnswer) - coldestTemp) / range;
            const error = Math.abs(complementRelativeTemp - relativeTemp);
            if (error < smallestError) {
                smallestError = error;
                answer = possibleAnswer;
            }
        }
        this.complementCache = answer;
        return this.complementCache;
    }
    /**
     * Temperature relative to all colors with the same chroma and tone.
     * Value on a scale from 0 to 1.
     */
    relativeTemperature(hct) {
        const range = this.tempsByHct.get(this.warmest) - this.tempsByHct.get(this.coldest);
        const differenceFromColdest = this.tempsByHct.get(hct) - this.tempsByHct.get(this.coldest);
        // Handle when there's no difference in temperature between warmest and
        // coldest: for example, at T100, only one color is available, white.
        if (range === 0.0) {
            return 0.5;
        }
        return differenceFromColdest / range;
    }
    /** Relative temperature of the input color. See [relativeTemperature]. */
    get inputRelativeTemperature() {
        if (this.inputRelativeTemperatureCache >= 0.0) {
            return this.inputRelativeTemperatureCache;
        }
        this.inputRelativeTemperatureCache = this.relativeTemperature(this.input);
        return this.inputRelativeTemperatureCache;
    }
    /** A Map with keys of HCTs in [hctsByTemp], values of raw temperature. */
    get tempsByHct() {
        if (this.tempsByHctCache.size > 0) {
            return this.tempsByHctCache;
        }
        const allHcts = this.hctsByHue.concat([this.input]);
        const temperaturesByHct = new Map();
        for (const e of allHcts) {
            temperaturesByHct.set(e, TemperatureCache.rawTemperature(e));
        }
        this.tempsByHctCache = temperaturesByHct;
        return temperaturesByHct;
    }
    /**
     * HCTs for all hues, with the same chroma/tone as the input.
     * Sorted ascending, hue 0 to 360.
     */
    get hctsByHue() {
        if (this.hctsByHueCache.length > 0) {
            return this.hctsByHueCache;
        }
        const hcts = [];
        for (let hue = 0.0; hue <= 360.0; hue += 1.0) {
            const colorAtHue = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, this.input.chroma, this.input.tone);
            hcts.push(colorAtHue);
        }
        this.hctsByHueCache = hcts;
        return this.hctsByHueCache;
    }
    /** Determines if an angle is between two other angles, rotating clockwise. */
    static isBetween(angle, a, b) {
        if (a < b) {
            return a <= angle && angle <= b;
        }
        return a <= angle || angle <= b;
    }
    /**
     * Value representing cool-warm factor of a color.
     * Values below 0 are considered cool, above, warm.
     *
     * Color science has researched emotion and harmony, which art uses to select
     * colors. Warm-cool is the foundation of analogous and complementary colors.
     * See:
     * - Li-Chen Ou's Chapter 19 in Handbook of Color Psychology (2015).
     * - Josef Albers' Interaction of Color chapters 19 and 21.
     *
     * Implementation of Ou, Woodcock and Wright's algorithm, which uses
     * L*a*b* / LCH color space.
     * Return value has these properties:
     * - Values below 0 are cool, above 0 are warm.
     * - Lower bound: -0.52 - (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
     *   Assuming max of 130 chroma, -9.66.
     * - Upper bound: -0.52 + (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
     *   Assuming max of 130 chroma, 8.61.
     */
    static rawTemperature(color) {
        const lab = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_1__.labFromArgb(color.toInt());
        const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(Math.atan2(lab[2], lab[1]) * 180.0 / Math.PI);
        const chroma = Math.sqrt((lab[1] * lab[1]) + (lab[2] * lab[2]));
        const temperature = -0.5 +
            0.02 * Math.pow(chroma, 1.07) *
                Math.cos(_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(hue - 50.0) * Math.PI / 180.0);
        return temperature;
    }
}
//# sourceMappingURL=temperature_cache.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/color_utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/color_utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alphaFromArgb: () => (/* binding */ alphaFromArgb),
/* harmony export */   argbFromLab: () => (/* binding */ argbFromLab),
/* harmony export */   argbFromLinrgb: () => (/* binding */ argbFromLinrgb),
/* harmony export */   argbFromLstar: () => (/* binding */ argbFromLstar),
/* harmony export */   argbFromRgb: () => (/* binding */ argbFromRgb),
/* harmony export */   argbFromRgba: () => (/* binding */ argbFromRgba),
/* harmony export */   argbFromXyz: () => (/* binding */ argbFromXyz),
/* harmony export */   blueFromArgb: () => (/* binding */ blueFromArgb),
/* harmony export */   delinearized: () => (/* binding */ delinearized),
/* harmony export */   greenFromArgb: () => (/* binding */ greenFromArgb),
/* harmony export */   isOpaque: () => (/* binding */ isOpaque),
/* harmony export */   labFromArgb: () => (/* binding */ labFromArgb),
/* harmony export */   linearized: () => (/* binding */ linearized),
/* harmony export */   lstarFromArgb: () => (/* binding */ lstarFromArgb),
/* harmony export */   lstarFromY: () => (/* binding */ lstarFromY),
/* harmony export */   redFromArgb: () => (/* binding */ redFromArgb),
/* harmony export */   rgbaFromArgb: () => (/* binding */ rgbaFromArgb),
/* harmony export */   whitePointD65: () => (/* binding */ whitePointD65),
/* harmony export */   xyzFromArgb: () => (/* binding */ xyzFromArgb),
/* harmony export */   yFromLstar: () => (/* binding */ yFromLstar)
/* harmony export */ });
/* harmony import */ var _math_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.

/**
 * Color science utilities.
 *
 * Utility methods for color science constants and color space
 * conversions that aren't HCT or CAM16.
 */
const SRGB_TO_XYZ = [
    [0.41233895, 0.35762064, 0.18051042],
    [0.2126, 0.7152, 0.0722],
    [0.01932141, 0.11916382, 0.95034478],
];
const XYZ_TO_SRGB = [
    [
        3.2413774792388685,
        -1.5376652402851851,
        -0.49885366846268053,
    ],
    [
        -0.9691452513005321,
        1.8758853451067872,
        0.04156585616912061,
    ],
    [
        0.05562093689691305,
        -0.20395524564742123,
        1.0571799111220335,
    ],
];
const WHITE_POINT_D65 = [95.047, 100.0, 108.883];
/**
 * Converts a color from RGB components to ARGB format.
 */
function argbFromRgb(red, green, blue) {
    return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>>
        0;
}
/**
 * Converts a color from linear RGB components to ARGB format.
 */
function argbFromLinrgb(linrgb) {
    const r = delinearized(linrgb[0]);
    const g = delinearized(linrgb[1]);
    const b = delinearized(linrgb[2]);
    return argbFromRgb(r, g, b);
}
/**
 * Returns the alpha component of a color in ARGB format.
 */
function alphaFromArgb(argb) {
    return argb >> 24 & 255;
}
/**
 * Returns the red component of a color in ARGB format.
 */
function redFromArgb(argb) {
    return argb >> 16 & 255;
}
/**
 * Returns the green component of a color in ARGB format.
 */
function greenFromArgb(argb) {
    return argb >> 8 & 255;
}
/**
 * Returns the blue component of a color in ARGB format.
 */
function blueFromArgb(argb) {
    return argb & 255;
}
/**
 * Returns whether a color in ARGB format is opaque.
 */
function isOpaque(argb) {
    return alphaFromArgb(argb) >= 255;
}
/**
 * Converts a color from ARGB to XYZ.
 */
function argbFromXyz(x, y, z) {
    const matrix = XYZ_TO_SRGB;
    const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
    const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
    const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
    const r = delinearized(linearR);
    const g = delinearized(linearG);
    const b = delinearized(linearB);
    return argbFromRgb(r, g, b);
}
/**
 * Converts a color from XYZ to ARGB.
 */
function xyzFromArgb(argb) {
    const r = linearized(redFromArgb(argb));
    const g = linearized(greenFromArgb(argb));
    const b = linearized(blueFromArgb(argb));
    return _math_utils_js__WEBPACK_IMPORTED_MODULE_0__.matrixMultiply([r, g, b], SRGB_TO_XYZ);
}
/**
 * Converts a color represented in Lab color space into an ARGB
 * integer.
 */
function argbFromLab(l, a, b) {
    const whitePoint = WHITE_POINT_D65;
    const fy = (l + 16.0) / 116.0;
    const fx = a / 500.0 + fy;
    const fz = fy - b / 200.0;
    const xNormalized = labInvf(fx);
    const yNormalized = labInvf(fy);
    const zNormalized = labInvf(fz);
    const x = xNormalized * whitePoint[0];
    const y = yNormalized * whitePoint[1];
    const z = zNormalized * whitePoint[2];
    return argbFromXyz(x, y, z);
}
/**
 * Converts a color from ARGB representation to L*a*b*
 * representation.
 *
 * @param argb the ARGB representation of a color
 * @return a Lab object representing the color
 */
function labFromArgb(argb) {
    const linearR = linearized(redFromArgb(argb));
    const linearG = linearized(greenFromArgb(argb));
    const linearB = linearized(blueFromArgb(argb));
    const matrix = SRGB_TO_XYZ;
    const x = matrix[0][0] * linearR + matrix[0][1] * linearG + matrix[0][2] * linearB;
    const y = matrix[1][0] * linearR + matrix[1][1] * linearG + matrix[1][2] * linearB;
    const z = matrix[2][0] * linearR + matrix[2][1] * linearG + matrix[2][2] * linearB;
    const whitePoint = WHITE_POINT_D65;
    const xNormalized = x / whitePoint[0];
    const yNormalized = y / whitePoint[1];
    const zNormalized = z / whitePoint[2];
    const fx = labF(xNormalized);
    const fy = labF(yNormalized);
    const fz = labF(zNormalized);
    const l = 116.0 * fy - 16;
    const a = 500.0 * (fx - fy);
    const b = 200.0 * (fy - fz);
    return [l, a, b];
}
/**
 * Converts an L* value to an ARGB representation.
 *
 * @param lstar L* in L*a*b*
 * @return ARGB representation of grayscale color with lightness
 * matching L*
 */
function argbFromLstar(lstar) {
    const y = yFromLstar(lstar);
    const component = delinearized(y);
    return argbFromRgb(component, component, component);
}
/**
 * Computes the L* value of a color in ARGB representation.
 *
 * @param argb ARGB representation of a color
 * @return L*, from L*a*b*, coordinate of the color
 */
function lstarFromArgb(argb) {
    const y = xyzFromArgb(argb)[1];
    return 116.0 * labF(y / 100.0) - 16.0;
}
/**
 * Converts an L* value to a Y value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param lstar L* in L*a*b*
 * @return Y in XYZ
 */
function yFromLstar(lstar) {
    return 100.0 * labInvf((lstar + 16.0) / 116.0);
}
/**
 * Converts a Y value to an L* value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param y Y in XYZ
 * @return L* in L*a*b*
 */
function lstarFromY(y) {
    return labF(y / 100.0) * 116.0 - 16.0;
}
/**
 * Linearizes an RGB component.
 *
 * @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
 * channel
 * @return 0.0 <= output <= 100.0, color channel converted to
 * linear RGB space
 */
function linearized(rgbComponent) {
    const normalized = rgbComponent / 255.0;
    if (normalized <= 0.040449936) {
        return normalized / 12.92 * 100.0;
    }
    else {
        return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100.0;
    }
}
/**
 * Delinearizes an RGB component.
 *
 * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
 * linear R/G/B channel
 * @return 0 <= output <= 255, color channel converted to regular
 * RGB space
 */
function delinearized(rgbComponent) {
    const normalized = rgbComponent / 100.0;
    let delinearized = 0.0;
    if (normalized <= 0.0031308) {
        delinearized = normalized * 12.92;
    }
    else {
        delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
    }
    return _math_utils_js__WEBPACK_IMPORTED_MODULE_0__.clampInt(0, 255, Math.round(delinearized * 255.0));
}
/**
 * Returns the standard white point; white on a sunny day.
 *
 * @return The white point
 */
function whitePointD65() {
    return WHITE_POINT_D65;
}
/**
 * Return RGBA from a given int32 color
 *
 * @param argb ARGB representation of a int32 color.
 * @return RGBA representation of a int32 color.
 */
function rgbaFromArgb(argb) {
    const r = redFromArgb(argb);
    const g = greenFromArgb(argb);
    const b = blueFromArgb(argb);
    const a = alphaFromArgb(argb);
    return { r, g, b, a };
}
/**
 * Return int32 color from a given RGBA component
 *
 * @param rgba RGBA representation of a int32 color.
 * @returns ARGB representation of a int32 color.
 */
function argbFromRgba({ r, g, b, a }) {
    const rValue = clampComponent(r);
    const gValue = clampComponent(g);
    const bValue = clampComponent(b);
    const aValue = clampComponent(a);
    return (aValue << 24) | (rValue << 16) | (gValue << 8) | bValue;
}
function clampComponent(value) {
    if (value < 0)
        return 0;
    if (value > 255)
        return 255;
    return value;
}
function labF(t) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    if (t > e) {
        return Math.pow(t, 1.0 / 3.0);
    }
    else {
        return (kappa * t + 16) / 116;
    }
}
function labInvf(ft) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    const ft3 = ft * ft * ft;
    if (ft3 > e) {
        return ft3;
    }
    else {
        return (116 * ft - 16) / kappa;
    }
}
//# sourceMappingURL=color_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/image_utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/image_utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sourceColorFromImage: () => (/* binding */ sourceColorFromImage)
/* harmony export */ });
/* harmony import */ var _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quantize/quantizer_celebi.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js");
/* harmony import */ var _score_score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score/score.js */ "./node_modules/@material/material-color-utilities/score/score.js");
/* harmony import */ var _color_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Get the source color from an image.
 *
 * @param image The image element
 * @return Source color - the color most suitable for creating a UI theme
 */
async function sourceColorFromImage(image) {
    // Convert Image data to Pixel Array
    const imageBytes = await new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) {
            reject(new Error('Could not get canvas context'));
            return;
        }
        const callback = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            let rect = [0, 0, image.width, image.height];
            const area = image.dataset['area'];
            if (area && /^\d+(\s*,\s*\d+){3}$/.test(area)) {
                rect = area.split(/\s*,\s*/).map(s => {
                    // tslint:disable-next-line:ban
                    return parseInt(s, 10);
                });
            }
            const [sx, sy, sw, sh] = rect;
            resolve(context.getImageData(sx, sy, sw, sh).data);
        };
        if (image.complete) {
            callback();
        }
        else {
            image.onload = callback;
        }
    });
    // Convert Image data to Pixel Array
    const pixels = [];
    for (let i = 0; i < imageBytes.length; i += 4) {
        const r = imageBytes[i];
        const g = imageBytes[i + 1];
        const b = imageBytes[i + 2];
        const a = imageBytes[i + 3];
        if (a < 255) {
            continue;
        }
        const argb = (0,_color_utils_js__WEBPACK_IMPORTED_MODULE_2__.argbFromRgb)(r, g, b);
        pixels.push(argb);
    }
    // Convert Pixels to Material Colors
    const result = _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_0__.QuantizerCelebi.quantize(pixels, 128);
    const ranked = _score_score_js__WEBPACK_IMPORTED_MODULE_1__.Score.score(result);
    const top = ranked[0];
    return top;
}
//# sourceMappingURL=image_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/math_utils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/math_utils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clampDouble: () => (/* binding */ clampDouble),
/* harmony export */   clampInt: () => (/* binding */ clampInt),
/* harmony export */   differenceDegrees: () => (/* binding */ differenceDegrees),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   matrixMultiply: () => (/* binding */ matrixMultiply),
/* harmony export */   rotationDirection: () => (/* binding */ rotationDirection),
/* harmony export */   sanitizeDegreesDouble: () => (/* binding */ sanitizeDegreesDouble),
/* harmony export */   sanitizeDegreesInt: () => (/* binding */ sanitizeDegreesInt),
/* harmony export */   signum: () => (/* binding */ signum)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
/**
 * Utility methods for mathematical operations.
 */
/**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */
function signum(num) {
    if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 0;
    }
    else {
        return 1;
    }
}
/**
 * The linear interpolation function.
 *
 * @return start if amount = 0 and stop if amount = 1
 */
function lerp(start, stop, amount) {
    return (1.0 - amount) * start + amount * stop;
}
/**
 * Clamps an integer between two integers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampInt(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Clamps an integer between two floating-point numbers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampDouble(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Sanitizes a degree measure as an integer.
 *
 * @return a degree measure between 0 (inclusive) and 360
 * (exclusive).
 */
function sanitizeDegreesInt(degrees) {
    degrees = degrees % 360;
    if (degrees < 0) {
        degrees = degrees + 360;
    }
    return degrees;
}
/**
 * Sanitizes a degree measure as a floating-point number.
 *
 * @return a degree measure between 0.0 (inclusive) and 360.0
 * (exclusive).
 */
function sanitizeDegreesDouble(degrees) {
    degrees = degrees % 360.0;
    if (degrees < 0) {
        degrees = degrees + 360.0;
    }
    return degrees;
}
/**
 * Sign of direction change needed to travel from one angle to
 * another.
 *
 * For angles that are 180 degrees apart from each other, both
 * directions have the same travel distance, so either direction is
 * shortest. The value 1.0 is returned in this case.
 *
 * @param from The angle travel starts from, in degrees.
 * @param to The angle travel ends at, in degrees.
 * @return -1 if decreasing from leads to the shortest travel
 * distance, 1 if increasing from leads to the shortest travel
 * distance.
 */
function rotationDirection(from, to) {
    const increasingDifference = sanitizeDegreesDouble(to - from);
    return increasingDifference <= 180.0 ? 1.0 : -1.0;
}
/**
 * Distance of two points on a circle, represented using degrees.
 */
function differenceDegrees(a, b) {
    return 180.0 - Math.abs(Math.abs(a - b) - 180.0);
}
/**
 * Multiplies a 1x3 row vector with a 3x3 matrix.
 */
function matrixMultiply(row, matrix) {
    const a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
    const b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
    const c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
    return [a, b, c];
}
//# sourceMappingURL=math_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/string_utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/string_utils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argbFromHex: () => (/* binding */ argbFromHex),
/* harmony export */   hexFromArgb: () => (/* binding */ hexFromArgb)
/* harmony export */ });
/* harmony import */ var _color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Utility methods for hexadecimal representations of colors.
 */
/**
 * @param argb ARGB representation of a color.
 * @return Hex string representing color, ex. #ff0000 for red.
 */
function hexFromArgb(argb) {
    const r = _color_utils_js__WEBPACK_IMPORTED_MODULE_0__.redFromArgb(argb);
    const g = _color_utils_js__WEBPACK_IMPORTED_MODULE_0__.greenFromArgb(argb);
    const b = _color_utils_js__WEBPACK_IMPORTED_MODULE_0__.blueFromArgb(argb);
    const outParts = [r.toString(16), g.toString(16), b.toString(16)];
    // Pad single-digit output values
    for (const [i, part] of outParts.entries()) {
        if (part.length === 1) {
            outParts[i] = '0' + part;
        }
    }
    return '#' + outParts.join('');
}
/**
 * @param hex String representing color as hex code. Accepts strings with or
 *     without leading #, and string representing the color using 3, 6, or 8
 *     hex characters.
 * @return ARGB representation of color.
 */
function argbFromHex(hex) {
    hex = hex.replace('#', '');
    const isThree = hex.length === 3;
    const isSix = hex.length === 6;
    const isEight = hex.length === 8;
    if (!isThree && !isSix && !isEight) {
        throw new Error('unexpected hex ' + hex);
    }
    let r = 0;
    let g = 0;
    let b = 0;
    if (isThree) {
        r = parseIntHex(hex.slice(0, 1).repeat(2));
        g = parseIntHex(hex.slice(1, 2).repeat(2));
        b = parseIntHex(hex.slice(2, 3).repeat(2));
    }
    else if (isSix) {
        r = parseIntHex(hex.slice(0, 2));
        g = parseIntHex(hex.slice(2, 4));
        b = parseIntHex(hex.slice(4, 6));
    }
    else if (isEight) {
        r = parseIntHex(hex.slice(2, 4));
        g = parseIntHex(hex.slice(4, 6));
        b = parseIntHex(hex.slice(6, 8));
    }
    return (((255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) | (b & 0x0ff)) >>>
        0);
}
function parseIntHex(value) {
    // tslint:disable-next-line:ban
    return parseInt(value, 16);
}
//# sourceMappingURL=string_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/theme_utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/theme_utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTheme: () => (/* binding */ applyTheme),
/* harmony export */   customColor: () => (/* binding */ customColor),
/* harmony export */   themeFromImage: () => (/* binding */ themeFromImage),
/* harmony export */   themeFromSourceColor: () => (/* binding */ themeFromSourceColor)
/* harmony export */ });
/* harmony import */ var _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blend/blend.js */ "./node_modules/@material/material-color-utilities/blend/blend.js");
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/* harmony import */ var _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheme/scheme.js */ "./node_modules/@material/material-color-utilities/scheme/scheme.js");
/* harmony import */ var _image_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image_utils.js */ "./node_modules/@material/material-color-utilities/utils/image_utils.js");
/* harmony import */ var _string_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string_utils.js */ "./node_modules/@material/material-color-utilities/utils/string_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * Generate a theme from a source color
 *
 * @param source Source color
 * @param customColors Array of custom colors
 * @return Theme object
 */
function themeFromSourceColor(source, customColors = []) {
    const palette = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_1__.CorePalette.of(source);
    return {
        source,
        schemes: {
            light: _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_2__.Scheme.light(source),
            dark: _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_2__.Scheme.dark(source),
        },
        palettes: {
            primary: palette.a1,
            secondary: palette.a2,
            tertiary: palette.a3,
            neutral: palette.n1,
            neutralVariant: palette.n2,
            error: palette.error,
        },
        customColors: customColors.map((c) => customColor(source, c)),
    };
}
/**
 * Generate a theme from an image source
 *
 * @param image Image element
 * @param customColors Array of custom colors
 * @return Theme object
 */
async function themeFromImage(image, customColors = []) {
    const source = await (0,_image_utils_js__WEBPACK_IMPORTED_MODULE_3__.sourceColorFromImage)(image);
    return themeFromSourceColor(source, customColors);
}
/**
 * Generate custom color group from source and target color
 *
 * @param source Source color
 * @param color Custom color
 * @return Custom color group
 *
 * @link https://m3.material.io/styles/color/the-color-system/color-roles
 */
function customColor(source, color) {
    let value = color.value;
    const from = value;
    const to = source;
    if (color.blend) {
        value = _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__.Blend.harmonize(from, to);
    }
    const palette = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_1__.CorePalette.of(value);
    const tones = palette.a1;
    return {
        color,
        value,
        light: {
            color: tones.tone(40),
            onColor: tones.tone(100),
            colorContainer: tones.tone(90),
            onColorContainer: tones.tone(10),
        },
        dark: {
            color: tones.tone(80),
            onColor: tones.tone(20),
            colorContainer: tones.tone(30),
            onColorContainer: tones.tone(90),
        },
    };
}
/**
 * Apply a theme to an element
 *
 * @param theme Theme object
 * @param options Options
 */
function applyTheme(theme, options) {
    const target = options?.target || document.body;
    const isDark = options?.dark ?? false;
    const scheme = isDark ? theme.schemes.dark : theme.schemes.light;
    setSchemeProperties(target, scheme);
    if (options?.brightnessSuffix) {
        setSchemeProperties(target, theme.schemes.dark, '-dark');
        setSchemeProperties(target, theme.schemes.light, '-light');
    }
    if (options?.paletteTones) {
        const tones = options?.paletteTones ?? [];
        for (const [key, palette] of Object.entries(theme.palettes)) {
            const paletteKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            for (const tone of tones) {
                const token = `--md-ref-palette-${paletteKey}-${paletteKey}${tone}`;
                const color = (0,_string_utils_js__WEBPACK_IMPORTED_MODULE_4__.hexFromArgb)(palette.tone(tone));
                target.style.setProperty(token, color);
            }
        }
    }
}
function setSchemeProperties(target, scheme, suffix = '') {
    for (const [key, value] of Object.entries(scheme.toJSON())) {
        const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const color = (0,_string_utils_js__WEBPACK_IMPORTED_MODULE_4__.hexFromArgb)(value);
        target.style.setProperty(`--md-sys-color-${token}${suffix}`, color);
    }
}
//# sourceMappingURL=theme_utils.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map