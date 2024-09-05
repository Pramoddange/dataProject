import axios from "axios";
import { actions} from './action';


export async function featchData(dispatch) {
    
    try {
        const response = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        dispatch({ type: actions.DATA_SUCCESS, payload: response.data });
    }
    catch (error) {
        console.log(error);
    }
}