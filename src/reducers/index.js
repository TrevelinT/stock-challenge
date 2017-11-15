import { 
    ADD_PLAYER,
    ADD_BOSS,
    CHALLENGE,
    REMOVE_STOCKS,
    RESET,
    START
} from '../actions';
import characterList from '../entities/characterList';
import { shuffle } from '../helpers/shuffle';

const initialState = {
    player: {
        id: '',
        stocks: 20
    },
    boss: {},
    characterList: characterList,
    challengerList: [],
    enemiesDefeated: [],
    challenger: null
};

// Criar função utilitária para os reducers ficarem sem (nintendo) switch
export default function stockChallengeApp(state = initialState, action) {
    switch(action.type) {
    case ADD_PLAYER:
    // ADD_PLAYER recebe um ID
        return {
            ...state,
            player: {
                stocks: 20,
                id: action.payload,
            }
        };
    // ADD_BOSS recebe um ID
    // eslint-disable-next-line
    case ADD_BOSS:
        const bossId = action.payload;

        return {
            ...state,
            // Remover boss ID
            boss: bossId,
            challengerList: shuffle(Object.keys(state.characterList).filter(id => id !== bossId)).concat(bossId),
        };
    case START:
    // Juntar start e challengerList
        return {
            ...state,
            challenger: characterList.slice(0, 1)[0],
            challengerList: characterList.slice(1),
        };
    case CHALLENGE:
        return {
            ...state,
            enemiesDefeated: state.challenger ? state.enemiesDefeated.concat(state.challenger) : [],
            challenger: state.challengerList.slice(0, 1)[0],
            challengerList: state.challengerList.slice(1),
        };
    case REMOVE_STOCKS:
        return {
            ...state,
            player: {
                ...state.player,
                stocks: state.player.stocks - action.payload > 0 ? state.player.stocks - action.payload : 0
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