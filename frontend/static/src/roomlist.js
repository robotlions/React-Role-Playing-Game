const rooms = [{
        id: 1,
        name: "Home Base",
        desc: "Empty room filled with nothing but hope",
        north: 2,
        south: null,
        east: 8,
        west: null,
      },
      {
        id: 2,
        name: 'Room to the North',
        desc: `A surprisingly difficult to reach destination. There are exits
        to the north and south.`,
        north: 3,
        south: 1,
        east: null,
        west: null,
      },
      {
        id: 3,
        name: 'Center of the Build',
        desc: 'A soaring cavern with exits in all directions',
        north: 5,
        south: 2,
        east: 6,
        west: 4,
      },
      {
        id: 4,
        name: 'The Western Chamber',
        desc: `A quiet space for working and testing. There's an exit to the east`,
        north: null,
        south: null,
        east: 3,
        west: null,
      },
      {
        id: 5,
        name: 'The Pillar of Ice',
        desc: `A cold, soaring chamber dominated by a gleaming pillar of ice`,
        north: null,
        south: 3,
        east: null,
        west: null,
      },
      {
        id: 6,
        name: 'The Easter Chamber',
        desc: `A large cavern strewn with building materials and monster parts`,
        north: null,
        south: 7,
        east: null,
        west: 3,
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
      },
      {
        id: 8,
        name: `The Study`,
        desc: `A small, quiet room with floor-to-ceiling bookshelves and many
        comfortable chairs.`,
        north: 7,
        south: null,
        east: null,
        west: 1,
      }
]
export default rooms
