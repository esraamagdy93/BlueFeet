
import React from 'react'
import { FlatList, Image } from 'react-native'
import styles, { babyBlue, appColor, deviceHight, deviceWidth } from '../../../.././styles/styles'
import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Text, Tab, Tabs, View, Left, Body, Right } from 'native-base';

import profile from "./../../.././../images/profile.jpg"

export default class adminHome extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    render() {

        return (
            <Tabs tabBarUnderlineStyle={{ backgroundColor: babyBlue, height: 2 }}
                tabContainerStyle={{
                    elevation: 0
                }}>
                <Tab heading="Team Members" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
                    <Container>
                        <Content >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: deviceHight * 0.05, width: deviceWidth * 0.015, backgroundColor: 'blue', marginTop: deviceHight * 0.005, marginRight: deviceWidth * 0.01 }}></View>

                                <Text style={{ color: 'gray' }}> Forward </Text>
                            </View>


                            <FlatList
                                data={[1, 2]}
                                renderItem={entry =>
                                    <ListItem onPress={() => this.props.navigation.navigate("BookingDetails")}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: deviceWidth * 0.2 }}>
                                                <View>

                                                    <Image style={{
                                                        width: deviceHight * 0.1, height: deviceHight * 0.06,
                                                        borderRadius: deviceHight * 0.1 / 1.3,
                                                    }}
                                                        source={profile}
                                                        resizeMode="contain"

                                                    />
                                                </View>
                                            </View>

                                            <View style={{ width: deviceWidth * 0.4 }}>
                                                <View>

                                                    <Text>Mahmoud Ba'ara</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ color: 'gray' }}>24yr </Text>

                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ width: deviceWidth * 0.2, marginLeft: deviceWidth * 0.07 }}>
                                                <View style={{ width: deviceWidth * 0.2, height: deviceHight * 0.05, backgroundColor: '#fff', alignItems: 'center', borderRadius: 12, borderColor: '#000' }}>
                                                    <Text style={{ color: 'green', marginTop: deviceHight * 0.01 }}>Active</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ListItem>
                                }
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: deviceHight * 0.05, width: deviceWidth * 0.015, backgroundColor: 'green', marginTop: deviceHight * 0.005, marginRight: deviceWidth * 0.01 }}></View>

                                <Text style={{ color: 'gray' }}> Midfield </Text>
                            </View>


                            <FlatList
                                data={[1, 2]}
                                renderItem={entry =>
                                    <ListItem onPress={() => this.props.navigation.navigate("BookingDetails")}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: deviceWidth * 0.2 }}>
                                                <View>

                                                    <Image style={{
                                                        width: deviceHight * 0.1, height: deviceHight * 0.06,
                                                        borderRadius: deviceHight * 0.1 / 1.3,
                                                    }}
                                                        source={profile}
                                                        resizeMode="contain"

                                                    />
                                                </View>
                                            </View>

                                            <View style={{ width: deviceWidth * 0.4 }}>
                                                <View>

                                                    <Text>Mahmoud Ba'ara</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ color: 'gray' }}>24yr </Text>

                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ width: deviceWidth * 0.2, marginLeft: deviceWidth * 0.07 }}>
                                                <View style={{ width: deviceWidth * 0.2, height: deviceHight * 0.05, alignItems: 'center' }}>
                                                    <Text style={{ color: 'yellow', marginTop: deviceHight * 0.01 }}>pending</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ListItem>
                                }
                            />
                              <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: deviceHight * 0.05, width: deviceWidth * 0.015, backgroundColor: 'red', marginTop: deviceHight * 0.005, marginRight: deviceWidth * 0.01 }}></View>

                                <Text style={{ color: 'gray' }}> Defender </Text>
                            </View>


                            <FlatList
                                data={[1, 2]}
                                renderItem={entry =>
                                    <ListItem onPress={() => this.props.navigation.navigate("BookingDetails")}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: deviceWidth * 0.2 }}>
                                                <View>

                                                    <Image style={{
                                                        width: deviceHight * 0.1, height: deviceHight * 0.06,
                                                        borderRadius: deviceHight * 0.1 / 1.3,
                                                    }}
                                                        source={profile}
                                                        resizeMode="contain"

                                                    />
                                                </View>
                                            </View>

                                            <View style={{ width: deviceWidth * 0.4 }}>
                                                <View>

                                                    <Text>Mahmoud Ba'ara</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ color: 'gray' }}>24yr </Text>

                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ width: deviceWidth * 0.2, marginLeft: deviceWidth * 0.07 }}>
                                                <View style={{ width: deviceWidth * 0.2, height: deviceHight * 0.05, alignItems: 'center' }}>
                                                    <Text style={{ color: 'green', marginTop: deviceHight * 0.01 }}>Active</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ListItem>
                                }
                            />
                            <View style={{ flexDirection: 'row',alignContent:'center',alignItems:'center',marginLeft:deviceWidth*0.15 }}>
                                <View style={{ width: deviceWidth * 0.3, height: deviceHight * 0.05, backgroundColor: 'blue', alignItems: 'center', marginTop: deviceHight * 0.01 ,borderRadius:12}}>
                                    <Text style={{ color: '#fff',marginTop:deviceHight*0.01}}>chat</Text>
                                </View>
                                <View style={{ width: deviceWidth * 0.3, height: deviceHight * 0.05, backgroundColor: 'green', alignItems: 'center', marginTop: deviceHight * 0.01,marginLeft:deviceWidth*0.05 ,borderRadius:12}}>
                                    <Text style={{ color: '#fff',marginTop:deviceHight*0.01 }}>New Match</Text>
                                </View>
                            </View>


                        </Content>

                    </Container>
                </Tab>
                <Tab heading="Manage" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000', fontWeight: 'normal' }}>
                    <Container>
                        <Content >
                            <FlatList
                                data={[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]}
                                renderItem={entry =>
                                    <ListItem onPress={() => this.props.navigation.navigate("BookingDetails")} style={{
                                        width: deviceWidth * 0.9, height: deviceHight * 0.2,
                                        borderRadius: 12, borderColor: '#000'
                                    }}>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View style={{ width: deviceWidth * 0.2 }}>
                                                <View>

                                                    <Image style={{
                                                        width: deviceHight * 0.1, height: deviceHight * 0.06,
                                                        borderRadius: deviceHight * 0.1 / 1.3,
                                                    }}
                                                        source={profile}
                                                        resizeMode="contain"

                                                    />
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ color: 'gray' }}>    20 - 30yr </Text>
                                                        {/* <Text style={{ color: 'gray' }}> Forward </Text>  */}

                                                    </View>

                                                </View>

                                            </View>
                                            <View style={{ height: deviceHight * 0.1, width: deviceWidth * 0.001, backgroundColor: 'gray', marginLeft: deviceWidth * 0.02, marginTop: deviceHight * 0.005, marginRight: deviceWidth * 0.01 }}></View>


                                            <View style={{ width: deviceWidth * 0.2, marginLeft: deviceWidth * 0.07 }}>

                                                <View style={{ width: deviceWidth * 0.4 }}>

                                                    <Text>Mahmoud Ba'ara</Text>
                                                    <Text>Mahmoud Ba'ara</Text>


                                                    <View style={{ width: deviceWidth * 0.3, height: deviceHight * 0.03, backgroundColor: 'blue', alignItems: 'center', marginTop: deviceHight * 0.01 }}>
                                                        <Text style={{ color: '#fff', }}>chat</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </ListItem>
                                }
                            />


                        </Content>

                    </Container>
                </Tab>
            </Tabs>
        )
    }
}