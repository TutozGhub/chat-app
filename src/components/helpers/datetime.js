export const formatDate = (unformatDate) =>{
    const datetime = new Date(unformatDate?.seconds * 1000);

    const format = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }

    const date = (datetime != "Invalid Date") ? datetime.toLocaleString('es-AR', format) : "";

    return date;
}

function mandar(coso1, coso2){
    return coso1 + coso2;
}