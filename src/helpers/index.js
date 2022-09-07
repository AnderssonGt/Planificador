export const formatoFecha =fecha=>{
    const fechNueva=new Date(fecha)
    const opciones={
        year:'numeric',
        month:'long',
        day:'2-digit'
    }
    return fechNueva.toLocaleDateString('es-ES',opciones)
}