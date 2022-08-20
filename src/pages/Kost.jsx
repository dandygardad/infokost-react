import Banner from '../components/home/Banner'
import Header from '../components/kost/Header'
import Informasi from '../components/kost/Informasi'
import Footer from '../components/global/Footer'
import Contact from '../components/kost/Contact'

const Kost = () => {
    document.title = "Kost Ernias - InfoKost Romang Lompoa"
    return(
        <>
            <Banner />
            <Header />
            <Informasi />
            <Contact />
            <Footer />
        </>
    )
}

export default Kost