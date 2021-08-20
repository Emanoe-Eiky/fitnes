import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { DataProvider } from './hooks/data';

import Routes from './routes';

// import {container} from './styles';
const Main: React.FC = () =>{
    return (
        <DataProvider>
            <StatusBar style="light" />
            <Routes/>
        </DataProvider>
    );
}

export default Main;