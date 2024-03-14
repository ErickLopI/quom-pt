'use client'

import { useRouter } from 'next/navigation'

const Button = ({id}) => {
    const router = useRouter()

  return (
    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4' type="button" onClick={() => router.push(`/comic/${id}`)}>
        Ver Detalle
    </button>
  )
}

export default Button