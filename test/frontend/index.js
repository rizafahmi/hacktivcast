import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import jsdom from 'jsdom'

const App = require('../../src/components/App.js')

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('<App />', () => {
  it('renders', (done) => {
    const wrapper = mount(<App />)
    expect(wrapper.find('small').text()).to.equal('by HACKTIV8')
    done()
  })
})
