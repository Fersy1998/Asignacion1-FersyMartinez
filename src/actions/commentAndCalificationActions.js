import Swal from "sweetalert2";
import { myDate } from "../helpers/Date";
import { types } from "../types/types";


export const startNewCalificationCommment=({calification, comment})=>{
    return async(dispatch, getState)=>{
        const uid=getState().auth.uid;
        const displayName=getState().auth.displayName;
        const product=getState().product.activeProduct;
        const users=await product.users.find(user=>user===uid);
        if(users){
            Swal.fire({
                title:'Error', 
                text:'Ya ha calificado este producto',
                icon:'error'
                });
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
                console.log('mi comentario', comment);
                pls.comments.push(myUserComment);
                localStorage.setItem('active', JSON.stringify(pls));
                
            }
            console.log(pls);
           
            if(comment !==undefined && comment !==null && comment !==''){
                console.log('si entra aquí');
                dispatch(addCommentX(myUserComment, calification, uid, product.id));
            }else{
                dispatch(addCalification(calification, uid, product.id));
            
            }
            console.log('en localstarage', localStorage.getItem('active'));
            dispatch(refreshProduct(product.id, localStorage.getItem('active')));
           
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
const addComment=(myUserComment, id)=>({
    type:types.commentAddNew,
    payload:{
        comment:myUserComment,
        id
    }
})
const addCommentX=(myUserComment, calification, uid, id)=>({
    type:types.commentAddNewX,
    payload:{
        comment:myUserComment,
        calification,
        uid,
        id
    }
})
const refreshProduct=(id, product)=>({
    type:types.refreshProduct,
    payload:{
        id,
        product:{
            ...product
        }
    }
})
