import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, CheckBox, StyleSheet} from 'react-native';
import { Formik } from 'formik';

export default function TradingPlan() {
    const [isSelected, setSelection] = useState(false);

    const handleSubmit = (values) => {
        // Handle form submission here
        console.log('Form values:', values);
      };


    return (
     <View style={styles.planView}>
        <View style={styles.bottomContent}>
            <Text style={styles.tradingText}>Trading Plan</Text>
            <Text style={styles.bottomText}>
              <Text style={{ color: '#B89F1B'}}>Strictly</Text> {' '}
              Hold me accountable by the following {'\n'}
              parameters
            </Text>
            <Formik
               initialValues={{ entry: '' }}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                <View>
                <Text style={styles.labelText}>Entry Strategy</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Add your entry strategies"
                  onChangeText={handleChange('entry')}
                  onBlur={handleBlur('entry')}
                  value={values.entry}
                />
                <Text style={styles.labelText}>Suggestions</Text>
                <View style={styles.flexContainer}>
                     <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Bottinger Bands</Text>
                     </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Stochastic Osciltator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                       <Text style={styles.buttonText}>MACD</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexContainer}>
                     <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Moving Average</Text>
                     </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pivot Point</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                       <Text style={styles.buttonText}>Fibonacci retracement</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                 style={styles.submitBtn}
               >
                 <Text style={styles.submitButtonText}>Save our trade plan</Text>
               </TouchableOpacity>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                   value={isSelected}
                   onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                 <Text style={styles.checkLabel}>
                    I agree to the {' '} <Text style={{ color: '#B89F1B'}}>Terms and conditions</Text> of my trading {'\n'}
                    plan
                 </Text>
                </View>

                <TouchableOpacity>
                 <Text style={styles.skipText}>Skip</Text>
               </TouchableOpacity>
             </View>
              )}
            </Formik>
        </View>
     </View>
    );
}

const styles = StyleSheet.create({
     planView: {
        backgroundColor: '#101213', 
     },
     tradingText: {
        color:'#ffffff',
        fontWeight: 800,
        fontSize: 30,
        },
     bottomContent: {
        marginTop: 150,
        marginLeft: 20
      },
      bottomText: {
        color: 'rgba(217,221,227,0.4)',
        marginTop: 15
      },
      labelText: {
        color: '#D9DDE3',
        marginTop: 25,
        marginBottom: 13,
     },
     input: {
        height: 56,
        backgroundColor: '#202328',
        marginVertical: 10,
        paddingHorizontal: 10,
        width: 380,
        borderRadius: 8,
        color: '#D9DDE3', 
        borderWidth: 1,
        borderColor: '#D9DDE3'
     },
     flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
     },
     button: {
      flex: 1,
       height: 45,
       backgroundColor: '#202328',
       padding: 15,
       color: '#D9DDE3', 
       borderWidth: 1,
       borderColor: '#D9DDE3',
       borderRadius: 40
     },
     buttonText: {
        color: 'rgba(217,221,227,0.4)',
        textAlign: 'center',
        fontSize: 11
     },
     submitBtn: {
        width: 380,
        height: 56,
        backgroundColor: '#B89F1B',
        borderRadius: 8,
        padding: 15,
        marginTop: 20,
        marginBottom: 35
      },
      submitButtonText: {
        color: '#101213',
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center'
      },
      checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 8
      },
      checkbox: {
        alignSelf: 'center',
        backgroundColor: 'red'
      },
      checkLabel: {
        margin: 10,
        color: 'rgba(217,221,227,0.4)'
      },
      skipText: {
        color: '#B89F1B',
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 40
       }
})