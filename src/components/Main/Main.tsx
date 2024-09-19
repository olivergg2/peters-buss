import Button, { OutlinedButton } from '../Button/Button'
import Card from '../Card/Card'
import Link from '../Link/Link'
import Slideshow from '../Slideshow/Slideshow'
import Wrapper from '../Wrapper/Wrapper'
import './Main.css'

export default function Main() {
  const slides = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TvcHzbEOnBFdJ8X8ccplagHaEo%26pid%3DApi&f=1&ipt=a5da48bb073c9abbc068e97b6d95abeadf0b07994e394c6fd1c98208bae70bb8&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.odeshog.se%2Fimages%2F18.281005bf1784b0ac9cf33a27%2F1617000518905%2Ftreh%25C3%25B6rna-w%25C3%25A4rdshus-01-webb.jpg&f=1&nofb=1&ipt=ce8866b5b67287e4f949d87d43b117735df5e9aef2729eaec0c0dfe98bdce55a&ipo=images',
    'images/buss.png',
  ]

  const estland = [
    './images/estland/city.png',
    './images/estland/estland.png',
    './images/estland/alpakas.png',
  ]

  return (
    <Wrapper id="main-container">
      <main>
        <article class="row">
          <Card transparent>
            <h1>Boka din resa nu!</h1>
            <p>Se våra akutella resor.</p>
            <OutlinedButton>Tallinnkryss (3 dagar)</OutlinedButton>
            <OutlinedButton>Spa resor (9 dagar)</OutlinedButton>
            <Button bold id="show-all">
              Visa alla
            </Button>
          </Card>
          <Slideshow links={slides} />
        </article>
        <article class="row reversed">
          <Slideshow links={estland} />
          <Card transparent>
            <h1>Åk Tallinn kryss till Estland!</h1>
            <p>
              Tallinn, Estlands charmiga huvudstad, bjuder på en vacker
              medeltida stadskärna som är upptagen på UNESCO världsarvslista.
            </p>
            <p>
              Här kan resenärer njuta av en rik historia, pittoreska
              kullerstensgator och moderna shopping- och matupplevelser.
            </p>
            <p>
              Vi besöker även <strong>Super Alco</strong> och handlar..
            </p>
            <Button bold id="book-now">
              Boka nu
            </Button>
          </Card>
        </article>
        <article class="row">
          <Card id="collaborations" transparent>
            <h1 id="colabs-title">Möt våra samarbetspartners</h1>
            <ul id="images">
              <li>
                <img
                  class="image"
                  src="https://i0.wp.com/media.petersbuss.se/2021/06/Tallink_logo.svg_.png?resize=300%2C54&ssl=1"
                  alt="Tallink"
                />
              </li>
              <li>
                <img
                  class="image"
                  src="./images/colabs/tervis.png"
                  alt="Tervis"
                />
              </li>
              <li>
                <img
                  class="image"
                  src="./images/colabs/alpakafarm.png"
                  alt="Alpakafarm"
                />
              </li>
            </ul>
          </Card>
        </article>
        <article class="row">
          <Card>
            <h2>Vad behöver jag för att resa med er?</h2>
            <ol>
              <li>
                Pass <strong>eller</strong> Nationellt ID kort
              </li>
              <li>EU's försäkringskort</li>
              <li>Giltig reseförsäkring</li>
            </ol>
          </Card>
          <Card>
            <h2>Följ oss på Facebook!</h2>
            <p>
              Få uppdateringar, nyheter och information om aktuella (och
              tidigare) resor.
            </p>
            <Link
              filled
              bold
              href="https://www.facebook.com/PetersBussAb/"
              target="#blank">
              Ta mig till PetersBussAb på Facebook!
            </Link>
          </Card>
        </article>
      </main>
    </Wrapper>
  )
}
