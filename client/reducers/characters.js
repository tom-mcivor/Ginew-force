// TODO: import actions

const initialState = [
  {
    id: 124,
    name: 'Daishinkan',
    specie: 'Angel',
    role: 'Sumo Sacerdote',
    imageUrl: 'https://i.ibb.co/cY94Ddp/Daishinkan.png',
    status: 'Vivo',
    universe: '0',
    transform: null,
    originplanet: 'Desconocido',
    strength: 87
  },
  {
    id: 125,
    name: 'Zeno',
    specie: 'Desconocido',
    role: 'Rey de todo',
    imageUrl: 'https://i.ibb.co/qjpJnSF/Zeno-Artwork.webp',
    status: 'Vivo',
    universe: '0',
    transform: null,
    originplanet: 'Desconocido',
    strength: 13
  },
  {
    id: 4,
    name: 'Iwen',
    specie: 'Desconocido',
    role: 'Dios de la destruccion',
    imageUrl: 'https://i.ibb.co/MgdVTQc/Iwen.webp',
    status: 'Vivo',
    universe: '1',
    transform: null,
    originplanet: 'Desconocido',
    strength: 5
  },
]
/*
  {
    characters: [{id, name, ..., strength}, {}, {}, {}, {}, ... 50 more],
    selectedCharacterIds: [12, 29] -> character component -> use the selected character id to get the image/name/blah of the actual character -> render that
  }
*/

// fetch 50 characters -> assign each one a random strength between 0-100 -- api function

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    // actions here
    default:
      return state
  }
}

export default reducer
