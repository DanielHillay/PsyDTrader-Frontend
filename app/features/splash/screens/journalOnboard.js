import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default function AutoJournal() {
    return (
      <View style={styles.splashStyles}>
        <View style={styles.imageView}>
           <Image
             style={{ width: 160, height: 189 }}
             source={require('../../../../assets/images/currency1.svg')}
           />
           <View style={styles.accessView}>
            <Text style={styles.accessText}>Auto trading journal for all your trades</Text>
            <Text style={styles.profitText}>
              Our trade and risk analyzer tool help you 
              increase your changes of a higher profit
            </Text>
           </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    splashStyles: {
        backgroundColor: '#101213',
    },
    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(20),
    },
    accessView: {
      marginTop: 20,
    },
    accessText: {
      color: "#ffffff",
      fontSize: scale(17),
      textAlign: 'center',
    },
    profitText: {
     color: "#EFF0F6",
     fontSize: scale(18),
     textAlign: 'center'
    }
  });