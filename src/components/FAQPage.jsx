import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import Spline from '@splinetool/react-spline';
import myScene from '../assets/faq.spline';

const FAQPage = () => {
    const GeneralFAQ = [
        {
            id: 1,
            question: 'What is SmartChill?',
            answer:
                'SmartChill is an AI-driven solution designed to optimize the efficiency of chiller plants through real-time data analysis and machine learning.',
        },
        {
            id: 2,
            question: "How does SmartChill optimize chiller plant operations?",
            answer:
                'SmartChill employs machine learning algorithms to predict and adjust key operational variables, such as temperature and flow rates, to enhance energy efficiency and operational performance.',
        },
        {
            id: 3,
            question: "What technology does SmartChill use for fault detection?",
            answer:
                'SmartChill utilizes real-time sensor data and convolutional neural networks (CNNs) to identify potential faults and predict maintenance needs, ensuring continuous operation.',
        },
        {
            id: 4,
            question: "What are the benefits of using SmartChill?",
            answer:
                'Using SmartChill leads to reduced energy consumption, increased operational efficiency, and minimized downtime through predictive maintenance and optimization strategies.',
        },
        {
            id: 5,
            question: "Can SmartChill be integrated with existing systems?",
            answer:
                'Yes, SmartChill is designed for seamless integration with existing chiller plant systems, allowing for easy implementation without disrupting current operations.',
        },
        {
            id: 6,
            question: 'How can I get started with SmartChill?',
            answer:
                'To get started with SmartChill, contact our team for a consultation. We will assess your needs and provide a tailored implementation plan.',
        },
        {
            id: 7,
            question: 'What kind of support does SmartChill offer?',
            answer:
                'SmartChill provides comprehensive support, including technical assistance, regular system updates, and user training to ensure that your team can effectively utilize the platform and achieve optimal results.',
        },
        {
            id: 8,
            question: "What industries can benefit from using SmartChill?",
            answer:
                'SmartChill is suitable for various industries, including commercial buildings, manufacturing facilities, and data centers, where efficient cooling is essential for operational performance.',
        },
    ];

    const [openFAQ, setOpenFAQ] = useState(null);

    const handleToggle = (id) => {
        setOpenFAQ((prevOpen) => (prevOpen === id ? null : id)); 
    };

    return (
        <div className="max-w-full mx-auto p-0 box-border bg-[#001F3F] rounded-tl-3xl rounded-tr-3xl">
            <div className="bg-[#6A9DF0] text-white py-10 px-20 mb-10 text-center relative flex flex-col items-start rounded-tl-3xl rounded-tr-3xl">
                <p className="mb-2 text-left text-[#001F3F] text-lg font-[600]" id="support">Customer Support</p>
                <h1 className="text-5xl mb-6 text-left">Top questions about <span id="title" className="text-[#001F3F] font-bold">SmartChill!</span></h1>
            </div>

            <div className="mb-2 px-8 flex items-start min-h-full py-12">
                <div className="w-2/5 p-2 text-center">
                    <h2 className="text-3xl mb-2 text-white">General FAQs</h2>
                    <p className="text-xl mb-5 text-gray-400">
                        Everything you need to know about SmartChill and how it works. Can't find an answer? Please chat with our friendly team.
                    </p>
                    <Spline className="h-[300px]" scene={myScene} />
                </div>
                <div className="w-3/5 px-28 flex flex-col min-h-[30%]">
                    {GeneralFAQ.map((q) => (
                        <div className="border-b border-gray-300 py-2 w-full flex flex-col justify-center" key={q.id}>
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(q.id)}
                            >
                                <h3 className="text-xl text-white">{q.question}</h3>
                                <span className="text-2xl pl-2 text-[#6A9DF0]">
                                    {openFAQ === q.id ? '-' : '+'}
                                </span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: openFAQ === q.id ? 'auto' : 0,
                                    opacity: openFAQ === q.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }} 
                                className="overflow-hidden"
                            >
                                {openFAQ === q.id && (
                                    <p className="text-lg mt-2 text-gray-400">
                                        {q.answer}
                                    </p>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
