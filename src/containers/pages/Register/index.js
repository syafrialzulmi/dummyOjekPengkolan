import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Button } from '../../../component/atoms';
import { colors } from '../../../utils';
import { RegisterImage, IconBack } from '../../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

const Register = () => {
    // {} => Object
    // [] => Array
    // '' => String
    // 1 => Number
    const RegisterReducer = useSelector(state => state.RegisterReducer);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('global: ', RegisterReducer)
    // }, [RegisterReducer])

    // const [form, setForm] = useState({
    //     fullName: '',
    //     email: '',
    //     password: ''
    // });

    const sendData = () => {
        console.log('data yg dikirim', RegisterReducer.form)

    }

    const onInputChange = (value, input) => {
        // setForm({
        //     ...form,
        //     [input]: value,
        // })
        dispatch({type: 'SET_FORM', inputType: input, inputValue: value})
    }

    return (
        <View style={{padding: 20, backgroundColor: colors.background, flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <IconBack width={40} height={40} />
                <Image source={RegisterImage} style={{width: 284, height: 190, marginBottom: 20}} />
    <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.textDefault, marginTop: 15, maxWidth: 250}}>Mohon mengisi beberapa data untuk proses daftar anda {RegisterReducer.title}</Text>
                <View style={styles.space(30)} />
                <Input placeholder="Nama Lengkap" value={RegisterReducer.form.fullName} onChangeText={value => onInputChange(value, 'fullName')} />
                <View style={styles.space(20)} />
                <Input placeholder="Email" value={RegisterReducer.form.email} onChangeText={value => onInputChange(value, 'email')}/>
                <View style={styles.space(20)} />
                <Input placeholder="Password" value={RegisterReducer.form.password} onChangeText={value => onInputChange(value, 'password')} secureTextEntry={true} />
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