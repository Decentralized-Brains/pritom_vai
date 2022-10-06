import React from "react";

const Education = () => {
  return (
    <div className="container px-6 mt-20 md:mt-0">
      <h2 className="title">Education</h2>
      <div className="text-center text-white my-20">
        <div className="grid place-items-center  gap-12 md:grid-cols-3">
          <div className="min-w-[350px] border border-gray-400/60 rounded-xl py-6 px-3 relative">
            <p className="absolute -top-5 left-[29%] bg-[#04012c] px-3 border border-sky-500 py-2 rounded-md">
              Jan 2016 - Dec 2019
            </p>
            <h3 className="mt-4 text-xl">Bachelors of Computer Science</h3>
            <p className="text-lg my-2">
              CGPA: <span className="font-bold">3.31/4</span>
            </p>
            <p>Varendra University Rajshahi,</p>
            <p>Bangladesh</p>
          </div>

          <div className="min-w-[350px] border border-gray-400/60 rounded-xl py-6 px-3 relative">
            <p className="absolute -top-5 left-[29%] bg-[#04012c] px-3 border border-sky-500 py-2 rounded-md">
              Jan 2016 - Dec 2019
            </p>
            <h3 className="mt-4 text-xl">Higher Secondary Certificate</h3>
            <p className="text-lg my-2">
              GPA: <span className="font-bold">4.2/5</span>
            </p>
            <p>Varendra College Rajshahi</p>
            <p>Bangladesh</p>
          </div>

          <div className="min-w-[350px] border border-gray-400/60 rounded-xl py-6 px-3 relative">
            <p className="absolute -top-5 left-[29%] bg-[#04012c] px-3 border border-sky-500 py-2 rounded-md">
              Jan 2016 - Dec 2019
            </p>
            <h3 className="mt-4 text-xl">Secondary School Certificate</h3>
            <p className="text-lg my-2">
              GPA: <span className="font-bold">5/5</span>
            </p>
            <p>Rajshahi B.B Hindu Academy, Rajshahi,</p>
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
