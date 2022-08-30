import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feed from '../pages/Feed';


const Routes = createAppContainer(
    createStackNavigator({
    Feed
}, {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
        headerTitle: <Image source={require('../../assets/logo.png')} />,
        headerStyle: {
            backgroundColor: "#f5f5f5"
        },
        headerLeft: (
            <TouchableOpacity style={{ marginLeft: 20 }}>
                <Image source={require('../../assets/camera.png')} />
            </TouchableOpacity>
        ),
        headerRight: (
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <Image source={require('../../assets/igtv.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <Image source={require('../../assets/send.png')} />
                </TouchableOpacity>
            </View>
        )
    }
})
);

export default Routes;