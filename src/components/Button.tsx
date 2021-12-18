import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export function Button({ title, ...rest } : ButtonProps){
    return(
        <TouchableOpacity
            { ...rest }
            style={ styles.button }>
            <Text style={ styles.buttonText }>{ title }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginBottom: 35,

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    
    justifyContent: 'center',
    alignItems: 'center'
  }
});