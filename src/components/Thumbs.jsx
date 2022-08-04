import {useState} from 'react';
import {BsFillHandThumbsUpFill} from 'react-icons/bs'



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
    
    <BsFillHandThumbsUpFill/>
    </>
        )
}


export default Thumbs