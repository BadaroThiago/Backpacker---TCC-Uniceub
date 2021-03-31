import { StyleSheet } from 'react-native';

export const colorConstants = {
  WhiteText: '#ECE9E6',
  MainBackground: '#27323E',
  SecondaryBackground: '#333C47',
  Blue: '#1DA1F2',
}

export const styles = StyleSheet.create({
  view: {
    backgroundColor: colorConstants.MainBackground,
    flex: 1,
  },

  title: {
    marginLeft: 20,
    marginTop: 70,
    fontSize: 36,
    fontWeight: 'bold',
    color: colorConstants.WhiteText,
  },

  input: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: colorConstants.SecondaryBackground,
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 2,
    paddingLeft: 10,
    borderColor: colorConstants.WhiteText,
    borderRadius: 3,
    color: colorConstants.WhiteText
  },

  button: {
    width: '90%',
    height: 52,
    marginTop: 20,

    backgroundColor: colorConstants.Blue,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',

    borderRadius: 6,
    borderColor: colorConstants.Blue
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },

  smallText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 14,
  }

});

