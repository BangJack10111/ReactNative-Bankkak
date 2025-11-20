import React from 'react';
import { View } from 'react-native';

export default function Ex05() {
  return (
    <View style={{
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'center',   
      alignItems: 'center'        
    }}>
      <View style={{
        width: 100, height: 100, 
        backgroundColor: 'powderblue'}} 
      />

      <View style={{
        width: 100, height: 100, 
        backgroundColor: 'skyblue'}} 
      />

      <View style={{
        width: 100, height: 100, 
        backgroundColor: '#9013FE'}} 
      />
    </View>
  );
}
