(self["webpackChunkbrowser_app"] = self["webpackChunkbrowser_app"] || []).push([["theia-killercoda-extension_lib_browser_theia-killercoda-extension-frontend-module_js"],{

/***/ "../node_modules/css-loader/dist/cjs.js!../theia-killercoda-extension/src/browser/index.css":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../theia-killercoda-extension/src/browser/index.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#theia-main-content-panel {\n    background-image: linear-gradient(rgb(30 30 30), rgb(30 30 30 / 40%)), url(https://killercoda.com/kc_logo.svg) !important;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 150px;\n}\n", "",{"version":3,"sources":["webpack://./../theia-killercoda-extension/src/browser/index.css"],"names":[],"mappings":"AAAA;IACI,yHAAyH;IACzH,kCAAkC;IAClC,4BAA4B;IAC5B,sBAAsB;AAC1B","sourcesContent":["#theia-main-content-panel {\n    background-image: linear-gradient(rgb(30 30 30), rgb(30 30 30 / 40%)), url(https://killercoda.com/kc_logo.svg) !important;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 150px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/@theia/navigator/lib/browser/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@theia/navigator/lib/browser/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./navigator-model */ "../node_modules/@theia/navigator/lib/browser/navigator-model.js"), exports);
__exportStar(__webpack_require__(/*! ./navigator-widget */ "../node_modules/@theia/navigator/lib/browser/navigator-widget.js"), exports);
__exportStar(__webpack_require__(/*! ./navigator-widget-factory */ "../node_modules/@theia/navigator/lib/browser/navigator-widget-factory.js"), exports);
__exportStar(__webpack_require__(/*! ./navigator-decorator-service */ "../node_modules/@theia/navigator/lib/browser/navigator-decorator-service.js"), exports);


/***/ }),

/***/ "../node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutlineViewContribution = exports.OutlineViewCommands = exports.OUTLINE_WIDGET_FACTORY_ID = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
const widgets_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets */ "../node_modules/@theia/core/lib/browser/widgets/index.js");
const outline_view_widget_1 = __webpack_require__(/*! ./outline-view-widget */ "../node_modules/@theia/outline-view/lib/browser/outline-view-widget.js");
const tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree */ "../node_modules/@theia/core/lib/browser/tree/index.js");
const os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "../node_modules/@theia/core/lib/common/os.js");
const nls_1 = __webpack_require__(/*! @theia/core/lib/common/nls */ "../node_modules/@theia/core/lib/common/nls.js");
exports.OUTLINE_WIDGET_FACTORY_ID = 'outline-view';
/**
 * Collection of `outline-view` commands.
 */
var OutlineViewCommands;
(function (OutlineViewCommands) {
    /**
     * Command which collapses all nodes
     * from the `outline-view` tree.
     */
    OutlineViewCommands.COLLAPSE_ALL = {
        id: 'outlineView.collapse.all',
        iconClass: widgets_1.codicon('collapse-all')
    };
})(OutlineViewCommands = exports.OutlineViewCommands || (exports.OutlineViewCommands = {}));
let OutlineViewContribution = class OutlineViewContribution extends view_contribution_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: exports.OUTLINE_WIDGET_FACTORY_ID,
            widgetName: outline_view_widget_1.OutlineViewWidget.LABEL,
            defaultWidgetOptions: {
                area: 'right',
                rank: 500
            },
            toggleCommandId: 'outlineView:toggle',
            toggleKeybinding: os_1.OS.type() !== os_1.OS.Type.Linux
                ? 'ctrlcmd+shift+i'
                : undefined
        });
    }
    async initializeLayout(app) {
        await this.openView();
    }
    registerCommands(commands) {
        super.registerCommands(commands);
        commands.registerCommand(OutlineViewCommands.COLLAPSE_ALL, {
            isEnabled: widget => this.withWidget(widget, () => true),
            isVisible: widget => this.withWidget(widget, () => true),
            execute: () => this.collapseAllItems()
        });
    }
    registerToolbarItems(toolbar) {
        toolbar.registerItem({
            id: OutlineViewCommands.COLLAPSE_ALL.id,
            command: OutlineViewCommands.COLLAPSE_ALL.id,
            tooltip: nls_1.nls.localizeByDefault('Collapse All'),
            priority: 0
        });
    }
    /**
     * Collapse all nodes in the outline view tree.
     */
    async collapseAllItems() {
        const { model } = await this.widget;
        const root = model.root;
        if (tree_1.CompositeTreeNode.is(root)) {
            model.collapseAll(root);
        }
    }
    /**
     * Determine if the current widget is the `outline-view`.
     */
    withWidget(widget = this.tryGetWidget(), cb) {
        if (widget instanceof outline_view_widget_1.OutlineViewWidget && widget.id === exports.OUTLINE_WIDGET_FACTORY_ID) {
            return cb(widget);
        }
        return false;
    }
};
OutlineViewContribution = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], OutlineViewContribution);
exports.OutlineViewContribution = OutlineViewContribution;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/base/terminal-service.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/base/terminal-service.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TerminalService = void 0;
/**
 * Service manipulating terminal widgets.
 */
