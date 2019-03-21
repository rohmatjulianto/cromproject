import React,{ Component } from "react";
import { View, Text, Dimensions, Button, AsyncStorage, StyleSheet, ScrollView,  TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from "react-native";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { ENTRIES1, btnTop } from '../Data_Entries';

// sliderConst
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const slideHeight = viewportHeight * 0.20;
const slideWidth = wp(76);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;
// sliderConst




export default class Home extends Component {
    static navigationOptions = {
        header : null
    }
    constructor() {
        super()
        this.state = {
           
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <TouchableOpacity
            activeOpacity={1}
            style={styles.slideInnerContainer}
            onPress={() => { console.log(index) }}
            >
              <View style={styles.imageContainer}>
                  <ParallaxImage
                      source={item.illustration}
                      containerStyle={styles.imageContainer}
                      style={styles.image}
                      parallaxFactor={0.35}
                      {...parallaxProps}
                  />
                  <View style={styles.radiusMask} />
              </View>
          </TouchableOpacity>
        );
    }

    
    mainExample () {
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={1}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  loop={true}
                  loopClonesPerSide={3}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                />
              
            </View>
        );
    }
      

   

    render(){
      

        const btnC = btnTop.map((btn, key) => (
            <TouchableNativeFeedback key={key}>
                <View>
                    <Image style={styles.btnTop} source={btn.resource}/>
                    <Text style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold'}}>{btn.title}</Text>
                </View>
            </TouchableNativeFeedback>
        ));
        
        const mainCarousel = this.mainExample();

    
        return(
            <ScrollView style={{backgroundColor : '#f9f9f9', height: '100%'}}>
                <ImageBackground
                    style={{height : 140, width: '100%' , position : 'absolute', backgroundColor : '#f9f9f9'}}
                    source ={require('../../assets/imgs/background-home.png')}>
                </ImageBackground>
                        <View style={styles.containerTop}>
                            <Image
                                style={styles.logo}
                                source={{uri: 'https://cromassets.000webhostapp.com/logo1.png'}}
                            />
                            <View style={{flexDirection : 'row', justifyContent: 'space-around'}}>
                            
                                <View style={{alignItems : 'flex-end', padding: 5}}>
                                    <Text style={{fontSize : 11, fontWeight: 'bold', color : 'white'}}>Warung Sentosa Abadi</Text>
                                    <Text style={{fontSize : 10, fontWeight: 'bold', color : 'white'}}>Bambang Subambang</Text>
                                </View>

                                <Image
                                style={styles.store}
                                source={require('../../assets/imgs/store.png')}
                            />
                            </View>
                        </View>

                        <View style={styles.cardTop}>
                            <View style={styles.containerSaldo}>
                                    <Text>Saldo Anda</Text>
                                    <View style={{flexDirection : 'row'}}>
                                        <Text style={{fontSize: 10, lineHeight: 12}}>Rp </Text>
                                        <Text style={{fontWeight : 'bold'}}>200.000,-</Text>
                                    </View>
                            </View>
                            {/* separator */}
                            <View style = {styles.separator}></View> 
                            {/* separator */}
                            <View style={{flexDirection : 'row', justifyContent : 'space-between', padding: 10}}>
                                {btnC}
                            </View>

                        </View>
                            
                        {/* <Button
                        title ="Aku logout"
                        onPress = { 
                            async ()=> {
                                await AsyncStorage.clear();
                                this.props.navigation.navigate('Auth')
                            }
                        } /> */}
                            <View style={{backgroundColor: 'white', marginTop: 20, paddingBottom: 20}}>
                                <Text style={{margin: 10, marginLeft: 25, fontSize : 11, fontWeight: 'bold'}}>Promo hari ini</Text>
                                {mainCarousel}
                            </View>
                           
               
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerTop : {
        flexDirection : 'row', 
        justifyContent: 'space-between',
        marginRight : 25,
        marginLeft : 25,
        marginTop : 20,
    },
    logo: {
        width: 40,
        height: 40,
      
    },
    store : {
        width : 40,
        height : 40,
        borderRadius : 40,
    },
    cardTop : {
        backgroundColor : 'white',
        height : 120,
        padding : 10,
        marginRight : 25,
        marginLeft : 25,
        marginTop: 10,
        borderRadius: 10,
        
    },
    containerSaldo : {
        flexDirection: 'row', 
        justifyContent : 'space-between', 
        marginBottom: 5
    },
    separator: {
        borderColor : '#f9f9f9', 
        borderWidth : 1.5,
        marginRight : -10,
        marginLeft : -10

    },
    btnTop : {
        height : 40,
        width : 50,
    },

    // sliderCarousel
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
       
    },
    imageContainer: {
        flex: 1, // Prevent a random Android rendering issue
        borderRadius: entryBorderRadius,
    },
    image: {
        resizeMode : 'contain',
        borderRadius: entryBorderRadius,
    },


    
})

