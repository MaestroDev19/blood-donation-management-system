"use client";
import Image from "next/image";
import Link from "next/link";
import { Formik, Field, Form } from "formik";
export default function Home() {
  return (
    <>
      <main className="">
        <section
          id="hero"
          className="py-[120px] flex flex-col justify-center items-center space-y-5 text-center px-[30px] md:px-[60px] lg:px-[120px] "
        >
          <h1 className="text-7xl">
            Save lives with every drop. Donate blood.
          </h1>
          <p className="text-xl">
            Together, we can be the tide that turns fate. Donate blood and join
            the movement.
          </p>
          <div className="flex space-x-5 items-center">
            <button className="btn">Donate now</button>
            <Link href={"#"}>Find a blood bank</Link>
          </div>
        </section>
        <section
          id="hero"
          className="py-[120px] flex flex-col justify-center items-center space-y-5 px-[30px] md:px-[60px] lg:px-[120px] bg-[#fff]"
        >
          <h1>Benefits</h1>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
