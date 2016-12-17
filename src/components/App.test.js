import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import jsdom from 'jsdom'

const App = require('./App.js')
const Menu = require('./Menu.js')
const Description = require('./Description.js')
const Shows = require('./Shows.js')
const Footer = require('./Footer.js')

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('Testing App component', () => {
  let wrapper
  beforeEach((done) => {
    wrapper = mount(<App />)
    done()
  })
  it('will render <Menu />', (done) => {
    expect(wrapper.contains(<Menu />)).to.be.true
    done()
  })
  it('will render <Description />', () => {
    expect(wrapper.contains(<Description />)).to.be.true
  })
  it('will render <Shows />', (done) => {
    expect(wrapper.contains(<Shows />)).to.be.true
    done()
  })
  it('will render <Footer />', (done) => {
    expect(wrapper.contains(<Footer />)).to.be.true
    done()
  })
})
