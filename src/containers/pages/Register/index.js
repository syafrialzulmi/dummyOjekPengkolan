import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Button } from '../../../component/atoms';
import { colors } from '../../../utils';
import { RegisterImage, IconBack } from '../../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const Register = () => {
    // {} => Object
    // [] => Array
    // '' => String
    // 1 => Number
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const sendData = () => {
        console.log('data yg dikirim', form)

    }

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        })
    }

    return (
        <View style={{padding: 20, backgroundColor: colors.background, flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <IconBack width={40} height={40} />
                <Image source={RegisterImage} style={{width: 284, height: 190, marginBottom: 20}} />
                <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.textDefault, marginTop: 15, maxWidth: 250}}>Mohon mengisi beberapa data untuk proses daftar anda</Text>
                <View style={styles.space(30)} />
                <Input placeholder="Nama Lengkap" value={form.fullName} onChangeText={value => onInputChange(value, 'fullName')} />
                <View style={styles.space(20)} />
                <Input placeholder="Email" value={form.email} onChangeText={value => onInputChange(value, 'email')}/>
                <View style={styles.space(20)} />
                <Input placeholder="Password" value={form.password} onChangeText={value => onInputChange(value, 'password')} secureTextEntry={true} />
                <View style={styles.space(30)} />
                <Button titleBtn="Daftar" onPress={sendData}/>
            </ScrollView>
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