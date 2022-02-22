import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>Order Confirmed</div>
            <button onClick={()=>navigate(-1)}>Go back</button>   
        </div>
    )
    //navigate(-1) means it goes back 
}

