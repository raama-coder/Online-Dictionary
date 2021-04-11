import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Dictionary</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#413e50ff',
    marginBottom: 100,
  },

  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'French Script MT',
  },
});
