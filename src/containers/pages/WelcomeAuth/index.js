import React from 'react';
import { View, Text, Image } from 'react-native';
import { welcomeAuth } from '../../../assets';
import { colors } from '../../../utils';
import ActionButton from './ActionButton';



const WelcomeAuth = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, flex: 1}}>
            <Image source={welcomeAuth} style={{width: 284, height: 190, marginBottom: 20}} />
            <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.textDefault, marginBottom: 40}}>Selamat Datang di Ojek Pengkolan</Text>
            <ActionButton desc="Silahkan Masuk, jika anda sudah memiliki akun" titleBtn="Masuk" onPress={() => handleGoTo('Login')} />
            <ActionButton desc="atau silahkan Daftar jika anda belum memiliki akun" titleBtn="Daftar" onPress={() => handleGoTo('Register')} />
        </View>
    )
}

export default WelcomeAuth;