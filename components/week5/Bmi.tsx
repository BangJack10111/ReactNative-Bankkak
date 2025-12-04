import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {

  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [bmiText, setBmiText] = useState("");

  const onPressButton = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    let output = w / (((h / 100) * h) / 100);
    let bmiValue = output.toFixed(2);

    setBmi(bmiValue);

    // ➤ คำนวณช่วงของ BMI
    let text = "";
    if (output < 18.5) text = "Underweight";
    else if (output < 25) text = "Normal";
    else if (output < 30) text = "Overweight";
    else if (output < 35) text = "Obese";
    else text = "Extremely Obese";

    setBmiText(text);
  };

  return (
    <View>
      {/* Weight */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          marginVertical: 10,
          borderRadius: 10,
          height: 150,
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          value={weight}
          onChangeText={(newWeight) => setWeight(newWeight)}
        />
      </View>

      {/* Height */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          marginVertical: 10,
          borderRadius: 10,
          height: 150,
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          value={height}
          onChangeText={(newHeight) => setHeight(newHeight)}
        />
      </View>

      {/* ผลลัพธ์ BMI */}
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            marginRight: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>{bmi}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>{bmiText}</Text>
        </View>
      </View>

      {/* ปุ่มคำนวณ */}
      <TouchableOpacity onPress={onPressButton}>
        <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
          <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
