import { useEffect } from "react";

function Sidebar() {

    useEffect(() => {
        const fullHeight = () => {
            const sidebar = document.getElementById('sidebar');
            sidebar.style.height = window.innerHeight + 'px';
        };

        fullHeight();

        window.addEventListener('resize', fullHeight);

        const sidebarCollapse = document.getElementById('sidebarCollapse');
        const sidebar = document.getElementById('sidebar');

        if (sidebarCollapse) {
            sidebarCollapse.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }

        return () => {
            window.removeEventListener('resize', fullHeight);
        };
    }, []);

    return (
        <nav id="sidebar">
            <div className="custom-menu">
                <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    <i className="fa fa-bars"></i>
                    <span className="sr-only">Toggle Menu</span>
                </button>
            </div>
            <div className="p-4 pt-5">
                <h1><a href="index.html" className="logo"><img src="/public/logo/crypto-logo.png" width='180' /></a></h1>

                <ul className="list-unstyled components my-5">
                    <li className="my-4">
                        <a className="sidebar-a" role="button">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <i class="fa-solid fa-house px-3" style={{color: "#ffffff",}}></i> 
                                    </div>
                                    <div className="col-7 text-center">
                                    Home
                                    </div>
                                </div>
                            </div>
                      
                        </a>
                    </li>
                    <li className="my-4">
                        <a className="sidebar-a" role="button">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <i class="fa-brands fa-bitcoin px-3" style={{color: "#ffffff",}}></i> 
                                    </div>
                                    <div className="col-7 text-center text-nowrap">
                                    All Crypto
                                    </div>
                                </div>
                            </div>
                      
                        </a>
                    </li>
                    <li className="my-4">
                        <a className="sidebar-a" role="button">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <i class="fa-solid fa-credit-card px-3" style={{color: "#ffffff",}}></i> 
                                    </div>
                                    <div className="col-7 text-center">
                                    Portfolio
                                    </div>
                                </div>
                            </div>
                      
                        </a>
                    </li>
                    <li className="my-4">
                        <a className="sidebar-a" role="button">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <i class="fa-solid fa-user px-3" style={{color: "#ffffff",}}></i> 
                                    </div>
                                    <div className="col-7 text-center">
                                    Account
                                    </div>
                                </div>
                            </div>
                      
                        </a>
                    </li>
                    <li className="my-4">
                        <a className="sidebar-a" role="button">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <i class="fa-solid fa-question px-3" style={{color: "#ffffff",}}></i> 
                                    </div>
                                    <div className="col-7 text-center">
                                    Help
                                    </div>
                                </div>
                            </div>
                      
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;