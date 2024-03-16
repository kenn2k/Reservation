"use client";
import ClipLoader from "react-spinners/ClipLoader";

interface ILoading {
  loading: boolean;
}
const override = {
  display: "block",
  margin: "100px auto",
};

const loading = ({ loading }: ILoading) => {
  return (
    <ClipLoader
      color="#3B82F6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};
export default loading;
