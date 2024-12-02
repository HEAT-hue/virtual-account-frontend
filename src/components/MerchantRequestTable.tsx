import React from 'react'

const MerchantRequestTable = () => {
    return (
        <>
            <table className="w-full  border-separate border-spacing-y-4 ">
                <thead className="">
                    <tr id="header" className="text-[#00567B] pb-20">
                        <th className="">Provider ID</th>
                        <th className="font-Gilroy-SemiBold">
                            Provider Name
                        </th>
                        <th className="font-Gilroy-SemiBold">
                            Settlement Account
                        </th>
                        <th className="font-Gilroy-SemiBold">
                            Amount Validation
                        </th>
                        <th className="font-Gilroy-SemiBold">
                            Account Name
                        </th>
                        <th className="font-Gilroy-SemiBold">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {/* {buses.map((bus: Bus, index) => {
                        return (
                            <tr
                                id="staff"
                                key={index}
                                className=" text-center tablerow bg-[#F4F4F4] text-[14px] text-[#4D4D4D]"
                            >
                                {" "}
                                <td className="rounded-l-lg whitespace-nowrap">{index + 1}</td>
                                <td
                                    className={`px-6 py-4 border-none whitespace-nowrap font-Gilroy-Regular`}
                                >
                                    {bus.busNumber}
                                </td>
                                <td
                                    className={`px-6 py-4 border-none whitespace-nowrap font-Gilroy-Regular`}
                                >
                                    {bus.driverName}
                                </td>
                                <td
                                    className={`px-6 py-4 border-none whitespace-nowrap font-Gilroy-Regular`}
                                >
                                    {bus.driverPhoneNumber}
                                </td>
                                <td
                                    className={`px-6 py-4 border-none whitespace-nowrap font-Gilroy-Regular`}
                                >
                                    {bus.busModel}
                                </td>
                                <td
                                    className={`px-6 py-4 border-none whitespace-nowrap font-Gilroy-Regular`}
                                >
                                    {bus.busCapacity}
                                </td>
                                <td
                                    className={`px-6 py-4 border-none whitespace-nowrap font-Gilroy-Regular`}
                                >
                                    {bus.routeName}
                                </td>
                                <td className=" flex justify-center items-center font-Gilroy-SemiBold whitespace-nowrap ">
                                    <span
                                        className={classNames({
                                            ' text-[#3C8930] bg-[#3C8930]/40': bus.operationalStatus == BUS_OPERATIONAL_STATUS.ACTIVE,
                                            ' text-[#B3261E] bg-[#B3261E]/40': bus.operationalStatus == BUS_OPERATIONAL_STATUS.INACTIVE,
                                            'flex justify-center items-center max-w-[130px]  py-1 rounded-lg  w-full': true
                                        })}
                                    >
                                        {bus.operationalStatus}
                                    </span>
                                </td>
                                <td
                                    onClick={() => setCurrentBus(bus)}
                                    className={`px-6 py-4 border-none whitespace-nowrap font-Gilroy-Medium text-ecobankBlue cursor-pointer`}
                                >
                                    view
                                </td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </>
    )
}

export default MerchantRequestTable