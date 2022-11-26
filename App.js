import React, { useState } from 'react';
import { TextInput, Text, View,StyleSheet,Keyboard } from 'react-native';

const style = StyleSheet.create({
  containers: {
    flex:1,
    flexDirection: 'row',
    alignItems: "flex-start",
    margin: 18,
  },
  search__unclicked: {
    flexDirection: 'row',
    width: "100%",
    padding: 10,
    borderWidth:1,
    borderRadius:5
  },
  textInput: {
    width: "90%",
    borderWidth:1
  },
  button: {
    marginLeft: 7,
    alignSelf: 'flex-start'
  }
})

const App = () => {
  const [input, setInput] = useState('');
  const [clicked, setClicked] = useState(false);
  
  const placeHolder = clicked ? '' : "Search Lenses";
  return (
      <View style={style.containers}>
        <View 
            style={!clicked 
                    ? style.search__unclicked 
                    : [style.search__unclicked, { justifyContent: "space-evenly", width: "80%"}]}
        >
            <TextInput
              style={style.textInput}
              accessibilityRole="input"
              placeholder={`${placeHolder}`}
              onChangeText={(text) => setInput(text)}
              onFocus={() => {
                setClicked(true);
              }}
              value={input}
            />
              
        </View>
        {clicked && 
            <Text
              style={style.button} 
              accessibilityRole="button" 
              onPress={() => {
                setClicked(false)
                setInput('');
                Keyboard.dismiss();
                }}>
            Cancel</Text> 
            } 
      </View> 
  );
};

export default App;