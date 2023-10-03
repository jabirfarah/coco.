import { useState, useMemo, useEffect } from 'react'

// This gives the top stories
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


// Need to get 30 IDs from the top stories API Call
// Then take that ID and run the story API call on all of them

const Article = () => {
        const [hn, setHN] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
        const cos = async () => {
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
            setIsLoading(false);
            setHN(lstStory);
            console.log("finished!")
            return lstStory;
    }
        cos();
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

    return `${currDay > 0 ? `${Math.round(currDay)}d` : currHours > 0 ? `${Math.round(currHours)}h` : `${Math.round(currMinutes)}m`}`;
}

  return (
    <>
  
      <ul className="flex flex-col border-2 border-red-500">
      { hn.map((article) => (
            <li key={article.id} className=" text-left w-[400px]">
                <div className=" ">
                    
                    <a rel="noreferrer" href={article.url} target="_blank">{article.title}</a>
                    <p className="text-sm text-gray-400 pt-0.5 px-3"> <span className="text-orange-600">Hacker News</span> • {getReadableDate(article.time)}</p>
                 
                </div>
            </li>
      ))  }

      </ul>

      </>
  )
}

export default Article;