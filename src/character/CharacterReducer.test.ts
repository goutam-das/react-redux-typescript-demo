import CharacterReducer from './CharacterReducer';
import ICharacterState from "./ICharacterState.interface";
import {
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction
} from "./IGetCharactersActions.interface";
import CharacterActionTypes from './CharacterActionTypes.enum';
import GetCharactersMock from './GetCharactersMock';

const initialState: ICharacterState = {
  characters: [],
  isFetching: false,
};

describe('CharacterReducer action responses for', () => {
  describe('GET_CHARACTERS_START', () => {
    const action: IGetCharactersStartAction = {
      type: CharacterActionTypes.GET_CHARACTERS_START,
      isFetching: true,
    };

    const newState = CharacterReducer(initialState, action);
    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
    });
  });

  describe('GET_CHARACTERS_SUCCESS', () => {
    const action: IGetCharactersSuccessAction = {
      type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
      characters: GetCharactersMock,
      isFetching: false,
    };

    const newState = CharacterReducer(initialState, action);
    it('has fetched characters', () => {
      expect(newState.characters).toEqual(GetCharactersMock);
    });

    it('is not fetching', () => {
      expect(newState.isFetching).toBe(false);
    });
  });

  describe('GET_CHARACTERS_FAILURE', () => {
    const action: IGetCharactersFailureAction = {
      type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
      isFetching: false,
    };

    const newState = CharacterReducer(initialState, action);

    it('does not have fetched characters', () => {
      expect(newState.characters).toEqual([]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});