import reducer from '../Redux/homePage/homePage';

const mockStore = {
  character: [
    {
      id: 1,
      name: 'Rick Sanhez',
      status: 'Alive',
      image: '',
      origin: 'Earth',
      episodes: '',
    },
  ],
};

describe('testing the character reducer', () => {
  test('test character reducer with mock store data', () => {
    const store = mockStore;
    const action = {
      type: 'home/getCharacter',
      payload: {
        id: 1,
        name: 'Rick Sanhez',
        status: 'Alive',
        image: '',
        origin: 'Earth',
        episodes: '',
      },
    };
    expect(reducer(store.character, action)).toEqual([{

      id: 1,
      name: 'Rick Sanhez',
      status: 'Alive',
      image: '',
      origin: 'Earth',
      episodes: '',

    }]);
  });
});
