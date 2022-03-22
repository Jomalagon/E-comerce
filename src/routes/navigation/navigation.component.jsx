
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as BunnyLogo} from '../../assets/bunny-logo.svg';
import "./navigation.style.scss";

const Navigation = () => {
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <BunnyLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        shop
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation