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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiReadyChecker = exports.CustomOutlineViewContribution = exports.CustomNavigatorWidgetFactory = exports.CustomProblemContribution = exports.OpenFileNavigatorContribution = exports.TestMenuContribution = exports.TestCommandContribution = exports.TestCommandContributionCommand = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const browser_1 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const common_1 = require("@theia/core/lib/common");
const navigator_contribution_1 = require("@theia/navigator/lib/browser/navigator-contribution");
const terminal_service_1 = require("@theia/terminal/lib/browser/base/terminal-service");
const outline_view_contribution_1 = require("@theia/outline-view/lib/browser/outline-view-contribution");
const browser_2 = require("@theia/navigator/lib/browser");
const problem_contribution_1 = require("@theia/markers/lib/browser/problem/problem-contribution");
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
//# sourceMappingURL=theia-killercoda-extension-contribution.js.map