import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';


export default function TestComponent() {
  return (
    <ScrollView  style={{ margin : 20 }} >

<TextInput
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={30}
  multiline={false}
  placeholder="Please enter your email"
  returnKeyType="next"
  onChangeText={(text)=>{}}
  defaultValue="Default text"
/>

<Button
  title="Press me"
  onPress={() => Alert.alert("Simple Button pressed")}
  color="#0aaa01ff"
/>

<Text> Hello World </Text>

<Image source={{ uri : 'https://scontent.fbkk4-1.fna.fbcdn.net/v/t39.30808-1/208105558_808562929844687_6680989131753740293_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG567IkqFeWrY4pdeRkotLpG2YO-D4xbH0bZg74PjFsfQS4AzIbYKa6s72i1QzzVHNrJit-nXwh5j-Q_1rCbejr&_nc_ohc=QAkN6YVmLXYQ7kNvwFfwrQz&_nc_oc=Adkk7bAbwtWTRG08e1i0p2Y-bEB2wwTYo58ytQGdzA99g5EL9-FEFzDxcCdnkUQTkzs&_nc_zt=24&_nc_ht=scontent.fbkk4-1.fna&_nc_gid=V42FzmNpyaJbzeySwmJ7pQ&oh=00_AfgKrs_dnrOiw0uplrwWNnDjgpEKylGDdNVMldGvuI9sxg&oe=692DC096' }} style={{ width:50, height:50 }} />

<View style={{ flexDirection: 'column' }}>
    {/* Fixed Size */}
    <View style={{ flexDirection: 'row' , justifyContent : 'space-between' , marginTop : 50}}>
        <Image style={{ width: 100, height: 50 }} source={{ uri : 'https://scontent.fbkk4-1.fna.fbcdn.net/v/t39.30808-1/208105558_808562929844687_6680989131753740293_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG567IkqFeWrY4pdeRkotLpG2YO-D4xbH0bZg74PjFsfQS4AzIbYKa6s72i1QzzVHNrJit-nXwh5j-Q_1rCbejr&_nc_ohc=QAkN6YVmLXYQ7kNvwFfwrQz&_nc_oc=Adkk7bAbwtWTRG08e1i0p2Y-bEB2wwTYo58ytQGdzA99g5EL9-FEFzDxcCdnkUQTkzs&_nc_zt=24&_nc_ht=scontent.fbkk4-1.fna&_nc_gid=V42FzmNpyaJbzeySwmJ7pQ&oh=00_AfgKrs_dnrOiw0uplrwWNnDjgpEKylGDdNVMldGvuI9sxg&oe=692DC096' }} />
        <Image style={{ width: 100, height: 100}} source={{ uri : 'https://scontent.fbkk4-1.fna.fbcdn.net/v/t39.30808-1/208105558_808562929844687_6680989131753740293_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG567IkqFeWrY4pdeRkotLpG2YO-D4xbH0bZg74PjFsfQS4AzIbYKa6s72i1QzzVHNrJit-nXwh5j-Q_1rCbejr&_nc_ohc=QAkN6YVmLXYQ7kNvwFfwrQz&_nc_oc=Adkk7bAbwtWTRG08e1i0p2Y-bEB2wwTYo58ytQGdzA99g5EL9-FEFzDxcCdnkUQTkzs&_nc_zt=24&_nc_ht=scontent.fbkk4-1.fna&_nc_gid=V42FzmNpyaJbzeySwmJ7pQ&oh=00_AfgKrs_dnrOiw0uplrwWNnDjgpEKylGDdNVMldGvuI9sxg&oe=692DC096' }} />
        <Image style={{ width: 100, height: 100, borderRadius: 100/2 }} source={{ uri : 'https://scontent.fbkk4-1.fna.fbcdn.net/v/t39.30808-1/208105558_808562929844687_6680989131753740293_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG567IkqFeWrY4pdeRkotLpG2YO-D4xbH0bZg74PjFsfQS4AzIbYKa6s72i1QzzVHNrJit-nXwh5j-Q_1rCbejr&_nc_ohc=QAkN6YVmLXYQ7kNvwFfwrQz&_nc_oc=Adkk7bAbwtWTRG08e1i0p2Y-bEB2wwTYo58ytQGdzA99g5EL9-FEFzDxcCdnkUQTkzs&_nc_zt=24&_nc_ht=scontent.fbkk4-1.fna&_nc_gid=V42FzmNpyaJbzeySwmJ7pQ&oh=00_AfgKrs_dnrOiw0uplrwWNnDjgpEKylGDdNVMldGvuI9sxg&oe=692DC096' }} />
    </View>    
</View>



<View style={{ flexDirection: 'column' }}>
    
    <View style={{ flexDirection: 'row' , marginTop : 20 }}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri : 'https://scontent.fbkk4-2.fna.fbcdn.net/v/t39.30808-6/590888491_1800346697332967_3544483348350823395_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHEIgwQT3MdUgaGUoriuhWLa7cUUrrINElrtxRSusg0SWk0Vo0NofaFkgXflf3eOSh3oyjj9DH4-K98axOTa2S-&_nc_ohc=pvZBAgaIRCAQ7kNvwFKHcfu&_nc_oc=AdmPYlQyFg9Q28wbhNZXDs0Mm2zWUkFavukYz5OYDVCN6_b7cYE0fM-ySpRsktEkdgo&_nc_zt=23&_nc_ht=scontent.fbkk4-2.fna&_nc_gid=ykzOTg4N6DZH4Vv2hZ8yKw&oh=00_AfjeSyjqv_FZgKYGkAPcOaIaSziI2caaYN86TLzUhaflJg&oe=692DD228' }} />
    </View>

    <View style={{ flexDirection: 'row' , marginTop : 20 }}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri : 'https://scontent.fbkk4-2.fna.fbcdn.net/v/t39.30808-6/590888491_1800346697332967_3544483348350823395_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHEIgwQT3MdUgaGUoriuhWLa7cUUrrINElrtxRSusg0SWk0Vo0NofaFkgXflf3eOSh3oyjj9DH4-K98axOTa2S-&_nc_ohc=pvZBAgaIRCAQ7kNvwFKHcfu&_nc_oc=AdmPYlQyFg9Q28wbhNZXDs0Mm2zWUkFavukYz5OYDVCN6_b7cYE0fM-ySpRsktEkdgo&_nc_zt=23&_nc_ht=scontent.fbkk4-2.fna&_nc_gid=ykzOTg4N6DZH4Vv2hZ8yKw&oh=00_AfjeSyjqv_FZgKYGkAPcOaIaSziI2caaYN86TLzUhaflJg&oe=692DD228' }} />
    </View>

    <View style={{ flexDirection: 'row' , marginTop : 20, backgroundColor : 'gray' }}>
        <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri : 'https://scontent.fbkk4-2.fna.fbcdn.net/v/t39.30808-6/590888491_1800346697332967_3544483348350823395_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHEIgwQT3MdUgaGUoriuhWLa7cUUrrINElrtxRSusg0SWk0Vo0NofaFkgXflf3eOSh3oyjj9DH4-K98axOTa2S-&_nc_ohc=pvZBAgaIRCAQ7kNvwFKHcfu&_nc_oc=AdmPYlQyFg9Q28wbhNZXDs0Mm2zWUkFavukYz5OYDVCN6_b7cYE0fM-ySpRsktEkdgo&_nc_zt=23&_nc_ht=scontent.fbkk4-2.fna&_nc_gid=ykzOTg4N6DZH4Vv2hZ8yKw&oh=00_AfjeSyjqv_FZgKYGkAPcOaIaSziI2caaYN86TLzUhaflJg&oe=692DD228' }} />
    </View>

</View>


<View style={{ height: 200, width: 200, borderRadius: 200/2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 30, color : "white" }}>ผม56</Text>
</View>







    </ScrollView>
  );
}
