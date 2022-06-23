

export const myDate=()=>{
    let date = new Date();
    let dateFinal='';
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    if(month < 10){
      dateFinal=`${day}/0${month}/${year}`;
    }else{
      dateFinal=`${day}/${month}/${year}`;
    }
    return dateFinal;
}