exports.TerminalService = Symbol('TerminalService');


/***/ }),

/***/ "../theia-killercoda-extension/lib/browser/theia-killercoda-extension-contribution.js":
/*!********************************************************************************************!*\
  !*** ../theia-killercoda-extension/lib/browser/theia-killercoda-extension-contribution.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UiReadyChecker = exports.CustomOutlineViewContribution = exports.CustomNavigatorWidgetFactory = exports.CustomProblemContribution = exports.OpenFileNavigatorContribution = exports.TestMenuContribution = exports.TestCommandContribution = exports.TestCommandContributionCommand = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
const common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
const navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
const terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "../node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
const outline_view_contribution_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-contribution */ "../node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js");
const browser_2 = __webpack_require__(/*! @theia/navigator/lib/browser */ "../node_modules/@theia/navigator/lib/browser/index.js");
const problem_contribution_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-contribution */ "../node_modules/@theia/markers/lib/browser/problem/problem-contribution.js");
// ### code to add a menu item to exec test code for example
// ### needs to be enabled in the frontend-module
exports.TestCommandContributionCommand = {
    id: 'TestCommandContribution.command',
    label: 'Say Hello'
};
let TestCommandContribution = class TestCommandContribution {
    constructor(messageService) {
        this.messageService = messageService;
    }
    registerCommands(registry) {
        registry.registerCommand(exports.TestCommandContributionCommand, {
            execute: async () => {
                // const terminal = await this.terminalService.newTerminal({});
                // terminal.start();
                // this.terminalService.open(terminal);
                let terminal = this.terminalService.currentTerminal;
                terminal = terminal ? terminal : this.terminalService.lastUsedTerminal;
                // const terminal = this.terminalService.currentTerminal;
                if (terminal) {
                    terminal.sendText('\x03');
                    // terminal.clearOutput();
                    // terminal.writeLine("ls\n");
                    terminal.sendText('pwd\n');
                }
                this.messageService.info('Hello World 11');
            }
        });
    }
};
__decorate([
    (0, inversify_1.inject)(terminal_service_1.TerminalService),
    __metadata("design:type", Object)
], TestCommandContribution.prototype, "terminalService", void 0);
TestCommandContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(common_1.MessageService)),
    __metadata("design:paramtypes", [common_1.MessageService])
], TestCommandContribution);
exports.TestCommandContribution = TestCommandContribution;
let TestMenuContribution = class TestMenuContribution {
    registerMenus(menus) {
        menus.registerMenuAction(browser_1.CommonMenus.HELP, {
            commandId: exports.TestCommandContributionCommand.id,
            label: exports.TestCommandContributionCommand.label
        });
    }
};
TestMenuContribution = __decorate([
    (0, inversify_1.injectable)()
], TestMenuContribution);
exports.TestMenuContribution = TestMenuContribution;
let OpenFileNavigatorContribution = class OpenFileNavigatorContribution {
    async initializeLayout() {
        // this.messageService.info('DDD TTTTTTTTTTTTTTTTT')
        await this.navigatorContribution.openView({ activate: true, reveal: true });
    }
    async onStart() {
        // this.messageService.info('DDD 888')
        await this.navigatorContribution.openView({ activate: true, reveal: true });
        // Open a terminal in the bottom panel
        const terminal = await this.terminalService.newTerminal({});
        // console.log('killercoda', 'terminalService.newTerminal DONE');
        await terminal.start();
        // console.log('killercoda', 'terminal.start() DONE');
        // await terminal.processInfo;
        // console.log('killercoda', 'terminal.processInfo DONE');
        this.terminalService.open(terminal);
    }
};
__decorate([
    (0, inversify_1.inject)(navigator_contribution_1.FileNavigatorContribution),
    __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
], OpenFileNavigatorContribution.prototype, "navigatorContribution", void 0);
__decorate([
    (0, inversify_1.inject)(terminal_service_1.TerminalService),
    __metadata("design:type", Object)
], OpenFileNavigatorContribution.prototype, "terminalService", void 0);
OpenFileNavigatorContribution = __decorate([
    (0, inversify_1.injectable)()
], OpenFileNavigatorContribution);
exports.OpenFileNavigatorContribution = OpenFileNavigatorContribution;
let CustomProblemContribution = class CustomProblemContribution extends problem_contribution_1.ProblemContribution {
    async initializeLayout(app) {
        //await this.openView();
    }
};
CustomProblemContribution = __decorate([
    (0, inversify_1.injectable)()
], CustomProblemContribution);
exports.CustomProblemContribution = CustomProblemContribution;
let CustomNavigatorWidgetFactory = class CustomNavigatorWidgetFactory extends browser_2.NavigatorWidgetFactory {
    // @inject(MessageService) private readonly messageService: MessageService;
    async createWidget() {
        // this.messageService.info('DDD here')
        const viewContainer = this.viewContainerFactory({
            id: browser_2.EXPLORER_VIEW_CONTAINER_ID,
            progressLocationId: 'explorer'
        });
        viewContainer.setTitleOptions(browser_2.EXPLORER_VIEW_CONTAINER_TITLE_OPTIONS);
        //const openEditorsWidget = await this.widgetManager.getOrCreateWidget(OpenEditorsWidget.ID);
        const navigatorWidget = await this.widgetManager.getOrCreateWidget(browser_2.FILE_NAVIGATOR_ID);
        // viewContainer.addWidget(openEditorsWidget, this.openEditorsWidgetOptions);
        viewContainer.addWidget(navigatorWidget, this.fileNavigatorWidgetOptions);
        return viewContainer;
    }
};
CustomNavigatorWidgetFactory = __decorate([
    (0, inversify_1.injectable)()
], CustomNavigatorWidgetFactory);
exports.CustomNavigatorWidgetFactory = CustomNavigatorWidgetFactory;
let CustomOutlineViewContribution = class CustomOutlineViewContribution extends outline_view_contribution_1.OutlineViewContribution {
    // @inject(MessageService) private readonly messageService: MessageService;
    async initializeLayout(app) {
        // await this.openView();
        if (window.addEventListener) {
            window.addEventListener("message", this.handleMessage.bind(this), false);
        }
    }
    handleMessage(event) {
        // window.postMessage("kc-exec: ls -lh\n", "*");
        if (event.data) {
            if (event.data.startsWith('kc-exec: ')) {
                // console.log('killercoda', event);
                // to interrupt simply send "\x03" as command
                let command = event.data.substr(9);
                this.execCommand(command);
            }
        }
    }
    execCommand(command) {
        let terminal = this.getTerminal();
        if (terminal) {
            terminal.sendText(command);
        }
    }
    getTerminal() {
        let terminal = this.terminalService.currentTerminal;
        terminal = terminal ? terminal : this.terminalService.lastUsedTerminal;
        if (terminal) {
            if (!terminal.isAttached) {
                console.log('killercoda', this);
                return null;
            }
        }
        else {
            console.log('killercoda', this);
        }
        return terminal;
    }
};
__decorate([
    (0, inversify_1.inject)(terminal_service_1.TerminalService),
    __metadata("design:type", Object)
], CustomOutlineViewContribution.prototype, "terminalService", void 0);
CustomOutlineViewContribution = __decorate([
    (0, inversify_1.injectable)()
], CustomOutlineViewContribution);
exports.CustomOutlineViewContribution = CustomOutlineViewContribution;
let UiReadyChecker = class UiReadyChecker {
    async onDidInitializeLayout() {
        setTimeout(this.checkReady.bind(this), 10);
    }
    waitTillTerminalReady() {
        let terminal = this.terminalService.currentTerminal;
        terminal = terminal ? terminal : this.terminalService.lastUsedTerminal;
        if (terminal) {
            terminal.processInfo.then(() => {
                // window.postMessage("kc-exec: ls -lh\n", "*");
                parent.postMessage("ready", "*");
                console.log('killercoda', 'killercoda: ready: READY');
            });
        }
    }
    checkReady() {
        if (this.frontendApplicationStateService.state === 'ready') {
            this.waitTillTerminalReady();
        }
        else {
            setTimeout(this.checkReady.bind(this), 100);
        }
        // if (this.frontendApplicationStateService.state === 'ready' && this.getTerminal()) {
        //     window.postMessage("kc-exec: ls -lh\n", "*");
        //     parent.postMessage("ready", "*");
        //     console.log('killercoda', 'killercoda: ready: READY');
        // } else {
        //     setTimeout(this.checkReady.bind(this), 100);
        // }
    }
};
__decorate([
    (0, inversify_1.inject)(terminal_service_1.TerminalService),
    __metadata("design:type", Object)
], UiReadyChecker.prototype, "terminalService", void 0);
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], UiReadyChecker.prototype, "frontendApplicationStateService", void 0);
UiReadyChecker = __decorate([
    (0, inversify_1.injectable)()
], UiReadyChecker);
exports.UiReadyChecker = UiReadyChecker;


