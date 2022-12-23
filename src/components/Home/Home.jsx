import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../../redux/states/criptosSlice";
import { fetchRandomCoin } from "../../redux/states/randomCriptoSlice";
import CardDetail from "../CardDetail/CardDetail";
import Pagination from "../Pagination/Pagination";
import img from "../../assets/ag-r.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    const dispatch = useDispatch();
    const infoApi = useSelector((state) => state.coins.coins)
    const infoRandom = useSelector((state) => state.randomCoin.randomCoin)
    // console.log(infoRandom, 'selector')
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const maxPage = infoApi.length / perPage
    const currentInfo = infoApi.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    )

    useEffect(() => {
      dispatch(fetchCoins());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchRandomCoin());
      }, [dispatch]);


      useEffect(() => {
        const interval = setInterval(() =>{
            dispatch(fetchCoins());
        }, 120000)

        return () => clearInterval(interval)
      }, [dispatch]);

      useEffect(() => {
        const interval = setInterval(() =>{
            dispatch(fetchRandomCoin());
        }, 120000)

        return () => clearInterval(interval)
      }, [dispatch]);

    
      const paginado = (nroPagina) =>{
        setCurrentPage(nroPagina)
    }

    return(
        <div className="bg-grey dark:bg-greyLight text-greyText text-center font-bold text-lg">
            <NavBar/>
            <div className="flex flex-wrap justify-center ">
                {
                    <Link to="/detail/ag">
                        <div className="border-2 border-orange rounded pt-2 pb-3 mb-5 mt-10 w-[400px] h-[420px] ml-3 
                        transform hover:scale-110 transition duration-300">
                            <h3>Argentum</h3>
                            <h4>Current price: {infoRandom[0]}</h4>
                            <h4>Market cap: {infoRandom[1]}</h4>
                            <img src={img} alt="" />
                            
                        </div>
                    </Link>
                }
                {
                    currentInfo.map((e,i) =>{
                       return(
                        <div key={i} className="ml-6">
                            <Link to ={`/detail/${e.id}`}>
                                <CardDetail detail={e}/>
                            </Link>
                        </div>
                       )
                    })
                }
            </div>
            
            <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
          />
        </div>
    )
}

export default Home;