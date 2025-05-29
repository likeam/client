"use client";
import React from "react";

import CardSalesSummary from "@/app/CardSalesSummary";
import CardPopularProducts from "@/app/CardPopularProducts";
import CardPurchaseSummary from "@/app/CardPurchaseSummary";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <div className=" row-span-3 bg-blue-500" />
      <div className=" md:row-span-1 xl:row-span-2 bg-orange-500" />
      <div className=" md:row-span-1 xl:row-span-2 bg-lime-500" />
      <div className=" md:row-span-1 xl:row-span-2 bg-yellow-500" />
    </div>
  );
};

export default Dashboard;
