import React from 'react';

import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const ListCard = ({plant}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Air Purifier</Text>
      <Text style={styles.plantName}>{plant?.name}</Text>
      <Text style={styles.price}>${plant?.price}</Text>

      {/* Position the image Absolute */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: plant?.image}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 65,
    marginLeft: 15,
    backgroundColor: '#9CE5CB',
    padding: 20,
    borderRadius: 25,
    width: screenWidth * 0.75,
  },
  heading: {
    fontSize: 14,
    fontWeight: '600',
  },
  plantName: {
    fontSize: 32,
    fontWeight: '700',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 40,
  },
  imageContainer: {
    position: 'absolute',
    height: 150,
    width: 112,
    top: -50,
    right: -50,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ListCard;
