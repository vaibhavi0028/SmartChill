import React, { useState } from 'react';
import founder1 from "../assets/pulkit.png";
import founder2 from "../assets/vaibhavi.png";
import founder3 from "../assets/maneet.png";
import founder4 from "../assets/prince.png";

const cards = [
    {
        id: 1,
        name: 'Pulkit Nandwana',
        designation: 'Front-end Developer',
        photo: founder1
    },
    {
        id: 2,
        name: 'Vaibhavi',
        designation: 'Front-end Developer',
        photo: founder2
    },
    {
        id: 3,
        name: 'Maneet',
        designation: 'AI/ML Developer',
        photo: founder3
    },
    {
        id: 4,
        name: 'Prince',
        designation: 'AI/ML Developer',
        photo: founder4
    }
];

const HoverCard = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [modalCard, setModalCard] = useState(null); 

    return (
        <div className="bg-gray-100 py-[30px]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001F3F] text-center mb-12">
                    Our Team
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 
                            ${hoveredCard === index ? 'transform -translate-y-2' : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="absolute inset-0 bg-[#001F3F] opacity-75 z-10"></div>
                            <img
                                src={card.photo}
                                alt={card.name}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-20">
                                <div 
                                    className={`w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-4 transition-all duration-300
                                    ${hoveredCard === index ? 'transform scale-110' : ''}`}
                                >
                                    <img
                                        src={card.photo}
                                        alt={card.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
                                <p className="text-sm text-green-100">{card.designation}</p>
                                <div className={`mt-4 transition-all duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                                    <button 
                                        className="bg-white text-[#001F3F] px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition-colors duration-300"
                                        onClick={() => setModalCard(card)} 
                                    >
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center mt-16">
                    <div className="w-24 h-1 bg-[#001F3F] rounded-full"></div>
                </div>
            </div>

            {modalCard && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative bg-white p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 max-w-4xl">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                            onClick={() => setModalCard(null)}  
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <img 
                                src={modalCard.photo}
                                alt={modalCard.name}
                                className="w-full h-96 object-contain rounded-lg mb-6"
                            />
                            <h3 className="text-3xl font-bold text-[#001F3F]">{modalCard.name}</h3>
                            <p className="text-xl text-gray-600 mb-4">{modalCard.designation}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HoverCard;
