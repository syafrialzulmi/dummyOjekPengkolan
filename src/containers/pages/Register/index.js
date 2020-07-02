import React from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Button } from '../../../component/atoms';
import { colors } from '../../../utils';
import { RegisterImage, IconBack } from '../../../assets';

const Register = () => {
    return (
        <View style={{padding: 20, backgroundColor: colors.background, flex: 1}}>
            <IconBack width={40} height={40} />
            <Image source={RegisterImage} style={{width: 284, height: 190, marginBottom: 20}} />
            <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.textDefault, marginTop: 15, maxWidth: 250}}>Mohon mengisi beberapa data untuk proses daftar anda</Text>
            <View style={styles.space(15)} />
            <Input placeholder="Nama Lengkap" />
            <View style={styles.space(15)} />
            <Input placeholder="Email" />
            <View style={styles.space(15)} />
            <Input placeholder="Password" />
            <View style={styles.space(20)} />
            <Button titleBtn="Daftar" onPress={() => alert('daftar')}/>
        </View>
    )
}

const styles = {
    space: value => {
        return {
            height: value,
        }
    }
}

export default Register;