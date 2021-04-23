import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginServices = {
  studentLogin: async function studentLogin(sid, pass, grade, callback, err) {
    // 'Authorization':'Bearer'
    try {
      await fetch('http://192.168.1.100:8085/api/v1/stdlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          stdId: sid,
          passwd: pass,
          stdGrade: grade,
        }),
      }).then(resp => {
        resp.json().then(async data => {
          if (data.data != null) {
            await AsyncStorage.setItem('@api_token', data.data);
          }
          return callback(data);
        });
      });
    } catch (err) {
      return err(err);
    }
  },
};

export default LoginServices;
