import React, {createContext, useContext, useState, useEffect} from "react";
import { Item, DataProviderData } from "../types";
import { filterIsToday, getLocalStorege, setLocalStorrage } from "../helpers";
import moment, {MomentInput} from "moment";
const DataContext = createContext<DataProviderData>({} as DataProviderData);

export const DataProvider: React.FC = ({children}) =>{

        const [currentDate, setCurrentDate] = useState<MomentInput>(moment())
        const [currentKcal, setCurrentKcal] = useState<number>(0)
        const [currentList, setCurrentList] = useState<Item[]>([])
       
        const [listAllItens, setListAllItens] = useState<Item[]>([])


        useEffect(() => {
            getStorageData();
        }, [])

        useEffect(() => {
            updateCurrenteDay();
        }, [currentDate, listAllItens]);

        const getStorageData = async () => {
            const response = await getLocalStorege();
            setListAllItens(response)
        }

        const addItem = async (item: Item) =>{
            if(listAllItens){
                const newList = [...listAllItens, item]
                setListAllItens(newList)
                await setLocalStorrage(newList);
                updateCurrenteDay();
            }else{
                setListAllItens([item])
                await setLocalStorrage([item]);
                updateCurrenteDay();
            }
            setCurrentDate(moment());
        };

        const updateCurrenteDay = () =>{
            if(listAllItens){
                const filteredList = listAllItens.filter((item) => 
                    filterIsToday(item.date, currentDate)
                );
                const countKcal = filteredList.reduce((acc, currentValue) => {
                    return acc + currentValue.kcal
                },0);

                setCurrentList(filteredList);
                setCurrentKcal(countKcal);
            }
        }


        const handleChangeDate = async (date: MomentInput) =>{
            setCurrentDate(date);
        }    

    return(
        <DataContext.Provider value={{currentDate, currentKcal, currentList, addItem, handleChangeDate}}>
            {children}
        </DataContext.Provider>
    )
}


export const useData = () => {
    const context = useContext(DataContext);
    if(!context) throw new Error("use into of Data Context")

    return context;
}