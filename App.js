// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

// import React, { Component } from 'react';
// import { Platform, StyleSheet, View, Image, Dimensions, TouchableOpacity, FlatList, ImageBackground,Animated } from 'react-native';
// import Shap_splash from './app/images/logo_trans.png'
// export const deviceWidth = Dimensions.get("window").width;
// export const deviceHight = Dimensions.get("window").height;
// import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

// class ImageLoader extends Component {
//   state = {
//     opacity: new Animated.Value(0),
//   }

//   onLoad = () => {
//     Animated.timing(this.state.opacity, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }

//   render() {
//     return (
//       <Animated.Image
//         onLoad={this.onLoad}
//         {...this.props}
//         style={[
//           {
//             opacity: this.state.opacity,
//             transform: [
//               {
//                 scale: this.state.opacity.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0.85, 1],
//                 })
//               },
//             ],
//           },
//           this.props.style,
//         ]}
//       />
//     );
//   }
// }

// const App = () => (
//   // <View style={styles.container}>
//   //   {/* <ImageLoader
//   //     style={styles.image}
//   //     source={Shap_splash}
//   //   /> */}
//   // </View>
//   <Container>
//   <Header />
//   <Content >
//     <View style={{ alignItems: 'center',
//     justifyContent: 'center'}}>
//     <Card style={{width:deviceWidth*0.8,borderRadius:deviceWidth*0.05,borderColor:'#000'}}>
//       <CardItem >
//         <Body>
//           <Text>
//              //Your text here
//           </Text>
//         </Body>
//       </CardItem>
//     </Card>
//     <Card>
//       <CardItem>
//         <Body>
//           <Text>
//              //Your text here
//           </Text>
//         </Body>
//       </CardItem>
//     </Card>
//     </View>
//   </Content>
// </Container>
// );

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor:'#1a3275',
//     backgroundColor:'#fff',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//     borderRadius: 10,
//   },
// });

// export default App;

import React, { Component } from "react"
import Routes from './app/services/routes'
import { ApolloProvider } from "react-apollo"
import { client } from "./app/config/api/index"
import { Provider } from "react-redux"
import store from "./app/redux/store"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isWalkThrough: true,
      loading: true
    }
  }

  

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Routes />
       </Provider>
     </ApolloProvider>
    );
  }
}






// function mapStateToProps(state) {
//   console.log(state)
//   return {
//     AdminBookingOwnerReducer: state.AdminBookingOwnerReducer,
//   };
// }
// export default connect(
//   mapStateToProps,
//   {
//     getOwnersWithThemCourtsData
//   }
// )(adminHome)