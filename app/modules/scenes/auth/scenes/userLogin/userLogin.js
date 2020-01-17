import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity,Linking } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from './../../../../../styles/styles'
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import axios from "axios";
import { WebView } from 'react-native-webview';

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
        


<LoginButton
  publishPermissions={['publish_actions']}
  readPermissions={['public_profile']}
  onLoginFinished={
    (error, result) => {
      if (error) {
        console.log('login has error: ', result.error)
      } else if (result.isCancelled) {
        console.log('login is cancelled.')
      } else {
        AccessToken.getCurrentAccessToken().then((data) => {
        //   const { accessToken } = data
        //   initUser(accessToken)
        console.log(data)

        })
      }
    }
  }
  onLogoutFinished={() => console.log("logout.")}/>

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




