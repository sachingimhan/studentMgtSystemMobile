import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserData = async callback => {
  try {
    let authToken = await AsyncStorage.getItem('@api_token');
    fetch('http://192.168.1.100:8085/api/v1/getUserData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + authToken,
      },
    }).then(resp => {
      resp.json().then(resp => {
        return callback(resp.data);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export default getUserData;
