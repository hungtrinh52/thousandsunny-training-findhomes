import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './nav.css'
function Nav(){
    return <>
        <nav className="navbar fixed-top " >
            <div className="container-fluid justify-content-between align-items-center px-0">
                <a className="navbar-brand" href="#" >Find Homes</a>
                <form className="d-flex form-search" role="search">
                    <div class="input-group align-items-center border rounded">
                        <i className="bi bi-search"></i>
                        <input className="form-control border-0" type="search"
                               placeholder="Nhập từ khóa" aria-label="Search"/>
                        <button class="btn navBtnBlue border-0" type="submit" >Tìm kiếm</button>
                    </div>
                </form>
                <a className="nav-item" href="#" ><i className="bi bi-person-circle"></i></a>
            </div>
        </nav>
    </>
}

export default Nav;