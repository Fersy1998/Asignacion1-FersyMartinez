

export const myDate=()=>{
    let date = new Date();
    let dateFinal='';
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    if(month < 10){
      dateFinal=`${year}/0${month}/${day}`;
    }else{
      dateFinal=`${year}/${month}/${day}`;
    }
    return dateFinal;
}