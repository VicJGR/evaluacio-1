import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Thumbs(){

    const [actiu, setActiu]= useState(false)


    function clica (){
        setActiu(!actiu)
    }


    let estilo ={
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        backgroundColor: actiu ? 'gold' : 'lightgrey'
    }
    
    return(
    <>
    <div style={estilo} onClick={clica}></div>
    
    <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
    </>
        )
}


export default Thumbs