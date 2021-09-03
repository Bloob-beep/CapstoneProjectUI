import React from "react";
import Table, { SelectColumnFilter, LocateCell } from "./Table";

export default function TableData({ markerInfo }) {
    // const getDataNodeRed = markerInfo
    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "ID"
            },
            {
                Header: "Equipment",
                accessor: "equipment",
                Filter: SelectColumnFilter,
                filter: "includes"
            },
            {
                Header: "Next Maintainance Date",
                accessor: "maintainenceDue"
            },

            // {
            //   Header: "Status",
            //   accessor: "status",
            //   Cell: StatusPill
            // },
            {
                Header: "Locate",
                // accessor: "locate",
                Cell: LocateCell,
                posAccessor: "posCoords"
            }
            // {
            //   Header: "Role",
            //   accessor: "role",
            //   Filter: SelectColumnFilter,
            //   filter: "includes"
            // }
        ],
        []
    );

    //const data = React.useMemo(() => markerInfo, []);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="">
                    <h1 className="text-xl font-semibold">Find Transmitters</h1>
                </div>
                <div className="mt-4">
                    <Table columns={columns} data={markerInfo} />
                    {/* <Table columns={columns} data={data} map={mapFly} /> */}
                </div>
            </main>
        </div>
    );
}
