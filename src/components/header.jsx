import AddModal from "./addModal.jsx";

const header = () => {
  const currentDayMonthYear = new Date();
  const currentDay = currentDayMonthYear.toDateString();

  return (
      <>
      <nav className="border-b-4 flex justify-between items-center px-4 pe-2 h-10">
          <h1 className='text-3xl font-bold'>Coco.</h1>
          <div className="flex-grow"></div>
          <div className="flex gap-4 items-center">
            <div>{currentDay}</div>
              <div>
                  {AddModal()}
              </div>
          </div>


      </nav>
    </>
  )
}

export default header;