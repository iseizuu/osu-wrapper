import request from "node-superfetch"
import {
    beatOpt,
    matchOpt,
    OsuBeat,
    OsuBest,
    OsuMatch,
    OsuRecent,
    OsuReplay,
    OsuScores,
    OsuUser,
    recentAndBestOpt,
    replayOpt,
    scoreOpt,
    userOpt } from "./typings";

export class Osu {
    private readonly baseUrl = "https://osu.ppy.sh/api";
    private token: string|null = null;
    public constructor (token: string) {
        if (!token) throw new Error("Token is required")
        this.token = token;
    }

    public getBeatmaps(opt: beatOpt): Promise<OsuBeat[]> {
        if (!opt) throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 500) throw new Error("Limit range 1-500");
        if (opt.m && !opt.a) throw new TypeError("Options `m` only has an effect if `a` is chosen and not 0");
        return new Promise((resolve, reject) => {
            void this._request("/get_beatmaps", opt)
                .then(data => {
                    resolve(data as OsuBeat[])
                })
                .catch(er => reject(er))
        });
    }

    public getUser(opt: userOpt): Promise<OsuUser[]> {
        if (!opt.u.length) throw new TypeError("Username cannot be empty");
        if (opt.event_days < 1 || opt.event_days > 31) throw new Error("Max number of days between now and last event date. Range of 1-31");
        const regex: string[]|null = opt.u.match(/\/users\/(\d*)/);
        if (regex) opt.u = regex[1];
        return new Promise((resolve, reject) => {
            void this._request("/get_user", opt)
                .then(data => {
                    resolve(data as OsuUser[])
                })
                .catch(er => reject(er))
        });
    }

    public getScores(opt: scoreOpt): Promise<OsuScores[]> {
        if (!opt) throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 100) throw new Error("Limit range 1-100");
        return new Promise((resolve, reject) => {
            void this._request("/get_scores", opt)
                .then(data => {
                    resolve(data as OsuScores[])
                })
                .catch(er => reject(er))
        });
    }

    public getBest(opt: recentAndBestOpt): Promise<OsuBest[]> {
        if (!opt || !opt.u) throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 100) throw new Error("Limit range 1-100");
        const regex: string[]|null = opt.u.match(/\/users\/(\d*)/);
        if (regex) opt.u = regex[1];
        return new Promise((resolve, reject) => {
            void this._request("/get_user_best", opt)
                .then(data => {
                    resolve(data as OsuBest[])
                })
                .catch(er => reject(er))
        });
    }
    
    public getRecent(opt: recentAndBestOpt): Promise<OsuRecent[]> {
        if (!opt || !opt.u) throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 50) throw new Error("Limit range 1-50");
        const regex: string[]|null = opt.u.match(/\/users\/(\d*)/);
        if (regex) opt.u = regex[1];
        return new Promise((resolve, reject) => {
            void this._request("/get_user_recent", opt)
                .then(data => {
                    resolve(data as OsuRecent[])
                })
                .catch(er => reject(er))
        });
    }

    public getMatch(opt: matchOpt): Promise<OsuMatch> {
        if (!opt.mp) throw new TypeError("Match ID cannot be empty");
        return new Promise((resolve, reject) => {
            void this._request("/get_match", opt)
                .then(data => {
                    resolve(data as OsuMatch)
                })
                .catch(er => reject(er))
        });
    }

    public getReplay(opt: replayOpt): Promise<OsuReplay> {
        if (!opt || !opt.b || !opt.u) throw new TypeError("Option `b` and `u` cannot be empty");
        return new Promise((resolve, reject) => {
            void this._request("/get_replay", opt)
                .then(data => {
                    resolve(data as OsuReplay)
                })
                .catch(er => reject(er))
        });
    }

    private _request(path: string, opt: string|unknown): Promise<unknown> {
        return new Promise((resolve, reject) => {
            void request.get(this.baseUrl + path)
                .query(
                    Object.assign({
                        k: this.token as string
                    }, opt)
                )
                .then(data => {
                    resolve(data.body)
                })
                .catch(er => reject(er));
        });
    }
}
