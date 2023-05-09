import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
//ket noi redux
import { useSelector, useDispatch } from "react-redux";
import MultipleRowSlick from "../../components/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeMovie from "./HomeMovie/HomeMovie";
import HomeMenuSelect from "./HomeMenuSelect/HomeMenuSelect";

export default function Home(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("listFilm", arrFilm);
  const dispatch = useDispatch();
  // console.log('propsHome',props);
  console.log("test interrator", heThongRapChieu);

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(layDanhSachHeThongRapAction());
  }, []);

  return (
    <div className="bg-dark" style={{ marginTop: "-22px" }}>
      <HomeCarousel />
      {/* <HomeMenuSelect heThongRapChieu={heThongRapChieu}/> */}
      <section className="text-gray-600 body-font ">
        <div className="container px-5 pb-5  mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
      <div className="mx-36 mt-4">
        <HomeMovie />
      </div>
    </div>
  );
}
