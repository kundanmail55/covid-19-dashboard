import React from 'react';
import styled from 'styled-components';


const StyledTable = styled.table`
    margin: 0 auto;
    border-radius:3px;
    td, th {
        height: 2rem;
        border: 1px solid #ccc;
        text-align: center;
        padding: 5px 10px;
        border-radius:3px;
    }
    th {
        background: #f6f6f7;
        border-color: white;
        border-radius: 3px;
        color: #6c757d;
        text-align: start;
    }
`;


const TableRow = ({data}) => {
    return <tr>
            <th>{data.state}</th>
            <td>{data.confirmed}</td>
            <td>{data.active}</td>
            <td>{data.recovered}</td>
            <td>{data.deaths}</td>
        </tr>

}

export const Table = ({datatable}) => {
    const data = JSON.parse(JSON.stringify(datatable));
    data.splice(0, 1);
    return (
        <div style={{height: 695 , overflow: 'auto'}}>
            <StyledTable>
            <thead>
            <tr>   
                <th>State</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deceased</th>
            </tr>
            </thead>
            <tbody>
                {data.map((dt, index) => <TableRow data={dt} key={index}/>)}
            </tbody>
    </StyledTable>
    </div>)
}