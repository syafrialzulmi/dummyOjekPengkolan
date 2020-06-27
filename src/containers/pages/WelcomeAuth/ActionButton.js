import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../../utils';
import { Button } from '../../../component';

const ActionButton = ({desc,titleBtn}) => {
    return (
        <View style={{marginBottom: 32, width: 250}}>
            <Text style={{fontSize: 14, color: colors.textDefault, textAlign: 'center', marginBottom: 14}}>{desc}</Text>
            <Button titleBtn={titleBtn} />
        </View>
    )
}

export default ActionButton;