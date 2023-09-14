import  React, { useState }  from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, CheckBox,  Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Selector from '../../../components/selector/selector';
import Lock from 'react-native-vector-icons/AntDesign';
import TradingPlan from './tradingPlan';
import TradingRisk from './tradingRisk';
import ExitTrading from './exitTrading';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function TradingRegistration() {
    const [sliderState, setSliderState] = useState({ currentPage: 0});
    const { width, height } = Dimensions.get('window');
    const [showPassword, setShowPassword] = useState(false);
    const [isSelected, setSelection] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
     }
  
      const validationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });
  
    const handleSubmit = (values) => {
      // Handle form submission here
      console.log('Form values:', values);
    };

    const itemCategory = ["Category"];
    
    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
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
           scrollEventThrottle={4}
           pagingEnabled={true}
           showsHorizontalScrollIndicator={false}
           onScroll={(event: any) => {
            setSliderPage(event);
           }}
        >
          <View style={{ width, height, justifyContent: 'flex-start'}}>
          <View style={styles.bottomContent}>
          <Text style={styles.tradingText}>
              Trading Account {'\n'}
               Registration
            </Text>
           <Text style={styles.bottomText}>
            All details shared are secure and not shared {'\n'}
             with a third party
          </Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        > 
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
            <View>
              <Text style={styles.labelText}>Broker</Text>
              <TextInput
                style={styles.input}
                placeholder="Broker"
                onChangeText={handleChange('account')}
                onBlur={handleBlur('account')}
                value={values.account}
               />
            <Text style={styles.labelText}>Trading Account Number</Text>
               <TextInput
                style={styles.input}
                placeholder="Enter your broker account number"
                onChangeText={handleChange('account')}
                onBlur={handleBlur('account')}
                value={values.account}
               />
                {touched.email && errors.email && <Text style={styles.errorText}>Invalid Email</Text>}
                <Text style={styles.labelText}>Password</Text>
                <View>
                 <TextInput 
                   style={styles.input}
                   placeholder="Enter your password"
                   onChangeText={handleChange('password')}
                   onBlur={handleBlur('password')}
                   secureTextEntry={!showPassword}
                   value={values.password}
                />
                <TouchableOpacity 
                   onPress={togglePasswordVisibility}
               >
                  <Lock 
                   name={showPassword ? 'unlock' : 'lock'}
                    color="#fff"
                    style={styles.passwordInput}
                    size={20}
                   />
                </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                   <Text style={styles.errorText}>{errors.password}</Text>
                 )} 
                <Text style={styles.labelText}>Meta trader</Text>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                   value={isSelected}
                   onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                 <Text style={styles.checkLabel}>MT4</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                   value={isSelected}
                   onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                 <Text style={styles.checkLabel}>MT5</Text>
                </View>
                <TouchableOpacity
                 style={styles.submitBtn}
               >
                 <Text style={styles.submitButtonText}>Next</Text>
               </TouchableOpacity>

               <TouchableOpacity>
                 <Text style={styles.skipText}>Skip</Text>
               </TouchableOpacity>
            </View>
          )}
        </Formik>
         </View>
      </View>
      <View style={{ width, height, justifyContent: 'flex-start'}}>
         <TradingPlan />
      </View>
      <View style={{ width, height, justifyContent: 'flex-start'}}>
        <TradingRisk />
      </View>
       <View style={{ width, height, justifyContent: 'flex-start'}}>
          <ExitTrading />
       </View>
     </ScrollView>
         <View
               style={{
                position: 'absolute',
                top: 100,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
           {Array.from(Array(4).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
            ))}
            </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   tradeContainer: {
    backgroundColor: '#101213',
    flex: 1,
   },
   tradingText: {
   color:'#D9DDE3',
   fontWeight: 800,
   fontSize: 30,
   },
   bottomContent: {
    marginTop: 150,
    marginLeft: 20
  },
  bottomText: {
    color: '#ABABAB',
    marginTop: 15
  },
  labelText: {
    color: '#D9DDE3',
    marginTop: 15,
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
 errorText: {
    color: 'red'
  },
  passwordInput: {
    bottom: 30,
    right: 30,
    position: 'absolute'
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
    margin: 8,
    color: 'rgba(217,221,227,0.4)'
  },
 submitBtn: {
    width: 380,
    height: 56,
    backgroundColor: '#B89F1B',
    borderRadius: 8,
    padding: 15,
    marginTop: 10
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
   textAlign: 'center',
   marginTop: 20
  },
   paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#B89F1B',
    marginLeft: 10,
  }
})