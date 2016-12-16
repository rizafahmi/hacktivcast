import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import jsdom from 'jsdom'

const App = require('../../src/components/App.js')
const Menu = require('../../src/components/Menu.js')

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('Testing App component', () => {
  it('will render Menu', () => {
    const wrapper = mount(<App />)
    expect(wrapper.contains(<Menu />)).to.be.true
  })
})
