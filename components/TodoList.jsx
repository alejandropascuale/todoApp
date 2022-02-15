import React from 'react';
import { todosData } from '../data/todos';
import { FlatList, Text } from 'react-native';

export default function TodoList () {
    return (
        <FlatList 
            data={todosData}
            keyExtractor={ item => item.id.toString()} 
            renderItem={({item}) => <Text>{item.text}</Text>} 
        />
    )
}