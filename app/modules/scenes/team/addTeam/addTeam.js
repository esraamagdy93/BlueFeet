import React from 'react'
import { Container, Header, Content, Icon, Picker, Form, Text, View, Button, ListItem, CheckBox, Body, Item, Left } from "native-base";
import { TextInput, TouchableOpacity } from 'react-native';
import styles, { deviceHight, appColor, deviceWidth } from '../../../../styles/styles';
import { addOwnerData } from "../../actions";
import { connect } from 'react-redux'
var value
class addOwner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      first: '',
      last: '',
      fees: '' ,
      phone:''

    };
  }

  handleAddOwner = () => {
    this.props.addOwnerData(
      {
        username: this.state.username,
        password: this.state.password,
        first: this.state.first,
        last: this.state.last,
        fees: this.state.fees,
        phone:this.state.phone

        
      }

    );

  }
  render() {
    return (
      <Container>
        <Content >
          <View style={[ { marginLeft:deviceWidth*0.06,marginTop: deviceHight * 0.05 }]}>
          <Text>NAME</Text>
            <TextInput
              placeholder="Give your team a catchy name "
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={first => {
                this.setState({ first })
              }}
              value={this.state.first}
            />
                      <Text>DESCRIPTION</Text>

            <TextInput
              placeholder="Tell everyone about your awesome team"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={last => {
                this.setState({ last })
              }}
              value={this.state.last}
            />
            <Text>Category</Text>

            <Form style={{ marginLeft: deviceWidth * 0.03, marginRight: deviceWidth * 0.03 }}>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select your SIM"
                            textStyle={{ color: "#5cb85c" }}
                            itemStyle={{
                                backgroundColor: "#d3d3d3",
                                marginLeft: 0,
                                paddingLeft: 10
                            }}
                            itemTextStyle={{ color: '#788ad2' }}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                        // onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Soocer" value="key0" />
                            <Picker.Item label="Two Hour" value="key1" />

                        </Picker>
                    </Form>
                    <View style={{width:deviceWidth*0.9,height:deviceHight*0.001,backgroundColor:'#000'}}></View>

               <Text>Area</Text>
               <Form style={{ marginLeft: deviceWidth * 0.03, marginRight: deviceWidth * 0.03 }}>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select your SIM"
                            textStyle={{ color: "#5cb85c" }}
                            itemStyle={{
                                backgroundColor: "#d3d3d3",
                                marginLeft: 0,
                                paddingLeft: 10
                            }}
                            itemTextStyle={{ color: '#788ad2' }}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                        // onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Amman" value="key0" />
                            <Picker.Item label="Two Hour" value="key1" />

                        </Picker>
                    </Form>
                    <View style={{width:deviceWidth*0.9,height:deviceHight*0.001,backgroundColor:'#000'}}></View>
            <View style={{marginTop:deviceHight*0.04}}>
                    <Text>Add Your Team Photo</Text>

</View>
          </View>
          <View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
          <TouchableOpacity onPress={this.handleAddOwner}
            >
              <View style={{
                width: deviceWidth * 0.7,
                backgroundColor: 'blue',
                height: deviceHight * 0.05,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: deviceWidth * 0.1,
                marginTop: deviceHight * 0.06, elevation: 3,
                marginBottom: deviceHight * 0.01,
              }}>
                <Text style={{ fontSize: deviceWidth * 0.06, color: '#ffffff' }}>NEXT</Text>

              </View>
            </TouchableOpacity>
            </View>


        </Content>

      </Container>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    AdminBookingOwnerReducer: state.AdminBookingOwnerReducer,
  };
}
export default connect(
  mapStateToProps,
  {
    addOwnerData
  }
)(addOwner)


