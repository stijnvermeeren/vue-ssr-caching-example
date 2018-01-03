import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      artists: [
        {
          id: 1,
          name: 'The Beatles'
        },
        {
          id: 2,
          name: 'The Rolling Stones'
        }
      ],
      songs: [
        {
          id: 1,
          title: 'A Day in the Life',
          artist_id: 1
        },
        {
          id: 2,
          title: 'Come Together',
          artist_id: 1
        },
        {
          id: 3,
          title: 'Sympathy for the Devil',
          artist_id: 2
        }
      ]
    }
  })
};

export default createStore
