// import the styles files we will use
import styles from "./style";

// import our components
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  Cta,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components/index";

export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar wrap */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* navbar components go here */}
          <Navbar />
        </div>
      </div>

      {/* hero */}
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* hero compoinent goes here */}
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* stats component goes here */}
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
          Other components
        </div>
      </div>
    </div>
  );
}
