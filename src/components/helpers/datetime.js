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