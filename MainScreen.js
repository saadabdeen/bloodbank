import React, {Component} from 'react';
import {ImageBackground , Image} from 'react-native';
import styles from './src/screens/stylizing';
import { Container, Header, View,   Text, Left, Body, Icon, Button } from 'native-base';
import Navigation from './src/Navigation';
import {createStackNavigator,createAppContainer} from 'react-navigation';

class MainScreen extends React.Component {
    render(){
        return(
            <View>  <Navigation/>    </View>
            // <ImageBackground
            // source={require('./src/images/mainbg.png')} style = {styles.mainbg}>
            // <View >  
            // <Text style = {styles.name}>BLOOD BANK</Text>
            // <Image source={require('./src/images/sisc.png')} style = {styles.sisc}/>
            // </View>
            // <View style ={styles.forbtn} >
            // <Button  full transparent light onPress={()=>{
            //         this.props.navigation.navigate("Screen2")
            //     }}> 
            //     <Icon name = 'people'/>
            //     <Text>Become a Donor</Text>
            // </Button>
            // <Button full transparent light> 
            //     <Icon name = 'pulse'/>
            //     <Text>Request For Blood</Text>
            // </Button>
            // </View>
            // </ImageBackground>

        );
    }
}
export default MainScreen;