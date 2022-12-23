import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../../redux/states/criptosSlice";
import { resetCoins } from "../../redux/states/criptosSlice";

const DetailApi = () => {
  const dispatch = useDispatch();
  const infoApi = useSelector((state) => state.coins.coins);
  const { id } = useParams();
  // console.log(id, 'id')
  const apiFilter = infoApi.filter((f) => f.id === id);
  console.log(apiFilter, "filter");

  useEffect(() => {
    // dispatch(resetCoins());
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="bg-grey dark:bg-greyLight">
      {apiFilter.map((f, i) => {
        return (
          <div
            key={i}
            className="text-greyText pt-10 text-center font-bold text-lg h-screen"
          >
            <h2 className="text-7xl">{f.name}</h2>
            <div className="flex justify-center mt-4 mb-4">
              <img src={f.image} alt="" />
            </div>
            <h4 className="mt-4 text-3xl">Precio: {f.current_price}</h4>
            <h4 className="mt-4 text-3xl">Market cap: {f.market_cap}</h4>
            <h4 className="mt-4 text-3xl">
              Cambio de precio en 24hs: {f.price_change_24h}
            </h4>
            <h4 className="mt-4 text-3xl">
              Porcentaje de cambio de precio en 1h:{" "}
              {f.price_change_percentage_1h_in_currency}
            </h4>
          </div>
        );
      })}
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

export default DetailApi;
