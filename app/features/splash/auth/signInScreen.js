import React, { useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lock from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function SignInScreen() {
   const [showPassword, setShowPassword] = useState(false);
   const navigation = useNavigation();

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
     return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
       {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
         <View style={styles.areaStyle}>
         <View style={styles.textContainter}>
            <Text style={styles.loginText}>
               Sign In
            </Text>
            <View>
               <Text style={styles.labelText}>Email</Text>
               <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
               />
                {touched.email && errors.email && <Text style={styles.errorText}>Invalid Email</Text>}
                <Text style={styles.labelText}>Password</Text>
                <View>
                 <TextInput 
                   style={styles.passwordInputField}
                   placeholder="Enter your password"
                   onChangeText={handleChange('password')}
                   onBlur={handleBlur('password')}
                   secureTextEntry={!showPassword}
                   value={values.password}
                />
                <TouchableOpacity 
                   style={styles.passwordVisibilityToggle} 
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
               <TouchableOpacity style={styles.forgotPasswordButton}>
                      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>  
               </TouchableOpacity>

              <TouchableOpacity
                 style={styles.submitBtn}
                 onPress={() => navigation.navigate('tradingRegistration')}
               >
                 <Text style={styles.submitButtonText}>Login</Text>
               </TouchableOpacity>
               <Text style={styles.signUpText}>
                  If you don't have an account, {' '}
                  <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                     <Text style={styles.signUpLink}>Sign Up</Text>
                  </TouchableOpacity>
               </Text>
            </View>
         </View>
      </View>
       )}
      </Formik>
     );
}

const styles = StyleSheet.create({
   areaStyle: {
      flex: 1,
      backgroundColor: '#101213',
      justifyContent: 'flex-start',
   },
   textContainter: {
     marginTop: 50,
     marginLeft: 20
   },
   loginText: {
      color: '#D9DDE3',
      fontSize: 20,
      fontWeight: 800,
   },
   labelText: {
      color: '#D9DDE3',
      marginTop: 25,
      marginBottom: 13,
   },
   input: {
      width: 380,
      height: 56,
      backgroundColor: '#202328',
      marginVertical: 10,
      color: '#EFF0F6',
      paddingHorizontal: 10,
      borderRadius: 8,
      marginBottom: 40,
      borderWidth: 1,
      borderColor: '#B89F1B'
   },
   passwordInput: {
      bottom: 30,
      right: 30,
      position: 'absolute'
   },
   passwordInputField: {
      width: 380,
      height: 56,
      backgroundColor: '#202328',
      marginVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 8,
      color: '#D9DDE3', 
      borderWidth: 1,
      borderColor: '#D9DDE3'
   },
   forgotPasswordButton: {
      alignSelf: 'flex-end',
      marginRight: 20
    },
    forgotPasswordText: {
      color: '#B89F1B',
      fontSize: 14
    },
    submitBtn: {
      width: 380,
      height: 56,
      backgroundColor: '#B89F1B',
      borderRadius: 8,
      padding: 15,
      marginTop: 30
    },
    submitButtonText: {
      color: '#101213',
      fontSize: 20,
      textAlign: 'center'
    },
    errorText: {
      color: 'red'
    },
    signUpText: {
      color: '#D9DDE3',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 30
    },
    signUpLink: {
      color: '#B89F1B'
    }
})