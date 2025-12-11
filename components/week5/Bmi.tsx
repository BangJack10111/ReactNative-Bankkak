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


    let text = "";
    if (output < 18.5) text = "เเห้ง";
    else if (output < 25) text = "ปกติ";
    else if (output < 30) text = "อ้วน";
    else if (output < 35) text = "อ้วนจัดๆ";
    else text = "ไขมันเดินดิน";

    setBmiText(text);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#E8F6EF", // เขียวอ่อนมาก
      }}
    >
      {/* Weight */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          marginVertical: 10,
          borderRadius: 15,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 22, color: "#1B5E20" }}>Weight (kg.)</Text>
        <TextInput
          style={{
            fontSize: 22,
            borderBottomWidth: 1,
            borderBottomColor: "#4CAF50",
            paddingVertical: 5,
          }}
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
          borderRadius: 15,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 22, color: "#1B5E20" }}>Height (cm.)</Text>
        <TextInput
          style={{
            fontSize: 22,
            borderBottomWidth: 1,
            borderBottomColor: "#4CAF50",
            paddingVertical: 5,
          }}
          keyboardType="numeric"
          value={height}
          onChangeText={(newHeight) => setHeight(newHeight)}
        />
      </View>

      {/* ค่าผลลัพธ์ */}
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            marginRight: 10,
            height: 120,
            borderRadius: 15,
            elevation: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 28, color: "#2E7D32" }}>{bmi}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            height: 120,
            borderRadius: 15,
            elevation: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "#388E3C" }}>{bmiText}</Text>
        </View>
      </View>

      {/* ปุ่มคำนวณ */}
      <TouchableOpacity onPress={onPressButton}>
        <View
          style={{
            padding: 20,
            backgroundColor: "#2E7D32",
            borderRadius: 50,
            marginTop: 10,
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
