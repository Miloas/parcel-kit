import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { App } from '../router'

test('route /', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={ ['/'] }><App /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('route /next', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={ ['/next'] }><App /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
