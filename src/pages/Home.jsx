import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import StatsBar from "../components/StatsBar"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"

function Home(){
    return (
        <>
                    <Hero />
                    <StatsBar/>
                    <HowItWorks/>
                    <HomeCards />
                    <JobListings isHome={true} />
                    <Testimonials/>
                    </>
    )
}
export default Home
