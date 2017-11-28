
import React from 'react'
import { TestUtils, renderComponent, expect } from "../../../test/test_helper";
import ImageLoader from "./index";
import { setTimeout } from 'timers';

describe('ImageLoader', () => {

    const c1 = renderComponent(ImageLoader, {src: "http://placehold.it/150x124/11111111"},  {visible: true});    
    const {instance, domNode} = c1;
    
    it('image is NOT yet loaded', () => {
        expect(instance.state.loaded).to.be.equal(false);
    })   
    
    it('image IS loaded', () => {
        /*
        * JSDOM does not call image.onload since v10.x
        * https://github.com/tmpvar/jsdom/issues/1816
        */
        instance.onLoad();
        expect(instance.state.loaded).to.be.equal(true);
    })      
   
});