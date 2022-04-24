import React, { Fragment } from 'react'
import Counter from '../components/counter/Counter'

const choices = [
  'Hello', 
  'Testing'
]

const selection = choices[Math.floor(Math.random() * choices.length)]


export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Redux + TypeScript</h1>
      <p>
        Hello and welcome! :) This app was {selection} by the Create React App
        template and bootstrapped with Redux, React Router, TypeScript, ESlint,
        Prettier for you. Take a look around ;)
      </p>
      <Counter />
    </Fragment>
  )
}
