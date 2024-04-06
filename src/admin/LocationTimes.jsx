import { Badge, Table } from "keep-react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const LocationTimes = () => {
  const times = useLoaderData();
  const handleDeleteTime = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this time?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0A9952",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://regelzorg-server.vercel.app/times/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then((data) => {
            Swal.fire({
              title: "Success!",
              text: "Time successfully deleted!",
              icon: "success",
            });
            window.location.pathname = "/rz-adminpanel/locations";
          });
      }
    });
  };
  return (
    <div className="mt-8 mx-2">
      <div>
        <Helmet>
          <title>RegelZorg | Sub Location</title>
        </Helmet>
      </div>
      <div className="flex justify-end mb-4">
        <Link
          to="/rz-adminpanel/addtimes"
          className="text-lg font-[poppins] bg-[#00AEEF] text-white  px-4 py-1 rounded"
        >
          Add a time
        </Link>
      </div>
      <Table>
        <Table.Caption></Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">#</Table.HeadCell>
          <Table.HeadCell className="min-w-[290px]">Time</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {times ? (
            times.map((tm, index) => {
              return (
                <Table.Row key={tm._id} className="bg-white">
                  <Table.Cell>
                    <h1 className="text-[14px] font-medium">{index + 1}</h1>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="-mb-0.5 text-body-4 text-green-500 font-medium">
                              {tm.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge showIcon={true}>{tm.status}</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleDeleteTime(tm._id)}
                      className="mb-1 underline text-red-600"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })
          ) : (
            <p className="text-xl text-center">Not Found Times!</p>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default LocationTimes;
