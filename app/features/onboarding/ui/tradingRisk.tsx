import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';


export default function TradingRisk() {
    return (
     <View style={styles.planView}>
      <View style={styles.bottomContent}>
        <Text style={styles.tradingText}>Risk Management</Text>
        <Text style={styles.bottomText}>
         All details shared are secure and not shared {'\n'}
         with a third part
        </Text>
        <View style={styles.rateView}>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Make loss % per day
            </Text>
            <TextInput 
                placeholder="0.00"
                style={{
                  width: 170,
                 height: 38,
                backgroundColor: '#202328',
                borderRadius: 8,
               color: '#D9DDE3', 
               paddding: 10,
               border: 'none'
              }}
            />
          </View>
          <View style={styles.rateItem}>
             <Text style={styles.rateText}>Make loss % per trade</Text>
             <TextInput 
                placeholder="0.00"
                style={{
                  width: 170,
                 height: 38,
                backgroundColor: '#202328',
                borderRadius: 8,
               color: '#D9DDE3', 
               padding: 10,
               border: 'none'
              }}
            />
          </View>
        </View>
        <View style={styles.rateView}>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Min RRR per trade</Text>
            <TextInput 
                placeholder="565.989"
                style={{
                  width: 170,
                  height: 38,
                 backgroundColor: '#202328',
                 borderRadius: 8,
                 padding: 10,
                color: '#D9DDE3', 
                border: 'none'
               }}
            />
          </View>
          <View style={styles.rateItem}>
             <Text style={styles.rateText}>Min RRR per trade</Text>
             <TextInput 
                placeholder="0.00"
                style={{
                  width: 170,
                 height: 38,
                backgroundColor: '#202328',
                borderRadius: 8,
                padding: 10,
               color: '#D9DDE3', 
               border: 'none'
              }}
            />
          </View>
        </View>

        <View style={styles.rateView}>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Total profit % per page</Text>
            <TextInput 
                placeholder="0.00"
                style={{
                  width: 170,
                  height: 38,
                 backgroundColor: '#202328',
                 borderRadius: 8,
                 padding: 10,
                color: '#D9DDE3', 
                border: 'none'
               }}
            />
          </View>
          <View style={styles.rateItem}>
             <Text style={styles.rateText1}>
              Daily reset at {'\n'}
              <TouchableOpacity style={styles.rateOpacity}>
                 <Text style={styles.rateName}>09.41</Text>
            </TouchableOpacity>
            </Text>
      
          </View>
        </View>

        <TouchableOpacity
            style={styles.submitBtn}>
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
   rateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
   },
   rateItem: {
    flex: 1,
},
   rateText: {
     color: 'rgba(217,221,227,0.4)',

    fontSize: 16
   },
   rateText1: {
    color: 'rgba(217,221,227,0.4)',
    fontSize: 16,
    //marginRight: 30
   },
   rateName: {
    color: '#101213',
    fontSize: 16,
    textAlign: 'center',
    //marginRight: 30
   },
   rateText2: {
    color: '#D9DDE3',
    fontSize: 16,
    textAlign: 'center'
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
   rateOpacity: {
    width: 86,
    height: 30,
    borderRadius: 6,
    padding: 4,
    backgroundColor: '#B89F1B'
   }
})