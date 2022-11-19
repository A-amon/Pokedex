import { GET_ALL_POKEMONS, SET_CURRENT } from '../actionTypes'
import pokemons from '@redux/pokemon.json'

export const getAllPokemons = (offset = 0, length = 10) => {
    return dispatch => {
        dispatch({
            type: GET_ALL_POKEMONS,
            pokemons:offset < pokemons.length
				? pokemons.slice(offset, 
					(offset + length) < pokemons.length
					? (offset + length): pokemons.length): []
        })
    }
}

export const setCurrent = (pokemon) => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT,
            pokemon
        })
    }
}