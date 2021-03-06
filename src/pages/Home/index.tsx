import moment from "moment";
import React from "react";
import { FlatList, Text  } from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-elements/dist/buttons/FAB";
import {Feather} from '@expo/vector-icons';
import ItemList from "../../components/ItemList";

import { useData } from "../../hooks/data";

import {
    Container,
    HeaderContainer,
    HeaderTitle,
    HeaderContainerHighlight,
    HeaderTextCounterHighlight,
    HeaderTextHighlight,
    BodyContainer 
} from './styles'

const Home: React.FC =  () => {
    const navigation = useNavigation();
    const {handleChangeDate, currentList, currentKcal} = useData();
    
    

    const handleOneNewItem = (): void  => {
        navigation.navigate ("NewItem");
    };

    return (
        <Container>
            <HeaderContainer>
                <CalendarStrip
                    daySelectionAnimation={{
                        type: "border",
                        duration: 200,
                        borderWidth: 1,
                        borderHighlightColor: "white",
                    }}
                    style={{height: 100, paddingTop: 20, paddingBottom: 5}}
                    calendarHeaderStyle={{color: "white", marginBottom: 15}}
                    dateNumberStyle={{color: "white"}}
                    dateNameStyle={{color: "white"}}
                    scrollable={true}
                    highlightDateNumberStyle={{color: "yellow"}}
                    highlightDateNameStyle={{color: "yellow"}}
                    disabledDateNameStyle={{color: "grey"}}
                    disabledDateNumberStyle={{color: "grey"}}
                    iconContainer={{ flex: 0.1 }}
                    onDateSelected={handleChangeDate}
                    startingDate={moment().subtract(3, "days")}
                    selectedDate={moment()}
                    scrollerPaging={true}
                    iconLeft={require("../../assests/img/arrow-left.png")}
                    iconRight={require("../../assests/img/arrow-right.png")}
                />
                <HeaderTitle>Consumido no dia</HeaderTitle>
                <HeaderContainerHighlight>
                    <HeaderTextCounterHighlight>{currentKcal}</HeaderTextCounterHighlight>
                    <HeaderTextHighlight>/Kcal</HeaderTextHighlight>
                </HeaderContainerHighlight>
            </HeaderContainer>
            <BodyContainer>
                <FlatList
                    data={currentList}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ItemList item={item}/>}
                />
                <FAB
                    icon={<Feather name="plus" size={25} color="white" />}
                    visible={true}
                    placement="right"
                    color="#1e3ba1"
                    style={{marginRight: 20, right: 20, bottom: 20,}}
                    onPress={handleOneNewItem}
                />
            </BodyContainer>
        </Container>
    )
};

export default Home