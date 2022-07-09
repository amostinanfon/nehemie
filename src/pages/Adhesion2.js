import react from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button'


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    password: Yup.string()
        .required("Mot de passe est obligatoire")
        .min(8, "Mot de passe doit être plus grand que 8 caractères")
        .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    confirmPassword: Yup.string()
        .required("Confirmation de mot de passe est obligatoire")
        .oneOf(
            [Yup.ref("password"), null],
            "Le mot de passe de confirmation ne correspond pas"
        ),
    acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
    image: Yup.mixed()
        .nullable()
        .required('Required Field')
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


const handleSubmit = (values) => {
    console.log(values)
};


const Adhesion2= () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Inscription</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="firstName">
                                        Prénoms:
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
                                {/* <div className="form-group mb-3">
                                    <label htmlFor="password">
                                        Mot de passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">
                                        Confirmer le mot de
                                        passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div> */}
                                <div className="form-group form-check mb-5">
                                    <Field
                                        name="acceptTerms"
                                        type="checkbox"
                                        className="form-check-input"
                                    />
                                    <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">
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
                                    <Button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        S'inscrire
                                    </Button>
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



