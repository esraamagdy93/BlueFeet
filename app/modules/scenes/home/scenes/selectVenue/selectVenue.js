
import React from 'react'
    ;
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    FlatList, Image, ActivityIndicator, TouchableOpacity
} from 'react-native'
import { Container, Header, Button, Icon, Fab, Content, List, ListItem, Tab, Tabs, Left, Body, Right, CheckBox, } from 'native-base';
import toilet from "../../../../../images/toilet.png"
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
import moment from "moment";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from 'react-native-image-slider';
import { deviceWidth, deviceHight, appColor } from '../../../../../styles/styles';
import { connect } from 'react-redux'
import { createReservationData } from "../../actions";

 class booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null, flage: false,
            day: null, dataPrice: null, Day: "ALL", checked: 0, timestamp:'',from:'',to:''

        };

    }
    componentDidMount() {
        this.props.homeReducer.createReservationDataSuccess =null
        const data = this.props.navigation.state.params.item;
        console.log(data)
        this.setState({
            data: data,
            flage: true,
        });

    }
    chkbox_check() {
        var checked = this.state.chkbox_chk;
        if (checked == true) {
            this.setState({ chkbox_chk: false })
            console.log("iff", this.state.chkbox_chk)

        }
        else
            this.setState({ chkbox_chk: true })
        console.log("else", this.state.chkbox_chk)

    }

    covertTodayName(dayFormat) {
        console.log(dayFormat)
        const today = dayFormat;
        const day = moment(today).format("dddd");
        const dayName = day.toUpperCase()
        this.setState({
            day: dayName,
        });
        console.log(this.state.day)

    }
    onChooseGender(key ) {
        this.setState({ checked: key })
        this.setState({ from: this.state.data.daySlots[key].from })
        this.setState({ to: this.state.data.daySlots[key].to })

        console.log(this.state.data.daySlots[key])

    }
    handleCreateReservation =  () => {
        
        console.log("handle",this.state.data._id,this.state.timestamp,this.state.from,this.state.to)
         this.props.createReservationData(
            {
                court: this.state.data._id,
                date: this.state.timestamp,
                from: this.state.from,
                to:this.state.to,
                paymentMethod:"CASH_ON_SPOT",
                type:"PRIVATE",

                
            }

        );



    }


    render() {

        if (this.props.homeReducer.createReservationDataSuccess) {
            alert("Sucess, Your Reservation is Hold ");
            this.props.homeReducer.createReservationDataSuccess =null
            this.props.navigation.goBack()

        }
        var Indicator = null;
        var rendercontent = null;
        if (this.state.flage) {
            rendercontent = (
                <View>
                    <View style={{ height: 200 }}>
                        <ImageSlider
                            loop
                            autoPlayWithInterval={3000}
                            images={this.state.data.images}
                            onPress={({ index }) => alert(index)}
                            customSlide={({ index, item, style, width }) => (
                                // It's important to put style here because it's got offset inside
                                <View
                                    key={index}
                                    style={[
                                        style,
                                        styles.slider,

                                    ]}
                                >
                                    <ImageBackground source={{ uri: "https://bluefeets.com/" + item }} style={styles.customImage} >
                                        <View style={styles.content2}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'column' }}>

                                                    <Text style={styles.contentText1}> {`${this.state.data.name.en}`}</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.contentText2}>{`${this.state.data.address}`}</Text>

                                                        <Text style={styles.contentText2}>(2.4Km)</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </ImageBackground>

                                </View>
                            )}

                        />
                    </View>
                    <View style={{ height: deviceHight * 0.1, width: deviceWidth, backgroundColor: '#fff' }}>
                        <FlatList style={{ marginLeft: 140, height: deviceHight * 0.2 }}
                            horizontal
                            data={[1, 2, 3, 4,]}
                            renderItem={entry =>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: deviceWidth * 0.1 }}>
                                        <View>

                                            <Image style={{
                                                width: deviceWidth * 0.06, height: deviceHight * 0.08,
                                            }}
                                                source={toilet}
                                                resizeMode="contain"

                                            />
                                        </View>
                                    </View>



                                </View>
                            }
                        />
                    </View>

                    <View style={{ height: deviceHight * 0.001, width: deviceWidth, backgroundColor: '#000', opacity: 0.2 }}>
                    </View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', height: deviceHight * 0.1 }}>
                        <Text style={{ marginLeft: deviceWidth * 0.2, marginTop: deviceHight * 0.03 }}>Price</Text>

                        {this.state.data.price.map((dataPrice, index) => {
                            if (dataPrice.day == "ALL") {
                                return (
                                    <Text style={{ marginLeft: deviceWidth * 0.4, marginTop: deviceHight * 0.03 }}>{dataPrice.price} JOD</Text>
                                )

                            }
                            else {

                                if (dataPrice.day == this.state.day) {
                                    console.log(dataPrice.day, this.state.day)
                                    return (

                                        <Text style={{ marginLeft: deviceWidth * 0.4, marginTop: deviceHight * 0.03 }}>{dataPrice.price} JOD</Text>
                                    )
                                }
                            }

                        })}
                    </View>

                    <View style={{ height: deviceHight * 0.001, width: deviceWidth, backgroundColor: '#000', opacity: 0.2 }}></View>
                    <View style={{ height: deviceHight * 0.23 }}>


                        <Agenda
                            pastScrollRange={5}
                            // Max amount of months allowed to scroll to the future. Default = 50
                            futureScrollRange={5}
                            onDayPress={(day) => { console.log('selected day', day.timestamp),
                            this.setState({timestamp:day.timestamp})
                            , this.covertTodayName(day.dateString) }}
                            // selected={year + '-' + month + '-' + JSON.stringify(parseInt(date) + 7)}
                            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                            minDate={year + '-' + month + '-' + date}
                            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                            maxDate={year + '-' + month + '-' + JSON.stringify(parseInt(date) + 7)}
                            // selected={ this.covertTodayName(day.dateString) }
                            renderEmptyData={() => {
                                return (

                                    <View>
                                        {this.state.data.price.map((dataPrice, index) => {
                                            if (dataPrice.day == "ALL") {
                                                return (



                                                    <View>

                                                        {
                                                            this.state.data.daySlots.map((item, key) => {

                                                                return (
                                                                    <View>

                                                                        {this.state.checked == key ?
                                                                            <TouchableOpacity  onPress={() => { this.onChooseGender(key) }}>
                                                                                <MaterialCommunityIcons
                                                                                    name={'soccer-field'}
                                                                                    size={26}
                                                                                    style={{ color: appColor }}
                                                                                />
                                                                                <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>


                                                                            </TouchableOpacity>
                                                                            :
                                                                            <TouchableOpacity onPress={() => { this.onChooseGender(key) }}>

                                                                                <Ionicons
                                                                                    name={'md-notifications'}
                                                                                    size={26}
                                                                                    style={{ color: appColor }}
                                                                                />
                                                                                <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>


                                                                            </TouchableOpacity>
                                                                        }
                                                                    </View>
                                                                )
                                                            })
                                                        }
                                                    </View>
                                                )

                                            }
                                            else {

                                                if (dataPrice.day == this.state.day) {
                                                    console.log(dataPrice.day, this.state.day)
                                                    return (

                                                        // <FlatList
                                                        //     data={this.state.data.daySlots}

                                                        //     renderItem={({ item }) => (

                                                        // <ListItem>
                                                        //     <CheckBox checked={this.state.chkbox_chk} onPress={() => { this.chkbox_check() }} />


                                                        // </ListItem>


                                                        <View>

                                                            {
                                                                this.state.data.daySlots.map((item, key) => {

                                                                    return (
                                                                        <View>

                                                                            {this.state.checked == key ?
                                                                                <TouchableOpacity onPress={() => { this.onChooseGender(key) }}>
                                                                                    <MaterialCommunityIcons
                                                                                        name={'soccer-field'}
                                                                                        size={26}
                                                                                        style={{ color: appColor }}
                                                                                    />
                                                                                    <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>


                                                                                </TouchableOpacity>
                                                                                :
                                                                                <TouchableOpacity  onPress={() => { this.onChooseGender(key) }}>

                                                                                    <Ionicons
                                                                                        name={'md-notifications'}
                                                                                        size={26}
                                                                                        style={{ color: appColor }}
                                                                                    />
                                                                                    <Text>    {`${item.from}` + ' ' + `${item.to}`}</Text>


                                                                                </TouchableOpacity>
                                                                            }
                                                                        </View>
                                                                    )
                                                                })
                                                            }
                                                        </View>



                                                    )
                                                }
                                            }

                                        })}



                                    </View>
                                );
                            }}


                            style={{ height: deviceHight * 0.5 }}
                        />


                    </View>
                    <TouchableOpacity onPress={this.handleCreateReservation}>
                    <View style={{ width: deviceWidth, height: deviceHight * 0.06, backgroundColor: 'green', marginTop: deviceHight * 0.232, alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            fontWeight: 'bold', color: '#fff', fontSize: deviceWidth * 0.045, marginTop: deviceHight * 0.01
                        }}>Book Now</Text></View>
                        </TouchableOpacity>
                </View >
            )
        }
        Indicator = (
            <View
                style={styles.viewIndicator}
            >
                <ActivityIndicator
                    color={appColor}
                    size="large"
                    style={styles.viewheight}
                />
            </View>
        );
        return (
            <View style={styles.container} >
                {rendercontent}
                {Indicator}

            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        homeReducer   : state.homeReducer,
    };
}
export default connect(
    mapStateToProps,
    {
        createReservationData
    }
)(booking)


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
        height: 80,
        marginTop: 120,
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
        width: 500,
        height: 200,
    }, viewheight: {
        height: deviceHight * 0.2
    },
});
