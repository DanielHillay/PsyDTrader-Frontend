import React from 'react';
import { View, Image, Text, StyleSheet  } from 'react-native';

export default function TradingStrategy() {
    return (
      <View style={styles.splashStyles}>
        <View style={styles.imageView}>
           <Image 
             style={{ width: 160, height: 189 }}
             source={require('../../../../assets/images/sally1.svg')}
           />
           <View style={styles.accessView}>
           <Text style={styles.accessText}>Track your trading strategy and account</Text>
            <Text style={styles.profitText}>
              Keep your trading game at A+ by receiving
              regular reports on your trading psychology.
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
    }
  });