/***/ }),

/***/ "../theia-killercoda-extension/lib/browser/theia-killercoda-extension-frontend-module.js":
/*!***********************************************************************************************!*\
  !*** ../theia-killercoda-extension/lib/browser/theia-killercoda-extension-frontend-module.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const theia_killercoda_extension_contribution_1 = __webpack_require__(/*! ./theia-killercoda-extension-contribution */ "../theia-killercoda-extension/lib/browser/theia-killercoda-extension-contribution.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const outline_view_contribution_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-contribution */ "../node_modules/@theia/outline-view/lib/browser/outline-view-contribution.js");
const browser_2 = __webpack_require__(/*! @theia/navigator/lib/browser */ "../node_modules/@theia/navigator/lib/browser/index.js");
const problem_contribution_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-contribution */ "../node_modules/@theia/markers/lib/browser/problem/problem-contribution.js");
__webpack_require__(/*! ../../src/browser/index.css */ "../theia-killercoda-extension/src/browser/index.css");
// import { TestCommandContribution, TestMenuContribution } from './theia-killercoda-extension-contribution';
// import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
exports["default"] = new inversify_1.ContainerModule((bind, unbind, isBound, rebind) => {
    rebind(outline_view_contribution_1.OutlineViewContribution).to(theia_killercoda_extension_contribution_1.CustomOutlineViewContribution).inSingletonScope();
    rebind(browser_2.NavigatorWidgetFactory).to(theia_killercoda_extension_contribution_1.CustomNavigatorWidgetFactory).inSingletonScope();
    rebind(problem_contribution_1.ProblemContribution).to(theia_killercoda_extension_contribution_1.CustomProblemContribution).inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(theia_killercoda_extension_contribution_1.OpenFileNavigatorContribution).inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(theia_killercoda_extension_contribution_1.UiReadyChecker).inSingletonScope();
    // bind(CommandContribution).to(TestCommandContribution);
    // bind(MenuContribution).to(TestMenuContribution);
});


/***/ }),

/***/ "../theia-killercoda-extension/src/browser/index.css":
/*!***********************************************************!*\
  !*** ../theia-killercoda-extension/src/browser/index.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../node_modules/css-loader/dist/cjs.js!../theia-killercoda-extension/src/browser/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "?9703":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=theia-killercoda-extension_lib_browser_theia-killercoda-extension-frontend-module_js.bundle.js.map