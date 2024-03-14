import {generateHash, currentTime } from '../Utils/generalFunctions'
import Button from './Button'

async function getData() {
    try {
      const URL = `${process.env.NEXT_PUBLIC_URL_COMICS}?ts=${currentTime()}&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${generateHash()}`
      const res = await fetch(URL, {cache: 'no-store'})
      return res.json() 
    } catch (error) {
      console.log(error)
    }
   
  }

const GetComics = async  () => {
 const comics = await getData()
 
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
       
    {
        comics.data?.results ?  comics.data?.results.map(comic => (
            <>
                <div key={comic.id} className="w-100 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <img src={comic.thumbnail.path+'.'+comic.thumbnail.extension}
                                alt={comic.title} className="sm:w-100 sm:h-100 md:h-80 md:w-80 object-scale-down rounded-t-xl" />
                        <div className="w-100">
                            <span className="text-gray-400 mr-3 uppercase text-xs px-4 py-3">Comic</span>
                            <p className="text-lg font-bold text-black truncate block capitalize px-4 py-3">{comic.title}</p>
                            <div className="flex justify-center">
                                 <Button id={comic.id}/>
                            </div>
                        </div>
                </div>
            </>
        )) : <p>No hay datos...</p>
    }
    </div>
    </>
    
  )
}

export default GetComics