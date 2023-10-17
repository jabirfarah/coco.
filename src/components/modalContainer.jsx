import {useState} from "react";
import AddModal from "./addModal.jsx";

export function modalContainer() {
    const [addHN ,setAddHN] = useState(false)
    const [addPH ,setAddPH] = useState(false)


    return (
        <AddModal addHN={addHN} addPH={addPH}/>
    )
}

