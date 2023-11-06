import React from 'react';
import { useEffect, useState } from 'react';
import { fetchGroups, fetchPersons } from '../../api/dataService';
import 'devextreme/data/odata/store';
import DataGrid, { Column, } from 'devextreme-react/data-grid';

export default function Persons() {
    const [groupsWithPersonCount, setGroupsWithPersonCount] = useState();
    
    useEffect (() =>{
        fetchPersons()
        .then((response)=>{
            const PersonsData = response.data;

            console.log(PersonsData);
            setGroupsWithPersonCount(PersonsData.map(persons =>({
                id: persons.id,
                name: persons.name,
            }))) 
        }).catch((error) =>{
            console.log(error);
        })    
    },[]);

  return (
    <DataGrid

    className={'dx-card wide-card'}
    dataSource={groupsWithPersonCount}
    showBorders={false}
    >
        <Column dataField='id' width={50} />
        <Column dataField='name' />
        <Column dataField=

      </DataGrid>
  )
}
