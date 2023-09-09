import  React, { useState }  from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';

export default function TradingRegistration() {
    const [sliderState, setSliderState] = useState({ currentPage: 0});
    const { width, height } = Dimensions.get('window');
    
    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffsset;
        const indexOfNextScreen = Math.floor(x / width );
        if (indexOfNextScreen !== currentPage) {
           setSliderState({
            ...sliderState,
            currentPage: indexOfNextScreen,
           });
        }
    };

    const { currentPage: pageIndex } = sliderState;
    return (
      <SafeAreaView style={styles.tradeContainer}>
        <ScrollView
           horizontal={true}
           scrollEventThrottle={3}
           pagingEnabled={true}
           showsHorizontalScrollIndicator={false}
           onScroll={(event: any) => {
            setSliderPage(event);
           }}
        >
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
            </View>
          <View style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   tradeContainer: {
    backgroundColor: '#101213',
   },
   paginationDots: {
    height: 10,
    width: 10,
    top: 40,
    borderRadius: 10 / 2,
    backgroundColor: '#B89F1B',
    marginLeft: 10,
  }
})