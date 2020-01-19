import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../modules/scenes/home/scenes/homeScreen";
import SelectVenue from "../modules/scenes/home/scenes/selectVenue";

import PlayersScreen from "../modules/scenes/players/playersScreen";
import ProfileScreen from "../modules/scenes/profileScreen/profileScreen";
import UserLogin from ".//../../app/modules/scenes/auth/scenes/userLogin"
import AddPhoneNumber from ".//../../app/modules/scenes/auth/scenes/addPhoneNumber"
import VerificationCode from ".//../../app/modules/scenes/auth/scenes/verificationCode"

import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { appColor, deviceWidth, deviceHight, gray } from '../styles/styles';
import { View } from 'native-base';
const Players = createStackNavigator({
    PlayersScreen: {
        screen: PlayersScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Players',
            headerStyle: {
                elevation: 0,
                backgroundColor: appColor,

            }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

            headerTintColor: '#fff',
        }),

       
    },

});
const Home = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: null
        })

    },

});


const tabs = createBottomTabNavigator({
    screen1: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Home</Text>
            ),

            tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons
                    name={'soccer-field'}
                    size={26}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },
    screen2: {
        screen: Players,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Players</Text>
            ),
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'md-notifications'}
                    size={26}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },
    // screen3: {
    //     screen: Services,
    //     navigationOptions: {
    //         tabBarLabel: ({ tintColor, focused }) => (
    //             <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
    //             >Services</Text>
    //         ),

    //         tabBarIcon: ({ tintColor, focused }) => (
    //             <FontAwesome5
    //                 name={'servicestack'}
    //                 size={26}
    //                 style={focused ? { color: appColor } : { color: 'gray' }}
    //             />
    //         ),
    //     },


    // },
    screen4: {
        screen: Players,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Offers</Text>
            ), tabBarIcon: ({ tintColor, focused }) => (
                <FontAwesome5
                    name={'percent'}
                    size={18}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },
    screen5: {
        screen: Players,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Inquiries</Text>
            ), tabBarIcon: ({ tintColor, focused }) => (
                <MaterialCommunityIcons
                    name={'wechat'}
                    size={26}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },
    screen6: {
        screen: Players,
        navigationOptions: {
            tabBarLabel: ({ tintColor, focused }) => (
                <Text style={{ color: focused ? appColor : gray, textAlign: 'center', fontSize: deviceWidth * 0.025, marginBottom: deviceHight * 0.005, fontWeight: 'bold' }}
                >Profile</Text>
            ), tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'ios-person'}
                    size={30}
                    style={focused ? { color: appColor } : { color: 'gray' }}
                />
            ),
        },


    },



}, {
    lazy: true,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        showLabel: true,
        showIcon: true,
        pressColor: 'grey',
        upperCaseLabel: true,
        style: {
            backgroundColor: 'white',
            elevation: 20
        },
        labelStyle: {
            fontSize: 10,
            margin: 0,
        },
        indicatorStyle: {
            backgroundColor: "red"
        }
    }

}

)


const AppNavigation = createStackNavigator({
    Stack: {
        screen: tabs,
        navigationOptions: () => ({
            header: null
        })
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },


    SelectVenue: {
        screen: SelectVenue,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    // AddServices: {
    //     screen: AddServices,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Add Service',
    //         headerStyle: {
    //             elevation: 0,
    //             backgroundColor: appColor,

    //         }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

    //         headerTintColor: '#fff',
    //     }),
    // },
    // OwnerProfile: {
    //     screen: OwnerProfile,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Owner Profile',
    //         headerStyle: {
    //             elevation: 0,
    //             backgroundColor: appColor,

    //         }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

    //         headerTintColor: '#fff',
    //     }),
    // },
    // BookingDetails: {
    //     screen: BookingDetails,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Owner Profile',
    //         headerStyle: {
    //             elevation: 0,
    //             backgroundColor: appColor,

    //         }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

    //         headerTintColor: '#fff',
    //     }),
    // },
    // AddPlayground: {
    //     screen: AddPlayground,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Add Playground',
    //         headerStyle: {
    //             elevation: 0,
    //             backgroundColor: appColor,

    //         }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

    //         headerTintColor: '#fff',
    //     }),
    // },
    // AddPlaygroundPhoto: {
    //     screen: AddPlaygroundPhoto,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Add Photo',
    //         headerStyle: {
    //             elevation: 0,
    //             backgroundColor: appColor,

    //         }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

    //         headerTintColor: '#fff',
    //     }),
    // },
    // AddPlaygroundTimes: {
    //     screen: AddPlaygroundTimes,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Add Times',
    //         headerStyle: {
    //             elevation: 0,
    //             backgroundColor: appColor,

    //         }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

    //         headerTintColor: '#fff',
    //     }),
    // },
    // AddPlaygroundPrice: {
    //     screen: AddPlaygroundPrice,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Add Price',
    //         headerStyle: {
    //             elevation: 0,
    //             backgroundColor: appColor,

    //         }, headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },

    //         headerTintColor: '#fff',
    //     }),
    // },


});

// const MainNavigation = createSwitchNavigator({
//     // AuthStack: AuthStackNavigation,
//     AppStack: AppNavigation,
// },{
//     initialRouteName: 'AppStack'


//     // You will use this.props.navigation.replace('HomeDrawer') after login process.
// })


const AuthStackNavigation = createStackNavigator({
    Login: {
        screen: UserLogin,
        navigationOptions: () => ({
            header: null
        })
    },

    addPhoneNumber: {
        screen: AddPhoneNumber,
        navigationOptions: () => ({
            header: null
        })
    },

    verificationCode: {
        screen: VerificationCode,
        navigationOptions: () => ({
            header: null
        })
    },

});
export const MainNavigation = createSwitchNavigator({
    

            AuthStack: AuthStackNavigation,
            AppStack: AppNavigation
      

})

const App = createAppContainer(MainNavigation);

export default class AllympiaCourts extends Component {
    render() {
        return (
            <App />
        )
    }

}
