import Card from "./Card"

function Cards({ shows, topShows }) {
    return (
        <div className="w-[95%] h-screen max-h-screen flex flex-col items-center">
            <div className="h-1/3"></div>
            <div className="h-2/3 w-full auto flex justify-between flex-wrap overflow-y-auto no-scrollbar">
                {shows.map((show, index) => (
                    <Card key={show.id} id={show.id} title={show.title} year={show.releaseYear ? show.releaseYear : show.firstAirYear} rating={show.rating / 10} poster={show.imageSet.verticalPoster.w720} show={show} index={index} />
                ))}
                
                {shows ?
                (<div className="w-full flex justify-center items-center">
                    <h2 className="text-2xl font-bold text-gray-700">Something went wrong.</h2>
                </div>) 
                : ""}
                <div className="h-2 w-full"></div>
            </div>
        </div>
    )
}

export default Cards