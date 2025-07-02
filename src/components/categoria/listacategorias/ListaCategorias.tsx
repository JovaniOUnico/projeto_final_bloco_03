import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar } from "../../../services/Service";

function ListaCategorias() {

    const navigate = useNavigate();

    const [Categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias)
    }

    useEffect(() => {
        buscarCategorias()
    }, [Categorias.length])

    return (
        <>
            {Categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Categorias.map((Categoria) => (
                            <CardCategoria key={Categoria.id} Categoria={Categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;