import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Deck from './Deck';

const HeadingWithSpacing = ({ children }) => (
  <>
    <h2 className="w-full px-4 mx-2 lg:w-1/2 lg:px-0 lg:mx-0 2xl:w-[708px] text-2xl">{children}</h2>
    <div className="h-8"></div>
  </>
);

const MoreSection = ({ showMore }) => (
  <>
    <div className="h-8"></div>
    <p className="text-2xl">
      create a blog forever owned by you via blockchain technology; available
      online and offline
    </p>
    <div className="h-8"></div>
    <p className="text-2xl">
      a beautiful non biased place, to express, share and connect all online and
      personal content with minimal restrictions, akin to a personal diary or
      archive
    </p>
    <div className="h-8"></div>
    <p className="text-2xl">
      field is on a path to decentralisation, meaning once fully established,
      users can propose changes and updates to the platform and vote on those
      proposals eg. new capabilities, updated user experience or electing
      governance members for protecting core values of the user base
    </p>
  </>
);

function HomePage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="grid justify-items-center content-start">
      <div className="h-60"></div>
      <HeadingWithSpacing>
        this is a blogging platform where you own your content forever, online
        and offline
      </HeadingWithSpacing>
      <HeadingWithSpacing>home for the pages of your mind</HeadingWithSpacing>
      <HeadingWithSpacing>no ads</HeadingWithSpacing>
      <HeadingWithSpacing>no censorship</HeadingWithSpacing>
      <div className="w-full px-4 mx-2 lg:w-1/2 lg:px-0 lg:mx-0 2xl:w-[708px]">
        <button
          id="moreBtn"
          onClick={() => setShowMore(!showMore)}
          className="font-bold text-2xl inline-block"
        >
          {showMore === true ? "- more" : "+  more"}
        </button>
        {showMore && <MoreSection />}
      </div>
      <div className="h-96"></div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="fixed top-0 left-0 p-4 text-sm font-bold">
        field
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </>
  );
}
