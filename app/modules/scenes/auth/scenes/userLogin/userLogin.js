import React from 'react'
import { TouchableOpacity, ImageBackground, Image,AsyncStorage } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth, wihte } from './../../../../../styles/styles'
import { Container, Header, Content, Icon, Picker, Form, Text, View, Button, ListItem, CheckBox, Body, Item, Left } from "native-base";

import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { getProfileData } from "../actions";
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import imageStart from '../../../../../images/start.png'
import logo from '../../../../../images/logo_trans.png'

class userLogin extends React.Component {

    state = { flagLogin: false, _id: '' }

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
                                    console.log("jsonnn", json)
                                    that.setState({ flagLogin: true, _id: json._id })
                                    AsyncStorage.setItem("verificationCode", JSON.stringify(json.verification.code));
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
        if (this.state.flagLogin) {
            console.log("renderr", this.state._id)
            var item = this.state._id
            this.props.navigation.navigate("addPhoneNumber", { item }
            )
        }

        return (
            <View style={styles.container}>

                <ImageBackground
                    style={{ width: deviceWidth, height: deviceHight, }}

                    source={imageStart}

                >

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.image}
                                source={logo}
                            />
                            <View style={{ marginTop: deviceHight * 0.015, marginLeft: deviceWidth * 0.02 }}>
                                <Text style={{ color: wihte, fontSize: deviceWidth * 0.055, fontWeight: '700' }}>Blue</Text>
                                <Text style={{ color: wihte, fontSize: deviceWidth * 0.055, fontWeight: '700' }}>Feet</Text>
                            </View>

                        </View>
                        <Button style={{ backgroundColor: appColor, width: deviceWidth * 0.7, marginTop: deviceHight * 0.7 }} iconLeft onPress={() => this.fbAuth()}>


                            <FontAwesome
                                name={'facebook-f'}
                                size={26}
                                style={{ color: wihte, marginLeft: deviceWidth * 0.05 }}
                            />
                            <Body>
                                <Text style={{ color: wihte, fontSize: deviceHight * 0.022, fontWeight: '700' }}
                                >Continue with Facebook</Text>
                            </Body>
                        </Button>



                        <Text style={{ fontSize: deviceWidth * 0.04, color: wihte, fontWeight: '200', marginTop: deviceHight * 0.02 }}>OR</Text>

                        <Text style={{ fontSize: deviceWidth * 0.04, color: wihte, fontWeight: '200' }}>Continue with mobile number</Text>
                    </View>
                </ImageBackground>

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
