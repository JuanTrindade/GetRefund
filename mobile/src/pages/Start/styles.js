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

  button:{
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 59,
    alignSelf: 'stretch',
    marginTop: 20
  },

  buttonText: {
    fontSize: 20,
    justifyContent: 'center'
  },
});
