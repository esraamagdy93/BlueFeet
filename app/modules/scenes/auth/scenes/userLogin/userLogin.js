import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity,Linking } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from './../../../../../styles/styles'
import { LoginButton } from 'react-native-fbsdk';
import axios from "axios";

export default class userLogin extends React.Component {
  state = { username: '', password: '', errorMessage: null }
  url="https://bluefeets.com/facebook/login"
  handleadminLogin = () => {
    // console.log("response");

    // axios.get('https://bluefeets.com/facebook/login')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });'
    Linking.getInitialURL().then((url) => {
        if (url) {
          console.log('Initial url is: ' + url);
        }
      }).catch(err => console.error('An error occurred', err));

  }
  loginSuccess(){
    
  }


 componentDidMount() {
  Linking.addEventListener('url', this._handleOpenURL);
}
componentWillUnmount() {
  Linking.removeEventListener('url', this._handleOpenURL);
}
_handleOpenURL(event) {
    console.log("fjgjsdfhjdhjdshjdfhjsdhjshdj")
  console.log(event.url);
}
  render() {
    // if (this.props.authReducer.loginDataSuccess != null) {
    //   this.loginSuccess()
    // }
    return (
      <View style={styles.container}>
        <View>
        {/* <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/> */}
          <TouchableOpacity onPress={() => Linking.openURL('https://bluefeets.com/facebook/login')}>
        <Text style={{color:'#000'}}> Continue with Mobile Number</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}
// function mapStateToProps(state) {
//   console.log(state)
//   return {
//     authReducer: state.authReducer,
//   };
// }
// export default connect(
//   mapStateToProps,
//   {
//     loginData
//   }
// )(adminLogin)




