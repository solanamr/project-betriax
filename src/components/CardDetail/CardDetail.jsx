

const CardDetail = ({detail}) => {
    return(
        <div className="border-2 border-orange rounded text-greyText pt-2 pb-3 mb-3 mt-10 w-[400px] h-[420px] 
        transform hover:scale-110 transition duration-300">
            <h3 >{detail.name}</h3>
            <h4 className="">Current price: {detail.current_price} {detail.symbol}</h4>
            <h4>Market cap: {detail.market_cap}</h4>
            <div className="flex justify-center mt-5">
                <img src={detail.image} alt="coint-img" className=""/>
            </div>
        </div>
    )
}

export default CardDetail;