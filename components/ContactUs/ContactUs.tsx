import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import styles from './ContactUs.module.scss';
// import ContactUsSuccess from '../order-popup-success/ContactUsSuccess';

type ContactUsProps = {
  modalActive: boolean;
  setModalActive: () => void;
};

function ContactUs({
  modalActive,
  setModalActive,
}: ContactUsProps): JSX.Element | null {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    typeRoom: '',
    coupon: '',
  };

  const validationSchema = yup.object({
    name: yup.string().required('Это поле обязательно для заполнения'),
    phone: yup
      .string()
      .test(
        'len',
        'Номер телефона должен состоять минимум из 11 цифр.',
        (val = '') => {
          const val_length_without_dashes = val.replace(
            /[-_()+\s]+/g,
            ''
          ).length;
          return val_length_without_dashes === 11;
        }
      )
      .required('Поле не должно быть пустым'),
    email: yup
      .string()
      .email('Заполните в формате mail@example.ru')
      .required('Заполните в формате mail@example.ru'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formSubmitHandler(values);
    },
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    console.log(mounted);
    setMounted(true);
  }, []);

  if (mounted) {
    return ReactDOM.createPortal(
      <>
        <div
          className={classNames(styles.modal, { [styles.active]: modalActive })}
          onClick={() => {
            setModalActive(!modalActive);
          }}
        >
          {!isSubmitted ? (
            <div
              className={styles.modal__content}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={styles.close}
                onClick={() => {
                  setModalActive(false);
                }}
              />

              <div>
                <div className={styles.titleContainer}>
                  <h2 className={styles.title}>'Задать вопрос'</h2>
                  <span className={styles.description}>
                    Наш менеджер свяжется с вами в течении 15 минут
                  </span>
                </div>

                <div className={styles.labelContainer}>
                  <label
                    className={styles.label}
                    htmlFor="request-name_video-call"
                  >
                    <span
                      className={classNames(styles.labelText, styles.required)}
                    >
                      Имя
                    </span>
                    <input
                      className={classNames(
                        styles.input,
                        !!formik.errors.name
                          ? styles.formInputBorderError
                          : styles.formInputBorderNormal
                      )}
                      id="request-name_video-call"
                      name="name"
                      type="text"
                      placeholder="Константин"
                      autoComplete="off"
                      onChange={(e) => {
                        const value = e.target.value || '';
                        formik.setFieldValue('name', value);
                      }}
                      onFocus={(e) => {
                        const value = e.target.value || '';
                        formik.setFieldTouched('name', true);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {!!formik.errors.name && formik.touched.name && (
                      <span className={styles.errorInvalid}>
                        {formik.errors.name}
                      </span>
                    )}
                  </label>
                </div>

                <div className={styles.labelContainer}>
                  <label
                    className={styles.label}
                    htmlFor="request-tel_video-call"
                  >
                    <span
                      className={classNames(styles.labelText, styles.required)}
                    >
                      Email
                    </span>
                    <input
                      className={styles.input}
                      id="request-email_video-call"
                      type="text"
                      name="email"
                      placeholder="mail@example.ru"
                      onChange={(e) => {
                        const value = e.target.value || '';
                        formik.setFieldValue('email', value);
                      }}
                      onFocus={() => {
                        formik.setFieldTouched('email', true);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {!!formik.errors.name && (
                      <span className={styles.errorInvalid}>
                        {formik.errors.email}
                      </span>
                    )}
                  </label>
                </div>

                <div
                  className={classNames(
                    styles.labelContainer,
                    styles.phoneContainer
                  )}
                >
                  <label
                    className={styles.label}
                    htmlFor="request-tel_video-call"
                  >
                    <span
                      className={classNames(styles.labelText, styles.required)}
                    >
                      Телефон
                    </span>
                    <span className="phone-validate">
                      <span className="phone-validate__wrap">
                        <InputMask
                          className={classNames(
                            styles.input,
                            !!formik.errors.phone
                              ? styles.formInputBorderError
                              : styles.formInputBorderNormal
                          )}
                          mask="+7 (999) 999-99-99"
                          id="request-tel_video-call"
                          name="phone"
                          type="tel"
                          placeholder="Телефон"
                          value={formik.values.phone}
                          onChange={(e) => {
                            const value = e.target.value || '';
                            formik.setFieldValue('phone', value);
                          }}
                          onFocus={(e) => {
                            const value = e.target.value || '';
                            formik.setFieldTouched('phone', true);
                          }}
                        >
                          {(inputProps) => <input {...inputProps} />}
                        </InputMask>
                        {!!formik.errors.phone && (
                          <span className={styles.phoneValidateError}>
                            {formik.errors.phone}
                          </span>
                        )}
                      </span>

                      {!formik.errors.phone && formik.touched.phone && (
                        <svg
                          className={styles.phoneValidateIcon}
                          viewBox="0 0 78.369 78.369"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M78.049 19.015L29.458 67.606a1.094 1.094 0 01-1.548 0L.32 40.015a1.094 1.094 0 010-1.547l6.704-6.704a1.095 1.095 0 011.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 011.548 0l6.703 6.704a1.094 1.094 0 010 1.548z"></path>
                        </svg>
                      )}
                    </span>
                  </label>
                </div>

                <div
                  className={classNames(
                    styles.labelContainer,
                    styles.commentContainer
                  )}
                >
                  <label htmlFor="request-tel_video-call">
                    <span className={styles.labelText}>Поле ввода</span>
                    <textarea
                      className={styles.commentInput}
                      name="message"
                      placeholder="Текст"
                      onChange={(e) => {
                        const value = e.target.value || '';
                        formik.setFieldValue('message', value);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    ></textarea>
                  </label>
                </div>

                <div className={styles.btnContainer}>
                  <button
                    type="submit"
                    className={styles.btn}
                    onClick={formik.handleSubmit}
                  >
                    Заказать дизайн-проект
                  </button>
                </div>

                <button
                  className={styles.closeBtn}
                  onClick={() => {
                    setModalActive(false);
                  }}
                ></button>
              </div>
            </div>
          ) : (
            <ContactUsSuccess />
          )}
        </div>
      </>,
      document.querySelector('#portal')
    );
  }

  return null;
}

export default ContactUs;
