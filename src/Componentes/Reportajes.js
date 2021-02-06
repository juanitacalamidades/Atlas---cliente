import {useState, useEffect} from 'react';

const Reportajes = () => {

    const [data, setData] = useState([]);
   
    useEffect(()=>{
        fetch("/reportajes")
        .then(response => response.json())
        .then(function(data){
        setData(data)
    })
    }, []);
    const librosReportajes = data.map(libro =>{
        return (
            <>
                    <img src={libro.img} alt=""/>
                    <div>Título: {libro.titulo}</div>
                    <div>Autor: {libro.autor}</div>
                    <div>Editorial: {libro.editorial}</div>
                    <div>Contra: {libro.contra}</div>
                    <div>Materia: {libro.materia}</div>
                    <div>EAN: {libro.ean}</div>
                    
                    
            </>
        );
    });
    return (
        <>
        <h1>Reportaje periodístico y viajes</h1>
        <div>{librosReportajes}</div>
      </>
      )

};

export default Reportajes;