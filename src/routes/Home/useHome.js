import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useIsMounted } from '@functions/utilities.js'
import Animated from 'react-native-reanimated'
import { FlatList } from 'react-native'
import { getAllPokemons } from '@redux/actions/pokemon'

const useHome = () => {
	const [searchText, setSearchText] = useState('')

	const isMounted = useIsMounted()
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemon.items)

    const scrollY = useRef(new Animated.Value(0)).current
	const prevPokemonsCount = useRef(0)

    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

	const loadPokemons = () => {
		dispatch(getAllPokemons(pokemons.length))
	}

    /**
     * Retrieve pokemons when component is mounted
     * @return {void}
     */
    useEffect(() => {
		if(isMounted){
			loadPokemons()
		}
    }, [isMounted])

	useEffect(() => {
		if(pokemons.length > prevPokemonsCount.current){
			prevPokemonsCount.current = pokemons.length
		}
	},[pokemons])

	// useEffect(() => {
	// 	const {current} = prevPokemonsCount
	// 	if(pokemons.length > current){
	// 		if(current > 0){
	// 			setTimeout(()=>{
	// 				listRef.current.scrollToIndex({animated:false, index:current - 1})
	// 			},0)
	// 		}
	// 		prevPokemonsCount.current = pokemons.length
	// 	}
	// },[pokemons])

    const scrollEventHandler = () => {
        return Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
        )
    }

    return {
        scrollEventHandler,
        AnimatedFlatList,
        pokemons,
        scrollY,
		prevPokemonsCount,
		searchText,
		setSearchText,
		loadPokemons
    }
}

export default useHome