
import Swal from "sweetalert2";
//ALERTS


export const setFire=async(title, text, icon)=>{
    await Swal.fire({
        title, 
        text,
        icon
    })
}