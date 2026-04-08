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
  label:string;
}

export default function CustomInput({
     placeholder, value, onChangeText, 
     secureTextEntry,
    keyboardType, label}: CustomInputProps) {
        const [isFocused, setIsFocus]  = useState(false);
        const {colors} = useTheme();
  return (
    <View>
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
        style={{borderColor:isFocused? colors.primary:colors.interface}}
      />
    </View>
  )
}