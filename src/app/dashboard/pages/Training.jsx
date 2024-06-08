import React, { useState, useEffect } from 'react';
import { getTrainings } from '../services/TrainingService'; 
import Header from '@/app/layout/Header';
import { FaRegCommentAlt } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { CiViewList } from 'react-icons/ci';
import { BiMoney } from 'react-icons/bi';
import { GiTrophyCup } from 'react-icons/gi';
import { IoHomeOutline } from 'react-icons/io5';
import {
  BsFillGearFill,
  BsChatDots,
  BsPersonCircle,
} from 'react-icons/bs';

const TrainingList = ({ openSidebarToggle, openSidebarToggleHandler }) => {
    const [videos, setVideos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showSubmenu, setShowSubmenu] = useState(false); // Add state for submenu

    useEffect(() => {
        const loadVideos = async () => {
            try {
                const videosData = await getTrainings();
                setVideos(videosData);
            } catch (error) {
                setErrorMessage('Failed to fetch videos');
            }
        };
        loadVideos();
    }, []);

    const menuItems = [
        {
            icon: <IoHomeOutline className="text-lg mr-2" />,
            text: 'Home',
            link: '/Employee',
        },
        {
            icon: <BsFillGearFill className="text-lg mr-2" />,
            text: 'Settings',
            submenu: [
                {
                    icon: <BsPersonCircle className="text-base mr-2" />,
                    text: 'EditProfilePage',
                    link: '/EditProfilePage',
                },
                {
                    icon: <BsChatDots className="text-base mr-2" />,
                    text: 'Communication and Notification',
                    link: '/CommunicationNotification',
                },
            ],
        },
        {
            icon: <SlCalender className="text-lg mr-2" />,
            text: 'Attendance',
            link: 'AttendanceForm',
        },
        {
            icon: <FaRegCommentAlt className="text-lg mr-2" />,
            text: 'Leave',
            link: '/LeaveRequestForm',
        },
        {
            icon: <CiViewList className="text-lg mr-2" />,
            text: 'Report',
            link: '/WeaklyReportForm',
        },
        {
            icon: <BiMoney className="text-lg mr-2" />,
            text: 'Finance',
            link: '',
        },
        {
            icon: <GiTrophyCup className="text-lg mr-2" />,
            text: 'Performance',
            link: '',
        },
        {
            icon: <CiViewList className="text-lg mr-2" />,
            text: 'Training',
            link: '/TrainingList',
        },
    ];

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Header />
            <div className="flex flex-1">
                <div className={`${openSidebarToggle ? 'w-0' : 'w-64'} bg-white text-gray-800 overflow-y-auto p-4 transition-all duration-300 md:w-64 lg:w-64`}>
                    <aside id="sidebar">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <button className="md:hidden" onClick={openSidebarToggleHandler}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <span className="cursor-pointer" onClick={openSidebarToggleHandler}></span>
                        </div>
                        <ul className={`space-y-2 ${openSidebarToggle ? 'block' : 'hidden md:block'}`}>
                            {menuItems.map((menuItem, index) => (
                                <li key={index} className="sidebar-list-item">
                                    {menuItem.submenu ? (
                                        <div onClick={() => setShowSubmenu(!showSubmenu)}>
                                            <a
                                                href={menuItem.link}
                                                className="flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors"
                                            >
                                                {menuItem.icon}
                                                <span className="ml-2">{menuItem.text}</span>
                                            </a>
                                            {showSubmenu && (
                                                <ul className="ml-4">
                                                    {menuItem.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="sidebar-list-item">
                                                            <a
                                                                href={subItem.link}
                                                                className="flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors"
                                                            >
                                                                {subItem.icon}
                                                                <span className="ml-2">{subItem.text}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={menuItem.link}
                                            className="flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors"
                                        >
                                            {menuItem.icon}
                                            <span className="ml-2">{menuItem.text}</span>
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
                <div className="flex justify-center items-center min-h-screen  mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl min-h-[60vh] flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-center mb-8">Training Videos</h1>
                        {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
                        <div>
                            {videos.map((video) => (
                                <div key={video.id} className="mb-6 p-4 border rounded-md shadow-md">
                                    <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                                    <p className="mb-2">{video.description}</p>
                                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Watch Video</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingList;
