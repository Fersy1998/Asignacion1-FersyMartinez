
import { myDate } from "../helpers/Date";
import { types } from "../types/types";
import {setFire} from '../helpers/swal';

export const startNewCalificationCommment=({calification, comment})=>{
    return async(dispatch, getState)=>{
        const uid=getState().auth.uid;
        const displayName=getState().auth.displayName;
        const product=getState().product.activeProduct;
        const users=product.users.find(user=>user===uid);
        if(users){
            setFire('Error','Ya ha calificado este producto', 'error');
        }else{
            let pls=JSON.parse(localStorage.getItem('active'));
            pls.rate.push(calification);
            pls.users.push(uid);
            const date=myDate();
            const myUserComment={
                author: displayName,
                comment: comment,
                date: date,
                photo: "/assets/productos/404-4041138_circle-group-icon-png-clipart.png"
            }
            
            if(comment !==undefined && comment !==null && comment !==''){
                pls.comments.push(myUserComment);
            }
            localStorage.setItem('active', JSON.stringify(pls));
            //dispatch(refreshProduct(product.id, localStorage.getItem('active')));
            if(comment !==undefined && comment !==null && comment !==''){
                dispatch(addComment(myUserComment, calification, uid, product.id));
                setFire('Comentario', 'Calificación y comentario agregados con éxito', 'success');
               
            }else{
                dispatch(addCalification(calification, uid, product.id));
            
            }
        }
        
    }
}
export const loadProducts=()=>({
    type:types.productLoaded
})
const addCalification=(calification, uid, id)=>({
    type:types.calificationAddNew,
    payload:{
        calification,
        uid, 
        id
    }
})
const addComment=(myUserComment, calification, uid, id)=>({
    type:types.commentAddNew,
    payload:{
        comment:myUserComment,
        calification,
        uid,
        id
    }
})
const refreshProduct=(id, product)=>({
    type:types.productRefresh,
    payload:{
        id,
        product:{
            ...product
        }
    }
})


