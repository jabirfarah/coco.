import { useState, useEffect } from "react";
export default function GithubTrending() {
    const [trendingRepo, setTrendingRepo] = useState([]);

    useEffect( () => {const fetchTrendingRepo = async () => {
        // https://api.gitterapp.com/repositories?since=weekly

            const trendingRepoMonthly = await fetch('https://api.gitterapp.com/repositories?since=monthly')
            const trendingRepoStringify = JSON.stringify(await trendingRepoMonthly.json());
            const trendingRepoParse = await JSON.parse(trendingRepoStringify);
            await setTrendingRepo(trendingRepoParse);
            await console.log(trendingRepoParse);


        }
        fetchTrendingRepo().then();
    }, []);
    return (

        <>
            <div id="github-trending" className="h-full w-full flex flex-col flex-shrink-0">
                <header className="gap-2 flex items-center align-middle justify-center p-2 mb-4 border-b-2 border-red-500 text-sm text-gray-400 font-bold uppercase tracking-widest ">
                    <img className="w-6 h-6" alt="Github Logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fgithub-icon-1600.png&f=1&nofb=1&ipt=73956cb1a6f9ec97329d31637c34b1da9e46b7d4ffcdefc07f4df5b02582f78d&ipo=images"/>
                    <h1> <a target="_blank" rel="noreferrer" href="#">Github Trending</a> </h1>
                </header>
                <div className="flex-1 overflow-auto ">
                    {trendingRepo.map((repo) =>
                        <div key={repo.id} className="flex gap-2 hover:bg-gray-50 ">
                            <img className=" h-10 w-10 rounded-lg" src={repo.avatar} alt={repo.name} border="1px solid black" />
                            <div>
                                <h1 className="font-bold"> <a target="_blank" rel="noreferrer" href={repo.url}>{repo.name}</a> </h1>
                                <p>{repo.description}</p>
                            </div>
                            <div className="border-2 flex flex-col w-10 h-12 items-center">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
                                <h1>{repo.stars}</h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
