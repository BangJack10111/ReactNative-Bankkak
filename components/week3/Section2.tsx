import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function Section2() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: '#a8b3b1ff',
          height: 150,
          width: 370,
          borderRadius: 20,
          marginTop: -50,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10
        }}
      >
        {/* ข้อความ Hilton San Francisco */}
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Hilton San Francisco
        </Text>

        {/* ดาว 5 ดวง */}
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <FontAwesome name="star" size={20} color="#ffd700" />
          <FontAwesome name="star" size={20} color="#ffd700" />
          <FontAwesome name="star" size={20} color="#ffd700" />
          <FontAwesome name="star" size={20} color="#ffd700" />
          <FontAwesome name="star" size={20} color="#ffd700" />
        </View>

        {/* ข้อความอธิบายด้านล่างดาว */}
        <Text
          style={{
            fontSize: 12,
            color: '#fff',
            textAlign: 'center',
            marginTop: 5
          }}
        >
          Facilities provided may range from a modest quality mattress in a small
          room to large suites
        </Text>
      </View>
    </View>
  );
}
