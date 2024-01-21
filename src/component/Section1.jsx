import logo from "../assets/logo.png"

function Section1() {
  return (
    < div className="grid grid-cols-2 gap-8 lg:grid-cols-6 mb-16 md:mb-24 ">
            <img src={logo} alt="" className="object-contain h-6"/>
            <img src={logo} alt="" className="object-contain h-6"/>
            <img src={logo} alt="" className="object-contain h-6"/>
            <img src={logo} alt="" className="object-contain h-6"/>
            <img src={logo} alt="" className="object-contain h-6"/>
            <img src={logo} alt="" className="object-contain h-6"/>
    </div>
  )
}

export default Section1