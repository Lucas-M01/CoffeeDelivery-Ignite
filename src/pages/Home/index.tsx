import { CoffeeList } from "./CoffeeList";
import { HomeIntro } from "./Intro";
import { Home } from "./styles";

export function HomePage() {
    return (
        <Home>
            
            <HomeIntro />
            
            <CoffeeList />
        </Home>
    )
}