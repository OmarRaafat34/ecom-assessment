import classes from "./optimization.module.scss";
import { Profiler, useState } from "react";
import ComponentWithIssues from "../../components/componentWithIssues/componentWithIssues";
import EcomButton from "../../components/EcomButton/EcomButton";
import { useNavigate } from "react-router-dom";
import { ReactProfilerHandler } from "../../const";

const Optimization = () => {
  const items = Array.from({ length: 1000 }, (_, i) => i);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div className={classes.optimizationWrapper}>
      <h2>Optimization Before</h2>
      <p>Task 5: Optimize React Component</p>
      <h4>Explanation:</h4>
      <p>
        Here is an array of length 1000 that is mapped on and each item in the
        array <br />
        calls a function that does a for loop of length 1000000 to increment a
        sum value <br />
        then reutrns the final sum value. Finally, the sum is displayed for each
        item in th array
      </p>
      <p>
        Now the whole process is repeated each time you press on the Increment
        button below <br />
        causing the component to take alot of time while rendering the result
      </p>
      <Profiler id="Counter" onRender={ReactProfilerHandler}>
        <div>
          <EcomButton onClick={() => setCount(count + 1)} title="Increment" />
          <p>Count: {count}</p>
        </div>
      </Profiler>
      <EcomButton
        title="Go to Optimized component"
        onClick={() => navigate("/optimization-after")}
      />
      <h4>Result:</h4>
      <div className={classes.itemsMapper}>
        {items.map((item) => (
          <ComponentWithIssues key={item} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Optimization;
