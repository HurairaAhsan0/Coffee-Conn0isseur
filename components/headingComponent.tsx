import React from 'react';

const HeadingComponent: React.FC = () => {
    return (
        <div className="ml-60 mt-40">
            <h1 className=' mb-4'>
                <span className="text-lg lg:text-xl text-white font-bold" style={{ fontSize: '5rem' }}>Coffee</span>
                <span className="text-lg lg:text-xl font-bold text-purple-500" style={{ fontSize: '5rem' }}> Connoisseur</span>
            </h1>
            <p className="text-sm lg:text-base text-white mb-2" style={{ fontSize: '2rem' }}>Discover your local coffee shops</p>
            <button className="bg-purple-500 text-white py-2 px-4 mt-4 rounded mb-20 ">View Stores Nearby</button>
        </div>
    );
};

export default HeadingComponent;