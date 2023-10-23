import { useState } from "react";

export default function GithubTrending(frequency) {
    const [trendingRepo, setTrendingRepo] = useState([]);

    const fetchTrendingRepo = async () => {
        const response = await fetch(`https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10`);
        const data = await response.json();
        setTrendingRepo(data.items);
    }

    return (

        <>
        <div></div>
        </>
    )
}
