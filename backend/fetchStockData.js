const fetchStockData = async ()=>{
    let result= await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',{
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-25ZGgQifCCSpx7Vs53gu2PR4'}
    })
    result = await result.json();
    result = result.filter((item)=>{
        return item.name=="Bitcoin" || item.name=="Ethereum" || item.name=="Tether" || item.name=="BNB" || item.name=="Solana"
    })
    return result;
}
module.exports=fetchStockData;