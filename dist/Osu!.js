"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_superfetch_1 = __importDefault(require("node-superfetch"));
class Osu {
    constructor(token) {
        this.baseUrl = "https://osu.ppy.sh/api";
        this.token = null;
        if (!token)
            throw new Error("Token is required");
        this.token = token;
    }
    getBeatmaps(opt) {
        if (!opt)
            throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 500)
            throw new Error("Limit range 1-500");
        if (opt.m && !opt.a)
            throw new TypeError("Options `m` only has an effect if `a` is chosen and not 0");
        return new Promise((resolve, reject) => {
            void this._request("/get_beatmaps", opt)
                .then(data => {
                resolve(data);
            })
                .catch(er => reject(er));
        });
    }
    getUser(opt) {
        if (!opt.u.length)
            throw new TypeError("Username cannot be empty");
        if (opt.event_days < 1 || opt.event_days > 31)
            throw new Error("Max number of days between now and last event date. Range of 1-31");
        const regex = opt.u.match(/\/users\/(\d*)/);
        if (regex)
            opt.u = regex[1];
        return new Promise((resolve, reject) => {
            void this._request("/get_user", opt)
                .then(data => {
                resolve(data);
            })
                .catch(er => reject(er));
        });
    }
    getScores(opt) {
        if (!opt)
            throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 100)
            throw new Error("Limit range 1-100");
        return new Promise((resolve, reject) => {
            void this._request("/get_scores", opt)
                .then(data => {
                resolve(data);
            })
                .catch(er => reject(er));
        });
    }
    getBest(opt) {
        if (!opt || !opt.u)
            throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 100)
            throw new Error("Limit range 1-100");
        const regex = opt.u.match(/\/users\/(\d*)/);
        if (regex)
            opt.u = regex[1];
        return new Promise((resolve, reject) => {
            void this._request("/get_user_best", opt)
                .then(data => {
                resolve(data);
            })
                .catch(er => reject(er));
        });
    }
    getRecent(opt) {
        if (!opt || !opt.u)
            throw new TypeError("Options cannot be empty");
        if (opt.limit < 1 || opt.limit > 50)
            throw new Error("Limit range 1-50");
        const regex = opt.u.match(/\/users\/(\d*)/);
        if (regex)
            opt.u = regex[1];
        return new Promise((resolve, reject) => {
            void this._request("/get_user_recent", opt)
                .then(data => {
                resolve(data);
            })
                .catch(er => reject(er));
        });
    }
    getMatch(opt) {
        if (!opt.mp)
            throw new TypeError("Match ID cannot be empty");
        return new Promise((resolve, reject) => {
            void this._request("/get_match", opt)
                .then(data => {
                resolve(data);
            })
                .catch(er => reject(er));
        });
    }
    getReplay(opt) {
        if (!opt || !opt.b || !opt.u)
            throw new TypeError("Option `b` and `u` cannot be empty");
        return new Promise((resolve, reject) => {
            void this._request("/get_replay", opt)
                .then(data => {
                resolve(data);
            })
                .catch(er => reject(er));
        });
    }
    _request(path, opt) {
        return new Promise((resolve, reject) => {
            void node_superfetch_1.default.get(this.baseUrl + path)
                .query(Object.assign({
                k: this.token
            }, opt))
                .then(data => {
                resolve(data.body);
            })
                .catch(er => reject(er));
        });
    }
}
exports.default = Osu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3N1IS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Pc3UhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQXFDO0FBZ0JyQyxNQUFxQixHQUFHO0lBR3BCLFlBQW9CLEtBQWE7UUFGaEIsWUFBTyxHQUFHLHdCQUF3QixDQUFDO1FBQzVDLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxLQUFLO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxXQUFXLENBQUMsR0FBWTtRQUMzQixJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN6RCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMzRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUN0RyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDO2lCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLElBQWlCLENBQUMsQ0FBQTtZQUM5QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sT0FBTyxDQUFDLEdB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