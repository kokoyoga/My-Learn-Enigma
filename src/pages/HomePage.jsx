import {useParams} from "react-router-dom";

function HomePages() {
  const params = useParams();

  return (
    <div className="h-screen w-screen flex flex-col item-center justify-center">
      <h1 className="font-bold text-center">Home Page</h1>
      <p className="text-center font-bold text-red-500">{params.username}</p>
    </div>
  );
}

export default HomePages;
