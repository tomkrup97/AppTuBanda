import { StyleSheet, Text, View,FlatList } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <View style={styles.container}>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#2b2b2b',
  },
});
