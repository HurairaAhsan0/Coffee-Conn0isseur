import Images from "next/image";
const CardComponent: React.FC = () => {
    return (
        <div className="ml-40 mr-40">
            <h1 className='text-lg lg:text-xl text-white font-bold mb-10 ml-20 mr-20' style={{ fontSize: '3rem' }}>
                Cityname Stores
            </h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 ml-20 mr-20">
                <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
                    <div className="px-2 py-2 bg-blue-100 bg-opacity-50 ">
                        <h2 className="text-lg font-semibold text-blue-900 ml-1" >Card Title</h2>
                        <div className="relative">
                            <Images src="/coffe2.avif" alt="Image" className="w-full h-auto rounded-lg" width={500} height={500} />
                        </div>
                    </div>
                </div>
                <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
                    <div className="px-2 py-2 bg-blue-100 bg-opacity-50 ">
                        <h2 className="text-lg font-semibold text-blue-900 ml-1" >Card Title</h2>
                        <div className="relative">
                            <Images src="/coffe2.avif" alt="Image" className="w-full h-auto rounded-lg" width={500} height={500} />
                        </div>
                    </div>
                </div>
                <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
                    <div className="px-2 py-2 bg-blue-100 bg-opacity-50 ">
                        <h2 className="text-lg font-semibold text-blue-900 ml-1" >Card Title</h2>
                        <div className="relative">
                            <Images src="/coffe2.avif" alt="Image" className="w-full h-auto rounded-lg" width={500} height={500} />
                        </div>
                    </div>
                </div>
                <div className="max-w-xs overflow-hidden rounded-lg shadow-lg mb-4">
                    <div className="px-2 py-2 bg-blue-100 bg-opacity-50 ">
                        <h2 className="text-lg font-semibold text-blue-900 ml-1" >Card Title</h2>
                        <div className="relative">
                            <Images src="/coffee4.avif" alt="Image" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;