import { useState, useEffect } from "react";

export default function GithubTrending() {
    const [trendingRepo, setTrendingRepo] = useState([]);

    useEffect(() => {const fetchTrendingRepo = async () => {
        // https://api.gitterapp.com/repositories?since=weekly
        try {
            const options = {
                method: "GET",
                headers: {
                  
                }
            };

            const trendingRepoMonthly = await fetch('https://api.gitterapp.com/repositories?since=monthly', options)
            const trendingRepoJson = await trendingRepoMonthly.json();
            const trendingRepoStringify = await JSON.stringify(trendingRepoJson);
            const trendingRepoParse = await JSON.parse(trendingRepoStringify);
            await setTrendingRepo(trendingRepoParse);
            await console.log(trendingRepoParse);
        } catch (error) {
            console.error(error);
        }
        }
        fetchTrendingRepo();
    }, []);

    const nFormatter = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }
    return (
        <>
            <section id="github-trending" className="h-full w-full border-r bg-white mb-2 shadow-xl flex flex-col flex-shrink-0 max-w-md snap-center">
                <div className="border">
                    <header className="flex items-center align-middle my-1 mr-2 text-sm">
                        <img className="w-5 h-5 mr-2 mx-2 " alt="Github Logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1&ipt=5a928c5b1d40a1ba106a7c6eb942a341380e22a477e0540da0468b8c03f85ae8&ipo=images"/>
                        <h1 className="text-[17px]"> <a target="_blank" rel="noreferrer" href="#">Github Trending</a> </h1>
                    </header>
                </div>
                <div className="flex-1 overflow-auto">
                    {trendingRepo.map((repo) =>
                        <div  className="flex gap-2 hover:bg-gray-50 justify-between p-2">
                            <div className="flex flex-row">
                            <div>
                                <h1 className="font-bold"><a target="_blank" rel="noreferrer" href={repo.url}>{`${repo.author} / ${repo.name}`}</a></h1>
                                <p className="text-sm text-gray-500">{repo.description}</p>
                            </div>
                            </div>
                            <div className="border rounded-md flex flex-col w-10 h-12 items-center text-xs justify-end pb-1 flex-shrink-0 px-6">
                                <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                <h1 className="">{nFormatter(repo.stars)}</h1>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
