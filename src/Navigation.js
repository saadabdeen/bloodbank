import React from 'react';
import {createStackNavigator,createAppContainer,createDrawerNavigator} from "react-navigation";
import MainScreen from "../MainScreen"
import DonorRegister from "./screens/DonorRegister";
import AvailableDonor from "./screens/AvailableDonors";
import Donor from "./screens/Donor";
import RequestorList from "./screens/RequestorList";
import RequestorRegister from "./screens/RequestorRegister";
import RequestorScreen from "./screens/RequestorScreen";


const StackNav = createStackNavigator(
{
    Screen1 : MainScreen, 
    Screen2 : DonorRegister,
},
{
    initialRouteName : 'Screen1',
}
    );

const Appcontainer = createAppContainer (StackNav);

