import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Header() {
  return (
    <View>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
    </View>
  );
}
