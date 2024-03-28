import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function DatasetDetails() {
  const [datasetDetails, setDatasetDetails] = useState([]);
  const params = useParams();
  const datasetId = params.parameter;
  const handleDatasetDetails = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/dataset/dataset/${datasetId}`
    );
    console.log(response.data);
    setDatasetDetails(response.data);
  };
  useEffect(() => {
    handleDatasetDetails();
  }, []);
  return (
    <>
      <Header />
      <div>
        {datasetDetails &&
          Object.entries(datasetDetails).map(([key, value]) => (
            <div key={key}>
              <p>{key}:</p>
              {typeof value === "object" ? (
                // If the value is an object, recursively render its entries
                <div>
                  {Object.entries(value).map(([subKey, value11]: any) => (
                    <p key={subKey}>{subKey}</p>
                  ))}
                </div>
              ) : (
                // If the value is not an object, render it directly
                <p>{value}</p>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
export default DatasetDetails;
