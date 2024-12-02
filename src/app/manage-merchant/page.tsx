'use client'
import Header from "@/components/Header";
import { FormComponent } from "./form-component";
import { Select } from "@/components/ui/select";
import { useState } from "react";
import classNames from "classnames";
import MerchantRequestTable from "@/components/MerchantRequestTable";

enum NAV_DISPLAY {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

const ManageMerchant = () => {

  const [currentDispay, setCurrentDisplay] = useState<NAV_DISPLAY>(NAV_DISPLAY.PENDING);

  return (
    <>
      <Header />
      <div className="px-[20px] mt-3">
        <h1 className="font-medium">Manage merchants</h1>
        <div className="flex justify-between items-center w-max gap-x-5 mt-5 text-sm">

          {/* Pending */}
          <div className="flex flex-col gap-y-1 cursor-pointer" onClick={() => setCurrentDisplay(NAV_DISPLAY.PENDING)} >
            <p className="px-4">Pending</p>
            <div className={
              classNames({
                'h-1 rounded-full': true,
                'bg-[#006790]': currentDispay == NAV_DISPLAY.PENDING,
              })}></div>
          </div>

          {/* Approved */}
          <div className="flex flex-col gap-y-1 cursor-pointer" onClick={() => setCurrentDisplay(NAV_DISPLAY.APPROVED)}>
            <p className="px-4">Approved</p>
            <div className={
              classNames({
                'h-1 rounded-full': true,
                'bg-[#006790]': currentDispay == NAV_DISPLAY.APPROVED,
              })}></div>
          </div>

          {/* Rejected */}
          <div className="flex flex-col gap-y-1 cursor-pointer" onClick={() => setCurrentDisplay(NAV_DISPLAY.REJECTED)} >
            <p className="px-4">Rejected</p>
            <div className={
              classNames({
                'h-1 rounded-full': true,
                'bg-[#006790]': currentDispay == NAV_DISPLAY.REJECTED,
              })}></div>
          </div>
        </div>
      </div>

      <div>
        <MerchantRequestTable />
      </div>
    </>
  )
}

export default ManageMerchant;