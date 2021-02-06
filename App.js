import React, {useState, useEffect} from 'react';

import { 
  StyleSheet, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text,
  Animated
} from 'react-native';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));

  useEffect(()=>{
    Animated.spring(offset.y,{
      toValue: 0,
      speed: 4,
      bounciness: 20
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.viewLogo}> 
        <Animated.Image
          source={require('./assets/img/logo.png')} style={styles.img}
        />
      </View>

      <Animated.View style={[styles.viewInput,
        {
          transform:[
            { translateY: offset.y}
          ]
        }
      ]}>
        
        <TextInput
          style={styles.button}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=> {}}
        />

         <TextInput
          style={styles.button}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Criar Conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  viewLogo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 200,
    height: 200
  },
  viewInput:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 30
  },
  button:{
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 7,
    width:'90%',
    color: '#222',
    fontSize: 17,
    padding: 10
  },
  btnSubmit:{
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    width:'50%',
    height: 40,
    borderRadius: 7,
    marginBottom: 10,
  },
  btnText:{
    color: '#FFF',
  }
  
});
