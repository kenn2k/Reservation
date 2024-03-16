import ClipLoader from "react-spinners/ClipLoader";
interface IClientLoading {
  loading: boolean;
}
const override = {
  display: "block",
  margin: "100px auto",
};

const ClientLoading = ({ loading }: IClientLoading) => {
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
export default ClientLoading;
