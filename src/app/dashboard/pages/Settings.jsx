import React from 'react';
import { BsPeopleFill, BsPaypal } from 'react-icons/bs';
import Header from '@/app/layout/Header';
import { FaRegCommentAlt } from 'react-icons/fa';
import { CiViewList } from 'react-icons/ci';
import { BiMoney } from 'react-icons/bi';
import { GiTrophyCup } from 'react-icons/gi';
import { IoHomeOutline } from 'react-icons/io5';
function Settings({ openSidebarToggle, OpenSidebar }) {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex flex-1">
				<div
					className={`${openSidebarToggle ? 'sidebar-responsive' : ''} bg-white text-gray-800 overflow-y-auto p-4 transition-all duration-300 md:w-64 lg:w-64`}
				>
					<aside id="sidebar">
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center">
								<button className="md:hidden" onClick={OpenSidebar}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
							<span className="cursor-pointer" onClick={OpenSidebar}></span>
						</div>
						<ul
							className={`space-y-2 ${openSidebarToggle ? 'block' : 'hidden md:block'}`}
						>
							<li className="sidebar-list-item">
								<a
									href="/EmployeeHome"
									className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
								>
									<IoHomeOutline className="mr-2 text-lg" /> Home
								</a>
							</li>
							<li className="sidebar-list-item">
								<a
									href="/Profile"
									className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
								>
									<BsPeopleFill className="mr-2 text-lg" /> My Profile
								</a>
							</li>
							<li className="sidebar-list-item">
								<a
									href=""
									className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
								>
									<FaRegCommentAlt className="mr-2 text-lg" /> Leave
								</a>
							</li>
							<li className="sidebar-list-item">
								<a
									href=""
									className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
								>
									<CiViewList className="mr-2 text-lg" /> Report
								</a>
							</li>
							<li className="sidebar-list-item">
								<a
									href=""
									className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
								>
									<BiMoney className="mr-2 text-lg" /> Finance
								</a>
							</li>
							<li className="sidebar-list-item">
								<a
									href=""
									className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
								>
									<GiTrophyCup className="mr-2 text-lg" /> Performance
								</a>
							</li>
							<li className="sidebar-list-item">
								<a
									href="#salary"
									className="flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors"
								>
									<BsPaypal className="text-lg mr-2" /> Salary
								</a>
							</li>
						</ul>
					</aside>
				</div>
			</div>
		</div>
	);
}

export default Settings;
