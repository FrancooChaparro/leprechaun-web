"use client"
import { Banner } from "@/components/banner/Banner";
import { GridLayout } from "@/components/grid-layout/GridLayout";
import { useMyContext } from "@/context/ListContext";

export default function Home() {
  const { Productos } = useMyContext();
  
  return (
    <main>
      <Banner />
      <GridLayout />   
    </main>
  );
}

