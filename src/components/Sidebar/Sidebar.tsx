import React from "react";
import s from './Sidebar.module.css'
import {ReactComponent as ProfileImg} from "../../img/icons/profile.svg";
import {ReactComponent as MessageImg} from "../../img/icons/messages.svg";
import {ReactComponent as NewsImg} from "../../img/icons/news.svg";
import {ReactComponent as MusicImg} from "../../img/icons/music.svg";
import {ReactComponent as SettingsImg} from "../../img/icons/settings.svg";
import {ReactComponent as LogoImg} from "../../img/icons/logo.svg";
import {ReactComponent as LogoMobile} from "../../img/icons/logoMobile.svg";

export const Sidebar = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.sideNav}>
                <a className={s.logo} href="src/components">
                    <div className={s.logoImg}><LogoImg/></div>
                    <div className={s.logoIcon}><LogoMobile/></div>
                </a>
                <ul className={s.navLinks}>

                    <li><a href="src/components#"><ProfileImg className={s.navIcons}/><p>Profile</p></a></li>
                    <li><a href="src/components#"><MessageImg className={s.navIcons}/><p>Messages</p></a></li>
                    <li><a href="src/components#"><NewsImg className={s.navIcons}/><p>News</p></a></li>
                    <li><a href="src/components#"><MusicImg className={s.navIcons}/><p>Music</p></a></li>
                    <li><a href="src/components#"><SettingsImg className={s.navIcons}/><p>Settings</p></a></li>
                    <div className={s.active}></div>
                </ul>
            </div>
        </div>
    );
};