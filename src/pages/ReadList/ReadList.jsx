import React from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReadList = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book list</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read</h2>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
