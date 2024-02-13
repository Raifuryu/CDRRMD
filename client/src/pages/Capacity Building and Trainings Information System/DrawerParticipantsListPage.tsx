import { Button, Drawer, Select, SelectProps, Space } from "antd";
import React, { FC, useEffect, useState } from "react";

interface Props {
  drawerState: boolean;
}

const DrawerParticipantsListPage: FC<Props> = (props) => {
  const [person, setPerson] = useState([]);

  const [drawerState, setDrawerState] = useState(props.drawerState);

  useEffect(() => {
    fetch(`http://192.168.1.69:3000/api/person`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if data is available before updating the state
        setPerson(data);
      })
      .catch((error) => {
        console.error("Error fetching organization data:", error);
      });
  });

  const closeDrawer = () => {
    setDrawerState(false);
  };

  const showDrawer = () => {
    setDrawerState(true);
  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const options: SelectProps["options"] = person;

  return (
    <Drawer
      title="Participants List"
      width={"auto"}
      onClose={closeDrawer}
      open={drawerState}
      extra={
        <Space>
          <Button onClick={closeDrawer}>Cancel</Button>
          <Button onClick={() => {}}>Submit</Button>
        </Space>
      }
    >
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
        options={options}
        optionRender={(option) => (
          <Space>
            {option.data.first_name} {option.data.middle_name}
            {option.data.last_name}
          </Space>
        )}
      />
    </Drawer>
  );
};

export default DrawerParticipantsListPage;
