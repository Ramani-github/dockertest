"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theia_killercoda_extension_contribution_1 = require("./theia-killercoda-extension-contribution");
const inversify_1 = require("@theia/core/shared/inversify");
const browser_1 = require("@theia/core/lib/browser");
const outline_view_contribution_1 = require("@theia/outline-view/lib/browser/outline-view-contribution");
const browser_2 = require("@theia/navigator/lib/browser");
const problem_contribution_1 = require("@theia/markers/lib/browser/problem/problem-contribution");
require("../../src/browser/index.css");
// import { TestCommandContribution, TestMenuContribution } from './theia-killercoda-extension-contribution';
// import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
exports.default = new inversify_1.ContainerModule((bind, unbind, isBound, rebind) => {
    rebind(outline_view_contribution_1.OutlineViewContribution).to(theia_killercoda_extension_contribution_1.CustomOutlineViewContribution).inSingletonScope();
    rebind(browser_2.NavigatorWidgetFactory).to(theia_killercoda_extension_contribution_1.CustomNavigatorWidgetFactory).inSingletonScope();
    rebind(problem_contribution_1.ProblemContribution).to(theia_killercoda_extension_contribution_1.CustomProblemContribution).inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(theia_killercoda_extension_contribution_1.OpenFileNavigatorContribution).inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(theia_killercoda_extension_contribution_1.UiReadyChecker).inSingletonScope();
    // bind(CommandContribution).to(TestCommandContribution);
    // bind(MenuContribution).to(TestMenuContribution);
});
//# sourceMappingURL=theia-killercoda-extension-frontend-module.js.map