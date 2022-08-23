import React, { useState } from 'react';
import { Formik } from 'formik'

const initialValues = { pokemonName: '', pokemonLv: '', pokemonGender: '' }


function PokemonRegister () {
  const [formData, setFormData] = useState(initialValues)

  return (
    <>
    <Formik
      initialValues={formData}
      validate={values => {
        const errors = {};
        if (!values.pokemonName) {
          errors.pokemonName = 'Required';
        }

        if (!values.pokemonLv) {
          errors.pokemonLv = 'Required';
        }

        if (!values.pokemonGender) {
          errors.pokemonGender = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          isSubmitting,
       }) => (
        <form onSubmit={handleSubmit}>

          <div className='welcome-link'>
            <label>寶可夢名稱：</label>
            <input type='text' name="pokemonName" value={values.pokemonName} onChange={handleChange}/>
            {errors.pokemonName && touched.pokemonName && errors.pokemonName}
          </div>

          <div className='welcome-link'>
            <label>寶可夢等級：</label>
            <input type='number' name="pokemonLv" value={values.pokemonLv} onChange={handleChange} />
            {errors.pokemonLv}
          </div>

          <div className='welcome-link'>
            <label>寶可夢性別：</label>
            <input type='text' name="pokemonGender" value={values.pokemonGender} onChange={handleChange} />
            {errors.pokemonGender}
          </div>

          <button type="submit" disabled={isSubmitting}> Submit </button>

        </form>
      )}
    </Formik>
    </>
  )
}

export default PokemonRegister