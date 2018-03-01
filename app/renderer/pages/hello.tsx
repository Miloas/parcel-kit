import * as React from 'react'
import { Link } from 'react-router-dom'

export const Hello = () => (
  <div style={ { textAlign: 'center', marginTop: 100 } }>
    <h1>Hello</h1>
    <h3><Link to='/next'>next page</Link></h3>
  </div>
)
