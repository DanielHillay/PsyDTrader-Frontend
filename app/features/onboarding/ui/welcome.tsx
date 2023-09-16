import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';


export default function WelcomeScreen() {
    return (
      <View style={styles.areaStyle}>
         <View>
           <Image 
             style={{
              width: scale(169),
              height: verticalScale(189),
              marginLeft: 20,
             }}
             source={require('../../../../assets/images/btc.png')} />
            <Text style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 300,
                textAlign: 'center',
                marginBottom: 15
            }}>Welcome to PsyTrader</Text>
            <Text style={{
                color: '#fff',
               fontSize: 10,
               textAlign: 'center'
            }}>
                Hi there, I'm having trouble logging in to my {'\n'}
                account. Can you help me reset my password?
            </Text>
         </View>
         <TouchableOpacity
         style={styles.submitBtn}>
              <Text style={styles.submitButtonText}>Continue</Text>
       </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    areaStyle: {
       flex: 3,
       backgroundColor: '#101213',
       justifyContent: 'center',
       alignItems: 'center'
    },
    submitBtn: {
        width: scale(300),
        height: verticalScale(48),
        backgroundColor: '#B89F1B',
        borderRadius: 8,
        marginTop: 40,
        padding: 10,
    },
      submitButtonText: {
        color: '#101213',
        fontSize: 20,
        textAlign: 'center'
      }
});