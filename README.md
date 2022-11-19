# Pokedex (Mobile)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

This is a mobile application built on React Native.  
Initially, I started this to try out some animations 😂 but it ended up teaching me lots about React (file organizations, alias path, etc.)  

**Note:** Data is imported from JSON file locally (Merged [Biuni](https://github.com/Biuni/PokemonGO-Pokedex/blob/master/pokedex.json
)'s and [Fanzeyi](https://github.com/fanzeyi/pokemon.json)'s JSON files using [JSON Merger VSCode extension](https://github.com/A-amon/json-merger)) 

## How it works
<img src="https://github.com/A-amon/Pokedex/blob/master/assets/demo/pokedex-native.gif" width="300"/>  

**Note:**  
```
The *Moves* screen is empty  
  
There were initially two issues encountered in this project (due to re-rendering after new data are added):
- Styling messed up
- List re-starts from top (not continuing from last seen item/index)  

Solution:  
'initialScrollIndex' prop (BUT, effect will be voided (re-start at top again) once started scrolling a little 😂) and  
messy styling issue fixed  

Also tried scrollToOffset but couldn't make it work (possibly due to this issue: https://github.com/software-mansion/react-native-reanimated/issues/587)
```


## Tools/ Technologies
- [RN Dominant Color](https://github.com/iran-react-community/rn-dominant-color) (To get dominant color of Pokemon image)
- [React Flipper](https://github.com/facebook/flipper) (For debugging - Kind of like DevTools for React Native 👀)
- [React Navigation Share Element](https://github.com/IjzerenHein/react-navigation-shared-element) (Transitioning component between screens 🚛)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg) (For importing SVG as components 🥳)
- [Reanimated Bottom Sheet](https://github.com/osdnk/react-native-reanimated-bottom-sheet)
- [Pager View](https://github.com/callstack/react-native-pager-view) (For sliding between tab pages ⬅➡)
- [Progress Bar](https://github.com/oblador/react-native-progress) (Comes with animation 😁)
- [Convert HSL to Hex](https://htmlcolors.com/hsl-to-hex) (Color format converter)

## References
- [BuyIt Project](https://github.com/salomaoluiz/BuyIt) by salomaoluiz
- [Naming Styled Components](https://medium.com/inturn-eng/naming-styled-components-d7097950a245)
- [Using hooks to separate responsibilities](https://sairys.medium.com/react-separating-responsibilities-using-hooks-b9c90dbb3ab9)
