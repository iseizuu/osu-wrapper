export interface OsuUser {
    user_id: string,
    username: string,
    join_date: string,
    count300: string,
    count100: string,
    count50: string,
    playcount: string
    ranked_score: string,       
    total_score: string,       
    pp_rank: string,
    level: string,
    pp_raw: string,
    accuracy: string,
    count_rank_ss: string,
    count_rank_ssh: string,
    count_rank_s: string,
    count_rank_sh: string,
    count_rank_a: string,
    country: string,
    total_seconds_played: string,
    pp_country_rank: string,
    events: [
        {
            display_html: string,
            beatmap_id: string,
            beatmapset_id: string,
            date: string,
            epicfactor: string,
        }
    ]
}

export interface OsuBeat {
    beatmapset_id: string,
    beatmap_id: string,
    approved: "0"|"1",
    total_length: string,
    hit_length: string,
    version: string,
    file_md5: string,
    diff_size: string,
    diff_overall: string,
    diff_approach: string,
    diff_drain: string,
    mode: "0"|"1"|"2"|"3"|string,
    count_normal: string,
    count_slider: string,
    count_spinner: string,
    submit_date: string,
    approved_date: string|null,
    last_update: string,
    artist: string,
    artist_unicode: string,
    title: string,
    title_unicode: string,
    creator: string,
    creator_id: string,
    bpm: string,
    source:string,
    tags: string,
    genre_id: string,
    language_id: string,
    favourite_count: string,
    rating: string,
    storyboard: string,
    video: string,
    download_unavailable: "0"|"1",
    audio_unavailable: "0"|"1",
    playcount: string,
    passcount: string,
    packs: string,
    max_combo: string,
    diff_aim: string,
    diff_speed: string,
    difficultyrating: string,
}

export interface OsuScores {
    score_id: string|null,
    score: string,
    username: string,
    maxcombo: string,
    count50: string,
    count100: string,
    count300: string,
    countmiss: string,
    countkatu: string,
    countgeki: string,
    perfect: "0"|"1",
    enabled_mods: string,
    user_id: string,
    date: string,
    rank: string,
    pp: string|null,
    replay_available: "0"|"1",
}

export interface OsuBest {
    beatmap_id: string,
    score_id: string,
    score: string,
    maxcombo: string,
    count50: string,
    count100: string,
    count300: string,
    countmiss: string,
    countkatu: string,
    countgeki: string,
    perfect: string,
    enabled_mods: string,
    user_id: string,
    date: string,
    rank: string,
    pp: string,
    replay_available: string,
}

export interface OsuRecent {
    beatmap_id: string,
    score: string,
    maxcombo: string,
    count50: string,
    count100: string,
    count300: string,
    countmiss: string,
    countkatu: string,
    countgeki: string,
    perfect: string,
    enabled_mods: string,
    user_id: string, 
    date: string,
    rank: string,
}

export interface OsuMatch {
    match: {
        match_id: string,
        name: string,
        start_time: string,
        end_time: string|null
    }|null,
    games: [
        {
            game_id: string,
            start_time: string,
            end_time: string,
            beatmap_id: string,
            play_mode: string,
            match_type: string,
            scoring_type : string,
            team_type: string,
            mods: string,
            scores       : [
                {
                    slot: string,
                    team : string,
                    user_id : string,
                    score : string,
                    maxcombo : string,
                    rank  : string,
                    count50 : string,
                    count100: string,
                    count300 : string,
                    countmiss: string,
                    countgeki : string,
                    countkatu : string,
                    perfect : string,
                    pass : string,
                    enabled_mods: string|null,
                }
            ]
        }
    ]|[]
}

export interface OsuReplay {
    content: string;
    encoding: string;
}
