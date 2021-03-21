import dungeonStatic from './images/dungeonStatic.jpg'
import dungeonWalk from './images/dungeonWalk.gif'
import waterfall from './images/waterfall.png'
import poolOfWater from './images/poolOfWater.png'
import caveEnter from './images/caveEnter.png'
import wellBottom from './images/wellBottom.png'
import arch from './images/arch.jpg'
const rooms = [{
        id: 1,
        name: "Bottom of the Well",
        desc: "You stand at the bottom of a well in the entrance of foul-smelling cave. The dank floor is littered with the bloody body parts of...are those the other adventurers that came before you? Well, yes. But they probably deserved it. The cave heads north into darkness.",
        north: 2,
        south: 10,
        east: 8,
        west: null,
        static: wellBottom,
        walk: dungeonWalk,
        danger: false,
      },
      {
        id: 2,
        name: 'Cave to the North',
        desc: `Slimy globs of rotting human guts ooze down the blood-stained walls. From the distant north comes the sound of running water. There are exits
        to the north and south.`,
        north: 3,
        south: 1,
        east: null,
        west: null,
        static: dungeonStatic,
        walk: dungeonWalk,
        danger: true,
      },
      {
        id: 3,
        name: 'Center of the Cave',
        desc: 'A soaring cavern with exits in all directions. From the north comes the sound of running water. Far to the south is the faintest flicker of light.',
        north: 5,
        south: 2,
        east: 6,
        west: 4,
        static: dungeonStatic,
        walk: dungeonWalk,
        danger: true,
      },
      {
        id: 4,
        name: 'Underground Pool',
        desc: `A quiet alcove with a pool of dark water fed by a slow trickle from a fissure in the wall. `,
        north: null,
        south: null,
        east: 3,
        west: null,
        static: poolOfWater,
        walk: dungeonWalk,
        danger: true,
      },
      {
        id: 5,
        name: 'Subterranean Waterfall',
        desc: `A cold, soaring chamber dominated by waterfall plunging from the darkness high above.`,
        north: null,
        south: 3,
        east: null,
        west: null,
        static: waterfall,
        walk: dungeonWalk,
        danger: true,
      },
      {
        id: 6,
        name: 'The Eastern Chamber',
        desc: `A large cavern strewn with discarded monster bits.`,
        north: null,
        south: 7,
        east: null,
        west: 3,
        static: caveEnter,
        walk: dungeonWalk,
        danger: true,
      },
      {
        id: 7,
        name: 'The Eastern Corridor',
        desc: `A long stone cavern filled with the glowing golden light of hundreds
        of torches. Just like that Police video.`,
        north: 6,
        south: 8,
        east: null,
        west: null,
        static: dungeonStatic,
        walk: dungeonWalk,
        danger: true,
      },
      {
        id: 8,
        name: `The Study`,
        desc: `Some one, some nerd probably, apparently uses this as a makeshift workshop. It's filled with books, drawings and dozens of broken coffee machines.`,
        north: 7,
        south: 9,
        east: null,
        west: 1,
        static: dungeonStatic,
        walk: dungeonWalk,
        danger: true,
      },
      {
      id: 9,
      name: `Stalactite-Filled Cavern`,
      desc: `Stalactites jut from the damp, stony floor of this sprawling cavern.`,
      north: 8,
      south: null,
      east: null,
      west: null,
      static: dungeonStatic,
      walk: dungeonWalk,
      danger: true,
    },
    {
    id: 10,
    name: `Abandoned Well`,
    desc: `In a quiet corner of the woods, surrounded by silence and trees, is the stone-ringed mouth of an ancient well. A rusty chain leads down into the darkness.`,
    north: 1,
    south: null,
    east: null,
    west: null,
    static: arch,
    walk: dungeonWalk,
    danger: false,
  }
]
export default rooms
