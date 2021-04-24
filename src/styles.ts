import { StyleSheet } from 'react-native';

export const colorConstants = {
  WhiteText: '#ECE9E6',
  MainBackground: '#27323E',
  SecondaryBackground: '#333C47',
  Blue: '#1DA1F2',
  Red: '#D72929',
}

export const styles = StyleSheet.create({
  view: {
    backgroundColor: colorConstants.MainBackground,
    flex: 1,
  },
 
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 15,
    height: 30,
    flexDirection: 'row',
    alignContent: 'space-between'
  },

  title: {
    marginLeft: 20,
    marginTop: 60,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: colorConstants.WhiteText,
  },

  title2: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 40,
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
    marginBottom: 5,
    borderWidth: 2,
    paddingLeft: 10,
    borderColor: colorConstants.WhiteText,
    borderRadius: 3,
    color: colorConstants.WhiteText
  },

  descriptionInput: {
    width: '90%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: colorConstants.SecondaryBackground,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
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

  buttondel: {
    width: '90%',
    height: 52,
    marginTop: 10,

    backgroundColor: colorConstants.Red,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',

    borderRadius: 6,
    borderColor: colorConstants.Red
  },

  buttondel2: {
    width: '90%',
    height: 52,
    marginTop: 10,

    backgroundColor: colorConstants.MainBackground,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',

    borderRadius: 6,
    borderColor: '#867eff',
    borderWidth: 1.3
  },

  buttonplus: {
    width: 80,
    height: 40,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    backgroundColor: '#1DA1F2',
    shadowOpacity: 0.3,
    marginTop: 10
},

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonText2: {
    fontSize: 18,
    color: '#867eff',
    fontWeight: 'bold'
  },

  smallText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 14,
  },


  card: {
    backgroundColor: colorConstants.SecondaryBackground,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
  },



});
