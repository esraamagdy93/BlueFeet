import { StyleSheet, Dimensions } from "react-native";
export const deviceWidth = Dimensions.get("window").width;
export const deviceHight = Dimensions.get("window").height;
export const appColor = '#00316E' 
export const babyBlue = '#00decf'
export const gray = 'gray'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerHome: {
    flex: 1,
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15
  },
  textInputlocation: {
    height: 40,
    fontSize: 20,
    width: '80%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 10
  },
  textInputPrice: {
    height: 40,
    fontSize: 20,
    width: '50%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 10
  },
  text: {
    height: 40,
    fontSize: 20,
    marginTop: 8,
  },
  viewIndicator:
  {
    flex: 1, alignItems: "center",
    justifyContent: "center"
  },
  viewheight: {
    height: deviceHight * 0.2
  },
})