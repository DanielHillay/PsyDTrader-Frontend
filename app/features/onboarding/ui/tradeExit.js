import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';

export default function ExitScreen() {
  const navigation = useNavigation();

  
  const navigateToWelcome = () => {
    navigation.navigate('welcome'); // Use the navigation object obtained from useNavigation
  };
    return (
      <View style={styles.planView}>
        <View style={styles.bottomContent}>
          <Text style={styles.tradingText}>Exit Strategy</Text>
          <Text style={styles.bottomText}>
            All details shared are secure and not shared {'\n'}
             with a third part
        </Text>
        <View>
        <Text style={styles.tradingText1}>For profit {' '}
           {/* <TouchableOpacity
             style={{
              width: 40,
              height: 20,
              borderRadius: 6,
              padding: 5, 
              marginTop: 25,
              backgroundColor: '#B89F1B'
             }}
           >
              <Text style={{ color: '#D9DDE3'}}>+</Text>
           </TouchableOpacity> */}
         </Text>
         <Text style={{ color: '#D9DDE3', lineHeight: 16}}>
           when price gets to <TextInput style={styles.priceInter}  />  % of target profit, {'\n'}
           reduce volume/totalsize by <TextInput style={styles.priceInter} />  % and set {'\n'}
           stopLoss to <TextInput  style={styles.priceInter} /> % of current loss {'\n'}
           allowance OR set stopLoss to <TextInput style={styles.priceInter} /> % of {'\n'}
           target profit.
          </Text>
         </View>
         <View>
         <Text style={styles.tradingText1}>For loss {' '}
         </Text>
         <Text style={{ color: '#D9DDE3'}}>
           When price gets to <TextInput style={styles.priceInter} />  % of loss {'\n'}
           allowance, reduce volumn/totalsixe by <TextInput style={styles.priceInter} /> %
       </Text>
         </View>
         <TouchableOpacity
            style={styles.submitBtn}
            onPress={navigateToWelcome}
          >
                 <Text style={styles.submitButtonText}>Next</Text>
          </TouchableOpacity>
        
          <TouchableOpacity  style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
         </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    planView: {
       backgroundColor: '#101213', 
    },
    bottomContent: {
      marginTop: 150,
      marginLeft: 20
    },
    bottomText: {
      color: 'rgba(217,221,227,0.4)',
      marginTop: 10
  },
  tradingText: {
      color:'#ffffff',
      fontSize: 30,
 },
 tradingText1: {
  color:'#ffffff',
  fontSize: 20,
  marginTop: 25
},
submitBtn: {
  width: scale(300),
  height: verticalScale(48),
  backgroundColor: '#B89F1B',
  borderRadius: 8,
  marginTop: 20,
  padding: 10,
},
submitButtonText: {
  color: '#101213',
  fontSize: 20,
  textAlign: 'center'
},
skipButton: {
  width: scale(280),
  height: verticalScale(48),
  backgroundColor: 'transparent', 
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center', 
 },
 priceInter: {
  width:scale(130), 
  height: verticalScale(30), 
   backgroundColor: '#202328', 
   borderRadius: 8, 
   padding: 10, 
   color: '#D9DDE3', 
    border: 'none' 
 },
skipText: {
  color: '#B89F1B',
  fontSize: 20,
  textAlign: 'center',
   marginTop: 20
 },
});