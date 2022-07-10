import react from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './adhesion.css'


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    id:null,
    image: null,
    acceptTerms: false,
};

const SUPPORTED_FORMATS = ['image/jpg', 'image/png', 'image/jpeg', 'image/gif'];


const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(5, "trop petit")
        .max(50, "trop long!")
        .required("Ce champ est obligatoire"),
    lastName: Yup.string()
        .min(2, "trop petit")
        .max(10, "trop long!")
        .required("Ce champ est obligatoire"),
    email: Yup.string()
        .email("email invalide")
        .required("l'email est obligatoire"),
    id: Yup.string()
        .min(9, 'Encore un caractère')
        .max(11, 'Trop long')
        .required("Ce champ est Obligatoire")
    ,
    acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
    image: Yup.mixed()
        .nullable()
        .required('Ce champ est Obligatoire')
        .test(
            'size',
            'File size is too big',
            (value) => value && value.size <= 1024 * 1024 // 5MB
          )
          .test(
            'type',
            'Invalid file format selection',
            (value) =>
              // console.log(value);
              !value || (value && SUPPORTED_FORMATS.includes(value?.type))
          ),

});


const handleSubmit = () => {
    console.log('submitted')
};

//console.log(values)


const Adhesion2= () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Inscription</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>console.log(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="firstName">
                                        Prénom:
                                    </label>
                                    <Field
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="lastName">
                                        Nom:
                                    </label>
                                    <Field
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group form-check mb-5">
                                    
                                    <div className="form-group mb-3">
                                    <label htmlFor="file">
                                        Image
                                    </label>
                                    <Field
                                        type="file"
                                        id="file"
                                        name="file"
                                        className="file"
                                    />
                                    <ErrorMessage
                                        name="fileError"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                    <label
                                        htmlFor="acceptTerms"
                                        className="form-check-label"
                                    >
                                        <input type='checkbox' />
                                        J'ai lu et j'accepte
                                        les conditions
                                    </label>
                                    <ErrorMessage
                                        name="acceptTerms"
                                        component="small"
                                        className="text-danger d-block"
                                    />
                                </div>
                                <div className="form-group d-flex justify-content-end gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        S'inscrire
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="btn btn-danger"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};    



 



export default Adhesion2




