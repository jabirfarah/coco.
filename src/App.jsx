import HackerNews from './api/hackernews.jsx';
import ProductHunt from "./api/producthunt.jsx";
import {Fragment, useState, useEffect} from "react";
import {Dialog, Transition} from "@headlessui/react";
import GithubTrending from "./api/githubTrending.jsx";

function App() {
    const [isAnyFeedAdded, setIsAnyFeedAdded] = useState(false);
    
    //Getting today's date
    const today = new Date();
    let date = `
    ${today.toLocaleDateString('en-EN', { weekday: 'short' })}, 
    ${today.toLocaleDateString('en-EN', { month: 'short' })} 
    ${today.getDate()}, 
    ${today.toLocaleDateString('en-EN', { year: 'numeric' })}
    `;

    let [isOpen, setIsOpen] = useState(false);
    let [hnIsAdded, setHNIsAdded] = useState(false);
    let [phIsAdded, setPHIsAdded] = useState(false);
    let [ghIsAdded, setGHIsAdded] = useState(false);
    const [feed, setFeed] = useState(getFromLocalStorage());
    let [i, setI] = useState(0);

    function getFromLocalStorage() {
        const storedData = localStorage.getItem('feed');
        if (storedData) {
            return JSON.parse(storedData);
        }
        return [];
    }

    function saveToLocalStorage(data) {
        
        localStorage.setItem('feed', JSON.stringify(data));
    }

    function checkifFeedisEmpty() {
        if (feed.length == 0) {
            setIsAnyFeedAdded(false)

        } else {
            setIsAnyFeedAdded(true)

        }

    }

    useEffect(() => {
        // Check if feed is already added
        if (feed.some(feed => feed.type === "hackernews")) {
            setHNIsAdded(true);
        }
        if (feed.some(feed => feed.type === "producthunt")) {
            setPHIsAdded(true);
        }
        if (feed.some(feed => feed.type === "github")) {
            setGHIsAdded(true);
        }
        saveToLocalStorage(feed);
        
      
    }, [feed]);


    useEffect(() => {
        checkifFeedisEmpty()
    }, [feed]);
    function toggleHNFeed() {
        // Convert the component to a serializable format, e.g., a plain object
        const newFeedItem = { id: i, type: 'hackernews', value: 'HackerNews'};
        setFeed([...feed, newFeedItem]);
        setI(i + 1);
        setHNIsAdded(true);
        checkifFeedisEmpty()
    }


    function togglePHFeed() {
        // Convert the component to a serializable format, e.g., a plain object
        const newFeedItem = { id: i, type: 'producthunt', value: 'ProductHunt'};
        setFeed([...feed, newFeedItem]);
        setI(i + 1);
        checkifFeedisEmpty();
    }


    function toggleGHfeed() {
        setFeed([...feed, { id: i, type: "github", value: "GithubTrending"}])
        setI(i + 1)
        setGHIsAdded(true)
        checkifFeedisEmpty()
    }

    function removeHNFeed() {
        // check where HN is then remove it
        setFeed(feed.filter(feed => feed.type !== "hackernews"))
        setHNIsAdded(false);
        checkifFeedisEmpty()
    }

    function removePHFeed() {
        setFeed(feed.filter(feed => feed.type !== "producthunt"))
        setPHIsAdded(false);
        checkifFeedisEmpty()
    }

    function removeGHFeed() {
        setFeed(feed.filter(feed => feed.type !== "github"))
        setGHIsAdded(false);
        checkifFeedisEmpty()

    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
    <>
        <div className="h-screen flex flex-col font-nunito overflow-x-auto">
                    <nav className="border-b flex justify-between items-center px-4 pe-2 space-x-3s overflow-hidden">
                        <h1 className='text-3xl font-bold'>Coco.</h1>
                        <div className='flex-grow'></div>
                        <div className="flex gap-4 items-center">
                            <div className="text-xs pt-1 text-gray-500">{date}</div>
                            <div className="inset-0 flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="text-sm rounded-sm bg-opacity-20 px-0.5  py-1 font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                >
                                    <svg width="16px" height="16px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 12H12M16 12H12M12 12V8M12 12V16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>                                </button>
                            </div>

                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10 font-nunito" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto font-nunito">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-2 text-left align-middle shadow-xl transition-all">
                                                    <Dialog.Title
                                                        as="h6"
                                                        className="flex items-center h-10 px-4 justify-between text-sm font-medium leading-6 text-gray-900 bg-gray-50 border-b"
                                                    >
                                                        Add Feed
                                                        <button
                                                            type="button"
                                                            className="inline-flex justify-center align-middle items-center rounded-lg border border-transparent  px-2 py-2 text-xs font-medium text-blue-900 hover:bg-gray-100"
                                                            onClick={closeModal}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="0.75em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                                                        </button>
                                                    </Dialog.Title>

                                                    <ul className="mt-2">
                                                        <li className="">
                                                            <div className="flex gap-2 p-4 hover:bg-gray-50 cursor-pointer" onClick={hnIsAdded ? removeHNFeed : toggleHNFeed}>
                                                                <div className="border-2 rounded-lg w-10 h-10 p-[6px]">
                                                                    <img className="rounded-md items-center  h-6 w-6" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fycombinator-icon-256x256-rkgflvjo.png&f=1&nofb=1&ipt=dc5b3b1790dcd6a2ef14f95fa864c5369506b38c7fdeba2171aa8c0931e9ddc8&ipo=images" alt=""/>
                                                                </div>
                                                                <div>
                                                                    <div className="text-xl">Hacker News</div>
                                                                    <div className="text-sm text-gray-400">Top stories of the day</div>
                                                                    {hnIsAdded ? <button id="HN" onClick={removeHNFeed}>Remove</button> : <button onClick={toggleHNFeed}>Add</button>}

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="flex gap-2 p-4 hover:bg-gray-50 cursor-pointer" onClick={phIsAdded ? removePHFeed : togglePHFeed}>
                                                                <div className="border-2 rounded-lg w-10 h-10 p-[6px]">
                                                                    <img className="rounded-md items-center h-6 w-6" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fpopular-services-brands-vol-2%2F512%2Fproduct-hunt-1024.png&f=1&nofb=1&ipt=8ee3711ce5423811d154888c2ba24ddda3ef909c44c99427673082f1fbd99c67&ipo=images" alt=""/>
                                                                </div>
                                                                <div>
                                                                    <div className="text-xl">Product Hunt</div>
                                                                    <div className="text-sm text-gray-400">Trending new releases</div>
                                                                    {phIsAdded ? <button id="PH" onClick={removePHFeed}>Remove</button> : <button id="PH" onClick={togglePHFeed}>Add</button> }
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="flex gap-2 p-4 hover:bg-gray-50 cursor-pointer" onClick={ghIsAdded ? removeGHFeed : toggleGHfeed}>
                                                                <div className="border-2 rounded-lg w-10 h-10 p-[6px]">
                                                                    <img className="rounded-md items-center h-6 w-6" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fgithub-icon-1600.png&f=1&nofb=1&ipt=73956cb1a6f9ec97329d31637c34b1da9e46b7d4ffcdefc07f4df5b02582f78d&ipo=images" alt=""/>
                                                                </div>
                                                                <div>
                                                                    <div className="text-xl">Github Trending</div>
                                                                    <div className="text-sm text-gray-400">Trending repositories</div>
                                                                    {ghIsAdded ? <button id="GH" onClick={removeGHFeed}>Remove</button> : <button id="GH" onClick={toggleGHfeed}>Add</button>}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </div>
                    </nav>

            {isAnyFeedAdded ? 
            //If feed already exists, show the feed
            <>
            <div className="flex flex-grow overflow-x-auto snap-x snap-mandatory h-full bg-white">
                {feed.map((item) => {
                    if (item.type === 'hackernews') {
                        return <HackerNews key={item.id} />;
                    } else if (item.type === 'producthunt') {
                        return <ProductHunt key={item.id} />;
                    } else if (item.type === 'github') {
                        return <GithubTrending key={item.id} />;
                    }
                    return null;
                })}
            </div>
            <div className='fixed flex flex-col justify-end z-[55] bottom-0 end-0 w-full sm:w-96'></div>
            </>
            :
            //If there is no Feed 
            <div className='flex flex-col justify-center items-center h-full text-center'>
                
                    <img 
                    className='h-28 w-28'
                    src='https://cdn0.iconfinder.com/data/icons/files-documents/512/YPS__file_document_add_plus_sheet_paper_page_text-1024.png'></img>

                    <div className='text-xl'>You have not added any feeds yet.</div>
                    <button
                    onClick={openModal} 
                    className="rounded-md bg-black bg-opacity-20 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >Add a feed now.</button>
        
            </div>}
        </div>
    </>
  )
}

export default App;
