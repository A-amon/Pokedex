import styled from 'styled-components/native'
import { Colors } from '@styles/color'
import Heading from '@components/Heading'
import Span from '@components/Span'
import Type from '@components/Type'
import { SharedElement } from 'react-navigation-shared-element'

/* set of styles shared among multiple components */
const sharedStyles = `
    font-weight:bold;
`

/* styled components */
const StyledPokemonCard = styled.TouchableOpacity`
    padding:20px 10px;
    border-radius:10px;
    flex-direction:row;
    position:relative;
    elevation:5;
    shadow-color: #000;
    shadow-offset: 0 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    max-width:425px;
`

const Number = styled(Span)`
    ${sharedStyles}
    color:${Colors.fernGreen};
`

const Name = styled(Heading)`
    color:${Colors.white};
    text-transform:capitalize;
`

const TypesWrapper = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
`

const StyledType = styled(Type)`
                    margin-right:10px;
                    `

const Column = styled.View`
                width:70%;
                `

const Image = styled.Image`
                aspect-ratio:1;
                `

const ImageWrapper = styled(SharedElement)`
                    width:40%;
					position: absolute;
                    right: 0;
                    top: 0;
                    `

module.exports = {
    StyledPokemonCard,
    Column,
    Number,
    Name,
    TypesWrapper,
    StyledType,
    ImageWrapper,
    Image
}