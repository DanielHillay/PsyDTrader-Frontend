import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExitTrading() {
  const navigation = useNavigation();
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
           when price gets to <TextInput  style={{ width: 130, height: 30, backgroundColor: '#202328', borderRadius: 8, padding: 10, color: '#D9DDE3',  border: 'none' }}
            />  % of target profit, {'\n'}
           reduce volume/totalsize by <TextInput  style={{ width: 130, height: 30,  backgroundColor: '#202328', borderRadius: 8, padding: 10, color: '#D9DDE3',  border: 'none' }}
            />  % and set {'\n'}
           stopLoss to <TextInput style={{ width: 130, height: 30,  backgroundColor: '#202328', borderRadius: 8, padding: 10, color: '#D9DDE3',  border: 'none' }}
            /> % of current loss {'\n'}
           allowance OR set stopLoss to <TextInput style={{ width: 130, height: 30,  backgroundColor: '#202328', borderRadius: 8, padding: 10, color: '#D9DDE3',  border: 'none' }}
            /> % of {'\n'}
           target profit.
          </Text>
         </View>
         <View>
         <Text style={styles.tradingText1}>For loss {' '}
           {/* <TouchableOpacity
             style={{
              width: 40,
              height: 20,
              borderRadius: 6,
              padding: 5,
              backgroundColor: '#B89F1B',
              marginTop: 25
             }}
           >
              <Text style={{ color: '#D9DDE3'}}>+</Text>
           </TouchableOpacity> */}
         </Text>
         <Text style={{ color: '#D9DDE3'}}>
           When price gets to <TextInput style={{ width: 130, height: 30,  backgroundColor: '#202328', borderRadius: 8, padding: 10, color: '#D9DDE3',  border: 'none' }}
            />  % of loss {'\n'}
           allowance, reduce volumn/totalsixe by <TextInput style={{ width: 130, height: 30,  backgroundColor: '#202328', borderRadius: 8, padding: 10, color: '#D9DDE3',  border: 'none' }}
            /> %
       </Text>
         </View>
         <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => navigation.navigate('welcome')}
          >
                 <Text style={styles.submitButtonText}>Next</Text>
          </TouchableOpacity>
        
          <TouchableOpacity>
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
      marginTop: 15
  },
  tradingText: {
      color:'#ffffff',
      fontWeight: 800,
      fontSize: 30,
 },
 tradingText1: {
  color:'#ffffff',
  fontWeight: 300,
  fontSize: 20,
  marginTop: 25
},
submitBtn: {
  width: 380,
  height: 56,
  backgroundColor: '#B89F1B',
  borderRadius: 8,
  marginTop: 140,
  padding: 10,
},
submitButtonText: {
  color: '#101213',
  fontSize: 20,
  fontWeight: 700,
  textAlign: 'center'
},
skipText: {
  color: '#B89F1B',
  fontSize: 20,
  fontWeight: 700,
  textAlign: 'center',
   marginTop: 20
 },
});