import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Hello } from '..'

test('page Hello', () => {
  const component = Renderer.create(
    <MemoryRouter><Hello /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
