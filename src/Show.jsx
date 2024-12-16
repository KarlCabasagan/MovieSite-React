import { useContext, useEffect, useRef } from "react"
import { SelectedShowContext, ShowContext } from "./App"

function Show({ showImages, index }) {
    const [showModal, setShowModal] = useContext(ShowContext)
    const[selectedShow, setSelectedShow] = useContext(SelectedShowContext)
    const elementRef = useRef(null);
    const movieIndex = index

    useEffect(() => {
        const element = elementRef.current
    
        const handleTransitionEnd = () => {
            if (!showModal) {
                element.classList.remove('z-[100]')
                element.classList.add('z-[-1]')
            }
        }
    
        element.addEventListener('transitionend', handleTransitionEnd)
    
        return () => {
            element.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [showModal])

    useEffect(() => {
        const element = elementRef.current
        element.classList.add('z-[-1]')
    }, [])

    return (
        <div ref={elementRef} className={(showModal ? "opacity-100 z-[100] " : "opacity-0 ") +"w-screen h-screen absolute bg-[#424874] transition ease-in-out duration-200 flex flex-col items-center"}>
            <div className="w-screen h-1/3 bg-[#F4EEFF] relative mb-4">
                <div onClick={() => {setShowModal(s => false)}} className="p-1 bg-[#424874] absolute shadow-lg rounded-full top-2 left-2 opacity-75" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="52px" viewBox="0 -960 960 960" width="52px" fill="#F4EEFF"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                </div>
                {showImages?.map((showImage, index) => (
                    <img key={index} src={showImage} alt="" className={((index == movieIndex) ? "block" : "hidden" ) + " h-full max-h-full object-cover"} />
                )) ?? ''}
            </div>
            <div className="w-[95%] overflow-auto">
                <h2 className="text-3xl font-bold text-[#DCD6F7] mb-2">{selectedShow? selectedShow.title: ''}</h2>
                <div className="flex items-center mb-4">
                    <div className="flex items-center mr-8">
                        <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DCD6F7"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                        <span className="text-[#DCD6F7] mt-[3px]">{selectedShow ? selectedShow.rating / 10 : ''}</span>
                    </div>
                    <div className="flex items-center  mr-8">
                        <span className="text-[#DCD6F7] mt-[3px]">{selectedShow ? (selectedShow.showType == "movie" ? "Movie" : "Series") : ''}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-[#DCD6F7] mt-[3px]">{selectedShow ? (selectedShow.runtime ? selectedShow.runtime + " min" : "") : ''}</span>
                    </div>
                </div>
                <div className="w-full mb-4">
                    <p className="text-justify text-[#DCD6F7]">{selectedShow ? (selectedShow.overview ? selectedShow.overview : "This show has no overview.") : ''}</p>
                </div>
                <div className="flex mb-4">
                    <span className="text-[#DCD6F7] mr-11">Genre: </span>
                    {selectedShow?.genres.map((genre, index) => (
                       (index === Object.keys(selectedShow.genres).length -1) ? <span key={genre.id} className="mr-1 mt-[1px] text-[#F4EEFF]">{genre.name}</span> : <span key={genre.id} className="mr-1 mt-[1px] text-[#F4EEFF]">{genre.name + ", "}</span>
                    )) ?? ''}
                </div>
                <div className="flex mb-4">
                    <span className="text-[#DCD6F7] mr-5">Released: </span>
                    <span className="mr-1 mt-[1px] text-[#F4EEFF]">{selectedShow ? (selectedShow.releaseYear || selectedShow.firstAirYear) : ''}</span>
                </div>
                <div className="flex mb-4">
                    <span className="text-[#DCD6F7] mr-5">Directors: </span>
                    {selectedShow?.directors.map((director, index) => (
                       (index === Object.keys(selectedShow.directors).length -1) ? <span key={index} className="mr-1 mt-[1px] text-[#F4EEFF]">{director}</span> : <span key={index} className="mr-1 mt-[1px] text-[#F4EEFF]">{director + ", "}</span>
                    )) ?? ''}
                </div>
                <div className="flex mb-4">
                    <span className="text-[#DCD6F7] mr-11">Casts: </span>
                    <div>
                        {selectedShow?.cast.map((cast, index) => (
                        (index === Object.keys(selectedShow.cast).length -1) ? <span key={index} className="mr-1 mt-[1px] text-[#F4EEFF]">{cast}</span> : <span key={index} className="mr-1 mt-[1px] text-[#F4EEFF]">{cast + ", "}</span>
                        )) ?? ''}
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default Show