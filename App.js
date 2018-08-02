
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {TabNavigator} from 'react-navigation';


import Login from './assets/pages/Login';
import User  from './assets/pages/User';
import Home  from './assets/pages/Home';
import Lista from './assets/pages/Lista';

const Navegador = TabNavigator({

Home:{screen:Home},
Lista:{screen:Lista},
Login:{screen:Login},
User:{screen:User}


})
export default Navegador;
console.disableYellowBox = true;
