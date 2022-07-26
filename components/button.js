import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function MHButton(props){
    const {label,color,backgroundColor,onPress,borderRadius,onLongPress,textSize,width,padding,margin} = props;
    return(
        <TouchableOpacity style={{backgroundColor: backgroundColor,padding: padding,justifyContent: "center",borderRadius: borderRadius,margin: margin,width: width}} onPress={onPress} onLongPress={onLongPress}>
                <Text style={{color: color,textAlign: 'center',fontSize: textSize}}>{label}</Text>
        </TouchableOpacity>
    )
}

