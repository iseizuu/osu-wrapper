export interface userOpt {
    u: string;
    m: "0"|"1"|"2"|"3";
    event_days: number;
}
export interface beatOpt {
    u: string;
    b: string|number;
    m: "0"|"1"|"2"|"3"|number;
    a: "0"|"1"|number;
    mods: number;
    limit: number;
}
export interface scoreOpt {
    u: string;
    b: string|number;
    m: "0"|"1"|"2"|"3"|number;
    mods: number;
    limit: number;
}
export interface recentAndBestOpt {
    u: string;
    m: "0"|"1"|"2"|"3"|number;
    limit: number;
}
export interface matchOpt {
    mp: string|number;
}
export interface replayOpt {
    u: string;
    b: string|number;
    m: "0"|"1"|"2"|"3"|number;
    s: string|number;
    mods: number;
}