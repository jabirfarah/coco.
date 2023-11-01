import { useState, useEffect } from 'react'

// This gives the top stories
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


// Need to get 30 IDs from the top stories API Call
// Then take that ID and run the story API call on all of them

const Article = () => {
        const [hn, setHN] = useState([]);
        useEffect(() => {
        const getStories = async () => {
          //Get top stories from Hacker News (only gives me ID's)
            const topStoriesHN = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
            const res = await fetch(topStoriesHN);
            const json = await res.json();
            const hnStringify = await JSON.parse(JSON.stringify(json));
            //push Hacker News stories to state
            const lstStory = [];
            // Only getting 30 items as that is the amount for the front page.
            for (let index = 0; index <= 29; index++) {
                // Take ID's and fetch the stories
                const storyHN = await fetch(`https://hacker-news.firebaseio.com/v0/item/${hnStringify[index]}.json?print=pretty`);
                const storyRes = await storyHN.json();
                lstStory.push(storyRes);
            }

            setHN(lstStory);

            return lstStory;
    }
        getStories().then();
        }, []);

// const getDate = (d) => {
//   return new Date(d * 1000)
// }

const getReadableDate = (d) => {
  const date = new Date(d * 1000)


  const currDate = new Date();

  let currHours = (currDate.getTime() - date.getTime()) / ( 1000 * 60 * 60);
  let currMinutes = (currDate.getTime() - date.getTime()) / ( 1000 * 60);
  let currDay = (currDate.getTime() - date.getTime()) / ( 1000 * 60 * 60 * 24);

    if (currDay < 1) {
        currDay = 0;
    }
  if  (currHours < 1) {
      currHours = 0;
  }
  if (currHours > 24) {
      currHours = 0;
  }

    return `${currDay > 0 ? `${Math.round(currDay)} days ago` : currHours > 0 ? `${Math.round(currHours)} hours ago` : `${Math.round(currMinutes)} minutes ago`}`;
}


  return (

    <section className="h-full w-full border bg-white mb-2 shadow-xl flex flex-col flex-shrink-0 max-w-md">
        <div className="border">
          <header className='flex items-center align-middle  my-1 mr-2 text-sm tracking-widest'>
            <img className="w-5 h-5 mr-2 mx-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fycombinator-icon-256x256-rkgflvjo.png&f=1&nofb=1&ipt=dc5b3b1790dcd6a2ef14f95fa864c5369506b38c7fdeba2171aa8c0931e9ddc8&ipo=images" alt=""></img>
            <div className="text-lg">Hackernews</div>
          </header>
        </div>
      <ul className="flex-1 overflow-auto">
          {
              hn.map((article) => (
                <li key={article.id} className="hover:bg-gray-50">
                    <div className="pb-2">
                        <a rel="noreferrer" href={article.url} target="_blank">{article.title}</a>
                        {<p className="text-xs text-gray-400 pt-0.5 px-3 flex gap-1">
                            <span className="text-orange-600">
                                {`• ${article.score} points`}
                            </span>
                            • <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                            {getReadableDate(article.time)} • <a className="flex gap-1" href={`https://news.ycombinator.com/item?id=${article.id}`} target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            Comments
                        </a>
                        </p>}
                    </div>
                </li>
          ))}
      </ul>
      </section>
     
  )
}


export default Article;