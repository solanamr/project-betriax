import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomCoin } from "../../redux/states/randomCriptoSlice";
import img from "../../assets/ag-r.png";

const DetailRandom = () => {
  const dispatch = useDispatch();
  const infoRandom = useSelector((state) => state.randomCoin.randomCoin);

  useEffect(() => {
    dispatch(fetchRandomCoin());
  }, [dispatch]);

  return (
    <div className="bg-grey dark:bg-greyLight text-greyText pt-2 text-center font-bold ">
      {
        <div className="rounded pt-2 pb-3 mb-5 mt-3 h-full w-full">
          <h2 className="text-7xl mb-10">Argentum</h2>
          <div className="flex justify-center w-full">
            <img src={img} alt="" />
          </div>
          <h4 className="mt-4 text-3xl">Current price: {infoRandom[0]}</h4>
          <h4 className="mt-4 text-3xl">Market cap: {infoRandom[1]}</h4>
          <h4 className="mt-4 text-3xl w-full">
            Cambio de precio en 24hs: {infoRandom[2]}
          </h4>
          <h4 className="mt-4 text-3xl w-full">
            Porcentaje de cambio de precio en 1h: {infoRandom[3]}
          </h4>
        </div>
      }
      <div className="flex justify-center">
        <Link to="/">
          <button
            className="bg-grey text-white border-2 border-white rounded-lg mb-10 w-36 h-10 
                    hover:bg-orange hover:border-orange duration-300 font-bold"
          >
            Volver a inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailRandom;
