import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from './../../../../../styles/styles'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { getProfileData } from "../actions";
import { connect } from 'react-redux'

class userLogin extends React.Component {

  fbAuth() {
    let that = this
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) { console.log('Login was cancelled') }
        else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              const { accessToken } = data
              fetch('https://bluefeets.com/facebook/token?access_token=' + accessToken)
                .then(async json => {
                  json = await json.json()
                  console.log(json)
                })
                .catch(error => {
                  console.log(error)
                })

            })

        }
      },
      function (error) {
        console.log('Login failed with error: ' + error);
      }
    );
  }
  render() {


    return (
      <View style={styles.container}>
        <View>


          <TouchableOpacity
            onPress={() => this.fbAuth()}
          >
            <View style={{
              width: deviceWidth * 0.65, height: deviceHight * 0.06, alignItems: "center",
              justifyContent: "center",
            }}>
              <Text style={{ fontSize: deviceWidth * 0.06, color: '#000000', fontWeight: '200' }}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    authReducer: state.authReducer,
  };
}
export default connect(
  mapStateToProps,
  {
    getProfileData
  }
)(userLogin)




