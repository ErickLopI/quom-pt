'use client'
import { useParams } from "next/navigation";
import { useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'


const page = () => {
    const param = useParams();
    const [data, setData] = useState(null)
    const router = useRouter()

    const fecthComic = async (id) =>{
        try {
            const URL = `${process.env.NEXT_PUBLIC_URL_COMICS}/${param.id}?&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
            const res=  await  fetch(URL)
            const data = await res.json()
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(  () => {
        fecthComic(param.id)
      }, [param.id])

  return (
    <> 
    <button className="group flex font-semibold text-lg	 leading-6 text-slate-700 hover:text-rose-700 dark:text-rose-700 dark:hover:text-rose-700 m-6" type="button" onClick={() => router.push('/')}>
    <svg viewBox="0 -9 3 24" className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300"><path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      Regresar
    </button>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 mb-5 h-500px min-h-full">
        <div className="flex justify-center">
            <img
            className="h-full w-80 object-cover"
            src={`${data?.results[0]?.thumbnail.path}.${data?.results[0]?.thumbnail.extension}`}
            alt={data?.results[0]?.title}
        />
        </div>
      
            <div className="sm:p-11 sm:text-center md:text-left lg:text-left">
                <h2 className="text-2xl font-medium uppercase text-dark-800 lg:text-4xl">
                    {data?.results[0]?.title}
                </h2>
                <p className="mt-4">
                    { data?.results[0]?.textObjects[0]?.text ? (
                        <>
                        <strong className="font-bold"> Description : </strong>
                        { data?.results[0]?.textObjects[0]?.text}
                     </>
                    ): null
                    }
                </p>
        
                <div className="mt-8">
                    {data?.results[0]?.prices[0] ? ( <><strong className="font-bold"> Prices: $ </strong> {data?.results[0]?.prices[0].price} </>)  : null } 
                </div>
            </div>
     
    </div>

    </>
    
  )
}

export default page