import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function Chart() {
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(34, 202, 236, ${opacity})`,
                strokeWidth: 2,
            },
        ],
        legend: ['Visitors'],
    };

    const pieData = [
        {
            name: 'Rent',
            population: 40,
            color: '#FF6384',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
        {
            name: 'Food',
            population: 30,
            color: '#36A2EB',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
        {
            name: 'Travel',
            population: 20,
            color: '#FFCE56',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
        {
            name: 'Other',
            population: 10,
            color: '#9CCC65',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
    ];

    const chartConfig = {
        backgroundGradientFrom: '#0f172a',
        backgroundGradientTo: '#0b1220',
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(200,200,200, ${opacity})`,
        propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#1f8ef1',
        },
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Monthly Overview</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Activity (Visitors)</Text>
                <LineChart
                    data={lineData}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                />
            </View>

            <View style={[styles.card, styles.pieCard]}>
                <Text style={styles.cardTitle}>Spending Breakdown</Text>
                <PieChart
                    data={pieData}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#071029',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#0b1624',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    pieCard: {
        alignItems: 'center',
    },
    cardTitle: {
        color: '#cbd5e1',
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '600',
    },
    chart: {
        borderRadius: 12,
    },
});
