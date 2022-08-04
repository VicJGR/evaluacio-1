import {useState} from 'react'


function Sorteo (){

const [valor, setValor]= useState('');
const [bolas, setBolas] = useState([]);


// [...algo] los 3 puntos dentro del array copian el array de nuevo,
// y al poner la coma y ''valor'' al lado se agrega ''valor'' al array.
//en este caso el array bolas inicia vacio (useState de la linea 7) y se le suma el valor que le introduces como ''value''


const añadealaray=(e)=>{setBolas([...bolas, valor])};


let estilo={
    height: '40px',
    width: '40px',
    borderRadius:'50%',
    backgroundColor:'red',
    display:'inline-block',
    textAlign:'center',
    lineHeight:'40px',
};

//esta funcion permite ordenar numericamente, a-b en orden creciente, b-a en orden decreciente
function ordenaNumeros (a,b){
    return a-b
}      


let list= bolas
.sort(ordenaNumeros)
//el.map busca los elementos del array bolas y los convierte en <div key={e} style={estilo}>{e}</div>
//uno por cada elemento del array
.map((e)=><div key={e} style={estilo}>{e}</div>)

    return(
    <>
        {/* e.target.value hace referencia a lo que tu pones dentro del input, por lo que si quieres usar ese valor tienes que usar esa ruta */}
        <input type='text' onChange={e=>setValor(e.target.value)} value={valor}></input>
        <button onClick={añadealaray}>Afegir</button>
        {list}
    </>)
}

export default Sorteo