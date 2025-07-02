

function Home() {
    return (
        <>
            <div className="flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 text-black">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            A sua loja de Farmacia
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                {/* <ModalCategoria /> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center py-4">
                        <img
                            src="https://i.imgur.com/GwqivDP.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home