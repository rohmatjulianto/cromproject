import React,{ Component } from "react";
import {View, ImageBackground, TextInput, StyleSheet , Text, TouchableNativeFeedback} from "react-native";
import { DotIndicator } from 'react-native-indicators';

export default class Activation extends Component{
    static navigationOptions = {
        header: null
      }
    render(){
        const titleHead = "Hanya satu langkah lagi untuk menjadi warung CROM"
        const titleBottom = "Masukan kode referal agen sebagai verifikasi akun warung mu"
        const {navigate} = this.props.navigation
        return(
            <ImageBackground
            style={{flex : 1}}
            resizeMode= 'stretch'
            source ={{uri : 'https://cromassets.000webhostapp.com/background/background-activation.png'}}>
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <Text style={styles.headText}>AYO SEDIKIT LAGI!</Text>
                    <Text style={styles.titleText}>{titleHead}</Text>
                        <View style={styles.containerIndicator}>
                            <DotIndicator 
                                color="white" 
                                count={5}
                                size={10}/>
                        </View>
                        <Text style={styles.titleText}>{titleBottom}</Text>
                </View>
                <View style={styles.containerInput} >
                    <TextInput
                        style={styles.textAct}>
                    </TextInput>
                </View>
                <View style={styles.containerInput}>
                    <TouchableNativeFeedback 
                    onPress={()=> navigate('Login')}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Verifikasi</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: '25%',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
    },
    containerInput:{
        padding: 5
    },
    containerIndicator:{
        padding: 30
    },
    headText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    titleText:{
        paddingLeft: 35,
        paddingRight: 35,
        textAlign: 'center',
        fontSize: 16,
        color : '#ffffff',
    },
    textAct:{
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderRadius: 10
    },
    btn :{
        alignItems : 'center',
        backgroundColor : '#25b2a9',
        borderRadius: 10,
        height: 50,
        padding : 10,
    },
    
    btnText : {
        fontSize: 18,
        fontWeight: 'bold',
        color : '#ffffff'
    },
})