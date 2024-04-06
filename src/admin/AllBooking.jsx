import { Button, Table } from "keep-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllBooking = () => {
  const [allBookingData, setAllBookingData] = useState([]);

  useEffect(() => {
    fetch("https://regelzorg-server.vercel.app/allbooking")
      .then((res) => res.json())
      .then((data) => setAllBookingData(data));
  }, []);

  const handleFinisheBooking = (Bkdata) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Has this booking been completed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0A9952",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, completed it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://regelzorg-server.vercel.app/allbooking/${Bkdata?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then((data) => {
            const updateTime = {
              refdates: Bkdata?.refdates,
              time: Bkdata?.time,
              status: Bkdata?.status,
            };
            fetch(
              `https://regelzorg-server.vercel.app/times/${Bkdata?.timeId}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(updateTime),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log("Updated");
                Swal.fire({
                  title: "Success!",
                  text: "Booking completed successfully!",
                  icon: "success",
                });
                const remaining = allBookingData.filter(
                  (allbk) => allbk._id !== Bkdata._id
                );
                setAllBookingData(remaining);
              });
          });
      }
    });
  };
  return (
    <div className="mx-2 mt-14">
      <Helmet>
        <title>RegelZorg | All Booking</title>
      </Helmet>
      <Table>
        <Table.Caption></Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[40px]">#</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]">
            <p className="text-body-5 font-medium text-metal-400">Time</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[160px]">Name</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">
            Email address
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">
            Phone number
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Reference</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]">Price</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {allBookingData?.map((singleBookingData, index) => (
            <Table.Row key={singleBookingData?._id} className="bg-white">
              <Table.Cell>
                <h1 className="text-[14px] font-medium">{index + 1}</h1>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                          {singleBookingData?.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <h1 className="text-[14px] font-medium">
                  {singleBookingData?.frname}. {singleBookingData?.lastname}
                </h1>
              </Table.Cell>
              <Table.Cell className="text-sm">
                {singleBookingData?.emailaddress}
              </Table.Cell>
              <Table.Cell className="text-sm">
                {singleBookingData?.phonenumber}
              </Table.Cell>
              <Table.Cell className="text-sm">
                {singleBookingData?.regelzorgend}
              </Table.Cell>
              <Table.Cell className="text-sm">
                € {singleBookingData?.price}
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => handleFinisheBooking(singleBookingData)}
                  className="bg-[#00AEEF] hover:bg-[#00AEEF] lg:mt-0 mt-2 px-3 py-2"
                >
                  Done
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {allBookingData.length === 0 ? (
        <p className="text-xl mt-2 text-center">No one has booked yet!</p>
      ) : null}
    </div>
  );
};

export default AllBooking;
