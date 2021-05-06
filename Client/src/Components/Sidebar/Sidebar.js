import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {

    return (<nav className={s.Sidebar}>

        <NavLink className={s.a} activeClassName={s.activeLink} to="/profile">
            <div className={s.Button}>Profile</div>
        </NavLink>

        <NavLink className={s.a} activeClassName={s.activeLink} to="/users">
            <div className={s.Button}>Users</div>
        </NavLink>

        <NavLink className={s.a} activeClassName={s.activeLink} to='/messages'>
            <div className={s.Button}>Messages</div>
        </NavLink>

        <NavLink className={s.a} activeClassName={s.activeLink} to="/newsfeed">
            <div className={s.Button}>News</div>
        </NavLink>

        <NavLink className={s.a} activeClassName={s.activeLink} to="/music">
            <div className={s.Button}>Music</div>
        </NavLink>

        <NavLink className={s.a} activeClassName={s.activeLink} to="/settings">
            <div className={s.Button}>Settings</div>
        </NavLink>
    </nav>);
}

export default Sidebar;