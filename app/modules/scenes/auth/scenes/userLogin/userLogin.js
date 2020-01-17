import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from './../../../../../styles/styles'
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { getProfileData } from "../actions";
import { connect } from 'react-redux'

class userLogin extends React.Component {

    fbAuth() {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login was cancelled');
                }


                else {
                    //var accessToken  = null;

                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            console.log(data.accessToken.toString())
                            const { accessToken } = data

                            // with the help of access token you can get details for fb login

                            console.log('accessToken: ' + accessToken);
                            fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessToken)
                                .then((response) => response.json())
                                .then(async json => {
                                    if (json) {
                                        console.log("Yes");

                                        await this.props.getProfileData()
                                        console.log('jsonn: ' + json);
                                        console.log('Login name: ' + json.name);
                                        console.log('Login id: ' + json.id);
                                        console.log('Login email: ' + json.email);
                                        var nsn = json.name
                                        console.log('Login email state: ' + nsn);
                                        var idfb = json.id
                                        console.log('Login email state: ' + idfb);
                                        var idemail = json.email
                                        console.log('Login email state: ' + idemail);
                                    }
                                })
                                .catch(() => {
                                    reject('ERROR GETTING DATA FROM FACEBOOK')
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




