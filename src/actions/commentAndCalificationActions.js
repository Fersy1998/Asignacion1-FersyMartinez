import { myDate } from "../helpers/Date";
import { types } from "../types/types";
import {setFire} from '../helpers/swal';
const apiURL='http://localhost:5000/appland-e-commerce-ec53d/us-central1/app/api'

export const startNewCalificationCommment=({calification, comment})=>{
    return async(dispatch, getState)=>{
        const uid=getState().auth.uid;
        const displayName=getState().auth.displayName;
        const product=getState().product.activeProduct;
        const users=product.users.find(user=>user===uid);
        if(users){
            setFire('Error','Ya ha calificado este producto', 'error');
        }else{
            try {
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
                if(comment !==undefined && comment !==null && comment !==''){
                    
                    const resp1= await fetch(`${apiURL}/products-comment/${product.id}`,
                                        {
                                            method:'POST',
                                            headers: {
                                                'Content-type': 'application/json'
                                            },
                                            body: JSON.stringify( myUserComment )
                                        });
                    const resp1_1=await resp1.json();
                    const newComments=resp1_1.data
                    
                    const resp2= await fetch(`${apiURL}/products-rate/${product.id}`,
                                        {
                                            method:'POST',
                                            headers: {
                                                'Content-type': 'application/json'
                                            },
                                            body: JSON.stringify( {calification} )
                                        });
                    const resp2_2=await resp2.json();
                    const newCalifications=resp2_2.data
                    
                    const resp3= await fetch(`${apiURL}/products-users/${product.id}`,
                                        {
                                            method:'POST',
                                            headers: {
                                                'Content-type': 'application/json'
                                            },
                                            body: JSON.stringify( {uid} )
                                        });
                    const resp3_3=await resp3.json();
                    const newUsers=resp3_3.data
                    
                    let nuevoProducto=JSON.parse(localStorage.getItem('active'));
                    nuevoProducto.comments=arrange(newComments);
                    nuevoProducto.rate=newCalifications;
                    nuevoProducto.users=newUsers;
                    
                    localStorage.setItem('active', JSON.stringify(nuevoProducto));
                    
                    setFire('Comentario', 'Calificación y comentario agregados con éxito', 'success');
                    dispatch(addCommentNew(arrange(newComments), newCalifications, newUsers, product.id));
                   
                }else{
                    const resp2= await fetch(`${apiURL}/products-rate/${product.id}`,
                                        {
                                            method:'POST',
                                            headers: {
                                                'Content-type': 'application/json'
                                            },
                                            body: JSON.stringify({calification})
                                        });
                    const resp2_2=await resp2.json();
                    const newCalifications=resp2_2.data
                    
                    const resp3= await fetch(`${apiURL}/products-users/${product.id}`,
                                        {
                                            method:'POST',
                                            headers: {
                                                'Content-type': 'application/json'
                                            },
                                            body: JSON.stringify({uid})
                                        });
                    const resp3_3=await resp3.json();
                    const newUsers=resp3_3.data
                    setFire('Calificación', 'Calificación agregada con éxito', 'success');
                    dispatch(addCalificationNew(newCalifications, newUsers, product.id));
                
                }
            } catch (error) {
                setFire('Error', error , 'error');
            }
        }
        
    }
}
export const arrange=(comments=[])=>{
    let orderedComments;
    orderedComments= comments.sort((commentA, commentB) => new Date(commentB.date) - new Date(commentA.date));
    return orderedComments
  }

export const loadProducts=()=>({
    type:types.productLoaded
})

const addCalificationNew=(newCalifications, newUsers, id)=>({
    type:types.calificationAddNew,
    payload:{
        newCalifications:[...newCalifications],
        newUsers:[...newUsers],
        id
    }
})
const addCommentNew=(newComments, newCalifications, newUsers,id)=>({
    type:types.commentAddNew,
    payload:{
        newComments:[...newComments],
        newCalifications:[...newCalifications],
        newUsers:[...newUsers],
        id
    }
})


