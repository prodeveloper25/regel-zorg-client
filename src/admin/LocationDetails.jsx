import { Badge, Table } from "keep-react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { TimeDetailsContext } from "../context/TimeDetailsProvider";

const LocationDetails = () => {
  const subLocations = useLoaderData();
  const { setTimeRefDates } = useContext(TimeDetailsContext);
  const handleDeleteSubLocation = (subLcDt) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this sub location?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0A9952",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://regelzorg-server.vercel.app/subLocations/find/${subLcDt?._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json)
          .then((data) => {
            Swal.fire({
              title: "Success!",
              text: "Sub location successfully deleted!",
              icon: "success",
            });
            window.location.pathname = "/rz-adminpanel/locations";
          });
      }
    });
  };
  return (
    <div className="mt-16 mx-2">
      <Helmet>
        <title>RegelZorg | Sub Location</title>
      </Helmet>
      <div>
        <Table>
          <Table.Caption></Table.Caption>
          <Table.Head>
            <Table.HeadCell className="min-w-[80px]">#</Table.HeadCell>
            <Table.HeadCell className="min-w-[80px]">Distance</Table.HeadCell>
            <Table.HeadCell className="min-w-[152px]">
              <p className="text-body-5 font-medium text-metal-400">
                Sub location
              </p>
            </Table.HeadCell>
            <Table.HeadCell className="min-w-[290px]">Dates</Table.HeadCell>
            <Table.HeadCell className="min-w-[152px]">Price</Table.HeadCell>
            <Table.HeadCell className="min-w-[200px]">Status</Table.HeadCell>
            <Table.HeadCell className="min-w-[100px]">Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-gray-25 divide-y">
            {subLocations ? (
              subLocations.map((subLc, index) => {
                return (
                  <Table.Row key={subLc._id} className="bg-white">
                    <Table.Cell>
                      <h1 className="text-[14px] font-medium">{index + 1}</h1>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="-mb-0.5 text-body-4 text-green-500 font-medium">
                                {subLc.distance}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <h1 className="text-[14px] font-medium">
                        {subLc.childname}
                      </h1>
                    </Table.Cell>
                    <Table.Cell>
                      <h1 className="text-[12px] flex flex-col ">
                        {subLc.dates.map((singledate, i) => {
                          return (
                            <Link
                              onClick={() =>
                                setTimeRefDates(singledate.reftimes)
                              }
                              className="mb-1 underline text-blue-600"
                              to={`/rz-adminpanel/times/${singledate.reftimes}`}
                              key={i}
                            >
                              {singledate.date}
                            </Link>
                          );
                        })}
                      </h1>
                    </Table.Cell>
                    <Table.Cell>
                      <h1 className="text-[14px] font-semibold">
                        € {subLc.price}
                      </h1>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge color="success" showIcon={true}>
                        {subLc.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <button
                        onClick={() => handleDeleteSubLocation(subLc)}
                        className="mb-1 underline text-red-600"
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <p className="text-xl text-center">Not Found Sub Locations!</p>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default LocationDetails;
