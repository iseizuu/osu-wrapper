"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Osu = void 0;
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
exports.Osu = Osu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0VBQXFDO0FBZ0JyQyxNQUFhLEdBQUc7SUFHWixZQUFvQixLQUFhO1FBRmhCLFlBQU8sR0FBRyx3QkFBd0IsQ0FBQztRQUM1QyxVQUFLLEdBQWdCLElBQUksQ0FBQztRQUU5QixJQUFJLENBQUMsS0FBSztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQVk7UUFDM0IsSUFBSSxDQUFDLEdBQUc7WUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDekQsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7UUFDdEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxJQUFpQixDQUFDLENBQUE7WUFDOUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLE9BQU8sQ0FBQyxH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