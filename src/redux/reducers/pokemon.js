import { GET_ALL_POKEMONS, SET_CURRENT } from '../actionTypes'

const initialState = {
    items: [],
	current:{}
}

export default function pokemon (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                items: [...state.items, ...action.pokemons]
            }
		case SET_CURRENT:
			return {
				...state,
				current:action.pokemon
			}
        default:
            return state
    }
}