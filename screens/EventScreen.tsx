import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';

import { Text, Button, Divider } from 'react-native-elements';
import EventList from './components/EventList'


class EventScreen extends React.Component<any, any>{
    
    render() {
    return (
            <SafeAreaView style={styles.container}>
                <Text h1>
                    Events
                </Text>
                <Button
                    containerStyle={styles.create}
                    icon={{
                        name:"add-circle", 
                        type:"material", 
                        color:'#f50', size: 50, 
                    }}
                    title="Add An Event"
                    raised
    
                />
                <Divider/>
                <EventList eventList={Events}/>


            </SafeAreaView>
        )
    }
}

export default EventScreen;

const styles = StyleSheet.create({
    container:{
        width: '95%',
        alignSelf: "center",
        flex : 1
    },
    create:{
        width:"80%", 
        alignSelf: "center",
        margin: 20,
    }
  
  })

interface Event {
    name: string,
    description: string,
    location: string, //To be made into a location object
    date: string //To be made into a date object
    id:  number
}

const Events :Event[] = [
    {
       name: "Event #1",
       description: "Event Description that will be long but can be truncated.",
       location: "1234 Park Place",
       date: "Aug 31 1:30PM",
       id: 0
    },
    {
        name: "Event #2",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Sep 2 5:00PM",
        id: 1
     },
     {
        name: "Event #3",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Aug 16 9:00AM",
        id: 2
     },
     {
        name: "Event #2",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Sep 2 5:00PM",
        id: 3
     },
     {
        name: "Event #3",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Aug 16 9:00AM",
        id: 4
     },
     {
        name: "Event #2",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Sep 2 5:00PM",
        id: 5
     },
     {
        name: "Event #3",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Aug 16 9:00AM",
        id: 6
     },
     {
        name: "Event #2",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Sep 2 5:00PM",
        id: 7
     },
     {
        name: "Event #3",
        description: "Event Description that will be long but can be truncated.",
        location: "1234 Park Place",
        date: "Aug 16 9:00AM",
        id: 8
     }
]