import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {View} from 'react-native'
import Evolution from '@components/Evolution'
import {StyledText} from './styles'

const Evolutions = () => {
	const [evolutions, setEvolutions] = useState([])
	const pokemons = useSelector((state) => state.pokemon.items)
	const pokemon = useSelector((state) => state.pokemon.current)

	useEffect(()=>{
		if(pokemons && pokemon){
			getEvolutions(pokemons, pokemon)
		}
	},[pokemons, pokemon])

	const getEvolutions = (pokemons, pokemon) => {
		let basicPokemon = pokemon
		if(pokemon?.basic_evolution){
			basicPokemon = pokemons.find(_pokemon => pokemon.basic_evolution === _pokemon.num)
		}
		if(basicPokemon){
			const {next_evolution} = basicPokemon
			if(next_evolution?.length > 0){
				const _evolutions = [basicPokemon]
				
				for(const evolution of next_evolution){
					const {num: evolvedPokemonNumber} = evolution
					const evolvedPokemon = pokemons.find(_pokemon => _pokemon.num === evolvedPokemonNumber)
					if(evolvedPokemon){
						_evolutions.push(evolvedPokemon)
					}
				}
				setEvolutions([..._evolutions])
			}
		}
	}

	return (
		<View>
			{
				evolutions.length > 1
				?evolutions.map((evolution, ind) => {
					if(evolutions[ind + 1]){
						return (
							<Evolution key={ind} fromPokemon={evolution} toPokemon={evolutions[ind + 1]}/>
						)
					}
				})
				:<StyledText>No evolution</StyledText>
			}
		</View>
	)
}

export default Evolutions