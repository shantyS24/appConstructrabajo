import React, { useState } from "react";

const RegWorkerViewModel = () => {

    const [values, setValues] = useState({
        nombreTrabajador: '',
        apellidoTrabajador: '',
        correoTrabajdor: '',
        docuTrabajador: '',
        selectedDocuTra:'',
    });
 
    const onChange  = (property: string, value: any) => {
        setValues ({ ...values, [property]: value})
    }

    return {
        ...values, 
        onChange
    }

}

export default RegWorkerViewModel;