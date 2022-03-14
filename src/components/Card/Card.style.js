import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'purple',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    margin: 2,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    margin: 10,
    borderRadius: 6,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 7,
    marginStart: 10,
  },
  price: {
    color: 'gray',
    marginBottom: 7,
    marginStart: 10,
  },
  inStock: {
    color: 'red',
    marginBottom: 7,
    marginStart: 10,
  },
});
