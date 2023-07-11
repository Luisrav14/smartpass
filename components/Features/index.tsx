import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-8 md:py-15 lg:py-15"
      >
        <div className="container pt-5">
          <SectionTitle
            title="About SmartPass"
            paragraph="Our blockchain-powered ticketing system ensures each ticket is unique, traceable, and immune to tampering. Enjoy peace of mind knowing your tickets are verifiable in real-time, eliminating the risk of fraud."
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
