import React from "react"
import PropTypes from 'prop-types'
import { useBgColor } from '@functions/utilities.js'
import PokemonDefaultImg from '@assets/images/pokemon-default.png'
import {
    StyledPokemonCard,
    Column,
    Number,
    Name,
    TypesWrapper,
    StyledType,
    Image,
    ImageWrapper
} from './styles'

const PokemonCard = ({ number, name, types, image, style, onPress }) => {
    const { color } = useBgColor(image)

    return (
        <StyledPokemonCard style={[{ backgroundColor: color }, style]} onPress={onPress}>
            <Column>
                <Number>
                    #{number}
                </Number>
                <Name>
                    {name}
                </Name>
                <TypesWrapper>
                    {
                        types.map((type, ind) =>
                            <StyledType key={ind}
                                type={type}
                            />
                        )
                    }
                </TypesWrapper>
            </Column>
            <ImageWrapper id={number}>
                <Image resizeMode='contain' defaultSource={PokemonDefaultImg} source={{ uri: image }} />
            </ImageWrapper>
        </StyledPokemonCard>
    )
}

PokemonCard.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
    image: PropTypes.string,
    style: PropTypes.array,
    onPress: PropTypes.func
}

export default React.memo(PokemonCard, (prevProps, newProps) => prevProps.number === newProps.number)