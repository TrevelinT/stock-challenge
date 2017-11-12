import { 
    ADD_PLAYER,
    ADD_BOSS,
    CHALLENGE,
    REMOVE_STOCKS,
    RESET
} from '../actions';
import MarioAvatar from '../images/Mario.png';
import LuigiAvatar from '../images/Luigi.png';
import PeachAvatar from '../images/Peach.png';
import BowserAvatar from '../images/Bowser.png';
import YoshiAvatar from '../images/Yoshi.png';
import RosalinaAndLumaAvatar from '../images/RosalinaAndLuma.png';
import BowserJrAvatar from '../images/BowserJr.png';
import WarioAvatar from '../images/Wario.png';
import DKAvatar from '../images/DK.png';
import DiddyKongAvatar from '../images/DiddyKong.png';
import MrGameAndWatchAvatar from '../images/MrGameAndWatch.png';
import LittleMacAvatar from '../images/LittleMac.png';
import LinkAvatar from '../images/Link.png';
import ZeldaAvatar from '../images/Zelda.png';
import SheikAvatar from '../images/Sheik.png';
import GanondorfAvatar from '../images/Ganondorf.png';
import ToonLinkAvatar from '../images/ToonLink.png';
import SamusAvatar from '../images/Samus.png';
import ZeroSuitSamusAvatar from '../images/ZeroSuitSamus.png';
import PitAvatar from '../images/Pit.png';
import PalutenaAvatar from '../images/Palutena.png';
import MarthAvatar from '../images/Marth.png';
import IkeAvatar from '../images/Ike.png';
import RobinAvatar from '../images/Robin.png';
import DuckHuntAvatar from '../images/DuckHunt.png';
import KirbyAvatar from '../images/Kirby.png';
import DDDAvatar from '../images/DDD.png';
import MetaKnightAvatar from '../images/MetaKnight.png';
import FoxAvatar from '../images/Fox.png';
import FalcoAvatar from '../images/Falco.png';
import PikachuAvatar from '../images/Pikachu.png';
import CharizardAvatar from '../images/Charizard.png';
import LucarioAvatar from '../images/Lucario.png';
import JigglypuffAvatar from '../images/Jigglypuff.png';
import GreninjaAvatar from '../images/Greninja.png';
import ROBAvatar from '../images/ROB.png';
import NessAvatar from '../images/Ness.png';
import FalconAvatar from '../images/Falcon.png';
import VillagerAvatar from '../images/Villager.png';
import OlimarAvatar from '../images/Olimar.png';
import WiiFitTrainerAvatar from '../images/WiiFitTrainer.png';
import ShulkAvatar from '../images/Shulk.png';
import DrMarioAvatar from '../images/DrMario.png';
import DarkPitAvatar from '../images/DarkPit.png';
import LucinaAvatar from '../images/Lucina.png';
import PacManAvatar from '../images/PacMan.png';
import MegaManAvatar from '../images/MegaMan.png';
import SonicAvatar from '../images/Sonic.png';
import MewtwoAvatar from '../images/Mewtwo.png';
import LucasAvatar from '../images/Lucas.png';
import RoyAvatar from '../images/Roy.png';
import RyuAvatar from '../images/Ryu.png';
import CloudAvatar from '../images/Cloud.png';
import CorrinAvatar from '../images/Corrin.png';
import BayonettaAvatar from '../images/Bayonetta.png';
import MiiAvatar from '../images/Mii.png';

const initialState = {
    player: {
        name: '',
        stocks: 20
    },
    boss: {},
    characterList: [
        { name: 'Mario', image: MarioAvatar },
        { name: 'Luigi', image: LuigiAvatar },
        { name: 'Peach', image: PeachAvatar },
        { name: 'Browser', image: BowserAvatar },
        { name: 'Yoshi', image: YoshiAvatar },
        { name: 'Rosalina', image: RosalinaAndLumaAvatar },
        { name: 'Bowser Jr.', image: BowserJrAvatar },
        { name: 'Wario', image: WarioAvatar },
        { name: 'Donkey Kong', image: DKAvatar },
        { name: 'Diddy Kong', image: DiddyKongAvatar },
        { name: 'Game and Watch', image: MrGameAndWatchAvatar },
        { name: 'Little Mac', image: LittleMacAvatar },
        { name: 'Link', image: LinkAvatar },
        { name: 'Zelda', image: ZeldaAvatar },
        { name: 'Sheik', image: SheikAvatar },
        { name: 'Ganondorf', image: GanondorfAvatar },
        { name: 'Toon Link', image: ToonLinkAvatar },
        { name: 'Samus', image: SamusAvatar },
        { name: 'Zero Suit Samus', image: ZeroSuitSamusAvatar },
        { name: 'Pit', image: PitAvatar },
        { name: 'Palutena', image: PalutenaAvatar },
        { name: 'Marth', image: MarthAvatar },
        { name: 'Ike', image: IkeAvatar },
        { name: 'Robin', image: RobinAvatar },
        { name: 'Duck Hunt', image: DuckHuntAvatar },
        { name: 'Kirby', image: KirbyAvatar },
        { name: 'King Dedede', image: DDDAvatar },
        { name: 'Meta Knight', image: MetaKnightAvatar },
        { name: 'Fox', image: FoxAvatar },
        { name: 'Falco', image: FalcoAvatar },
        { name: 'Pikachu', image: PikachuAvatar },
        { name: 'Charizard', image: CharizardAvatar },
        { name: 'Lucario', image: LucarioAvatar },
        { name: 'Jigglypuff', image: JigglypuffAvatar },
        { name: 'Greninja', image: GreninjaAvatar },
        { name: 'ROB', image: ROBAvatar },
        { name: 'Ness', image: NessAvatar },
        { name: 'Captain Falcon', image: FalconAvatar },
        { name: 'Villager', image: VillagerAvatar },
        { name: 'Olimar', image: OlimarAvatar },
        { name: 'Wii Fit Trainer', image: WiiFitTrainerAvatar },
        { name: 'Shulk', image: ShulkAvatar },
        { name: 'Dr. Mario', image: DrMarioAvatar },
        { name: 'Dark Pit', image: DarkPitAvatar },
        { name: 'Lucina', image: LucinaAvatar },
        { name: 'Pac-Man', image: PacManAvatar },
        { name: 'Mega Man', image: MegaManAvatar },
        { name: 'Sonic', image: SonicAvatar },
        { name: 'Mewtwo', image: MewtwoAvatar },
        { name: 'Lucas', image: LucasAvatar },
        { name: 'Roy', image: RoyAvatar },
        { name: 'Ryu', image: RyuAvatar },
        { name: 'Cloud', image: CloudAvatar },
        { name: 'Corrin', image: CorrinAvatar },
        { name: 'Bayonetta', image: BayonettaAvatar },
        { name: 'Mii', image: MiiAvatar },
    ],
    challengerList: [],
    enemiesDefeated: [],
    challenger: null
};

function selectFrom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

export default function stockChallengeApp(state = initialState, action) {
    switch(action.type) {
    case ADD_PLAYER:
        return {
            ...state,
            player: {
                stocks: 20,
                ...state.characterList.find(char => char.name === action.payload)

            }
        };
    case ADD_BOSS:
        return {
            ...state,
            boss: state.characterList.find(char => char.name === action.payload),
            challengerList: state.characterList.filter(char => char.name !== action.payload)
        };
    case CHALLENGE:
        return {
            ...state,
            enemiesDefeated: state.challenger ? state.enemiesDefeated.concat(state.challenger) : [],
            challenger: state.challengerList.splice(selectFrom(0, state.challengerList.length), 1)[0],
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