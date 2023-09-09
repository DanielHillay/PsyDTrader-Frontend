import  React, { useState }  from 'react';
import { View, Text, TextInput, TouchableOpacity,  StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import Lock from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';


export default function SignUpScreen() {
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
        initialValues={{ email: '', password:  '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
       {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.areaStyle}>
            <View style={styles.textContainter}>
            <Text style={styles.loginText}>
               Sign Up
            </Text>
            <View>
              <Text style={styles.labelText}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
               />
               <Text style={styles.labelText}>Email</Text>
               <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
               />
                {touched.email && errors.email && <Text style={styles.errorText}>Invalid Email</Text>}
                <Text style={styles.labelText}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your phone number"
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                   value={values.phoneNumber}
               />
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
            </View>
            <TouchableOpacity style={styles.submitBtn}>
                 <Text style={styles.submitButtonText}>Create account</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>
                  Already have an account? {' '}
                  <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                     <Text style={styles.signUpLink}>Sign In</Text>
                  </TouchableOpacity>
               </Text>
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
      marginBottom: 17,
      borderWidth: 1,
      borderColor: '#D9DDE3'
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
});