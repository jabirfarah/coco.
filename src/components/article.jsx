import React, { useState } from 'react'

// This gives the top stories
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


// Need to get 30 ID's from the top stories API Call
// Then take that ID and run the story API call on all of them




const Article = () => {
        const [hn, setHN] = useState([

        ])
        const comsec = async () => {
            const topStoriesHN = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
            const res = await fetch(topStoriesHN)
            const json = await res.json()
            const hnStringify = await JSON.parse(JSON.stringify(json))

            const lst = []
            for (let i = 0; i <= 29 ; i++) {
                lst.push(hnStringify[i]);
             
                
            }
            //push Hacker News stories to state
            const lstStory = []
            for (let index = 0; index <= lst.length; index++) {
                const storyHN = await fetch(`https://hacker-news.firebaseio.com/v0/item/${hnStringify[index]}.json?print=pretty`)
                const storyRes = await storyHN.json()
                lstStory.push(storyRes)
            }
            setHN(lstStory)
    }       
 comsec();
 let index = 0
  return (
    hn.map((story) => (
        
        <div key={index + 1}>
            <a key={index++} href={story.url} target='_blank'>{story.title}</a>
            </div>
        
    ))
  )
}

export default Article