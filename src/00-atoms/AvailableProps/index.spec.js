
import React from 'react'
import { renderComponent, expect } from "../../../test/test_helper";
import AvailableProps from "./";

describe('AvailableProps', () => {
    it('throws an error when "data" prop is not provided', () => {
        const badUse = () => renderComponent(AvailableProps);
        expect(badUse).to.throw(); 
    })    

    it('bar to be equal to "some string"', () => {
        const c1 = renderComponent(AvailableProps, {data: {foo: 0, bar: "some string", foobar: [4,"3",2,1]} });
        expect(c1.instance.props.data.bar).to.equal("some string");
    })    

});