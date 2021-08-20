import styled from "styled-components/native"
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({

})


//funcionando
export const Container = styled.View`
    flex: 1;
    background-color: #1E3BA1;
    padding-top: 32px;

    position: relative;
`
//funcionando
export const HeaderContainer = styled.View`
    flex: 1;
    max-height: 240px;
    background-color: #1E3BA1;
    align-content: center;
`
//funcionando
export const HeaderTitle = styled.Text`
    font-size: 18px;
    line-height: 17px;
    color: #FFF;
    text-align: center; 
    margin-top: 20px;
`
//funcionando
export const HeaderContainerHighlight = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    
`

export const HeaderTextCounterHighlight = styled.Text`
    font-size: 50px;
    line-height: 50px;
    color: #FFF; 
` 

export const HeaderTextHighlight = styled.Text`
    font-size: 18px;
    line-height: 21px;
    color: #FFF;

`
//funcionando
export const BodyContainer = styled.View` 
    flex: 2;
    background-color: #FFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding: 10px 20px;
`