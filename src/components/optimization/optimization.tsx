import { memo, useCallback, useMemo } from "react";

const OptimizedComponent = memo(({ item }: { item: number }) => {
    const expensiveHandler = useCallback(() => {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += i;
        }
        return sum;
    }, []);

    const summationResult = useMemo(() => expensiveHandler(), [expensiveHandler]);

    return (
        <div>
            {item}: {summationResult}
        </div>
    );
});

export default OptimizedComponent;
