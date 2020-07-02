import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { colors } from '../../../utils';

const Input = ({placeholder}) => {
    return (
        <View>
            <TextInput placeholderTextColor={colors.default} placeholder={placeholder} style={{borderWidth: 2, borderColor: colors.default, borderRadius: 25, paddingVertical: 12, paddingHorizontal: 15, fontSize: 14, color: colors.default}} />
        </View>
    )
}

export default Input;