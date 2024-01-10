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
  const card = [
    {
      title: "Hi",
      details: "Lorem",
    },
    {
      title: "Hi",
      details: "Lorem",
    },
    {
      title: "Hi",
      details: "Lorem",
    },
    {
      title: "Hi",
      details: "Lorem",
    },
  ];
  const detailsData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
  ];
  return (
    <>
      <main className="relative">
        <section className="px-[30px] md:px-[60px] lg:px-[120px] w-full  pt-[100px] pb-[75px] flex items-center">
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
                <p className="lg:w-8/12 text-lg">
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
        <section className="px-[30px] md:px-[60px] lg:px-[120px] w-full  py-[75px] flex items-center ">
          <div className="flex flex-col space-y-20">
            <div className="grid grid-cols-2 justify-items-stretch">
              <div className="col-span-1 flex flex-col space-y-5">
                <h2 className="text-4xl">What is blood donation?</h2>
                <p className="text-lg">
                  Blood donation is a vital and voluntary act that saves lives
                  by providing crucial resources for medical treatments.
                  Different types of donations, such as whole blood, plasma, and
                  platelets, address various medical needs. Whole blood is used
                  for general procedures, while plasma, rich in antibodies,
                  helps those with immune deficiencies. Platelets, essential for
                  clotting, benefit cancer patients and surgical cases. Donating
                  blood is an altruistic act that ensures a consistent supply of
                  these components, supporting diverse medical treatments and
                  emergencies. Embracing blood donation enhances the well-being
                  of individuals and communities, promoting a culture of
                  compassion and solidarity.
                </p>
              </div>
              <div className="col-span-1  justify-self-end ">
                <Image
                  src={"/needle.jpg"}
                  width={300}
                  height={250}
                  alt="nurse holding a syringe with blood in it"
                  className="object-cover h-full w-full border-2 border-black"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-4xl w-5/12">
                Why is blood donation crucial for saving lives?
              </h2>
              <p className="w-4/12 text-lg">
                Make a Difference by Donating Blood to Save Lives and Foster
                Community Well-being. Your Contribution Matters!
              </p>
            </div>
            <div className=" flex space-x-5  ">
              {card.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative block h-64 sm:h-80 lg:h-96 w-full"
                >
                  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        {item.title}
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm sm:text-base">
                        {item.details}
                      </p>

                      <p className="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="px-[30px] md:px-[60px] lg:px-[120px] w-full  py-[75px] flex items-center "
        >
          <div className="grid grid-cols-2 ">
            <div className="flex flex-col space-y-10 col-span-1">
              <h2 className="text-4xl">What is blood donation?</h2>
              <p className="text-lg">
                Blood donation is a vital and voluntary act that saves lives by
                providing crucial resources for medical treatments. Different
                types of donations, such as whole blood, plasma, and platelets,
                address various medical needs.
              </p>
              <div className="flow-root">
                <div className="-my-8 divide-y divide-gray-100">
                  {detailsData.map((detail, index) => (
                    <details
                      key={index}
                      className="group py-8 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                        <h2 className="text-lg font-medium">{detail.title}</h2>

                        <span className="relative h-5 w-5 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        {detail.content}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1  justify-self-end ">
              <Image
                src={"/needle2.jpg"}
                width={300}
                height={250}
                alt="nurse holding a syringe with blood in it"
                className="object-cover h-full w-full border-2 border-black"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
