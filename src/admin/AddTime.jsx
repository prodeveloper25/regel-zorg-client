import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { TimeDetailsContext } from "../context/TimeDetailsProvider";

const AddTime = () => {
  const { timeRefDates } = useContext(TimeDetailsContext);
  console.log(timeRefDates);
  const navigate = useNavigate();
  const handleAddTime = (e) => {
    e.preventDefault();
    const form = e.target;
    const hour = form.hour.value;
    const minute = form.minute.value;
    const meridiem = form.meridiem.value;
    const editTime = hour + ":" + minute + " " + meridiem;
    const newTime = { refdates: timeRefDates, time: editTime, status: "open" };
    fetch("https://regelzorg-server.vercel.app/times", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTime),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Time successfully added!",
            icon: "success",
          });
          navigate("/rz-adminpanel/locations");
        }
        form.reset();
      });
  };

  return (
    <div className="py-2 px-2 w-[300px] mx-auto mt-8">
      <form onSubmit={handleAddTime}>
        <div className="mb-2">
          <label>Hour</label>
          <select
            className="border py-1 px-2 w-full"
            name="hour"
            defaultValue="Hour"
            id="hour"
          >
            <option disabled>Hour</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
        <div className="mb-2">
          <label>Minute</label>
          <input
            className="border py-1 px-2 w-full"
            name="minute"
            id="minute"
            maxLength="2"
          ></input>
        </div>
        <div className="mb-2">
          <label>Meridiem</label>
          <select
            className="border py-1 px-2 w-full"
            name="meridiem"
            defaultValue="Meridiem"
            id="meridiem"
          >
            <option disabled>Meridiem</option>
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
        <div className="mt-6">
          <button className="text-lg font-[poppins] bg-[#00AEEF] text-white  px-4 py-1 w-full">
            Add a time
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTime;
