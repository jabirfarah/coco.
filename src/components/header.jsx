import AddModal from "./addModal.jsx";

const header = () => {
  const currentDayMonthYear = new Date();
  const currentDay = currentDayMonthYear.toDateString();

  return (
      <>
      <nav className="border-b-4 flex justify-between items-center px-4 pe-2 h-10  ">
        {/* <div className='flex flex-row w-screen align-middle justify-between'>
          <h1 className='font-bold'>Coco.</h1>
          <div className="">⊕</div>
        </div> */}
          <h1 className='text-3xl font-bold'>Coco.</h1>
          <div className="flex-grow"></div>
          <div className="flex gap-4 items-center">
            <div>{currentDay}</div>
            <div className="text-xl flex items-center"> <button>⊕</button> </div>

          </div>

          <div>
              {AddModal()}
          </div>

      </nav>

    </>
        
        

  )
}

export default header;