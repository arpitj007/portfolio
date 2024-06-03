import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import useResponsive from '../../hooks/useResponsive';
import { CURRENT_TAB, CURRENT_TAB_DATA } from '../../redux/actions/actionTypes';
import Footer from './Footer';
import { ROUTE_CONSTANTS } from '../../constants/url';
import { resetReduxStateOnPageChange } from '../../utils/utils';

const menuitems = [
	{
		name: '_hello',
		url: ROUTE_CONSTANTS.HOME,
		key: 1,
	},
	{
		name: '_about-me',
		url: ROUTE_CONSTANTS.ABOUT,
		key: 2,
	},
	{
		name: '_projects',
		url: ROUTE_CONSTANTS.PROJECTS,
		key: 3,
	},
];

const otherMenuItems = [
	{
		name: '_contact',
		url: ROUTE_CONSTANTS.CONTACT,
		key: 4,
	},
];

function DesktopNavbar({ handleOnClick }) {
	return (
		<div className="header-component row">
			<Link to={ROUTE_CONSTANTS.HOME} className="header-logo col-3">
				arpit-jangir
			</Link>
			<div className="header-items row col-6">
				{menuitems.map((m, i) => {
					return (
						<Link
							key={i}
							to={m.url}
							id={m.name}
							onClick={handleOnClick}
							className="menu-items-navbar col-2"
						>
							{m.name}
						</Link>
					);
				})}
			</div>
			<div className=" col-2"></div>
			{otherMenuItems.map((item) => (
				<Link
					to={item.url}
					id="_contact"
					key={item.key}
					className="header-contact col-1"
				>
					{item.name}
				</Link>
			))}
		</div>
	);
}

function MobileNavbar() {
	const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

	const handleHamburgerClick = () => {
		setIsHamburgerClicked(!isHamburgerClicked);
	};

	const menuVariants = {
		open: { opacity: 1, y: 100 },
		closed: { opacity: 0, y: '-100%' },
	};

	return (
		<div className="mobile-nav">
			<div className="mobile-nav-heading">
				<Link
					to={ROUTE_CONSTANTS.HOME}
					className="header-logo"
					onClick={() => setIsHamburgerClicked(false)}
				>
					arpit-jangir
				</Link>
				<i
					onClick={handleHamburgerClick}
					className={`${
						isHamburgerClicked ? 'ri-close-line' : 'ri-menu-line'
					} text-gray-lighter`}
				></i>
			</div>
			{isHamburgerClicked && (
				<AnimatePresence>
					<motion.div
						className="mobile-nav-items"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
						transition={{ duration: 0.2 }}
					>
						{[...menuitems, ...otherMenuItems].map((x) => (
							<Link
								key={x.key}
								to={x.name}
								id={x.name}
								className="mobile-nav-item"
								onClick={() => setIsHamburgerClicked(false)}
							>
								{x.name}
							</Link>
						))}
						<Footer isLocationFooter={false} />
					</motion.div>
				</AnimatePresence>
			)}
		</div>
	);
}

function Header() {
	const location = useLocation();
	const store = useStore();
	const { isTabletOrMobile } = useResponsive();

	const handleOnClick = () => {
		store.dispatch({
			type: CURRENT_TAB_DATA,
			payload: {},
		});
		store.dispatch({
			type: CURRENT_TAB,
			payload: {},
		});
	};

	useEffect(() => {
		if (!isTabletOrMobile) {
			const activeRoute = document.getElementById(
				`${location.pathname.slice(1)}`
			);
			menuitems.map((item) => {
				document
					.getElementById(`${item.name}`)
					.classList.remove('active-hover');
			});
			if (activeRoute) {
				activeRoute.classList.add('active-hover');
			}
			if (location.pathname === ROUTE_CONSTANTS.CONTACT) {
				document.getElementById('_contact').classList.add('active-hover');
			} else {
				document.getElementById('_contact').classList.remove('active-hover');
			}
		}
	}, [location, isTabletOrMobile]);

	useEffect(() => {
		switch (location.pathname) {
			case ROUTE_CONSTANTS.CONTACT:
				resetReduxStateOnPageChange(store, ROUTE_CONSTANTS.CONTACT);
				break;
			default:
				break;
		}
	}, [location]);
	return (
		<>
			{isTabletOrMobile ? (
				<MobileNavbar />
			) : (
				<DesktopNavbar handleOnClick={handleOnClick} />
			)}
		</>
	);
}

export default Header;
