import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class inScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style = {styles.textIn}> Instagram </Text>
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
  textIn:{
    color: 'red',
    fontSize: 20,
  },
});
