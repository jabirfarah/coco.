import React from 'react'

// This gives the top stories
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


// Need to get 30 ID's from the top stories API Call
// Then take that ID and run the story API call on all of them




const article = () => {

        const comsec = async () => {
        try {
            const topStoriesHN = await 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
            const res = topStoriesHN.json
            console.log(res);
            
            const storyHN = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty'

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>article</div>
  )
}

export default article