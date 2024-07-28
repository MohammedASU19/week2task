import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, Country } from 'react-native-country-picker-modal';

const LoginScreen: React.FC = () => {
  const [countryCode, setCountryCode] = React.useState<CountryCode>('US');
  const [country, setCountry] = React.useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSendOTP = () => {
    Alert.alert('Button Pressed', 'Send OTP button pressed!');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721' }}
        style={styles.icon}
      />
      <Text style={styles.title}>Login to WhatsApp</Text>
      <View style={styles.phoneInputContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCountryNameButton={false}
          withCallingCode
          withEmoji
          onSelect={(country) => {
            setCountryCode(country.cca2);
            setCountry(country);
          }}
          containerButtonStyle={styles.countryPicker}
        />
        <Text style={styles.countryCodeText}>
          {country ? `+${country.callingCode[0]}` : '+1'}
        </Text>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>from</Text>
      <Text style={styles.footerTextBold}>FACEBOOK</Text>
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
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  countryPicker: {
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 16,
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3CC34E',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerText: {
    color: 'gray',
    fontSize: 12,
  },
  footerTextBold: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
