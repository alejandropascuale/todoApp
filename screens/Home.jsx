import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoList from '../components/TodoList';
import { todosData } from '../data/todos';

export default function Home() {
    const [localData, setLocalData] = useState(todosData.sort((a, b) => {return a.isCompleted - b.isCompleted}))
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.pic}/>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Today</Text>
            <TouchableOpacity>
                <Text style={{ color: '#3478f6' }}>Hide Complete</Text>
            </TouchableOpacity>
        </View>
        <TodoList todosData={localData.filter(d => d.isToday)}/>
        <Text style={styles.title}>Tomorrow</Text>
        <TodoList todosData={localData.filter(d => !d.isToday)}/>
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
  }
});