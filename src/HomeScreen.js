import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
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
            <Text style={{fontWeight:'600',color:'#000',fontSize:20,marginLeft:20}}>Home</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      
        <>
      <View style={styles.postcard}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="account" color={'#000'} size={20} style={{padding:5,backgroundColor:'#ccc',borderRadius:100}} />
                <Text style={{alignSelf:'center',fontSize:16,fontWeight:'bold'}}> Staff1</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.text}>Java book edition 2</Text>
                <View style={{borderWidth:1,borderColor:'#ddd',padding:10,borderRadius:10,marginVertical:5}}>
                    <Text>Java-book.pdf</Text>
                </View>
            </View>
        </View>
        <View style={styles.commentBox}>
                <Text style={[styles.text,{alignSelf:'center'}]}> Add your comment </Text>
                <MaterialCommunityIcons name="comment-outline" color={'#000'} size={18} style={{alignSelf:'center'}} />
        </View>
        </>

        <>
      <View style={styles.postcard}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="account" color={'#000'} size={20} style={{padding:5,backgroundColor:'#ccc',borderRadius:100}} />
                <Text style={{alignSelf:'center',fontSize:16,fontWeight:'bold'}}> Staff2</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.text}>Unit 1 Syllabus</Text>
                <View style={{borderWidth:1,borderColor:'#ddd',padding:10,borderRadius:10,marginVertical:5}}>
                    <Text>UNIT-1-PDF.pdf</Text>
                </View>
            </View>
        </View>
        <View style={styles.commentBox}>
                <Text style={[styles.text,{alignSelf:'center'}]}> Add your comment </Text>
                <MaterialCommunityIcons name="comment-outline" color={'#000'} size={18} style={{alignSelf:'center'}} />
        </View>
        </>

        <>
      <View style={styles.postcard}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="account" color={'#000'} size={20} style={{padding:5,backgroundColor:'#ccc',borderRadius:100}} />
                <Text style={{alignSelf:'center',fontSize:16,fontWeight:'bold'}}> Staff3</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.text}>C Programming 1st Edition</Text>
                <View style={{borderWidth:1,borderColor:'#ddd',padding:10,borderRadius:10,marginVertical:5}}>
                    <Text>CBook.pdf</Text>
                </View>
            </View>
        </View>
        <View style={styles.commentBox}>
                <Text style={[styles.text,{alignSelf:'center'}]}> Add your comment </Text>
                <MaterialCommunityIcons name="comment-outline" color={'#000'} size={18} style={{alignSelf:'center'}} />
        </View>
        </>

        <>
      <View style={styles.postcard}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="account" color={'#000'} size={20} style={{padding:5,backgroundColor:'#ccc',borderRadius:100}} />
                <Text style={{alignSelf:'center',fontSize:16,fontWeight:'bold'}}> staff2</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.text}>Unit 1 Syllabus</Text>
            </View>
      </View>
      <View style={styles.commentBox}>
                <Text style={[styles.text,{alignSelf:'center'}]}> Add your comment </Text>
                <MaterialCommunityIcons name="comment-outline" color={'#000'} size={18} style={{alignSelf:'center'}} />
        </View>
        </>

        <>
      <View style={styles.postcard}>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="account" color={'#000'} size={20} style={{padding:5,backgroundColor:'#ccc',borderRadius:100}} />
                <Text style={{alignSelf:'center',fontSize:16,fontWeight:'bold'}}> Staff1</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.text}>Unit 1 Syllabus</Text>
            </View>
      </View>
      <View style={styles.commentBox}>
                <Text style={[styles.text,{alignSelf:'center'}]}> Add your comment </Text>
                <MaterialCommunityIcons name="comment-outline" color={'#000'} size={18} style={{alignSelf:'center'}} />
        </View>
        </>

        </ScrollView>
        <View style={{padding:40}}></View>
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
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderWidth:1,
    borderColor:'#ccc',
  },
  text:{
      fontSize:16,
      fontWeight:'600'
  },
  commentBox:{
    padding:10,
    borderWidth:1,
    borderColor:'#ccc',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    flexDirection:'row',
    marginBottom:10,
  }
});
