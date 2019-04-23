import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  marquee:{
    marginTop:100,
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom:10,
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  iconStyle:{
    position:'absolute',
  },
   button: {
    width: 50,
    height: 100/1.618,
    margin: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  lefbutton: {
    width: 50,
    height: 100/1.618,
    margin: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  clickbutton:{
    width: 50,
    height: 100/1.618,
    margin: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});