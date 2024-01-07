/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { Formik, Field, Form } from "formik";

export default function Home() {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
  ];
  return (
    <>
      <main>
        <section className="px-[30px] md:px-[60px] lg:px-[120px] w-full min-h-full py-[100px] flex items-center">
          <div className="flex flex-col justify-center space-y-10 w-full">
            <h1 className="text-7xl">
              Your blood can change everything, Donate now.
            </h1>
            <div></div>
            <div className="flex flex-col md:flex-row-reverse  md:justify-between  w-full space-y-5 md:space-y-0">
              <ul className="flex  sm:items-center flex-row  space-x-10 ">
                {stats.map((item, idx) => (
                  <li key={idx} className="text-center space-y-2.5">
                    <h4 className="text-4xl text-black font-semibold">
                      {item.data}
                    </h4>
                    <p className=" text-gray-600 font-medium">{item.title}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col space-y-10">
                <p className="lg:w-8/12">
                  It's not just a donation; it's a wave of hope. Be a force for
                  good, be a blood donor. Let's change lives together, one
                  selfless act at a time.
                </p>
                <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row items-center md:space-x-5">
                  <button className="btn w-full md:w-fit">Donate now</button>
                  <Formik
                    initialValues={{
                      search: "",
                    }}
                    onSubmit={async (values) => {
                      await new Promise((r) => setTimeout(r, 500));
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    <Form className="w-full md:w-fit">
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <Field
                          type="text"
                          placeholder="Search"
                          name="search"
                          className="w-full py-3 pl-12 pr-4 text-black border-2 border-black outline-none bg-white"
                        />
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[30px] md:px-[60px] lg:px-[120px] w-full min-h-full py-[100px] flex items-center">
          What id Blood
        </section>
      </main>
    </>
  );
}
