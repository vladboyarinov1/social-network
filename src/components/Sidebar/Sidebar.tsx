import React, {FC} from 'react';
import s from './Sidebar.module.css'
import {ReactComponent as ProfileImg} from '../../img/icons/profile.svg';
import {ReactComponent as MessageImg} from '../../img/icons/messages.svg';
import {ReactComponent as NewsImg} from '../../img/icons/news.svg';
import {ReactComponent as SettingsImg} from '../../img/icons/settings.svg';
import {ReactComponent as LogoImg} from '../../img/icons/logo.svg';
import {ReactComponent as LogoMobile} from '../../img/icons/logoMobile.svg';
import {ReactComponent as UsersImg} from '../../img/icons/users.svg';
import {Link} from 'react-router-dom';

export const Sidebar: FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.sideNav}>
                <a className={s.logo} href="src/components">
                    <div className={s.logoImg}><LogoImg/></div>
                    <div className={s.logoIcon}><LogoMobile/></div>
                </a>
                <ul className={s.navLinks}>
                    <li><Link to="/profile"><ProfileImg className={s.navIcons}/><p>Profile</p></Link></li>
                    <li><Link to="/dialogs"><MessageImg className={s.navIcons}/><p>Messages</p></Link></li>
                    <li><Link to="/users"><UsersImg className={s.navIcons}/><p>Users</p></Link></li>
                    <li><Link to="/news"><NewsImg className={s.navIcons}/><p>News</p></Link></li>
                    {/*<li><Link to="/music"><MusicImg className={s.navIcons}/><p>Music</p></Link></li>*/}
                    <li><Link to="/settings"><SettingsImg className={s.navIcons}/><p>Settings</p></Link></li>
                    <div className={s.active}></div>
                </ul>
            </div>
        </div>
    );
};