import sec5 from "../assets/sec5.png"
function Section8() {
  return (
    <div className=" mt-12 flex flex-col-reverse md:flex-row md:justify-between mb-8 md:mb-16">
        <div className=" w-full md:w-[50%] bg-indigo-200 px-4 md:px-4 py-4 md:py-6">
            <p className="  md:pt-20 text-2xl md:text-5xl font-thin  font-[mono]">We’re here if you need us </p>
            <p className="  mt-4 md:mt-8 text-sm font-[georgia] ">You can do everything you need right in our app. But sometimes, it’s just easier to talk to a person. That’s why we have a gaggle of certified CPAs, CFAs, and CFPs standing by to answer your questions.</p>
            <p className="mt-8 mb-8 lg:mb-0 md:mt-12 text-sm rounded-md text-indigo-950 font-bold underline"> Learn more about our Product Specialists</p>
        </div>

        <div className="w-auto md:w-7/12" >
              <img src={sec5} alt=""  />
        </div>
    </div>
  )
}

export default Section8