


function Titulo (props){

    let estilos= {

        width:'100%',
        border: '1px solid blue',
        textAlign:'center',
        
    }

    return(<>
    <div style={estilos}>
    <h1 style={{color:props.color}}>{props.texto}</h1>
    </div>
    </>)
}

export default Titulo