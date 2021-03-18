import React, { useCallback, useEffect, useState } from 'react'

/* Performans optimizasyonu ile ilgili*/
const UseCalback1 = () => {

    const [sayi,setSayi] = useState(0);
    const[theme,setTheme] = useState('dark');

    const getItems = useCallback(() =>{ //sadece sayi değiştiği zaman componenetim  rerender olacak
        return [sayi,sayi+1,sayi+2];
    },[sayi]);

    const backgroundColor = theme==='dark'?'#000':'#fff';

    const handleTheme=() =>{
        if(theme==='dark'){
            setTheme('light');
        }else{
            setTheme('dark');
        }
    }

    return (
        <>
         <input type="number" value={sayi} onChange={(e) => setSayi(parseInt(e.target.value))}/>
         <button onClick={() => handleTheme()} style={{
             background:`${backgroundColor}`
         }}>Change Theme</button>
         <ItemList getItems={getItems}/> 
        </>
    )
}

const ItemList = ({getItems}) =>{
    const [items,setItems] = useState([]);

    useEffect( ()=>{
        setItems(getItems);
        console.log("Updating items...");
    } ,[getItems]);


    return (
        <div>
            <ul>
                {
                    items.map( (item,index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    } )
                }
            </ul>
        </div>
    )
}

export default UseCalback1
