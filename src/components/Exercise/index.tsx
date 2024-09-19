import { useParams } from "react-router-dom";

function Exercise() {
  const { id } = useParams(); // Get the dynamic ID from the route

  return (
    <div>
      <h1>Exercise Page</h1>
      <p>ID: {id}</p> {/* Display the dynamic ID */}
    </div>
  );
}

export default Exercise;
