import {Link} from "react-router-dom"


const Navbar = () => {
    return (
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <Link to="/" class="navbar-brand">Task Tracking App</Link>
        </div>
    </nav>
  )
}

export default Navbar;