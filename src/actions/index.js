export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_BOSS = 'ADD_BOSS';
export const CHALLENGE = 'CHALLENGE';
export const REMOVE_STOCKS = 'REMOVE_STOCKS';
export const RESET = 'RESET';

export function addPlayer(player) {
    return {
        type: ADD_PLAYER,
        payload: player
    };
}

export function addBoss(boss) {
    return {
        type: ADD_BOSS,
        payload: boss
    };
}

export function challenge() {
    return {
        type: CHALLENGE,
    };
}

export function removeStocks(stocks) {
    return {
        type: REMOVE_STOCKS,
        payload: stocks
    };
}

export function reset() {
    return {
        type: RESET,
    };
}