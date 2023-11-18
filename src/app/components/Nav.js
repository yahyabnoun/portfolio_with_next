
export default function Nav(prop) {
    const { darkmode } = prop

    return (
        <main >
            <nav className=" navbar-expand-lg navbar"   >

                <div className="container-fluid " >
                    <a className="navbar-brand yahyalogo" href="/">Yahya<span style={{ color: '#3CB9FF' }}>.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ backgroundColor: darkmode ? '#212121' : '' }} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title yahyalogo" id="offcanvasNavbarLabel">Yahya<span style={{ color: '#3CB9FF' }}>.</span></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" >
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Resume</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>



        </main>
    )
}
