import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from './../../../../../styles/styles'
import { LoginButton } from 'react-native-fbsdk';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export default class userLogin extends React.Component {
    state = { username: '', password: '', errorMessage: null }
    handleadminLogin = () => {
        this.props.loginData(
            {
                username: this.state.username,
                password: this.state.password,
            }

        );

    }
    loginSuccess() {

    }
    render() {
        // if (this.props.authReducer.loginDataSuccess != null) {
        //   this.loginSuccess()
        // }
        return (
            <View style={styles.containerHome}>
                <View>

                    <Text style={{ color: 'black', fontSize: deviceWidth * 0.051, fontWeight: '600', marginTop: deviceHight * 0.1, marginLeft: deviceWidth * 0.1 }}>Active your account</Text>
                    <Text style={{ color: 'red', fontSize: deviceWidth * 0.045, marginTop: deviceHight * 0.02, marginLeft: deviceWidth * 0.1 }}> Resend?</Text>

                    <Form style={{ marginTop: deviceHight * 0.04, maxWidth: deviceWidth * 0.7, marginLeft: deviceWidth * 0.05 }}>
                        <Item>
                            <Input placeholder="Verification code" style={{ color: 'black', fontWeight: '500' }} />
                        </Item>

                    </Form>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', marginLeft: deviceWidth * 0.1, marginTop: deviceHight * 0.02 }}>Write your verification code</Text>

                </View>

                <View style={styles.container}>

                    <View style={{
                        width: deviceWidth * 0.65,
                        backgroundColor: appColor,
                        height: deviceHight * 0.06,
                      
                        borderRadius: deviceWidth * 0.1,
                        marginTop: deviceHight * 0.2, elevation: 3,
                        marginBottom: deviceHight * 0.01,
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("AppStack")}
                        >
                            <View style={{
                                width: deviceWidth * 0.65, height: deviceHight * 0.06,  alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <Text style={{ fontSize: deviceWidth * 0.06, color: '#ffffff', fontWeight: '200' }}>Next</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


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




