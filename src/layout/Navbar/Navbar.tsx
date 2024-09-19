import Link from '../../components/Link/Link'
import Wrapper from '../../components/Wrapper/Wrapper'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Wrapper id="nav-content">
        <img id="logo" src="images/favicon.png" alt="" />
        <section id="nav-right">{/* <h1>Peters Buss AB</h1> */}</section>

        <section id="nav-links">
          <Link href="">Om oss</Link>
          <Link href="">Bra att veta</Link>
          <Link href="">Kontakt</Link>
        </section>
      </Wrapper>
    </nav>
  )
}
