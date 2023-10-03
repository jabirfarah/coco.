
import { useState, useCallback, useEffect } from "react";

const ProductHunt = () => {
    const [productHunt, setProductHunt] = useState([]);
    const url = 'https://api.producthunt.com/v2/api/graphql'
    const query = `
        {
            posts {
                nodes {
                    id
                    name
                    url
                    votesCount
                }
                        
            }
        }
    `
    const phCall = useCallback(async () => {


        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'fIRpzn27qBDrjwSOhLUQzRhtkDbXYXXcnCd2amb9odg'
            },
            body: JSON.stringify({ query })
        })
        const data = await response.json()
        const dataParse = await JSON.parse(JSON.stringify(data))
        setProductHunt(data);
        console.log(productHunt)
        return  dataParse;
    },  [url, query, productHunt])





    return (
        <div>
        {/*    <h1>Product Hunt</h1>*/}
        {/*    <button onClick={phCall}>Click</button>*/}
        {/*    {productHunt.data.posts.nodes.map((post) =>*/}
        {/*        <div key={post.id}>*/}
        {/*    <h1>{post.name}</h1>*/}
        {/*    <h1>{post.votesCount}</h1>*/}
        {/*    <h1>{post.url}</h1>*/}


        {/*</div>*/}
        {/*    )}*/}

        </div>







    )
}


export default ProductHunt;
