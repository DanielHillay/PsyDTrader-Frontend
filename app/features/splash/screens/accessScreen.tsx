import React, { useState } from 'react';
import AutoJournal from './journalScreen';
import TradingStrategy from './strategyScreen';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity,  Dimensions, StyleSheet } from 'react-native';
import Arrow from 'react-native-vector-icons/FontAwesome';


export default function AccessSplashScreen() {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();

    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
       const { x } = event.nativeEvent.contentOffset;
       const indexOfNextScreen = Math.floor(x / width);
       if (indexOfNextScreen !== currentPage) {
         setSliderState({
          ...sliderState,
          currentPage: indexOfNextScreen,
         });
       }
    };

    const { currentPage: pageIndex } = sliderState;
    return (
      <SafeAreaView style={styles.splashStyles}>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={3}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >
        <View style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.imageView}>
            <Image
               style={{ width: 160, height: 189 }} 
               source={require('../../../../assets/images/analytics.png')} 
              />
              <View style={styles.accessView}>
                <Text style={styles.accessText}>
                  Access better a better trading tool
                </Text>
                <Text style={styles.profitText}>
                  Our trade and risk analyzer tool help you 
                  increase your changes of a higher profit
                </Text>
              </View>
          </View>
        </View>
        <View style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
          <AutoJournal />
        </View>
        <View style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
          <TradingStrategy />
        </View>
        </ScrollView>
        <View
        style={{
          position: 'absolute',
          bottom: 200,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {Array.from(Array(3).keys()).map((key, index) => (
          <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
        ))}

        <TouchableOpacity 
          style={{
            bottom: 0,
            left: 40,
            marginTop: 70,
            backgroundColor: "#B89F1B",
            right: 0,
            width: 50,
            height: 25,
            padding: 7,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('signin')}
          >
           <Arrow 
           name="long-arrow-right"
           size={30}
           color="#000000"
          />
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  splashStyles: {
      backgroundColor: '#101213',
  },
  imageView: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  accessView: {
    marginTop: 20,
  },
  accessText: {
    color: "#ffffff",
    fontWeights: 800,
    fontSize: 20,
    textAlign: 'center',
  },
  profitText: {
   color: "#EFF0F6",
   fontWeights: 400,
   fontSize: 18,
   textAlign: 'center'
  },
  paginationDots: {
    height: 10,
    width: 10,
    top: 40,
    borderRadius: 10 / 2,
    backgroundColor: '#B89F1B',
    marginLeft: 10,
  }
});