import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { featured } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../firebase';
import { signUpEmailPass } from '../firebase/AuthModel'; 
//

export default function RegisterScreen() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')
    // const [image, setImage] = useState('')
    const navigation = useNavigation();

    const [profile,setProfile] = useState({'email':'','username':'','password':'','photoURL':''})

    const setEmail = (text) => {
        setProfile(oldValue => ({
          ...oldValue,
          email:text
        }))
      }
    
      const setUsername = (text) => {
        setProfile(oldValue => ({
          ...oldValue,
          username:text
        }))
      }
    
      const setPassword = (text) => {
        setProfile(oldValue => ({
          ...oldValue,
          password:text
        }))
      }
    
      const setPhotoURL = (text) => {
        setProfile(oldValue => ({
          ...oldValue,
          photoURL:text
        }))
      }

      const unsuccess = (msg) => {
        console.log(msg)
        Alert.alert(msg)
      }
    
      const allSuccess = (doc) => {
        Alert.alert(`${doc.email} has been added to system`)
        navigation.goBack()
      }
    
      const onRegisterPress = () => {
        console.log(`profile ${profile.email}`)
        //dispatch(addProfile(profile))
        //allSuccess(profile)
        signUpEmailPass(profile,allSuccess,unsuccess)
      }
    
      const onCancelPress = () => {
        navigation.goBack()
      }
    
    // const regisrter = () => {
    //     auth.createUserWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         var user = userCredential.user;
    //         user.updateProfile({
    //             displayName: name,
    //             photoURL: image? image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png.jpg"
    //         })
    //         // ...
    //       })
    //       .catch((error) => {
    //         var errorMessage = error.message;
    //         alert(errorMessage)
    //         // ..
    //       });
    // }

    // const regisrter = () =>{
        
    //     auth.createUserWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //       user.updateProfile({
    //         displayName: name,
    //         photoURL: image? image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png.jpg"
    //     }).then(function() {
    //         //uu sus
    //     })
    //     .catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       // ..
    //     });
    // }


    return (
        <SafeAreaView className="flex-1 ">
            <View className="item-center justify-center absolute px-4 pb-4 w-full h-full space-x-2 space-y-2 bg-white">
                
            <TouchableOpacity
              onPress={()=> navigation.goBack()}
              className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                <Icon.ArrowLeft strokeWidth={3} stroke={'orange'} />
             </TouchableOpacity>
                <View className="flex-2 bg-white justify-center items-center">
                    <Image source={require('../image/wait.png')} className=" h-28 w-28 p-3" />
                </View>
                <View className="flex-row flex-2 item-center p-1 rounded-md bg-yellow-200">
                    <Icon.User height="30" width="22" stroke="darkorange" className="pl-1.5" />
                    <TextInput placeholder='Enter name' className="flex-1 ml-2 " value={profile.username} onChangeText={(text) => setUsername(text)}/>
                </View>
                <View className="flex-row flex-2 item-center p-1 rounded-md bg-yellow-200">
                    <Icon.Mail height="30" width="22" stroke="darkorange" className="pl-1.5" />
                    <TextInput placeholder='Enter email' className="flex-1 ml-2 " value={profile.email} onChangeText={(text) => setEmail(text)}/>
                </View>
                <View className="flex-row flex-2 item-center p-1 rounded-md bg-yellow-200">
                    <Icon.Key height="30" width="22" stroke="darkorange" className="pl-1.5" />
                    <TextInput placeholder='Enter password' className="flex-1 ml-2 " value={profile.password} onChangeText={(text) => setPassword(text)}/>
                </View>
                <View className="flex-row flex-2 item-center p-1 rounded-md bg-yellow-200">
                    <Icon.File height="30" width="22" stroke="darkorange" className="pl-1.5" />
                    <TextInput placeholder='Enter pic' className="flex-1 ml-2 " value={profile.photoURL} onChangeText={(text) => setPhotoURL(text)}/>
                </View>
                
                <TouchableOpacity className="bg-orange-400 p-3 rounded-full"
                    onPress={onRegisterPress}
                 >
                    <Text className="text-white text-center font-bold text-lg">Register</Text>
                </TouchableOpacity>
                
                
            </View>
        </SafeAreaView>
    )
}