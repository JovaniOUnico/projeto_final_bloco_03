import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ToastAlerta } from "../utils/ToastAlert";

function Navbar() {

    const navigate = useNavigate();

    
    let component: ReactNode


    component = (

        <div className='w-full bg-white text-dark-900 shadow-md
            flex justify-center py-4 shadow-md'>

            <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farmacon</Link>

                <div className='flex gap-4'>
                    <Link to='/postagens' className='hover:underline'>Categorias</Link>
                    <Link to='/temas' className='hover:underline'>Itens</Link>
                </div>
            </div>
        </div>

    )



    return (
        <>
            { component }
        </>
    )
}

export default Navbar