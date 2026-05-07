import ConcreteCalculator from "./ConcreteCalculator";

function PhoneMockup() {
  return (
    <div className="phone-stage" aria-label="Calculadora en dispositivo">
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone-mockup">
        <div className="phone-mockup__notch" aria-hidden="true" />
        <div className="phone-mockup__screen">
          <ConcreteCalculator />
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;
