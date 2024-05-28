import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Asiapay from 'asiapay';

export default function App() {
  React.useEffect(() => {
    Asiapay.setup('SANDBOX', '88149885');
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Asiapay.alipayHK('88146271', '1', 'HKD', Date.now().toString(), 'Test')
          .then(s => {
            console.log(s);
          })
          .catch(({code, message}) => {
            console.log(code, " " + message)
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
          })
          .catch(({code, message}) => {
            console.log(code, " " + message)
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
          })
          .catch(({code, message}) => {
            console.log(code, " " + message)
          });      
        }}
        style={styles.button}>
        <Text style={styles.buttonTxt}>
        Octopus
        </Text>            
      </TouchableOpacity>
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
