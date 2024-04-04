import { FallingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <FallingLines color="#4fa94d" width="100" visible={true} />
    </div>
  );
};

export default Loader;
