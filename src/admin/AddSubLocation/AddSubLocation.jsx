import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { PostcodeContext } from "../../context/PostcodeProvider";

const AddSubLocation = () => {
  const { locationPostcode, setLocationPostcode } = useContext(PostcodeContext);
  console.log(locationPostcode);
  const navigate = useNavigate();

  const handleAddSubLocation = (e) => {
    e.preventDefault();
    const form = e.target;
    const distance = form.distance.value;
    const childname = form.childname.value;
    const price = form.price.value;

    const day1 = form.day1.value;
    const date1 = form.date1.value;
    const month1 = form.month1.value;
    const year1 = form.year1.value;

    const day2 = form.day2.value;
    const date2 = form.date2.value;
    const month2 = form.month2.value;
    const year2 = form.year2.value;

    // const day3 = form.day3.value;
    // const date3 = form.date3.value;
    // const month3 = form.month3.value;
    // const year3 = form.year3.value;

    // const day4 = form.day4.value;
    // const date4 = form.date4.value;
    // const month4 = form.month4.value;
    // const year4 = form.year4.value;

    // const day5 = form.day5.value;
    // const date5 = form.date5.value;
    // const month5 = form.month5.value;
    // const year5 = form.year5.value;

    // const day6 = form.day6.value;
    // const date6 = form.date6.value;
    // const month6 = form.month6.value;
    // const year6 = form.year6.value;

    // const day7 = form.day7.value;
    // const date7 = form.date7.value;
    // const month7 = form.month7.value;
    // const year7 = form.year7.value;

    // const day8 = form.day8.value;
    // const date8 = form.date8.value;
    // const month8 = form.month8.value;
    // const year8 = form.year8.value;

    // const day9 = form.day9.value;
    // const date9 = form.date9.value;
    // const month9 = form.month9.value;
    // const year9 = form.year9.value;

    // const day10 = form.day10.value;
    // const date10 = form.date10.value;
    // const month10 = form.month10.value;
    // const year10 = form.year10.value;

    const dbDates = [
      {
        date: day1 + " " + month1 + " " + date1 + "," + " " + year1,
        reftimes: day1 + "-" + month1 + "-" + date1 + "," + "-" + year1,
      },
      {
        date: day2 + " " + month2 + " " + date2 + "," + " " + year2,
        reftimes: day2 + "-" + month2 + "-" + date2 + "," + "-" + year2,
      },
      //   {
      //     date: day3 + " " + month3 + " " + date3 + "," + " " + year3,
      //     reftimes: day3 + "-" + month3 + "-" + date3 + "," + "-" + year3,
      //     status: "open",
      //   },
      //   {
      //     date: day4 + " " + month4 + " " + date4 + "," + " " + year4,
      //     reftimes: day4 + "-" + month4 + "-" + date4 + "," + "-" + year4,
      //     status: "open",
      //   },
      //   {
      //     date: day5 + " " + month5 + " " + date5 + "," + " " + year5,
      //     reftimes: day5 + "-" + month5 + "-" + date5 + "," + "-" + year5,
      //     status: "open",
      //   },
      //   {
      //     date: day6 + " " + month6 + " " + date6 + "," + " " + year6,
      //     reftimes: day6 + "-" + month6 + "-" + date6 + "," + "-" + year6,
      //     status: "open",
      //   },
      //   {
      //     date: day7 + " " + month7 + " " + date7 + "," + " " + year7,
      //     reftimes: day7 + "-" + month7 + "-" + date7 + "," + "-" + year7,
      //     status: "open",
      //   },
      //   {
      //     date: day8 + " " + month8 + " " + date8 + "," + " " + year8,
      //     reftimes: day8 + "-" + month8 + "-" + date8 + "," + "-" + year8,
      //     status: "open",
      //   },
      //   {
      //     date: day9 + " " + month9 + " " + date9 + "," + " " + year9,
      //     reftimes: day9 + "-" + month9 + "-" + date9 + "," + "-" + year9,
      //     status: "open",
      //   },
      //   {
      //     date: day10 + " " + month10 + " " + date10 + "," + " " + year10,
      //     reftimes: day10 + "-" + month10 + "-" + date10 + "," + "-" + year10,
      //     status: "open",
      //   },
    ];

    const dbSubLocationData = {
      distance: distance + " " + "km",
      childname: childname,
      refpostcode: locationPostcode,
      dates: dbDates,
      price: price,
      status: "open",
    };
    fetch("https://regelzorg-server.vercel.app/subLocations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dbSubLocationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Sub location successfully added",
          });
          navigate("/rz-adminpanel/locations");
        }
        form.reset();
      });
  };

  return (
    <div className="w-[700px] mx-auto mt-6">
      <Helmet>
        <title>RegelZorg | Add a Sub Location</title>
      </Helmet>
      <form onSubmit={handleAddSubLocation} className="mx-4">
        <div className="flex gap-16 w-full">
          <div className="flex flex-col w-full">
            <label>Distance</label>
            <input
              type="text"
              className="px-2 py-1 w-full border"
              placeholder="Distance"
              name="distance"
              id="distance"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Location Name</label>
            <input
              type="text"
              className="px-2 py-1 w-full border"
              placeholder="Location name"
              name="childname"
              id="childname"
              required
            />
          </div>
        </div>
        <div className="mt-4 mb-4">
          <div className="flex flex-col w-full">
            <label>Price</label>
            <input
              type="text"
              className="px-2 py-1 w-full border"
              placeholder="Price"
              name="price"
              id="price"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-xl">Dates</h1>
          <div className="flex items-center gap-5 justify-center">
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 1</label>
                <select
                  className="w-16 border"
                  name="day1"
                  required
                  defaultValue="Day"
                  id="day1"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 1</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date1"
                  id="date1"
                  maxLength="2"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 1</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month1"
                  id="month1"
                  required
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 1</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year1"
                  required
                  id="year1"
                  maxLength="4"
                />
              </div>
            </div>
            <h1 className="mt-[26px]">|</h1>
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 2</label>
                <select
                  className="w-16 border"
                  name="day2"
                  defaultValue="Day"
                  id="day2"
                  required
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 2</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date2"
                  required
                  id="date2"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 2</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month2"
                  required
                  id="month2"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 2</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year2"
                  id="year2"
                  required
                  maxLength="4"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex items-center gap-5 justify-center">
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 3</label>
                <select
                  className="w-16 border"
                  name="day3"
                  defaultValue="Day"
                  id="day3"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 3</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date3"
                  id="date3"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 3</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month3"
                  id="month3"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 3</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year3"
                  id="year3"
                  maxLength="4"
                />
              </div>
            </div>
            <h1 className="mt-[26px]">|</h1>
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 4</label>
                <select
                  className="w-16 border"
                  name="day4"
                  defaultValue="Day"
                  id="day4"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 4</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date4"
                  id="date4"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 4</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month4"
                  id="month4"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 4</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year4"
                  id="year4"
                  maxLength="4"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 5</label>
                <select
                  className="w-16 border"
                  name="day5"
                  defaultValue="Day"
                  id="day5"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 5</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date5"
                  id="date5"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 5</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month5"
                  id="month5"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 5</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year5"
                  id="year5"
                  maxLength="4"
                />
              </div>
            </div>
            <h1 className="mt-[26px]">|</h1>
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 6</label>
                <select
                  className="w-16 border"
                  name="day6"
                  defaultValue="Day"
                  id="day6"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 6</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date6"
                  id="date6"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 6</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month6"
                  id="month6"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 6</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year6"
                  id="year6"
                  maxLength="4"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 7</label>
                <select
                  className="w-16 border"
                  name="day7"
                  defaultValue="Day"
                  id="day7"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 7</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date7"
                  id="date7"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 7</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month7"
                  id="month7"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 7</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year7"
                  id="year7"
                  maxLength="4"
                />
              </div>
            </div>
            <h1 className="mt-[26px]">|</h1>
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 8</label>
                <select
                  className="w-16 border"
                  name="day8"
                  defaultValue="Day"
                  id="day8"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 8</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date8"
                  id="date8"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 8</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month8"
                  id="month8"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 8</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year8"
                  id="year8"
                  maxLength="4"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 9</label>
                <select
                  className="w-16 border"
                  name="day9"
                  defaultValue="Day"
                  id="day9"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 9</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date9"
                  id="date9"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 9</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month9"
                  id="month9"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 9</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year9"
                  id="year9"
                  maxLength="4"
                />
              </div>
            </div>
            <h1 className="mt-[26px]">|</h1>
            <div className="flex gap-1 mt-2">
              <div className="flex flex-col w-full">
                <label>Day 10</label>
                <select
                  className="w-16 border"
                  name="day10"
                  defaultValue="Day"
                  id="day10"
                >
                  <option disabled>Day</option>
                  <option>Sun</option>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Date 10</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Date"
                  name="date10"
                  id="date10"
                  maxLength="2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Month 10</label>
                <select
                  className="w-20 border"
                  defaultValue="Month"
                  name="month10"
                  id="month10"
                >
                  <option disabled>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Year 10</label>
                <input
                  type="text"
                  className="w-16 border"
                  placeholder="Year"
                  name="year10"
                  id="year10"
                  maxLength="4"
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="text-lg font-[poppins] bg-[#00AEEF] text-white px-3 py-1 w-full"
          >
            Add a sub location
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSubLocation;
