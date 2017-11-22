
import React from 'react'
import { renderComponent, expect } from "../../../test/test_helper";
import ElementFader from "./index";

describe('ElementFader', () => {

    const c1 = renderComponent(ElementFader, {visible: true});
    it('is visible if VISIBLE prop is set to TRUE', () => {
        expect(c1.instance.state.visible).to.be.equal(true);
        expect(c1.domNode.find(".visible")).to.exist;
    })

    const c2 = renderComponent(ElementFader, {visible: false});
    it('is NOT visible if VISIBLE prop is set to FALSE', () => {
        expect(c2.instance.props.visible).to.be.equal(false);
        expect(c2.domNode.find(".visible")).to.not.exist;
    })    

    const c3 = renderComponent(ElementFader);
    it('is visible if VISIBLE prop is NOT set', () => {
        expect(c3.instance.state.visible).to.be.equal(true);
        expect(c3.domNode.find(".visible")).to.exist;
    })      

});