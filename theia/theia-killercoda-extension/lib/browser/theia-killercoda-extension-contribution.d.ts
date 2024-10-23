import { FrontendApplication, FrontendApplicationContribution, ViewContainer } from '@theia/core/lib/browser';
import { MessageService, MenuContribution, MenuModelRegistry, Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common';
import { FileNavigatorContribution } from "@theia/navigator/lib/browser/navigator-contribution";
import { OutlineViewContribution } from "@theia/outline-view/lib/browser/outline-view-contribution";
import { NavigatorWidgetFactory } from "@theia/navigator/lib/browser";
import { ProblemContribution } from "@theia/markers/lib/browser/problem/problem-contribution";
export declare const TestCommandContributionCommand: Command;
export declare class TestCommandContribution implements CommandContribution {
    private readonly messageService;
    constructor(messageService: MessageService);
    private readonly terminalService;
    registerCommands(registry: CommandRegistry): void;
}
export declare class TestMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
export declare class OpenFileNavigatorContribution implements FrontendApplicationContribution {
    protected readonly navigatorContribution: FileNavigatorContribution;
    private readonly terminalService;
    initializeLayout(): Promise<void>;
    onStart(): Promise<void>;
}
export declare class CustomProblemContribution extends ProblemContribution {
    initializeLayout(app: FrontendApplication): Promise<void>;
}
export declare class CustomNavigatorWidgetFactory extends NavigatorWidgetFactory {
    createWidget(): Promise<ViewContainer>;
}
export declare class CustomOutlineViewContribution extends OutlineViewContribution {
    private readonly terminalService;
    initializeLayout(app: FrontendApplication): Promise<void>;
    handleMessage(event: any): void;
    execCommand(command: any): void;
    getTerminal(): import("@theia/terminal/lib/browser/base/terminal-widget").TerminalWidget | null | undefined;
}
export declare class UiReadyChecker implements FrontendApplicationContribution {
    private readonly terminalService;
    private readonly frontendApplicationStateService;
    onDidInitializeLayout(): Promise<void>;
    waitTillTerminalReady(): void;
    checkReady(): void;
}
//# sourceMappingURL=theia-killercoda-extension-contribution.d.ts.map