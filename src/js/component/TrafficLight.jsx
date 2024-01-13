import React, {useState, useEffect} from "react";
import "../../styles/TrafficLight.css";


export const TrafficLight = () => {

    const [selected, setSelected] = useState("red");
    const [active, setActive] = useState(false)
    
    const changeColor = (color) => {
        setSelected(color);
    }

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                if (selected == "red") {
                    setSelected("yellow")
                } else if (selected == "yellow"){
                    setSelected("green")
                }else if (selected == "green"){
                    setSelected("red")
                }
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [active, selected])

    return (
        <main>
            <div className="contenedor">
                <div className="traffic-light">
                    <div className={"luz-roja" + ((selected === "red" ? " glow-rojo" : ""))} onClick = {() => changeColor("red")}></div>
                    <div className={"luz-amarilla" + ((selected === "yellow" ? " glow-amarillo" : ""))} onClick = {() => changeColor("yellow")}></div>
                    <div className={"luz-verde" + ((selected === "green" ? " glow-verde" : ""))} onClick = {() => changeColor("green")}></div>
                </div>
                <div>
                    <button onClick={() => setActive(!active)} className="btn btn-warning ">Activar</button>
                </div>
            </div>
        </main>
         
    )

}