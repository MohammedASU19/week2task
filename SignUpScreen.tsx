import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation/ParamList';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<SignUpScreenProp>();
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [dateText, setDateText] = React.useState("Pick Birthdate");

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setDateText(fDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleConfirm = () => {
    navigation.navigate('Chats');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up now!</Text>
      <Image
        source={{ uri: 'https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png' }}
        style={styles.avatarCircle}
      />
      <Text style={styles.hintText}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
      />
      <Text style={styles.hintText}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
      />
      <Text style={styles.hintText}>Birthdate</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.input}>
        <Text style={styles.dateButtonText}>{dateText}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.hintText}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={handleLogin}>
          Login here
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  hintText: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
    color: 'gray',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  dateButtonText: {
    color: 'gray',
  },
  button: {
    backgroundColor: '#3CC34E',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginText: {
    color: 'black',
  },
  loginLink: {
    color: 'blue',
  },
});

export default SignUpScreen;
