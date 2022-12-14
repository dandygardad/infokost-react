import Banner from '../components/home/Banner'
import MapsKost from '../components/home/MapsKost'
import FlatList from '../components/home/FlatList'
import Footer from '../components/global/Footer'

const Home = () => {
    document.title = 'InfoKost Romang Lompoa'
    return(
        <>
            <Banner />
            <MapsKost />
            <FlatList />
            <Footer />
        </>
    )
}

export default Home