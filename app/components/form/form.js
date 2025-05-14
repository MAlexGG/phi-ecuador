'use client'
import React, { useState } from 'react'
import styles from './form.module.css'
import Button from '../button/button';

const initialForm = {
    name: "",
    lastname: "",
    email: "",
    degree: "",
    institution: "",
    motivation: ""
}

export default function Form() {

    const [form, setForm] = useState(initialForm);

  return (
    <form >
        <div className={styles.ctForm}>
            <section>
                <div className={styles.ctInput}>
                    <label htmlFor="name">Nombre(s) <span>*</span></label>
                    <input type="text" name='name' placeholder='Escribe tu nombre...' className={styles.input}/>
                </div>

                <div className={styles.ctInput}>
                    <label htmlFor="lastname">Apellido(s) <span>*</span></label>
                    <input type="text" name='lastname' placeholder='Escribe tu apellido...' className={styles.input}/>
                </div>

                <div className={styles.ctInput}>
                    <label htmlFor="email">Correo electrónico <span>*</span></label>
                    <input type="text" name='email' placeholder='Escribe tu correo electrónico...' className={styles.input}/>
                </div>

                <div className={styles.ctInput}>
                    <label htmlFor="degree">Grado académico</label>
                    <input type="text" name='degree' placeholder='Escribe tu grado académico...' className={styles.input}/>
                </div>

                <div className={styles.ctInput}>
                    <label htmlFor="institution">Institución a la que pertence <span>*</span></label>
                    <input type="text" name='institution' placeholder='Escribe la institución...' className={styles.input}/>
                </div>
            </section>
            <div className={styles.ctTextarea}>
                <label htmlFor="motivation">Motivación para pertenecer a PHI <span>*</span></label>
                <textarea name="motivation" className={styles.textarea} id='motivation' placeholder='Escribe tu motivación...'/>
            </div>
        </div>
        <div className={styles.ctButtons}>
            <Button>Cancelar</Button>
            <Button theme={true}>Enviar</Button>
        </div>
        
    </form>
  )
}