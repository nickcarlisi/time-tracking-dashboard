import { useState } from "react";
import "./App.css";
import CategoryContainer from "./components/CategoryContainer";
import categories from "./data.json";

function App() {
  // const [dailyCurrent, setDailyCurrent] = useState(
  //   categories.timeframes.daily.current
  // );
  // const [weeklyCurrent, setWeeklyCurrent] = useState(
  //   categories.timeframes.weekly.current
  // );
  // const [monthlyCurrent, setMonthlyCurrent] = useState(
  //   categories.timeframes.monthly.previous
  // );

  // const setDailyCurrent = () => {
  //   let current = dailyCurrent;
  // };
  // const [current] = useState(categories.timeframes.weekly.current);
  // let current;

  // console.log(current);

  // const handleDailyClick = () => {
  //   console.log("You clicked Daily");
  //   current = categories.timeframes.daily.previous;
  //   console.log(current);
  // };

  // const handleWeeklyClick = () => {
  //   console.log("You clicked Weekly");
  //   current = categories.timeframes.daily.previous;
  // };

  // const handleMonthlyClick = () => {
  //   console.log("You clicked Monthly");
  //   current = categories.timeframes.daily.previous;
  // };

  return (
    <div className="App">
      <button>Daily</button>
      <button>Weekly</button>
      <button>Monthly</button>
      <div>
        {categories.map((category, index) => {
          return (
            <CategoryContainer
              key={index}
              title={category.title}
              // title={title}
              current={category.timeframes.monthly.current}
              previous={category.timeframes.monthly.previous}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
