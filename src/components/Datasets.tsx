import { useEffect, useState } from "react";
import { extractAndCompareDate } from "../utils/dateUtils";
import axios from "axios";
import { DownloadIcon } from "./../assets/Icons";
import { Link } from "react-router-dom";

function Datasets() {
  const [datasets, setDatasets] = useState<any>([]);
  const handleDatasets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/dataset/allDataset"
      );
      setDatasets(response.data); // Update state with response data
      console.log(response.data); // Update state with response data
    } catch (error) {
      console.error("Error fetching datasets:", error);
    }
  };

  useEffect(() => {
    handleDatasets();
  }, []);

  return (
    <>
      <div className="datasetContainer">
        <ul>
          {datasets.map((dataset: any) => (
            <li className="datasetCard" key={dataset.id}>
              {" "}
              <Link to={"/dataset/" + dataset.id}>
                {dataset.id}
                <p className="datasetDetails fs-10 space-0">
                  Updated {extractAndCompareDate(dataset.lastModified)}
                  <span>
                    <DownloadIcon />
                    {dataset.downloads}
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Datasets;
