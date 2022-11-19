import React from 'react'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'
import useHome from './useHome'
import { Pokemon } from '@routes'
import { StyledHome, Title, Description, StyledSearchbar, StyledPokemonCard } from './styles'

const Home = ({ navigation }) => {
    const { scrollEventHandler, 
		AnimatedFlatList, 
		pokemons, 
		scrollY,
		prevPokemonsCount,
		searchText,
		setSearchText,
	loadPokemons } = useHome()
	return (
        <StyledHome>
            <Title>
                Pokedex
            </Title>
            <Description>
                Search for Pokemon by name or using the National Pokedex number.
            </Description>
            <StyledSearchbar value={searchText} onChangeText={setSearchText}/>
            {
                pokemons.length > 0 && <AnimatedFlatList
					initialScrollIndex={prevPokemonsCount.current > 0? prevPokemonsCount.current - 1: 0}
                    onScroll={scrollEventHandler()}
					onEndReachedThreshold={0.3}
					onEndReached={() => {
						loadPokemons()
					}}
                    data={pokemons.filter(pokemon => 
						pokemon.name.
						toLowerCase().
						includes(searchText.toLowerCase()))}
                    keyExtractor={(item) => item.num}
                    renderItem={({ item, index }) => {
                        const cardHeight = 170

                        const inputRange = [
                            -1,
                            0,
                            cardHeight * index,
                            cardHeight * (index + 2)
                        ]

                        const scale = scrollY.interpolate({
                            inputRange,
                            outputRange: [1, 1, 1, 0] //size at every point in keyframe
                        })

                        return <Animated.View style={{ transform: [{ scale }] }}>
                            <StyledPokemonCard number={item.num}
                                name={item.name}
                                types={item.type}
                                image={item.img}
                                onPress={() => navigation.navigate(Pokemon, { pokemon: item })}
                            />
                        </Animated.View>
                    }}
                />
            }
        </StyledHome>
    )
}

Home.propTypes = {
    navigation: PropTypes.object
}

export default Home