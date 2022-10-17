import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffeeDelivery.svg'
import { useCart } from '../../hook/useCart'

import { HeaderContainer } from './styles'

export function Header() {
    const { cartQuantity } = useCart()

    return (
        
            <HeaderContainer>
                <NavLink to="/" title="home">
                    <img src={logoCoffeeDelivery} />
                </NavLink>
                <nav>
                    <p>
                        <MapPin size={24} weight="fill" />
                        Porto Alegre, RS
                    </p>
                    <NavLink to="/checkout" title="shopping card">
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <ShoppingCart size={24} weight="fill" />
                    </NavLink>
                </nav>
            </HeaderContainer>
        
    )
}