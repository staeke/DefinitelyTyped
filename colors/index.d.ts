// Type definitions for Colors.js 1.1
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Staffan Eketorp <https://github.com/staeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "colors" {
    interface Color {
        (text: string): string;

        strip: Color;
        stripColors: Color;

        black: Color;
        red: Color;
        green: Color;
        yellow: Color;
        blue: Color;
        magenta: Color;
        cyan: Color;
        white: Color;
        gray: Color;
        grey: Color;

        bgBlack: Color;
        bgRed: Color;
        bgGreen: Color;
        bgYellow: Color;
        bgBlue: Color;
        bgMagenta: Color;
        bgCyan: Color;
        bgWhite: Color;

        reset: Color;
        bold: Color;
        dim: Color;
        italic: Color;
        underline: Color;
        inverse: Color;
        hidden: Color;
        strikethrough: Color;

        rainbow: Color;
        zebra: Color;
        america: Color;
        trap: Color;
        random: Color;
        zalgo: Color;
    }

    namespace e {
        export function setTheme(theme:any): void;

        export var enabled: boolean;

        export var strip: Color;
        export var stripColors: Color;

        export var black: Color;
        export var red: Color;
        export var green: Color;
        export var yellow: Color;
        export var blue: Color;
        export var magenta: Color;
        export var cyan: Color;
        export var white: Color;
        export var gray: Color;
        export var grey: Color;

        export var bgBlack: Color;
        export var bgRed: Color;
        export var bgGreen: Color;
        export var bgYellow: Color;
        export var bgBlue: Color;
        export var bgMagenta: Color;
        export var bgCyan: Color;
        export var bgWhite: Color;

        export var reset: Color;
        export var bold: Color;
        export var dim: Color;
        export var italic: Color;
        export var underline: Color;
        export var inverse: Color;
        export var hidden: Color;
        export var strikethrough: Color;

        export var rainbow: Color;
        export var zebra: Color;
        export var america: Color;
        export var trap: Color;
        export var random: Color;
        export var zalgo: Color;
    }

    export = e;
}

interface String {
    strip: string;
    stripColors: string;

    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    gray: string;
    grey: string;

    bgBlack: string;
    bgRed: string;
    bgGreen: string;
    bgYellow: string;
    bgBlue: string;
    bgMagenta: string;
    bgCyan: string;
    bgWhite: string;

    reset: string;
    bold: string;
    dim: string;
    italic: string;
    underline: string;
    inverse: string;
    hidden: string;
    strikethrough: string;

    rainbow: string;
    zebra: string;
    america: string;
    trap: string;
    random: string;
    zalgo: string;
}

declare module 'colors/safe' {
    export function strip(str: string): string;
    export function stripColors(str: string): string;

    export function black(str: string): string;
    export function red(str: string): string;
    export function green(str: string): string;
    export function yellow(str: string): string;
    export function blue(str: string): string;
    export function magenta(str: string): string;
    export function cyan(str: string): string;
    export function white(str: string): string;
    export function gray(str: string): string;
    export function grey(str: string): string;

    export function bgBlack(str: string): string;
    export function bgRed(str: string): string;
    export function bgGreen(str: string): string;
    export function bgYellow(str: string): string;
    export function bgBlue(str: string): string;
    export function bgMagenta(str: string): string;
    export function bgCyan(str: string): string;
    export function bgWhite(str: string): string;

    export function reset(str: string): string;
    export function bold(str: string): string;
    export function dim(str: string): string;
    export function italic(str: string): string;
    export function underline(str: string): string;
    export function inverse(str: string): string;
    export function hidden(str: string): string;
    export function strikethrough(str: string): string;

    export function rainbow(str: string): string;
    export function zebra(str: string): string;
    export function america(str: string): string;
    export function trap(str: string): string;
    export function random(str: string): string;
    export function zalgo(str: string): string;
}
