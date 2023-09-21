import  React, { useState }  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Lock from 'react-native-vector-icons/AntDesign';
import TradingPlan from './tradePlan';
import TradingRisk from './tradeRisk';
import ExitScreen from './tradeExit';
import { scale, verticalScale } from 'react-native-size-matters';
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
           onScroll={(event) => {
            setSliderPage(event);
           }}
        >
          <View style={{ width, height }}>
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
                <View style={styles.passwordInputField}>
                 <TextInput 
                   style={{ flex: 1, color: '#D9DDE3' }}
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
                    size={20}
                   />
                </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                   <Text style={styles.errorText}>Invalid Password</Text>
                 )} 
                <Text style={styles.labelText}>Meta trader</Text>
                <View style={styles.checkboxContainer}>
                  {/* <CheckBox
                   value={isSelected}
                   onValueChange={setSelection}
                    style={styles.checkbox}
                  /> */}
                 <Text style={styles.checkLabel}>MT4</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  {/* <CheckBox
                   value={isSelected}
                   onValueChange={setSelection}
                    style={styles.checkbox}
                  /> */}
                 <Text style={styles.checkLabel}>MT5</Text>
                </View>
                <TouchableOpacity
                 style={styles.submitBtn}
               >
                 <Text style={styles.submitButtonText}>Next</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.skipButton}>
                 <Text style={styles.skipText}>Skip</Text>
               </TouchableOpacity>
            </View>
          )}
        </Formik>
         </View>
      </View>
      <View style={{ width, height}}>
         <TradingPlan />
      </View>
      <View style={{ width, height}}>
        <TradingRisk />
      </View>
       <View style={{ width, height}}>
          <ExitScreen  />
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
   },
   tradingText: {
   color:'#D9DDE3',
   fontSize: 20,
   },
   bottomContent: {
    marginTop: 150,
    marginLeft: 20
  },
  bottomText: {
    color: '#ABABAB',
    marginTop: 10
  },
  labelText: {
    color: '#D9DDE3',
    marginTop: 10,
 },
 input: {
    height: verticalScale(48),
    backgroundColor: '#202328',
    marginVertical: 10,
    paddingHorizontal: 10,
    width: scale(280),
    borderRadius: 8,
    color: '#D9DDE3', 
    borderWidth: 1,
    borderColor: '#D9DDE3'
 },
 passwordInputField: {
  flexDirection: 'row',
   width: scale(280),
   height: verticalScale(48),
   backgroundColor: '#202328',
   marginVertical: 10,
   paddingHorizontal: 10,
   borderRadius: 8,
   color: '#D9DDE3', 
   borderWidth: 1,
   borderColor: '#D9DDE3',
   alignItems: 'center'
},
 errorText: {
    color: 'red'
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
    width: scale(280),
    height: verticalScale(48),
    backgroundColor: '#B89F1B',
    borderRadius: 8,
    padding: 15,
    marginTop: 5
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
  skipText: {
   color: '#B89F1B',
   fontSize: 20,
   marginTop: 10
  },
   paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#B89F1B',
    marginLeft: 10,
  }
})