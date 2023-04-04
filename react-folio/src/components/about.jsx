import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#3c1414] text-gray-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <div className="end-0 sm-text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ad8f18]">
              About
            </p>
            <h1 className="text-2xl py-2 ">Take a minute to get to know me!</h1>
          </div>

          <div></div>
          <div className="max-w-[1000px] w-full px-4 grid gird-cols-2 gap-8">
            <div className="sm-text-right pb-8 pl-4">
              <p className="text-2xl ">
                Hi my name is Patrick Ingram. I am currently a student at the
                University of North Carolina at Charlotte. I am studying
                software engineering as a means to my next career move. I have
                diverse background from personel managment to heavy truck
                production. The commenailty between these have been the fact
                that I have had to learn, adapt and use many different software
                applications and programs. Understanding that I learn quickly on
                computers, I decided it's time for a career change and decided
                to enroll in a field that is not only challenging but is
                rewarding. I Hope you like what you find here and I cannot wait
                to meet with you!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;