import type { NextPage } from "next";
import { AuthLayout } from "../components/auth-layout";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="h-auto min-h-screen bg-zinc-900">
        <div className="mx-auto max-w-[1400px]">
          <Navbar />
        </div>
        <div className="mx-auto max-w-[1400px]">
          <section className="responsive-padding relative mx-auto w-full max-w-4xl py-8 text-white">
            <h1 className="py-6 text-start text-4xl font-medium">About Us</h1>
            <p className="text-justify text-3xl font-extralight">
              Our mission is to provide a platform for people to vent out there
              feelings in incognito mode!
              <br /> <br />
              Share your weirdest and darkest secrets anonymously, and receive
              feedbacks from other users.
            </p>
            <br />
            <br />
            <p className="text-start text-3xl font-extralight">
              Moreover, Incognito Confessions is a Laravel test and starter
              built by Incline Start-up Agency for future team project. Testing
              Git and framework functions.
              <br /> <br />
              In addition, anyone is open to use this laravel template for
              personal and commercial use.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
