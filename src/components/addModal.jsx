import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function AddModal() {
    let [isOpen, setIsOpen] = useState(false);
    const [isAddedHN, setIsAddedHN] = useState(false);
    const [isAddedPH, setIsAddedPH] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const addHN = () => {
        if  (isAddedHN === false) {
            setIsAddedHN(true)
        } else {
            setIsAddedHN(false)
        }
        console.log(`I changed it to ${isAddedHN} `)
    }

    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    ⊕
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h6"
                                        className="flex items-center h-12 px-4 justify-between text-lg font-medium leading-6 text-gray-900 bg-gray-50 border-b-2 divide-solid"
                                    >
                                        Add Feed
                                        <button
                                            type="button"
                                            className="inline-flex justify-center align-middle items-center rounded-lg border border-transparent bg-blue-100 px-2 py-2 text-xs font-medium text-blue-900 hover:bg-gray-200"
                                            onClick={closeModal}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="0.75em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                                        </button>
                                    </Dialog.Title>

                                    <ul className="mt-2">
                                        <li className="">
                                            <a className="flex gap-2 p-4 hover:bg-gray-50">
                                                <div className="border-2 rounded-lg w-10 h-10 p-[6px]">
                                                    <img className="rounded-md items-center  h-6 w-6" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fycombinator-icon-256x256-rkgflvjo.png&f=1&nofb=1&ipt=dc5b3b1790dcd6a2ef14f95fa864c5369506b38c7fdeba2171aa8c0931e9ddc8&ipo=images" alt=""/>
                                                </div>
                                                <div>
                                                    <div className="text-xl">Hacker News</div>
                                                    <div className="text-sm text-gray-400">Top Stories of the day</div>
                                                    <button onClick={addHN}>Add</button>

                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex gap-2 p-4 hover:bg-gray-50" href="#">
                                                <div className="border-2 rounded-lg w-10 h-10 p-[6px]">
                                                <img className="rounded-md items-center h-6 w-6" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fpopular-services-brands-vol-2%2F512%2Fproduct-hunt-1024.png&f=1&nofb=1&ipt=8ee3711ce5423811d154888c2ba24ddda3ef909c44c99427673082f1fbd99c67&ipo=images" alt=""/>
                                                </div>
                                                <div>
                                                    <div className="text-xl">Product Hunt</div>
                                                    <div className="text-sm text-gray-400">Trending new releases</div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
