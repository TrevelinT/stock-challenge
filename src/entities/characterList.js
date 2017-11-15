import uuidv4 from 'uuid/v4';
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
import subjectToHash from '../helpers/subjectToHash';

const characters = [
    { id: uuidv4(), name: 'Mario', image: MarioAvatar },
    { id: uuidv4(), name: 'Luigi', image: LuigiAvatar },
    { id: uuidv4(), name: 'Peach', image: PeachAvatar },
    { id: uuidv4(), name: 'Browser', image: BowserAvatar },
    { id: uuidv4(), name: 'Yoshi', image: YoshiAvatar },
    { id: uuidv4(), name: 'Rosalina', image: RosalinaAndLumaAvatar },
    { id: uuidv4(), name: 'Bowser Jr.', image: BowserJrAvatar },
    { id: uuidv4(), name: 'Wario', image: WarioAvatar },
    { id: uuidv4(), name: 'Donkey Kong', image: DKAvatar },
    { id: uuidv4(), name: 'Diddy Kong', image: DiddyKongAvatar },
    { id: uuidv4(), name: 'Game and Watch', image: MrGameAndWatchAvatar },
    { id: uuidv4(), name: 'Little Mac', image: LittleMacAvatar },
    { id: uuidv4(), name: 'Link', image: LinkAvatar },
    { id: uuidv4(), name: 'Zelda', image: ZeldaAvatar },
    { id: uuidv4(), name: 'Sheik', image: SheikAvatar },
    { id: uuidv4(), name: 'Ganondorf', image: GanondorfAvatar },
    { id: uuidv4(), name: 'Toon Link', image: ToonLinkAvatar },
    { id: uuidv4(), name: 'Samus', image: SamusAvatar },
    { id: uuidv4(), name: 'Zero Suit Samus', image: ZeroSuitSamusAvatar },
    { id: uuidv4(), name: 'Pit', image: PitAvatar },
    { id: uuidv4(), name: 'Palutena', image: PalutenaAvatar },
    { id: uuidv4(), name: 'Marth', image: MarthAvatar },
    { id: uuidv4(), name: 'Ike', image: IkeAvatar },
    { id: uuidv4(), name: 'Robin', image: RobinAvatar },
    { id: uuidv4(), name: 'Duck Hunt', image: DuckHuntAvatar },
    { id: uuidv4(), name: 'Kirby', image: KirbyAvatar },
    { id: uuidv4(), name: 'King Dedede', image: DDDAvatar },
    { id: uuidv4(), name: 'Meta Knight', image: MetaKnightAvatar },
    { id: uuidv4(), name: 'Fox', image: FoxAvatar },
    { id: uuidv4(), name: 'Falco', image: FalcoAvatar },
    { id: uuidv4(), name: 'Pikachu', image: PikachuAvatar },
    { id: uuidv4(), name: 'Charizard', image: CharizardAvatar },
    { id: uuidv4(), name: 'Lucario', image: LucarioAvatar },
    { id: uuidv4(), name: 'Jigglypuff', image: JigglypuffAvatar },
    { id: uuidv4(), name: 'Greninja', image: GreninjaAvatar },
    { id: uuidv4(), name: 'ROB', image: ROBAvatar },
    { id: uuidv4(), name: 'Ness', image: NessAvatar },
    { id: uuidv4(), name: 'Captain Falcon', image: FalconAvatar },
    { id: uuidv4(), name: 'Villager', image: VillagerAvatar },
    { id: uuidv4(), name: 'Olimar', image: OlimarAvatar },
    { id: uuidv4(), name: 'Wii Fit Trainer', image: WiiFitTrainerAvatar },
    { id: uuidv4(), name: 'Shulk', image: ShulkAvatar },
    { id: uuidv4(), name: 'Dr. Mario', image: DrMarioAvatar },
    { id: uuidv4(), name: 'Dark Pit', image: DarkPitAvatar },
    { id: uuidv4(), name: 'Lucina', image: LucinaAvatar },
    { id: uuidv4(), name: 'Pac-Man', image: PacManAvatar },
    { id: uuidv4(), name: 'Mega Man', image: MegaManAvatar },
    { id: uuidv4(), name: 'Sonic', image: SonicAvatar },
    { id: uuidv4(), name: 'Mewtwo', image: MewtwoAvatar },
    { id: uuidv4(), name: 'Lucas', image: LucasAvatar },
    { id: uuidv4(), name: 'Roy', image: RoyAvatar },
    { id: uuidv4(), name: 'Ryu', image: RyuAvatar },
    { id: uuidv4(), name: 'Cloud', image: CloudAvatar },
    { id: uuidv4(), name: 'Corrin', image: CorrinAvatar },
    { id: uuidv4(), name: 'Bayonetta', image: BayonettaAvatar },
    { id: uuidv4(), name: 'Mii', image: MiiAvatar },
];

export default subjectToHash(characters);