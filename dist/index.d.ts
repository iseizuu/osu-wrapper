import { beatOpt, matchOpt, OsuBeat, OsuBest, OsuMatch, OsuRecent, OsuReplay, OsuScores, OsuUser, recentAndBestOpt, replayOpt, scoreOpt, userOpt } from "./typings";
export declare class Osu {
    private readonly baseUrl;
    private token;
    constructor(token: string);
    getBeatmaps(opt: beatOpt): Promise<OsuBeat[]>;
    getUser(opt: userOpt): Promise<OsuUser[]>;
    getScores(opt: scoreOpt): Promise<OsuScores[]>;
    getBest(opt: recentAndBestOpt): Promise<OsuBest[]>;
    getRecent(opt: recentAndBestOpt): Promise<OsuRecent[]>;
    getMatch(opt: matchOpt): Promise<OsuMatch>;
    getReplay(opt: replayOpt): Promise<OsuReplay>;
    private _request;
}
