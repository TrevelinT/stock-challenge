import { 
    ADD_PLAYER,
    ADD_BOSS,
    CHALLENGE,
    REMOVE_STOCKS,
    RESET
} from '../actions';

const initialState = {
    player: {
        name: '',
        stocks: 20
    },
    boss: {},
    characterList: [
        { name: 'Mario' },
        { name: 'Luigi' },
        { name: 'Peach' },
        { name: 'Browser' },
        { name: 'Yoshi' },
        { name: 'Rosalina' },
        { name: 'Bowser Jr.' },
        { name: 'Wario' },
        { name: 'Donkey Kong' },
        { name: 'Diddy Kong' },
        { name: 'Game and Watch' },
        { name: 'Little Mac' },
        { name: 'Link' },
        { name: 'Zelda' },
        { name: 'Sheik' },
        { name: 'Ganondorf' },
        { name: 'Toon Link' },
        { name: 'Samus' },
        { name: 'Zero Suit Samus' },
        { name: 'Pit' },
        { name: 'Palutena' },
        { name: 'Marth' },
        { name: 'Ike' },
        { name: 'Robin' },
        { name: 'Duck Hunt' },
        { name: 'Kirby' },
        { name: 'King Dedede' },
        { name: 'Meta Knight' },
        { name: 'Fox' },
        { name: 'Falco' },
        { name: 'Pikachu' },
        { name: 'Charizard' },
        { name: 'Lucario' },
        { name: 'Jigglypuff' },
        { name: 'Greninja' },
        { name: 'ROB' },
        { name: 'Ness' },
        { name: 'Captain Falcon' },
        { name: 'Village' },
        { name: 'Olimar' },
        { name: 'Wii Fit Trainer' },
        { name: 'Shulk' },
        { name: 'Dr. Mario' },
        { name: 'Dark Pit' },
        { name: 'Lucina' },
        { name: 'Pac-Man' },
        { name: 'Mega Man' },
        { name: 'Sonic' },
        { name: 'Mewtwo' },
        { name: 'Lucas' },
        { name: 'Roy' },
        { name: 'Ryu' },
        { name: 'Cloud' },
        { name: 'Corrin' },
        { name: 'Bayonetta' },
        { name: 'Mii' },
    ],
    challengerList: [],
    challenger: {}
};

const selectFrom = (lowerValue, upperValue) => {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
};

export default function stockChallengeApp(state = initialState, action) {
    switch(action.type) {
    case ADD_PLAYER:
        return {
            ...state,
            player: {
                stocks: 20,
                name: action.payload
            }
        };
    case ADD_BOSS:
        return {
            ...state,
            boss: state.characterList.filter(char => char.name === action.payload),
            challengerList: state.characterList.filter(char => char.name !== action.payload)
        };
    case CHALLENGE:
        return {
            ...state,
            challenger: state.challengerList.splice(selectFrom(0, state.challengerList.length), 1)[0],
            // challenger: state.challengerList[action.payload],
            // challengerList: state.challengerList.filter((item, index) => index !== action.payload)
        };
    case REMOVE_STOCKS:
        return {
            ...state,
            player: {
                ...state.player,
                stocks: state.player.stocks - action.payload
            }
        };
    case RESET:
        return {
            ...initialState
        };
    default:
        return state;
    }
}