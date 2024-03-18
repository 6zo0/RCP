import ImgLogoPimpine from './rcp-Logo.png';
import TriangleMenu from './svg/triangle.svg';
import Modal from '../modal/ModalButton.jsx';
import './Header.css';

export default function Header() {
    return (
        <div>
            <div className="containerHeader d-flex">
                <nav className="navRcp d-flex">
                    <ul className="leftNav d-flex">
                        <li className="leftLi noStyle d-flex menu clubMenu li">
                            <p className='title-menu'>LE CLUB</p>
                            <img src={TriangleMenu} alt="" className="triangle"/>
                            <ul className="underMenu club noStyle">
                                <li className="underLi li">
                                    <p>Les mots des Présidents</p>
                                </li>
                                <li className="underLi li">
                                    <p>Qui nous sommes</p>
                                </li>
                                <li className="underLi li">
                                    <p>Les infrastructures</p>
                                </li>
                            </ul>
                        </li>
                        <li className="leftLi noStyle d-flex menu li">
                            <p className='title-menu'>LES SECTIONS</p>
                            <img src={TriangleMenu} alt="" className="triangle"/>
                            <ul className="underMenu sections noStyle">
                                <li className="underLi li">
                                    <p>Les Équipes</p>
                                </li>
                                <li className="underLi li">
                                    <p>Les OldBlacks</p>
                                </li>
                                <li className="underLi li">
                                    <p>Les Résultats</p>
                                </li>
                                <li className="underLi li">
                                    <p>Les Championnats</p>
                                </li>
                                <li className="underLi li">
                                    <p>École de Rugby</p>
                                </li>
                            </ul>
                        </li>
                        <li className="leftLi noStyle d-flex menu li">
                            <p className='title-menu'>ESPACE LICENCE</p>
                            <img src={TriangleMenu} alt="" className="triangle"/>
                            <ul className="underMenu noStyle">
                                <li className="underLi li">
                                    <p>Memento</p>
                                </li>
                                <li className="underLi li">
                                    <p>Ré-affilitation</p>
                                </li>
                                <li className="underLi li">
                                    <p>Réglement intérieur RCP</p>
                                </li>
                                <li className="underLi li">
                                    <p>Les Chartes du RCP</p>
                                </li>
                                <li className="underLi li">
                                    <p>Autorisation Parentale</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="logoPimpine">
                        <img src={ImgLogoPimpine} alt="Club Logo" className="rcpLogo" />
                    </div>
                    <ul className="rightNav d-flex">
                        <li className="rightLi noStyle li">
                            <p className='title-menu'>PARTENAIRES</p>
                        </li>
                        <li className="rightLi noStyle li">
                            <p className='title-menu'>CONTACT</p>
                        </li>
                        <li className="rightLi noStyle li">
                            <p className='title-menu'>BOUTIQUE</p>
                        </li>
                    </ul>
                        <Modal/>
                </nav>
            </div>
        </div>
    )
}