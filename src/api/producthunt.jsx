
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
        phCall().then(console.log("finished!"));
        }, []);


    return (
        <div className="w-[50vw]">
            <header className=" gap-2 flex items-center align-middle justify-center p-2 mb-4 border-b-2 border-red-500 text-sm text-gray-400 font-bold uppercase tracking-widest">
                <img className="w-6 h-6" alt="Product Hunt Logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fpopular-services-brands-vol-2%2F512%2Fproduct-hunt-1024.png&f=1&nofb=1&ipt=8ee3711ce5423811d154888c2ba24ddda3ef909c44c99427673082f1fbd99c67&ipo=images"/>
                <h1> <a target="_blank" rel="noreferrer" href="#">Product Hunt</a> </h1>
            </header>
            <div className="h-screen flex-grow overflow-y-auto">
            {productHuntItems.map((post) =>
                <div key={post.id} className="flex gap-3 hover:bg-gray-50">
                    <img className=" h-10 w-10 rounded-lg" src={post.thumbnail.url} alt={post.name} border="1px solid black" />
                    <div>
                        <h1> <a target="_blank" rel="noreferrer" href={post.url}>{post.name}</a> </h1>
                        <p>{post.tagline}</p>
                    </div>
                    <div className="border-2 flex flex-col w-10 h-12 items-center">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
                        <h1>{post.votesCount}</h1>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}


export default ProductHunt;
