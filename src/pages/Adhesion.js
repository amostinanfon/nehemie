import React from 'react';
import './adhesion.css';
import * as Yup  from "yup"
import { useFormik , Field, ErrorMessage} from "formik";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'react';
import axios from 'axios';




const onSubmit = async (values, actions) =>{

    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();

    
        const postUsers = async() => {
            try {
                const res = await axios.post("https://usdtapp.herokuapp.com/api/users", values)
                console.log(res);
            } catch(err) {
                console.log(err);
            };
          }
      postUsers();

}




const basicSchema = Yup.object().shape({
    firstName: Yup.string().min(5, "pas moins de 5").max(50, "pas plus de 50").required("Ce champ est obligatoire"),
    lastName: Yup.string().min(5, "trop petit").required("Ce champ est obligatoire"),
    email: Yup.string().email("email invalide").required("l'email est obligatoire"),
    id: Yup.string().min(1, 'Trop court').required("Ce champ est Obligatoire"),
    acceptTerms: Yup.bool().oneOf([true], "Accepter la condition est obligatoire"),
    img: Yup.mixed().required("Obligatoire")        
})


function Adhesion() {

    const { values , errors, handleBlur , handleChange, handleSubmit , isSubmitting} = useFormik ({
        initialValues: {
            firstName:"",
            lastName:"",
            email:"",
            id:"",
            img: "",
            acceptTerms: false
        },
        validationSchema: basicSchema,
        onSubmit,

    }) 

//const [file , setFile ] = useState(values.file);


    // const postUsers = () => {
    //     //e.preventDefault();
    //     const fileName = new Date().getTime() + values.file;
    //     console.log(fileName)
    //     const storage = getStorage(app);
    //     const storageRef = ref(storage, fileName);
    
    //     const uploadTask = uploadBytesResumable(storageRef, values.file);
    
    // // Register three observers:
    // // 1. 'state_changed' observer, called any time the state changes
    // // 2. Error observer, called on failure
    // // 3. Completion observer, called on successful completion
    // uploadTask.on('state_changed', 
    //   (snapshot) => {
    //     // Observe state change events such as progress, pause, and resume
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');
    //     switch (snapshot.state) {
    //       case 'paused':
    //         console.log('Upload is paused');
    //         break;
    //       case 'running':
    //         console.log('Upload is running');
    //         break;
    //       default:
    //     }
    //   }, 
    //   (error) => {
    //     // Handle unsuccessful uploads
    //     console.log(error);
    //   }, 
    //   () => {
    //     // Handle successful uploads on complete
    //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //         console.log(downloadURL)
    //       const value = {...values, file:downloadURL};
    //       const post = async() => {
    //                 try {
    //                     const res = await axios.post("https://usdtapp.herokuapp.com/api/users/", value)
    //                     console.log(res);
    //                 } catch(err) {
    //                     console.log(err);
    //                 };
    //          }
    //          post()
    //     });
    //   }
    // );}
      

  return (    
    <form onSubmit={handleSubmit} autoComplete='off'>
        <label style={{color: 'red', fontSize:'20px'}}>ADRESSE DE PAIEMENT</label>
        TRhMMXemFEVcNApzdpYSRGgq1kmz51FAm6<br></br>
        <strong>🖐️USDT (TRC20)</strong>
        <label htmlFor='firstName'>Prenom</label>
        <input 
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            id="firstName" 
            type="text" 
            placeholder="Entrer votre prenom"
            className={errors.firstName ? "input-error" : ""}
        />
        {errors.firstName? <p>{errors.firstName}</p>:""}
        <label htmlFor='lastName'>Nom</label>
        <input 
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            id="lastName"
            type="text"
            placeholder="Nom"
            className={errors.lastName ? "input-error" : ""}
        />
        {errors.lastName? <p>{errors.lastName}</p>:""}
        <label htmlFor='email'>Email</label>
        <input 
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id='email' 
            type='email' 
            placeholder="Entrer le mail"
            className={errors.email ? "input-error" : ""}
        />
        {errors.email ? <p>{errors.email}</p>:""}
        <label htmlFor='id'>ID de la transaction</label>
        <input 
            value={values.id}
            onChange={handleChange}
            onBlur={handleBlur}
            id='id' 
            type='text' 
            placeholder="Entrer ID"
            className={errors.id ? "input-error" : ""}
        />
        {errors.id ? <p>{errors.id}</p>:""}
        <label htmlFor='img'>Image</label>
        <input 
            value={values.img}
            accept='image/*'
            onChange={handleChange}
            onBlur={handleBlur}
            id='img' 
            type='file' 
        />
        {errors.file? <p>{errors.file}</p>:""}
        <label
            htmlFor="acceptTerms"
        >
        <input type="checkbox" id='acceptTerms' name='acceptTerms' checked={values.acceptTerms} onChange={handleChange}/>
            J'ai lu et j'accepte
            les conditions
        </label> 
       {errors.acceptTerms?<p>{errors.acceptTerms}</p>:""}
        <button 
            type='submit'
            disabled={isSubmitting}
            //onClick={postUsers}
        >valider</button>
    </form>
  )
}

export default Adhesion;

