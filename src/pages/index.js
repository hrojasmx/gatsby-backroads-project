import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <>
      <Layout>
        <SimpleHero>
          <Banner
            title={"continuing exploring"}
            info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          >
            <Link to='/tours' className="btn-white">explore tours</Link>
          </Banner>
        </SimpleHero>
        <About />
        <Services />
      </Layout>
    </>
  )
}
