import { View, Text, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import useTheme from '@/hooks/useTheme';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface CustomButtonProps{
    onPress: ()=>void;
    title:string;
    leftIcon?: React.ComponentProps<typeof Ionicons>['name']; 
    isLoading?: boolean;
}

export default function CustomButton({onPress, title, leftIcon, isLoading=false}:CustomButtonProps) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading}>
      <View 
        style={{
          flexDirection:"row",
          padding:12,
          borderRadius:20, 
          width:Dimensions.get('screen').width/1.2, 
          backgroundColor:colors.interface,
          marginHorizontal:10, 
          justifyContent:"center",
          alignItems:"center",
          gap:8
        }}
      >

        {isLoading ? (
          <ActivityIndicator color={colors.primary} size="small" />
        ) : (
          <>
            {leftIcon && (
              <Ionicons name={leftIcon} size={20} color={colors.text} />
            )}
            <Text style={{color:colors.text, fontSize:18, fontWeight:"bold"}}>
              {title}
            </Text>
          </>
        )}

      </View>
    </TouchableOpacity>
  )
}