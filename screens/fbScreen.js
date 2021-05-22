import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class fbScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text> Facebook </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
