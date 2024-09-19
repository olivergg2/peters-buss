import Link from '../../components/Link/Link'
import Wrapper from '../../components/Wrapper/Wrapper'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <Wrapper id="footer-wrapper">
        <section id="footer-content">
          <article>
            <h3 class="footer-subtitle">Funderar du över något?</h3>
            <ul id="footer-contacts">
              <li>
                <h4>Telefon</h4>
                <p>Kontor: 0563-81331</p>
                <p>Mobil: 0705606108</p>
              </li>
              <li>
                <h4>E-mail</h4>
                <p>peter2@peterbuss.se</p>
              </li>
            </ul>
          </article>
          <article>
            <h3 class="footer-subtitle">Besök oss</h3>
            <p>Vallvägen 8c 68051 Stöllet</p>
          </article>
          <article>
            <h3 class="footer-subtitle">Snabb länkar</h3>
            <ul id="footer-links">
              <Link href="">Funkar inte</Link>
              <Link href="">Inte denna heller</Link>
              <Link href="">Vanliga frågor</Link>
            </ul>
          </article>
        </section>
        <p>COPYRIGHT 2024 PETERS BUSS AB</p>
        <Link href="https://olivergg.xyz" target="blank">
          Utvecklad av Oliver Gustafsson
        </Link>
      </Wrapper>
    </footer>
  )
}
