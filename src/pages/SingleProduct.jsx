import {useParams} from "react-router-dom";
import {Container} from "@mantine/core";

const SingleProduct = () => {
    // there will be an ID of a product passed as a path param (and other query values)
    const params = useParams();

    //get product via  axios.get("/api/products/{id}") -> returns a Promise

    return (
        <Container>
            <div>
                something about product
                {/*bookmark system maybe? just as a future feature*/}
                <div>comment section?</div> {/*with some adjustments to datamodel.... again.......*/}
            </div>
        </Container>
    );
}

export default SingleProduct;
