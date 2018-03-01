import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { World } from '..'

test('page World', () => {
  const component = Renderer.create(
    <MemoryRouter><World /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
