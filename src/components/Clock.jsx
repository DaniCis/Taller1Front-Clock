import { useState, useEffect } from "react"

const Clock = () =>{
    //Estados del componente para guardar la hora, minuto y segundo
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    useEffect(() => {
        //función para que extraiga la los valores de hora, minuto y segundo de la fecha actualizados cada segundo
        const intervalo = setInterval(() => {
            const fecha = new Date(); //extraer la fecha actual
            setHour(fecha.getHours())
            setMinute(fecha.getMinutes())
            setSecond(fecha.getSeconds())
        }, 1000);
        return () => clearInterval(intervalo); //limpiar el resultando anterior antes de volver a ejecutar la función
      }, []);

    //se añade a cada manecilla una transformación para que vayan rotando en el eje Z el valor de la fecha transformado a grados      
    return(
        <div className="clock">
            <div className="hand hour" style={{transform: `rotateZ(${hour * 30}deg)`}}></div>
            <div className="hand minute" style={{transform: `rotateZ(${minute * 6}deg)`}}></div>
            <div className="hand second" style={{transform: `rotateZ(${second * 6}deg)`}}></div>
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>
    )
}

export default Clock;