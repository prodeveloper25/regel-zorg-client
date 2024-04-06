import { Button, Table } from "keep-react";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PostcodeContext } from "../context/PostcodeProvider";

const Locations = () => {
  const [loctaionData, setLocationData] = useState([]);
  const { setLocationPostcode } = useContext(PostcodeContext);

  useEffect(() => {
    fetch("https://regelzorg-server.vercel.app/locations")
      .then((res) => res.json())
      .then((data) => setLocationData(data));
  }, []);
  return (
    <div className="mt-6 mx-3">
      <Helmet>
        <title>RegelZorg | Location</title>
      </Helmet>
      <div className="mb-7 lg:flex items-center justify-end">
        <div>
          <Link to="/rz-adminpanel/addlocation">
            <Button
              size="sm"
              className="bg-[#00AEEF] hover:bg-[#00AEEF] lg:mt-0 mt-2 px-3 py-2"
            >
              Add a Location
            </Button>
          </Link>
        </div>
      </div>
      <Table>
        <Table.Caption></Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[80px]">#</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">
            <p className="text-body-5 font-medium text-metal-400">
              Location name
            </p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[160px]">Postcode</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">View</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">
            Add sub location
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {loctaionData ? (
            loctaionData.map((lcData, index) => (
              <Table.Row key={lcData?._id} className="bg-white">
                <Table.Cell>
                  <h1 className="text-[14px] font-medium">{index + 1}</h1>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                            {lcData?.parentname}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <h1 className="text-[14px] font-medium">
                    {lcData?.postcode}
                  </h1>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    className="underline text-[13px] text-blue-600"
                    to={`/rz-adminpanel/locationDetails/${lcData.postcode}`}
                  >
                    View Details
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    to="/rz-adminpanel/addsublocation"
                    onClick={() => setLocationPostcode(lcData?.postcode)}
                    className="underline text-[13px] text-blue-600"
                  >
                    Add Sub Location
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <p className="text-xl text-center">Not Found Locations!</p>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Locations;
