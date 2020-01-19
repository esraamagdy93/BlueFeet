import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import styles, { appColor, deviceHight, deviceWidth } from './../../../../../styles/styles'
import { LoginButton } from 'react-native-fbsdk';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import { registerData } from "../actions";
import { connect } from 'react-redux'

class addPhoneNumber extends React.Component {
    state = { phone: '', _id: '' }
    componentDidMount() {

        const data = this.props.navigation.state.params.item;
        console.log(data)
        this.setState({
            _id: data,
        });
    }
    handleRegister = () => {
        this.props.registerData(
            {
                phone: this.state.phone,
                __id: this.state._id

            }

        );

    }
    RegisterSuccess(item) {
        console.log("_idddd",item)

        this.props.navigation.navigate("verificationCode",{item})

    }
    render() {
        if (this.props.authReducer.registerDataSuccess != null) {
            // console.log("true")

        // this.setState({_id:})
            this.RegisterSuccess(this.props.authReducer.registerDataSuccess.data.register._id)
        }
        return (
            <View style={styles.containerHome}>
                <View>

                    <Text style={{ color: 'black', fontSize: deviceWidth * 0.051, fontWeight: '600', marginTop: deviceHight * 0.1, marginLeft: deviceWidth * 0.1 }}> Nice to meet you, player!</Text>
                    <Text style={{ color: 'gray', fontSize: deviceWidth * 0.045, marginTop: deviceHight * 0.02, marginLeft: deviceWidth * 0.1 }}> can we have your number?</Text>

                    <Form style={{ marginTop: deviceHight * 0.04, maxWidth: deviceWidth * 0.7, marginLeft: deviceWidth * 0.05 }}>
                        <Item>
                            <Input placeholder="Phone Number" style={{ color: 'black', fontWeight: '500' }}

                                onChangeText={phone => {
                                    this.setState({ phone })
                                }}
                                value={this.state.phone} />
                        </Item>

                    </Form>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', marginLeft: deviceWidth * 0.1, marginTop: deviceHight * 0.02 }}>Don't worry, we'll never display it publicly</Text>

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
                            onPress={this.handleRegister}




                        >
                            <View style={{
                                width: deviceWidth * 0.65, height: deviceHight * 0.06, alignItems: "center",
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
function mapStateToProps(state) {
    console.log(state)
    return {
        authReducer: state.authReducer,
    };
}
export default connect(
    mapStateToProps,
    {
        registerData
    }
)(addPhoneNumber)




