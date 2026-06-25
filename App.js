import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Open Brain Mobile</Text>
      <Text style={styles.subtitle}>Expo + React Native - live test build on afatah-0002</Text>
      <Pressable style={styles.button} onPress={() => setCount(c => c + 1)}>
        <Text style={styles.buttonText}>Tapped {count} times</Text>
      </Pressable>
      <Text style={styles.hint}>Served via cloudflared - open me on your phone</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#0b1020',alignItems:'center',justifyContent:'center',padding:24},
  title:{fontSize:32,fontWeight:'800',color:'#ffffff',marginBottom:10},
  subtitle:{fontSize:15,color:'#93a4c3',marginBottom:34,textAlign:'center'},
  button:{backgroundColor:'#5b8cff',paddingVertical:16,paddingHorizontal:34,borderRadius:14},
  buttonText:{color:'#ffffff',fontSize:18,fontWeight:'700'},
  hint:{position:'absolute',bottom:42,color:'#5b6b8c',fontSize:12},
});
