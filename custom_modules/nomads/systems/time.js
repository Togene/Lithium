let game_second = 0
let game_minute = 0
let game_hour = 0

let time_fraction = 50
let divisor = 60/time_fraction

let day_length = (86400/time_fraction)/time_fraction // length in second

export const init = () => {
    console.log("%cTime Initialized", "color:#eb33b5")
    console.log("length of day(in game seconds): ", (day_length))
}

export const update = (delta) => {
    game_second += delta
    game_minute = game_second/divisor
    game_hour = game_minute/divisor
    if (game_second >= day_length) {
        console.log("new day")
        game_second = 0
    }
}

export const get_second = () => {
    return game_second
}