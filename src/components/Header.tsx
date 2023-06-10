import logo from "../../public/onica party planning svg.svg"

export default function Header(){

    const pages = ["Home","About", "Order", "Contact"]




        return <header className="head">
                <nav>
                    <ul>{
                            pages.map(page=>{
                               return <li><a href="/">{page}</a></li>
                            })
                        }
                    </ul>

                </nav>  

                <img src={logo} alt="logo"   className="logo"/>

            </header>

}