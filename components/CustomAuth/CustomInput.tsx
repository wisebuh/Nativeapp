import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import useTheme from '@/hooks/useTheme';

interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
keyboardType?: 'default' | 'email-address' | 'numeric' | 
  'phone-pad';
  label?:string;
  style?: object;
}

export default function CustomInput({
     placeholder, value, onChangeText, 
     secureTextEntry, style,
    keyboardType, label}: CustomInputProps) {
        const [isFocused, setIsFocus]  = useState(false);
        
        const {colors} = useTheme();
  return (
    <View style={{alignItems:"flex-start", gap:5, justifyContent:"center", padding:10,width:"100%"}}>
        <Text>{label}</Text>
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="gray"
        onFocus={()=>setIsFocus(true)}
        onBlur={()=>setIsFocus(false)}
        keyboardType={keyboardType}
        style={{borderColor:isFocused? colors.text:colors.interface,
           borderWidth:1,
            borderStyle:"solid", 
           width:"100%", borderRadius:10, padding:10,
           ...style}}
           underlineColorAndroid="transparent"
      />
    </View>
  )
}