import React from 'react';
import './adhesion.css';
import * as Yup  from "yup"
import { useFormik , Field, ErrorMessage} from "formik";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'react';
import axios from 'axios';



const onSubmit = async (values, actions) =>{
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();

    
        // const postUsers = async() => {
        //     try {
        //         const res = await axios.post("http://localhost:5000/api/users/", values)
        //         console.log(res);
        //     } catch(err) {
        //         console.log(err);
        //     };
        //   }
        //     postUsers();
}



const basicSchema = Yup.object().shape({
    firstName: Yup.string().min(5, "pas moins de 5").max(50, "pas plus de 50").required("Ce champ est obligatoire"),
    lastName: Yup.string().min(5, "trop petit").required("Ce champ est obligatoire"),
    email: Yup.string().email("email invalide").required("l'email est obligatoire"),
    id: Yup.string().min(1, 'Trop court').required("Ce champ est Obligatoire"),
    acceptTerms: Yup.bool().oneOf([true], "Accepter la condition est obligatoire"),
    image: Yup.mixed().required("Obligatoire")
    // file: Yup.mixed()
    //     .nullable()
    //     .required('Ce champ est Obligatoire')
    //     .test(
    //         'size',
    //         'File size is too big',
    //         (value) => value && value.size <= 1024 * 1024 // 5MB
    //       )
    //       .test(
    //         'type',
    //         'Invalid file format selection',
    //         (value) =>
    //           // console.log(value);
    //           !value || (value && value.SUPPORTED_FORMATS.includes(value?.type))
    //       ),
        
})



function Adhesion() {

    //const SUPPORTED_FORMATS = ['image/jpg', 'image/png', 'image/jpeg', 'image/gif'],


    const { values , errors, handleBlur , handleChange, handleSubmit , isSubmitting} = useFormik ({
        initialValues: {
            firstName:"",
            lastName:"",
            email:"",
            id:"",
            image: "",
            acceptTerms: false
        },
        validationSchema: basicSchema,
        onSubmit,

    })

  return (
    // <form onSubmit={(values) =>handleSubmit(values)} autoComplete='off'>
    
    <form onSubmit={handleSubmit} autoComplete='off'>
        <label style={{color: ''}}>ADRESSE DE LA TRANSACTION</label>
        TRhMMXemFEVcNApzdpYSRGgq1kmz51FAm6
        <label>USDT (TRC29)</label>
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
        <label htmlFor='image'>Image</label>
        <input 
            value={values.image}
            accept='image/*'
            onChange={handleChange}
            onBlur={handleBlur}
            id='image' 
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
        >valider</button>
    </form>
  )
}

export default Adhesion;

