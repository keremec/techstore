import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const App = props => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={styles.image}
        source={{uri: props.card.imgURL}}
      />

      <View>
        <Text numberOfLines={1} style={styles.title}>
          {props.card.title}
        </Text>
        {props.card.inStock ? (
          <Text style={styles.price}>{props.card.price}</Text>
        ) : (
          <Text style={styles.inStock}>Not Available</Text>
        )}
      </View>
    </View>
  );
};

export default App;
