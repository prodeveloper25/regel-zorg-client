import { Table } from "keep-react";
import { User } from "phosphor-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllAdmin = () => {
  const [usersData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://regelzorg-server.vercel.app/admins")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>RegelZorg | All Admin</title>
      </Helmet>
      <div className="mt-5 mx-3">
        <Table>
          <Table.Caption></Table.Caption>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Avatar</Table.HeadCell>
            <Table.HeadCell className="min-w-[290px]">
              <p className="text-body-5 font-medium text-metal-400">
                Admin Name
              </p>
            </Table.HeadCell>
            <Table.HeadCell>Email Address</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-gray-25 divide-y">
            {usersData ? (
              usersData.map((userData, index) => (
                <Table.Row key={userData._id} className="bg-white">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>
                    <User className="text-xl" />
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="-mb-0.5 flex items-center gap-3 text-body-4 font-medium text-metal-600">
                              {userData?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <h1 className="text-[15px]">{userData?.email}</h1>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <p className="text-xl text-center">Not Found Admins!</p>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllAdmin;
