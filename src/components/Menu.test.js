import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import jsdom from 'jsdom'

const Menu = require('./Menu.js')

describe('Testing <Menu />', () => {
  let wrapper
  beforeEach((done) => {
    wrapper = mount(<Menu />)
    done()
  })
  it('should render logo', (done) => {
    expect(wrapper.find('header').length).to.equal(1)
    done()
  })
  it('should render small hacktiv8', (done) => {
    expect(wrapper.find('small').length).to.equal(1)
    done()
  })
  it('should render nav', (done) => {
    expect(wrapper.find('nav').length).to.equal(1)
    done()
  })
})
