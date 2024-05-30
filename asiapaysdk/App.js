import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import Asiapay from 'asiapay';

export default function App() {
  React.useEffect(() => {
    Asiapay.setup('SANDBOX', '88149885');
  }, []);

  const showToast = (type, text1, text2) => {
    Toast.show({
      type,
      text1,
      text2
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Asiapay.alipayHK('88146271', '1', 'HKD', Date.now().toString(), 'Test')
          .then(s => {
            console.log(s);
            showToast('success', 'Success', 'Transaction completed successfully.');
          })
          .catch(({code, message}) => {
            showToast('error', `Error ${code}`, message);
          });      
        }}
        style={styles.button}>
        <Text style={styles.buttonTxt}>Alipay HK</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Asiapay.hostedcall('88146271', '1', 'HKD', Date.now().toString(), 'Test')  
          .then(s => {
            console.log(s);
            showToast('success', 'Success', 'Transaction completed successfully.');
          })
          .catch(({code, message}) => {
            showToast('error', `Error ${code}`, message);
          });      
        }}
        style={styles.button}>
        <Text style={styles.buttonTxt}>HostedCall</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Asiapay.octopus('88146271', '1', 'HKD', Date.now().toString())  
          .then(s => {
            console.log(s);
            showToast('success', 'Success', 'Transaction completed successfully.');
          })
          .catch(({code, message}) => {
            showToast('error', `Error ${code}`, message);
          });      
        }}
        style={styles.button}>
        <Text style={styles.buttonTxt}>Octopus</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: {
    width: '45%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonTxt: {
    color: 'white',
  },
});
