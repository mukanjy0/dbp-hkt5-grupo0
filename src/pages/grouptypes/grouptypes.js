import React from "react";
import { useEffect, useState } from "react";
import { fetchGroupTypes } from "../../api/dataService";
import "devextreme/data/odata/store";
import DataGrid, { Column } from "devextreme-react/data-grid";

export default function GroupTypesPage() {
  const [groupTypes, setGroupTypes] = useState();

  useEffect(() => {
    fetchGroupTypes()
      .then((response) => {
        const data = response.data;

        setGroupTypes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DataGrid
      className={"dx-card wide-card"}
      dataSource={groupTypes}
      showBorders={false}
    >
      <Column dataField="id" width={50} />
      <Column dataField="name" />
    </DataGrid>
  );
}
