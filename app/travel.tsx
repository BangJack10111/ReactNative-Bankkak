import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '@/components/week3/Signup';
import Card from '@/components/week3/Card';
export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <Text>Text of Week 3 </Text>
            </View>
             <Signup />
<Card />
        </ScrollView>
    );
}
