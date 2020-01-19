import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    FlatList, Image, RefreshControl, TouchableOpacity
} from 'react-native';
import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Tab, Tabs, Left, Body, Right, } from 'native-base';
import { deviceWidth, deviceHight } from '../../../../../styles/styles';
import { getCourtsData } from "../../actions";
import { connect } from 'react-redux'
class homeScreen extends React.Component {
    constructor() {
        super();
        this.state = { refreshing: true, items: [] };
    }

    componentDidMount() {
        this.refresh();
        this.props.getCourtsData()

    }

    genItems = () => this.props.homeReducer.getCourtsDataSuccess.get_courts;

    refresh = () => {
        this.setState({ refreshing: true, items: [] });
        setTimeout(() => this.setState({ refreshing: false, items: this.genItems() }), 1500);
    };

    renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectVenue",{item})

             }  >

                <View style={{ marginBottom: deviceHight * 0.015 }}>
                    <ImageBackground source={{ uri: "https://bluefeets.com/"+`${item.images[0]}` }} style={styles.customImage} >
                        <View style={styles.content2}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>

                                    <Text style={styles.contentText1}>{`${item.name.en}`}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.contentText2}>{`${item.address}`}</Text>

                                        <Text style={styles.contentText2}>(2.4Km)</Text>
                                    </View>
                                </View>
                                <Text style={styles.contentText3}>{`${item.price[0].price}` + "JOD/" + " 1hour"}</Text>

                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    };


    render() {


        return (
            <Container>
                <Header style={{ height: deviceHight * 0.25 }}>


                    <ImageBackground source={{ uri: 'https://placeimg.com/640/640/nature' }} style={styles.customImage} >

                    </ImageBackground>
                </Header>
                <Content >
                    <View style={{ height: deviceHight * 0.1, backgroundColor: "#ffffff" }}>
                        <Text style={styles.contentText}>Nearby Courts</Text>

                    </View>
                    <FlatList 
                        renderItem={this.renderItem}
                        data={this.state.items}
                        keyExtractor={item => `${item}`}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.refresh}
                            />
                        }
                    />
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        homeReducer: state.homeReducer,
    };
}
export default connect(
    mapStateToProps,
    {
        getCourtsData
    }
)(homeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slider: { backgroundColor: '#000', height: 200 },
    content1: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content2: {
        width: '100%',
        height: deviceHight * 0.09,
        marginTop: deviceHight * 0.21,
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity: 0.9

    },
    contentText1: { color: '#ffffff', fontWeight: 'bold', fontSize: deviceWidth * 0.045, marginLeft: 10, },
    contentText2: { color: '#ffffff', fontSize: deviceWidth * 0.045, marginLeft: 10, },
    contentText3: { color: '#ffffff', fontWeight: 'bold', fontSize: deviceWidth * 0.045, marginLeft: deviceWidth * 0.28, marginTop: deviceHight * 0.045 },

    contentText: { color: '#000000', fontSize: deviceWidth * 0.04, marginLeft: deviceWidth * 0.07, marginTop: deviceHight * 0.03 },

    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 15,
        height: 15,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSelected: {
        opacity: 1,
        color: 'red',
    },
    customSlide: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    customImage: {
        width: deviceWidth,
        height: deviceHight * 0.3,
    },
});
