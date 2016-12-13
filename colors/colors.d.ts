// Type definitions for Colors.js 0.6.0-1
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions by: Staffan Eketorp <https://github.com/staeke>
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
    export function strip(any): string;
    export function stripColors(any): string;

    export function black(any): string;
    export function red(any): string;
    export function green(any): string;
    export function yellow(any): string;
    export function blue(any): string;
    export function magenta(any): string;
    export function cyan(any): string;
    export function white(any): string;
    export function gray(any): string;
    export function grey(any): string;

    export function bgBlack(any): string;
    export function bgRed(any): string;
    export function bgGreen(any): string;
    export function bgYellow(any): string;
    export function bgBlue(any): string;
    export function bgMagenta(any): string;
    export function bgCyan(any): string;
    export function bgWhite(any): string;

    export function reset(any): string;
    export function bold(any): string;
    export function dim(any): string;
    export function italic(any): string;
    export function underline(any): string;
    export function inverse(any): string;
    export function hidden(any): string;
    export function strikethrough(any): string;

    export function rainbow(any): string;
    export function zebra(any): string;
    export function america(any): string;
    export function trap(any): string;
    export function random(any): string;
    export function zalgo(any): string;
}
