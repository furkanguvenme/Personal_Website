import { useDispatch, useSelector } from "react-redux";
import "./Switch.css";
import { changeMode } from "../../store/actions/actions";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { toast } from "react-toastify";

export default function Switch() {
  const dispatch = useDispatch();
  const [mode, setMode] = useLocalStorage("mode", false);
  const language = useSelector((store) => store.language);
  const modChange = () =>
    toast.success(
      language == "turkish"
        ? "Mod Başarıyla Değiştirildi!"
        : "Mode Changed Successfully!",
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  const changeHandler = () => {
    modChange();
    setMode(!mode);
    dispatch(changeMode());
  };
  return (
    <>
      <label className="switch" defaultChecked>
        <input type="checkbox" onChange={changeHandler} checked={!mode} />
        <span className="slider"></span>
      </label>
    </>
  );
}
