import modernWebsiteIMG from '../../assets/img/portfolio1.jpg';
import brandDesignIMG from '../../assets/img/portfolio2.jpg';
import onlineStoreIMG from '../../assets/img/portfolio3.jpg';
import { Section, Carrossel, CarrosselItem } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './Portfolio.style';

function Portfolio() {
  const classes = useStyles();
  return (
    <Section id="portifolio" className={`${classes.about} container`}>
      <header>
        <h2>Portfolio</h2>
        <span>My recents works</span>
      </header>

      <Carrossel id="carrosselPortifolio">
        <CarrosselItem
          id="modernWebsite"
          img={modernWebsiteIMG}
          title="Modern Website"
          description="Website adaptable to all devices, with and animated interactions"
        />
        <CarrosselItem
          id="brandDesign"
          img={brandDesignIMG}
          title="Brand Design"
          description="Website adaptable to all devices, with and animated interactions"
        />
        <CarrosselItem
          id="onlineStore"
          img={onlineStoreIMG}
          title="Online Store"
          description="Website adaptable to all devices, with and animated interactions"
        />
      </Carrossel>
    </Section>
  );
}

export default Portfolio;
