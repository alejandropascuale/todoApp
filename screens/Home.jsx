import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoList from '../components/TodoList';
import { todosData } from '../data/todos';

export default function Home() {
    const [localData, setLocalData] = useState(todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}));
    const [isHidden, setIsHidden] = useState(false);

    const navigation = useNavigation();

    const handleHidePress = () => {
        if (isHidden) {
            setIsHidden(false);
            setLocalData(todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}));
            return;
        }
        setIsHidden(!isHidden);
        setLocalData(localData.filter(todo => !todo.isCompleted));
    }

  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.pic}/>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Today</Text>
            <TouchableOpacity onPress={handleHidePress}>
                <Text style={{ color: '#3478f6' }}>{isHidden ? 'Show Completed': 'Hide Complete'}</Text>
            </TouchableOpacity>
        </View>
        <TodoList todosData={localData.filter(d => d.isToday)}/>
        <Text style={styles.title}>Tomorrow</Text>
        <TodoList todosData={localData.filter(d => !d.isToday)}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add')}>
            <Text style={styles.plus}>+ </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: 'flex-end'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
  },
  button: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: '#000',
      position: 'absolute',
      bottom: 50,
      right: 20,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: .5,
      shadowRadius: 5,
      elevation: 5,
  },
  plus: {
      fontSize: 40,
      color: '#fff',
      position: 'absolute',
      top: -6,
      left: 9,
  }
});