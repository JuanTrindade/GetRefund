import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },

  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '50%',
    width: '100%',
    padding: 15
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2a2a2c',
    marginBottom: 15,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 40,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    width: 72,
    borderRadius: 36,
    backgroundColor: '#fff',
    elevation: 4,
  }
});
