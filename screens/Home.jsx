import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.pic}/>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.title}>Tomorrow</Text>
        <TodoList />
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