import { useGetUsersQuery } from "../services/users";


function rtk(){
    const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();
    return(
<div className="App">
      
      <h1>React Redux Toolkit RTK Query</h1>
      {isLoading && "Loading..."}
      {isError && error.message}
      {isSuccess &&
        data &&
        data.map((user, i) => <h1 key={user.id}>{user.name}</h1>)}
    </div>
    )
}
export default rtk;