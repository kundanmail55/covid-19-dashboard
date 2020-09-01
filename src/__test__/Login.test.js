import React from 'react';
import { Form } from 'components/Pages/Login';
import { shallow } from 'enzyme';

let wrapper;
let formElements = [
    {name: 'email', selector: 'form.login [type="email"]', defaultValue: ''}, 
    {name: 'password', selector: 'form.login [type="password"]', defaultValue: ''}, 
    {name: 'registrationEmail', selector: 'form.registration [type="registrationEmail"]', defaultValue: ''}, 
    {name: 'registrationPassword', selector: 'form.registration [type="registrationPassword"]', defaultValue: ''}
];

beforeEach(() => {
    let props = { email: '',
    password: '',
    registrationEmail: '',
    registrationPassword: '',
    errors: {
        email: '',
        password: '',
        registrationEmail: '',
        registrationPassword: ''
    },}
    wrapper = shallow(<Form {...props}/>);
});


describe('Form Element Test Suite', () => {
    formElements.forEach((form) => {
        it(`should render ${form.name} element`, () => {
            expect(wrapper.find(form.selector).length).toEqual(1);
        })
    })
})

describe('Default Values Test Suite', () => {
    formElements.forEach((form) => {
        it(`get ${form.name} default values`, () => {
            expect(wrapper.find(form.selector).prop('value')).toEqual(form.defaultValue);
        })
    })
})