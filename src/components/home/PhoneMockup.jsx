import ConcreteCalculator from "./ConcreteCalculator";

function PhoneMockup() {
  return (
    <div className="phone-stage" aria-label="Calculadora de cotización en celular">
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone-mockup">
        <div className="phone-mockup__speaker" aria-hidden="true" />
        <div className="phone-mockup__screen">
          <ConcreteCalculator />
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;
