import { Oval } from "react-loader-spinner";
import useFetch from "../../components/useFetch/useFetch";
import classes from "./useFetch.module.scss";

const UseFetch = () => {
  const { data, loading, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return (
    <div className={classes.fetchWrapper}>
      <h2>Use Fetch Hook</h2>
      <p>Task2: Implement a Custom Hook</p>
      <div className={classes.fetchWrapper_content}>
        {loading ? (
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#3d9dbe"
            secondaryColor="3d9dbe"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : error ? (
          <div className={classes.error}>{error}</div>
        ) : (
          <div>
            {data?.map((user: any) => <p key={user.id}>{user.name}</p>)}
          </div>
        )}
      </div>
    </div>
  );
};
export default UseFetch;
