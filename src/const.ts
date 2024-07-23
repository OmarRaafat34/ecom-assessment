export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const ReactProfilerHandler = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
) => {
    console.log(`Profiler [${id}] - ${phase}`);
    console.log(`Actual Duration: ${actualDuration}`);
    console.log(`Base Duration: ${baseDuration}`);
    console.log(`Start Time: ${startTime}`);
    console.log(`Commit Time: ${commitTime}`);
};
