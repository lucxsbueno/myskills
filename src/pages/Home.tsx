import React, { useState } from 'react';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList
} from 'react-native';

interface SkillData{
  id: string;
  name: string;
}

export function Home(){

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);

  function handleAddNewSkill(){

    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    console.log("New skill: ", data);

    setSkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id : string){
    setSkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  return(
    <View style={ styles.container }>

      <Text style={ styles.title }>Welcome, <Text style={ styles.textHighlited }>Lucas</Text>! 👋🏻</Text>
      <Text style={ styles.subtitle }>What are your skills?</Text>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          onChangeText={setNewSkill}
          style={ styles.input }
          placeholder="New skill"
          placeholderTextColor="#999"/>

        <Button title="Add" onPress={handleAddNewSkill}/>

      </View>

      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            //como a função precisa de um parâmetro
            //é necessário utilizar ()=>
            onPress={() => handleRemoveSkill(item.id)}/>
        )}
        />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 24,
    paddingVertical: 20,

    backgroundColor: '#121015'
  },

  title: {
    color: '#FFFFFF',
    fontSize: 24,

    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '100',

    marginTop: 8,
  },

  textHighlited: {
    fontWeight: 'bold'
  },

  input: {
    flex: 1,
    flexDirection: 'row',

    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginEnd: 20,
    marginTop: 25,
    marginBottom: 35,
    borderRadius: 24
  }
});
