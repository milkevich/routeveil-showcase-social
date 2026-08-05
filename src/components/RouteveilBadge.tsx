import logo from '../../public/favicon.svg'
import '../shared.css'

function RouteveilBadge() {
    return (
        <div className="badge-container">
            <img src={logo} />
            <span>Built with <a href="https://routeveil.dev">Routeveil</a></span>
        </div>
    )
}

export default RouteveilBadge