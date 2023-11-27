import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

import SearchBar from "./SearchBar";

function Header() {

  const menuId = 'primary-search-account-menu';
    
    return (
        
        <div className="container-fluid p-0">
            <div className="row">

                <div className="col-2">
                    <h1 className="text-light fw-bold letter-spacing title">Dashboard</h1>
                </div>

                <div className="col-4 offset-1">
                  <SearchBar />
                </div>
                
                <div className="col-4 d-flex justify-content-center"> 
                      <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                 
                      <p className='text-light fw-bold text-center text-wrap my-4 mx-3'>Nome utente</p>

                </div>
            </div>
        </div>

    )

}

export default Header;