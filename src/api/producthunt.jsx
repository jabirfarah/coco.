
import { useState, useEffect } from "react";

const ProductHunt = () => {
    const [productHuntItems, setProductHuntItems] = useState([]);
    const url = 'https://api.producthunt.com/v2/api/graphql'
    const query =`
        {
            posts {
                nodes {
                    id
                    name
                    url
                    votesCount
                    tagline
                    thumbnail {
                        url
                    }
                }
                        
            }
        }
    `
    useEffect( () => {const phCall = async () => {
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
        await setProductHuntItems(dataParse.data.posts.nodes);
        await console.log(dataParse.data.posts.nodes)
        return  dataParse;
    }
        phCall().then();
        }, []);


    return (
        <section id="product-hunt" className="h-full w-full border-r bg-white mb-2 shadow-xl flex flex-col flex-shrink-0 max-w-md snap-center">
            <div className="border">
                <header className="flex items-center align-middle  my-1 mr-2 text-sm tracking-widest">
                    <img className="w-7 h-7 mr-2 mx-2" alt="Product Hunt Logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fpopular-services-brands-vol-2%2F512%2Fproduct-hunt-1024.png&f=1&nofb=1&ipt=8ee3711ce5423811d154888c2ba24ddda3ef909c44c99427673082f1fbd99c67&ipo=images"/>
                    <h1 className="text-lg"> <a target="_blank" rel="noreferrer" href="#">Product Hunt</a> </h1>
                </header>
            </div>
            <div className="flex-1 overflow-auto">
            {productHuntItems.map((post) =>
                <a key={post.id} className="flex gap-2 hover:bg-gray-50 justify-between p-2" href={post.url}>
                    <div className="flex gap-2">
                        <img className=" h-12 w-12 rounded-lg mt-2" src={post.thumbnail.url} alt={post.name} border="1px solid black" />
                        <div>
                            <h1 className="font-bold "> <a target="_blank" rel="noreferrer" href={post.url}>{post.name}</a> </h1>
                            <p className="text-gray-500">{post.tagline}</p>
                        </div>
                    </div>
                    <div className="border flex flex-col w-10 h-12 items-center text-xs justify-end pb-1 flex-shrink-0">
                        <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
                        <h1>{post.votesCount}</h1>
                    </div>
                </a>
            )}
            </div>
        </section>
    )
}


export default ProductHunt;
