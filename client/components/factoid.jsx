Factoid = React.createClass({

  render() {
    // if(DeviceOrientation.isLandscape()) {
    // } else {

      return (
        <p>{randFactoid()}</p>
      )

    // }
  }
});

var factoids = [
  "Baltimore police testified that they have used Stingray technology 4300 times since 2007.",
  "Police have believed themselves unable to comply with subpoenas to produce Stingray devices in court, due to nondisclosure agreements with the FBI.",
  "If a Stingray is used against a Verizon customer, identifying information from every Verizon phone in the area will be swept up.",
  "Civilians recently filed a lawsuit against the Chicago Police Department based on evidence that police had been eavesdropping on protesters’ cell phones.",
  "At least 53 agencies in 21 states and the District of Columbia own Stingrays. Many more continue to hide their purchase and use of the technology."
]

var randFactoid = function() {
  return _.sample(factoids);
}
