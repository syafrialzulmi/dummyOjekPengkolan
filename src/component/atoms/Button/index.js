import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { colors } from '../../../utils';

const Button = ({titleBtn}) => {
    return (
        <TouchableOpacity style={{backgroundColor: colors.default, borderRadius: 30, paddingVertical: 16}}>
            <Text style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: 18, color: '#ffffff', textAlign: 'center'}}>{titleBtn}</Text>
        </TouchableOpacity>
    )
}

export default Button;