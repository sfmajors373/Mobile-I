import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image source={require('./assets/smiles.jpg')} />
        <View style={styles.buttonContainer}>
          <Button title="Like" color="blue" accessibilityLabel="Not a real button 1" />
          <Button title='Share' color='purple' accessibilityLabel='Not a real button 2' />
          <Button title='Comment' color='purple' accessibilityLabel='Not a real button 3' />
        </View>
        <View>
          <Text style={styles.comments}>Some User: A comment on the picture</Text>
          <Text style={styles.comments}>Another User: A comment on the picture</Text>
          <Text style={styles.comments}>And Another User: A comment on the picture</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  comments: {
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderRadius: 2,
    borderWidth: 2,
    borderStyle: 'solid',
  }
});
