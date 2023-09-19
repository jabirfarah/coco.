import { useState } from 'react'

// This gives the top stories
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


// Need to get 30 IDs from the top stories API Call
// Then take that ID and run the story API call on all of them

const Article = () => {
        const [hn, setHN] = useState([])
        const cos = async () => {
          //Get top stories from Hacker News (only gives me ID's)
            const topStoriesHN = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
            const res = await fetch(topStoriesHN)
            const json = await res.json()
            const hnStringify = await JSON.parse(JSON.stringify(json))
            //push Hacker News stories to state
            const lstStory = []
            // Only getting 30 items as that is the amount for the front page.
            for (let index = 0; index <= 29; index++) {
                // Take ID's and fetch the stories
                const storyHN = await fetch(`https://hacker-news.firebaseio.com/v0/item/${hnStringify[index]}.json?print=pretty`)
                const storyRes = await storyHN.json()
                lstStory.push(storyRes);
            }



            setHN(lstStory)
    }       
 cos().then(() => {

 })


// const getDate = (d) => {
//   return new Date(d * 1000)
// }

const getReadableDate = (d) => {
  const date = new Date(d * 1000)
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  let day = date.getDate();
  day = day.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  let hour = date.getHours()
  hour = hour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  let minutes = date.getMinutes();
  minutes = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

  const m = date.getMinutes();
  const currDate = new Date();

  var hours = (currDate.getTime() - date.getTime()) / ( 1000 * 60 * 60);
  var mins = (currDate.getTime() - date.getTime()) / ( 1000 * 60);
  if  (hours < 1) {
      hours = 0;
  }


  // const h = Math.floor(seconds / 3600);
  // const min = Math.floor(seconds / 60) % 60;
  // seconds = Math.floor(seconds);


    return `${hours > 0 ? `${Math.round(hours)} hours ago` : `${Math.round(mins)} minutes ago`}`;
}

  return (

      <ul>
      { hn.map((article) => (
            <li key={article.id}>
                <a rel="noreferrer" href={article.url} target="_blank">{article.title}</a>
                <div className="text-orange-600">Hacker News</div>
                <div>{getReadableDate(article.time)}</div>
            </li>
      ))}
      </ul>
  )
}

export default Article