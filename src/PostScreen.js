import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PostScreen() {
  return (
    <View>
        <View style={{position:'absolute',
        backgroundColor:'#fff',
        width:'100%',
        zIndex:999,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
        }}>
            <Text style={{fontWeight:'600',color:'#000',fontSize:20,marginLeft:20}}>Post</Text>
        </View>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.postcard}>
            <TextInput 
            placeholder='Type your message'
            />
            <TouchableOpacity style={{backgroundColor:'#ccc',paddingVertical:5,marginVertical:5,alignItems:'center'}}>
                <Text style={{padding:5}}>ADD FILE</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.submitBox}>
                <Text style={[styles.text,{alignSelf:'center',color:'#fff'}]}> SUBMIT </Text>
                <MaterialCommunityIcons name="check" color={'#fff'} size={18} style={{alignSelf:'center'}} />
        </View>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:15,
    marginTop:50,
  },
  postcard:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#ccc',
  },
  text:{
      fontSize:16,
      fontWeight:'600'
  },
  submitBox:{
    padding:10,
    borderWidth:1,
    borderColor:'blue',
    backgroundColor:'blue',
    borderRadius:15,
    flexDirection:'row',
    marginTop:10,
    justifyContent:'center'
  }
});
