import classes from "../optimization/optimization.module.scss";
import { Profiler, useState } from "react";
import EcomButton from "../../components/EcomButton/EcomButton";
import OptimizedComponent from "../../components/optimization/optimization";
import { useNavigate } from "react-router-dom";
import { ReactProfilerHandler } from "../../const";

const OptimizationAfter = () => {
    const items = Array.from({ length: 1000 }, (_, i) => i);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (
        <div className={classes.optimizationWrapper}>
            <h2>Optimization After</h2>
            <p>Task 5: Optimize React Component</p>
            <h4>Explanation:</h4>
            <p>
                Here I used React.memo, useMemo and useCallback to memoize the items
                array, <br />
                rendered summation, sum computation function <br />
                and the whole OptimizedComponent
            </p>
            <ul>
                <li>React.memo: prevents OptimizedComponent from re-rendering unless its props change.</li>
                <li>useMemo: used to memoize the items array and the summation result of the expensive computation function.</li>
                <li>useCallback: used to memoize the expensive computation function<br /> to ensure it remains the same between renders unless its dependencies change.</li>
                <li>This results in lower CPU usage and improved performance.</li>
            </ul>
            <p>
                Now when you click on the Increment button below it takes no time as everything is memoized
            </p>
            <Profiler id="Counter" onRender={ReactProfilerHandler}>
                <div>
                    <EcomButton onClick={() => setCount(count + 1)} title="Increment" />
                    <p>Count: {count}</p>
                </div>
            </Profiler>
            <EcomButton
                title="Go to Unoptimized component"
                onClick={() => navigate("/optimization-before")}
            />
            <div className={classes.itemsMapper}>
                {items.map((item) => (
                    <OptimizedComponent key={item} item={item} />
                ))}
            </div>
        </div>
    );
};
export default OptimizationAfter;
