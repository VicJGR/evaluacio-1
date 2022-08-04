import {useState} from 'react'


function Clics (){

    const [valor, setSuma] = useState(0)

    function clica(){
        setSuma(valor+1)
    }

    let estilo ={

        width:'75px',
        height: '40px'
    }
    
    return(<>
    
        <button onClick={clica} style={estilo}>{valor}Clics!</button>

    </>)
}

export default Clics