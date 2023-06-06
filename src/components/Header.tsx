import logo from "../../public/onica party planning svg.svg"

export default function Header(){
        return <header className="head">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Order</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>

                </nav>  

                <img src={logo} alt="logo"   className="logo"/>

            </header>

}