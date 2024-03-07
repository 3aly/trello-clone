import React, { Fragment } from "react";
import { Container } from "@mui/material";
import { HomeHeader, TaskBoard } from "@components/organisms";
import { useSelector } from "react-redux";

function Home() {
  const taskBoards = useSelector(
    (state: { boards: [{ name: string; tasks: [] }] }) => {
      console.log(state);
      return state.boards;
    }
  );
  // console.log("taskBoards", taskBoards);
  return (
    <div
      //   maxWidth="xs"
      style={
        {
          // backgroundColor: "red",
          // padding: "20px",
          // borderRadius: "8px",
          // flex: 1,
          // width: "100%",
          // height: "100%",
        }
      }
    >
      <HomeHeader />
      <div style={{ display: "flex" }}>
        {taskBoards?.map((item: { name: string; tasks: [] }, index) => {
          return <TaskBoard key={index} title={item.name} tasks={item.tasks} />;
        })}
      </div>
    </div>
  );
}

export default Home;
