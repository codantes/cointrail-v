import Navbar from './navbar/Navbar'

const Layout = ({children}) => {
    return ( 
        <div className="min-h-screen bg-jungle">
            <Navbar />
            {children}
        </div>
     );
}
 
export default Layout;