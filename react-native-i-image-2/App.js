import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.banner}>
          <Text style={styles.bannerText}>This is a banner</Text>
        </View>
        <View>
          <Text style={styles.title}>Some Random Header</Text>
          <View style={styles.imageRow}>
            <Image style={styles.images} source={require('./assets/rainbowSmiley.jpg')}/>
            <Image style={styles.images} source={require('./assets/flowerSmiley.jpg')}/>
          </View>
          <Text style={styles.caption}>This is a bunch of smaller text that is giving information about the two images upabove.  You might see this kind of a design on a news site.</Text>
        </View>
        <View>
          <Text style={styles.title}>Some Random Header</Text>
          <View style={styles.imageRow}>
            <Image style={styles.images} source={require('./assets/rainbowSmiley.jpg')}/>
            <Image style={styles.images} source={require('./assets/flowerSmiley.jpg')}/>
          </View>
          <Text style={styles.caption}>This is a bunch of smaller text that is giving information about the two images upabove.  You might see this kind of a design on a news site.</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  imageRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    height: 150,
    width: 200,
  },
  caption: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  banner: {
    height: 200,
    width: 400,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    justifyContent: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
  }
});
