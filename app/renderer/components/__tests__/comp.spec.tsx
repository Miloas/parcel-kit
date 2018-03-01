import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Comp } from '..'

test('component ExampleApp', () => {
  const component = Renderer.create(
    <MemoryRouter><Comp /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
