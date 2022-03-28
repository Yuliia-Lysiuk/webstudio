import './Modal.scss'
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p>{message}</p>}
    />
  );
};

export function Modal({ onClick }) {
    const [licence, setLicence] = useState(false);
    const onLicenceChange = () => {
        setLicence(!licence);
    };

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(6, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        number: Yup.number()
            .required(),
         message: Yup.string()
    });

    const informSubmit = data => {
    console.log(data);
}
    return (
        <Formik initialValues={{ email: '', name: '' , number: '', message: ''}}
       validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
                informSubmit(values);
                onClick(false)
                resetForm();
       }}>   
      <div className="backdrop ">
      <div className="modal">
        <Form  className="modal-form">
          <p className="modal-form__text">
            Оставьте свои данные, мы вам перезвоним
          </p>
          <label className="modal-form__field">
            Имя
                            <span className="modal-form__box">
                                <Field type="text" name="name" className="modal-form__input" title="Имя должно содержать символы кирилицы или латиницы"/>
           <FormError name="name" />
              <svg className="modal-form__icon">
                <use href="./images/icon/symbol-defs.svg#icon-person"></use>
              </svg>
            </span>
          </label>
          <label className="modal-form__field">
            Телефон
                            <span className="modal-form__box">
                                <Field type="tel" name="number" className="modal-form__input" title="096-000-00-00"/>
              <FormError name="number" />
                                <svg className="modal-form__icon">
                <use href="./images/icon/symbol-defs.svg#icon-phone"></use>
              </svg>
            </span>
          </label>

          <label className="modal-form__field">
            Почта
                            <span className="modal-form__box">
                                <Field type="email" name="email" className="modal-form__input"/>
             <FormError name="email" />
              <svg className="modal-form__icon">
                <use href="./images/icon/symbol-defs.svg#icon-email"></use>
              </svg>
            </span>
          </label>

          <label className="modal-form__field">
                            Комментарий
                            <Field name="message" as="textarea" className="modal-form__textarea"></Field>
           
          </label>

          <label className="modal-form__checkbox-label"
            ><input
              type="checkbox"
              className="modal-form__checkbox visually-hidden"
                            id="accept-policy"
                            checked={licence}
                            onChange={onLicenceChange}
            />
            <span className="modal-form__checkbox-icon"></span>
            <span className="modal-form__checkbox-text">
              Соглашаюсь с рассылкой и принимаю&nbsp;
              <a href="/" className="modal-form__label-link">Условия договора</a>
            </span>
          </label>

          <div className="box-button">
                        <button type="submit" className="modal-form__btn" 
                                disabled={!licence}
                            >Отправить</button>
          </div>
                </Form>
                
                <button type='button' className="button-close" onClick={()=>onClick(false)}>
                   
                    <IoMdClose className="button-close__icon"/>
          
        </button>
      </div>
            </div>
             </Formik> 
  )  
}