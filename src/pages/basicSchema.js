import * as Yup from 'yup'




const basicSchema = () => {
    Yup.object().shape({
        firstname: Yup.string()
           .min(5, "trop petit")
           .max(50, "trop long!")
           .required("Ce champ est obligatoire"),
        // lastname: yup.string()
        //     .min(2, "trop petit")
        //     .max(10, "trop long!")
        //     .required("Ce champ est obligatoire"),
        // email: yup.string()
        //     .email("email invalide")
        //     .required("l'email est obligatoire"),
        // // id: yup.string()
        // //     .min(9, 'Encore un caractère')
        // //     .max(11, 'Trop long')
        // //     .required("Ce champ est Obligatoire")
        // // ,
        // acceptTerms: yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
        // image: Yup.mixed()
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
}


export default basicSchema;