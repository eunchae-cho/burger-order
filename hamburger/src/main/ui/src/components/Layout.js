import Footer from "./Footer";
import Header from "./Header";
import '../css/layout.css'

const Layout = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Header/>

            <main style={{ minHeight: '800px' }}>
                {props.children}
            </main>

            <Footer />
        </div>
    );
}

export default Layout;