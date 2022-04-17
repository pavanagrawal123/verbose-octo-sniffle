import React, { Fragment } from 'react'
import Counter from '../components/counter/Counter'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Redux + TypeScript</h1>
      <p>
        Hello and welcome! :) This app was generated by the Create React App template and made completely from scratch. No templates!
      </p>
      <Counter />
    </Fragment>
  )
}
