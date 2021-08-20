import moment from "moment";
import React, {useState} from "react";
import { Button, Input} from "react-native-elements";
import { generateUniqueId } from "../../helpers";
import { useData } from "../../hooks/data";
import { useNavigation } from "@react-navigation/native";



import {Container, FormCatainer, ButtonContainer} from './styles';
const NewItem = () => {

    const {addItem} = useData();
    const navigation = useNavigation(); 

    const [name, setName] = useState('')
    const [kcal, setKcal] = useState('')

    const handleOnSave = () => {
        if(name && kcal){
            addItem({
                id: generateUniqueId(),
                name,
                kcal: Number(kcal),
                date: moment()
            })
            navigation.goBack();
        }
    };
    return(
        <Container>
            <FormCatainer>
                <Input label="Nome" value={name} onChangeText={setName}  placeholder="Descrição" />
                <Input label="Kcal" value={kcal} onChangeText={setKcal} placeholder="somente números" />
            </FormCatainer>
            <ButtonContainer>
                <Button title="Salvar" type="outline" onPress={handleOnSave} />
            </ButtonContainer>
        </Container>
    );
};

export default NewItem;