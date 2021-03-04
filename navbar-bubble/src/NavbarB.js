import React, {useState} from 'react';
import './NavbarB.scss';
import data from './data/data';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
    const [clicked, setClicked] = useState(true);

    const circleConfig = {
        viewBox: '0 0 100 100',
        x: '50',
        y: '50',
        radio: '45px'
    };

    const cicleLineConfig = {
        viewBox: '0 0 100 100',
        x: '50',
        y: '50',
        radio: '45px'
    };

    const classnames = [
        clicked && 'nav',
        !clicked && 'nav--open',
    ].filter(Boolean);

    const handleButtonMenu = () => {
        setClicked(!clicked);
        console.log("je clique", clicked);

    }

    return (
        <div id="Navbar">
            <div id="Navbar-containerAllMenu">
                <div id="Navbar-bubbleContainer">
                    <figure id="Navbar-FigureFullCircle">
                        <svg viewBox={circleConfig.viewBox} >
                            <text textAnchor="middle" x="50" y="50" id="Navbar-title">{data[0].navbarHome[0].name}</text>
                            <text textAnchor="middle" x="50" y="60" id="Navbar-subtitle">{data[0].navbarHome[0].subtitle}</text>
                            <circle
                                id="Navbar-circle"
                                cx={circleConfig.x}
                                cy={circleConfig.y}
                                r={circleConfig.radio}
                                onClick={handleButtonMenu}
                            />
                        </svg>
                    </figure>
                    <figure id="Navbar-FigureLineCircle">
                        <svg viewBox={cicleLineConfig.viewBox} >
                            <circle
                                id="Navbar-lineCircle"
                                cx={cicleLineConfig.x}
                                cy={cicleLineConfig.y}
                                r={cicleLineConfig.radio}
                            />
                        </svg>
                    </figure>
                </div>

                {/* * part menu multiple */}
                <div className={classnames.join(' ')}>
                    {!clicked ?
                        <div id="Navbar-MenuContainer">
                            <AnchorLink offset={() => 15} href="#infos">
                                <figure id="Navbar-FigureFullCircle-deg0">
                                    <svg viewBox={circleConfig.viewBox} >
                                        <text textAnchor="middle" x="50" y="50" id="Navbar-titleMenu-deg0">Infos Pratiques</text>
                                        <circle
                                            id="Navbar-circleMenu"
                                            cx={circleConfig.x}
                                            cy={circleConfig.y}
                                            r={circleConfig.radio}

                                        />
                                    </svg>
                                </figure>
                            </AnchorLink>

                            <AnchorLink offset={() => 15} href="#temoignages">

                                <figure id="Navbar-FigureFullCircle-deg45">
                                    <svg viewBox={circleConfig.viewBox} >
                                        <text textAnchor="middle" x="50" y="50" id="Navbar-titleMenu-deg45">Témoignages</text>
                                        <circle
                                            id="Navbar-circleMenu"
                                            cx={circleConfig.x}
                                            cy={circleConfig.y}
                                            r={circleConfig.radio}

                                        />
                                    </svg>
                                </figure>
                            </AnchorLink>

                            <AnchorLink offset={() => 15} href="#reflexology">
                                <figure id="Navbar-FigureFullCircle-deg135">
                                    <svg viewBox={circleConfig.viewBox} >
                                        <text textAnchor="middle" x="50" y="50" id="Navbar-titleMenu-deg135">Réflexologie Plantaire</text>
                                        <circle
                                            id="Navbar-circleMenu"
                                            cx={circleConfig.x}
                                            cy={circleConfig.y}
                                            r={circleConfig.radio}

                                        />
                                    </svg>
                                </figure>
                            </AnchorLink>
                            <AnchorLink offset={() => 15} href="#seances">
                                <figure id="Navbar-FigureFullCircle-deg180">
                                    <svg viewBox={circleConfig.viewBox} >
                                        <text textAnchor="middle" x="50" y="50" id="Navbar-titleMenu-deg180">Séances</text>
                                        <circle
                                            id="Navbar-circleMenu"
                                            cx={circleConfig.x}
                                            cy={circleConfig.y}
                                            r={circleConfig.radio}

                                        />
                                    </svg>
                                </figure>
                            </AnchorLink>

                            <AnchorLink offset={() => 15} href="#about">

                                <figure id="Navbar-FigureFullCircle-deg225">
                                    <svg viewBox={circleConfig.viewBox} >
                                        <text textAnchor="middle" x="50" y="50" id="Navbar-titleMenu-deg225">À propos</text>
                                        <circle
                                            id="Navbar-circleMenu"
                                            cx={circleConfig.x}
                                            cy={circleConfig.y}
                                            r={circleConfig.radio}

                                        />
                                    </svg>
                                </figure>
                            </AnchorLink>
                            <AnchorLink offset={() => 15} href="#sophrology">
                                <figure id="Navbar-FigureFullCircle-deg315">
                                    <svg viewBox={circleConfig.viewBox} >
                                        <text textAnchor="middle" x="50" y="50" id="Navbar-titleMenu-deg315">Sophrologie Caycedienne</text>
                                        <circle
                                            id="Navbar-circleMenu"
                                            cx={circleConfig.x}
                                            cy={circleConfig.y}
                                            r={circleConfig.radio}

                                        />
                                    </svg>
                                </figure>
                            </AnchorLink>
                        </div>
                        : null}
                </div>
            </div>
        </div>



    );
}

export default Navbar;
