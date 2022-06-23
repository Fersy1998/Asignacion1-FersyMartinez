import Swal from "sweetalert2";
import { myDate } from "../helpers/Date";
import { types } from "../types/types";


export const startNewCalificationCommment=({calification, comment})=>{
    return async(dispatch, getState)=>{
        const uid=getState().auth.uid;
        const displayName=getState().auth.displayName;
        const product=getState().product.activeProduct;
        const users=await product.users.find(user=>user===uid);
        console.log(users);
        if(users){
            console.log('no entra');
           
            return await Swal.fire({
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
                const date=myDate();
                pls.comments.push(myUserComment);
            }
            localStorage.setItem('active', JSON.stringify(pls));
            console.log(pls);
            await dispatch(addCalificaction(calification, uid, product.id));
            if(comment !==undefined && comment !==null && comment !==''){
               
                await dispatch(addComment(myUserComment, product.id));
                return 
            }
           
        }
         
        /*
        const newNote={
            title:'',
            body:'',
            date:new Date().getTime(),
            url:''
        }
       
        try {
            const doc= await db.collection(`${uid}/journal/notes`).add(newNote);
            dispatch(activeNote(doc.id, newNote));
        } catch (error) {
            return error;
        }*/
        
    }
}
export const addCalificaction=(calification, uid, id)=>({
    type:types.calificationAddNew,
    payload:{
        calification,
        uid, 
        id
    }
})
export const addComment=(myUserComment, id)=>({
    type:types.commentAddNew,
    payload:{
        comment:myUserComment,
        id
    }
})
/*
export const activeNote=(id, note)=>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})
export const startLoadingNotes=(uid)=>{
    return async (dispatch)=>{
        const notes=await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
export const setNotes=(notes)=>({
    type:types.notesLoad,
    payload:notes
})

export const startSaveNotes=(note)=>{
    return async(dispatch, getState)=>{
        const uid=getState().auth.uid;
        let noteToFirestore={...note};
        if(!note.url){
            delete note.url;
        }
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(deleteNote(note.id));
        dispatch(AddNewNote(note.id, {...note} ));
        dispatch(activeNote(note.id, {...note} ));
        Swal.fire('Saved', note.title, 'success' );
    }
}
export const AddNewNote=(id, note)=>({
    type:types.notesAddNew,
    payload:{
        id, ...note
    }
    
    })

//Recarga la nota editada solamente
export const refreshNote=(id, note)=>({
    type:types.notesUpdated,
    payload:{
        id,
        note:{
            ...note
        }
    }
})*/