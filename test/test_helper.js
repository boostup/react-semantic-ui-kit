import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { JSDOM } from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {

  const componentInstance =  TestUtils.renderIntoDocument(
    <ComponentClass {...props} />
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};