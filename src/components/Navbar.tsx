import { Link } from "react-router-dom"

function Navbar() {




    return (
        <>
            <div className='w-full bg-white text-dark-900 shadow-md flex justify-center py-4 shadow-md'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Farmacon</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/categoria/nova' className='hover:underline'>Cadastrar Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar