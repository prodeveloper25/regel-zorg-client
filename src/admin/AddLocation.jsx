import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddLocation = () => {
  const navigate = useNavigate();
  const handleAddLocation = (e) => {
    e.preventDefault();
    const form = e.target;
    const parentname = form.parentname.value;
    const postcode = form.postcode.value;
    const selectvalue = form.selectvalue.value;
    const newLocation = {
      parentname: parentname,
      postcode: postcode + "-" + selectvalue,
    };
    console.log(newLocation);
    fetch("https://regelzorg-server.vercel.app/locations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newLocation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Location successfully added!",
            icon: "success",
          });
          navigate("/rz-adminpanel/locations");
        }
        form.reset();
      });
  };

  return (
    <div className="mx-2">
      <Helmet>
        <title>RegelZorg | Add a Location</title>
      </Helmet>
      <form
        onSubmit={handleAddLocation}
        className="px-2 py-2 w-[400px] mx-auto mt-20"
      >
        <div className="flex flex-col">
          <label htmlFor="">Location Name</label>
          <input
            type="text"
            className="px-2 py-1 border"
            placeholder="Location name"
            name="parentname"
            id="parentname"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="">Postcode</label>
          <input
            type="text"
            className="px-2 py-1 border"
            placeholder="Postcode"
            name="postcode"
            id="postcode"
            required
            maxLength="4"
          />
          <select
            defaultValue="select"
            className="border px-2 py-1 mt-3"
            name="selectvalue"
          >
            <option disabled>select</option>
            <option>PH</option>
            <option>GC</option>
            <option>LD</option>
            <option>ZA</option>
            <option>BA</option>
            <option>PE</option>
            <option>RA</option>
            <option>AW</option>
            <option>GM</option>
            <option>BB</option>
            <option>SL</option>
            <option>AG</option>
            <option>AE</option>
            <option>CW</option>
          </select>
        </div>
        <div className="mt-7">
          <button
            type="submit"
            className="bg-[#00AEEF] w-full text-white px-4 py-1 text-lg font-medium font-[poppins]"
          >
            Add Location
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLocation;
