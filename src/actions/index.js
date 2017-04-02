export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_BOSS = 'ADD_BOSS';
export const CHALLENGE = 'CHALLENGE';
export const REMOVE_STOCKS = 'REMOVE_STOCKS';
export const RESET = 'RESET';

export const addPlayer = (player) => ({
    type: ADD_PLAYER,
    payload: player
});

export const addBoss = (boss) => ({
    type: ADD_BOSS,
    payload: boss
});

export const challenge = () => ({
    type: CHALLENGE,
});

export const removeStocks = (stocks) => ({
    type: REMOVE_STOCKS,
    payload: stocks
});

export const reset = () => ({
    type: RESET,
});