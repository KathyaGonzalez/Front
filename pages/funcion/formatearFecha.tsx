export const formatearFecha = (date: string) => {
    const  newDate = new Date(date);
    return newDate.toLocaleDateString('en-US');
}