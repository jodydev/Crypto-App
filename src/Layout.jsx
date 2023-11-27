import Sidebar from './components/Sidebar';
import Content from './components/Content';

function Layout({salesData}) {
    return (
        <div class="wrapper d-flex align-items-stretch">
                <Sidebar />
                <Content salesData={salesData} />
        </div>
    )
}

export default Layout;