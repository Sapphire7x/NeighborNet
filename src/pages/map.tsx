import Head from "next/head";
import MapboxMap from "@/components/MapboxMap";
import MainNavbar from "@/components/MainNavbar";
import { Button, Container, Navbar, Text, Spacer } from "@nextui-org/react";
import "mapbox-gl/dist/mapbox-gl.css";
//import "./styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { Switch, useTheme } from '@nextui-org/react'



export default function Feed() {
  
  return (
    <>
      <Head>
        <title>Map | NeighborNet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MapboxMap />
      </main>
    </>
  );
}

