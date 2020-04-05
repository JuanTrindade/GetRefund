import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdde1',
    paddingHorizontal: 15,
  },

  logo: {
    height: 86,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    marginLeft: 16,
    marginBottom: 6,
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 4,
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    alignSelf: 'stretch',
    marginTop: 20
  },

  buttonText: {
    fontSize: 17,
    justifyContent: 'center'
  },

  buttonAlt: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    alignSelf: 'stretch',
    marginTop: 20
  },

  buttonTextAlt: {
    fontSize: 16,
    justifyContent: 'center',
    color: '#777',
  },
});
