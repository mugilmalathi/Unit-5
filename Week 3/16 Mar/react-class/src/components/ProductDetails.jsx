import { useParams } from "react-router-dom"


export const ProductDetails = ()=> {
    const {id} = useParams();
    return (
        <div>
            here is the Product Details: {id}
        </div>
    )
}