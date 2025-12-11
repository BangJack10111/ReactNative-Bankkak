import React from "react";
import { FlatList, Image, Text, View } from "react-native";

// ข้อมูล Static ที่ใช้ทดสอบ
const EVENTS_DATA = [
  {
    id: "1",
    title: "Truckfighters: Performing",
    uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg",
    month: "DEC",
    date: "30",
    datetime: "Thu, DEC 30, 09.00 am",
    place: "London",
  },
  {
    id: "2",
    title: "Paris Motor Show",
    uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg",
    month: "DEC",
    date: "31",
    datetime: "Thu, DEC 30, 09.00 am",
    place: "Paris",
  },
  {
    id: "3",
    title: "Bearded Theory Spring",
    uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg",
    month: "JAN",
    date: "01",
    datetime: "Thu, JAN 01, 09.00 am",
    place: "Canada",
  },
  {
    id: "4",
    title: "BBC Music Introducing",
    uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg",
    month: "JAN",
    date: "11",
    datetime: "Thu, JAN 11, 09.00 am",
    place: "USA",
  },
  {
    id: "5",
    title: "Start-Up Meeting 2022",
    uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg",
    month: "JAN",
    date: "21",
    datetime: "Thu, JAN 21, 09.00 am",
    place: "Thailand",
  },
];

export default function Event(props: any) {
  const renderItem = ({ item }: { item: (typeof EVENTS_DATA)[0] }) => {
    return (
      // Item Container
      <View style={{ marginRight: 15, width: 280 }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            // เพิ่มเงา/ขอบ
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // สามารถเพิ่ม border ได้ตามต้องการ (อ้างอิงจากโครงสร้างสไลด์)
            // borderWidth: 1,
            // borderColor: '#E0E0E0'
          }}
        >
          {/* ส่วนของรูปภาพ */}
          <Image
            source={{ uri: item.uri }}
            style={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />

          {/* ส่วนรายละเอียดอีเวนต์: แนวนอน (row) */}
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              // อ้างอิงจากโครงสร้างสไลด์
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            // โค้ดส่วน Date Box ที่คุณส่งมา
            <View
              style={{
                padding: 8,
                backgroundColor: "rgba(255, 255, 255, 1)", // พื้นหลังสีส้มเข้ม
                borderRadius: 5,
                alignItems: "center",
                marginRight: 10,
              }}
            >
              {/* เดือน: สีขาว */}
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "green" }}
              >
                {item.month}
              </Text>
              {/* วันที่: สีขาว */}
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
              >
                {item.date}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 12, color: "gray", marginTop: 2 }}>
                {item.datetime}
              </Text>
              <Text style={{ fontSize: 12, color: "green", marginTop: 2 }}>
                {item.place}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={props.style}>
      {/* หัวข้อ Section */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Upcoming Events</Text>
      <Text style={{ color: "grey", marginBottom: 15 }}>
        What's the Worst That Could Happend
      </Text>

      {/* FlatList */}
      <FlatList
        horizontal={true}
        data={EVENTS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
}
