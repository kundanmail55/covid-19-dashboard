import React from 'react';
import { DashboardPage, Navbar } from 'components/Pages/Dashboard';
import { shallow, mount } from 'enzyme';
import { Table } from 'components/Common';

let NavbarWrapper, DashboardWrapper, TableWrapper;
beforeEach(() => {
    const props = {
        data: {auth: true},
        getCovidRequest: jest.fn()
    }
    const tableprops = { datatable: []}
    NavbarWrapper = shallow(<Navbar />);
    DashboardWrapper = mount(<DashboardPage {...props}/>)
    TableWrapper = mount(<Table {...tableprops}/>)
});

describe('NavBar Test Suite', () => {
    it(`to check if header is present`, () => {
        expect(NavbarWrapper.find('styled.h1').exists())
    })

    it(`to check if signout button is present`, () => {
        expect(NavbarWrapper.find('styled.button').exists())
    })
})


describe('Table Test Suite', () => {
    it (`it validate tr in table`, () => {
        expect(TableWrapper.find('tr').length).toEqual(1)
    })

    it (`it validate tr in table`, () => {
        expect(TableWrapper.find('thead').length).toEqual(1)
    })

    it (`it validate tr in table`, () => {
        expect(TableWrapper.find('tbody').length).toEqual(1)
    })
})
