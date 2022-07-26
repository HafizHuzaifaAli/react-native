import React from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function MHInput(props){
    const {label,color,backgroundColor,value,onChangeText,borderRadius,textSize,width,borderWidth,borderColor,borderBottomColor,borderBottomWidth,paddingLeft} = props;
    return(
        <TextInput value={value} style={{backgroundColor: backgroundColor,margin: 10,borderWidth: borderWidth,borderColor: borderColor,borderBottomColor: borderBottomColor,borderBottomWidth: borderBottomWidth,borderRadius: borderRadius,width: width,fontSize: textSize,paddingLeft: paddingLeft}} placeholderTextColor={color} placeholder={label} onChangeText={onChangeText} />
    )
}

