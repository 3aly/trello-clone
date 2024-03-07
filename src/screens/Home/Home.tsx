import { HomeHeader, TaskBoard } from "@components/organisms";
import { useSelector } from "react-redux";
import { AppState } from "../../types/props";

function Home() {
  const taskBoards = useSelector((state: AppState) => {
    return state.boards;
  });
  return (
    <div>
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
