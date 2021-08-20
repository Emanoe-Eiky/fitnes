import React, { Suspense } from "react";

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "../pages/Home";
import NewItem from "../pages/NewItem"

const Stack = createNativeStackNavigator();

const Routes:React.FC = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home" // seleciona pelo nome
                screenOptions={{
                    headerStyle:{
                        backgroundColor: "#1e3ba1",
                    },
                    headerTintColor: "#FFF",
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{headerShown: false}} 
                />
                <Stack.Screen 
                    name="NewItem" 
                    component={NewItem}
                    options={{title: "Novo Item"}}
                />
             
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes