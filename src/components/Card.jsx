import { useContext } from "react"
import { MovieIndexContext, SelectedShowContext, ShowContext } from "../App"

function Card(props) {

    const [showModal, setShowModal] = useContext(ShowContext)
    const [selectedShow, setSelectedShow] = useContext(SelectedShowContext)
    const [movieIndex, setMovieIndex] = useContext(MovieIndexContext)

    const handleClick = () => {
        setShowModal(s => true)
        setSelectedShow(s => props.show)
        setMovieIndex(m => props.index)
    }
    
    return (
        <div onClick={handleClick} className="w-[49%] h-64 bg-[#F4EEFF] mt-2 rounded-lg relative shadow">
            <img src={props.poster} alt="" className='object-cover rounded-lg h-full w-full' />
            <div className="bg-[#F4EEFF] w-12 h-6 top-1 absolute right-1 rounded shadow flex justify-center items-center opacity-85">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ffbb00"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                <span className="text-sm mt-[2px] ml-[2px]">{props.rating}</span>
            </div>
            <div className="w-full h-[40%] absolute z-20 bottom-0 bg-gradient-to-t from-[#424874] rounded-lg flex justify-center">
                <div className="w-[95%] h-full flex items-center justify-center">
                    <h2 className="text-white text-center mt-4 line-clamp-2">{props.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card