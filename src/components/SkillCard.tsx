import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacityProps,
    TouchableOpacity
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}

export function SkillCard({skill, ...rest} : SkillCardProps){
    return(
        <TouchableOpacity 
            {...rest}
          >
          <Text style={ styles.skill }>
            {skill}
          </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    skill: {
      fontSize: 20,
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: 'bold',
      
    //textDecorationLine: 'underline',
    //textDecorationStyle: 'double',
    //textDecorationColor: '#FFFFFF',
      
      paddingTop: 5,
      paddingBottom: 13,
    }
});