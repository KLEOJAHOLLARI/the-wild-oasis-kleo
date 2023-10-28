import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [serachParams, setSearchParams] = useSearchParams();
  const sortBy = serachParams.get("sortBy", "");

  function handleChange(e) {
    serachParams.set("sortBy", e.target.value);
    setSearchParams(serachParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    ></Select>
  );
}

export default SortBy;
