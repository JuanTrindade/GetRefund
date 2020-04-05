import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  legend: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 15,
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    height: 210,
    marginVertical: 5,
  },

  itemPicture: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  aside: {
    flex: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },

  personName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },

  buttonText: {
    color: '#2ecc9c',
    fontSize: 16,
    margin: 8,
  }
});
