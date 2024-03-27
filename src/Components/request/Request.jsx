import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { RiQuillPenLine } from "react-icons/ri";
import bg from "../../assets/bookRequest.jpg";

const Request = () => {
  return (
    <div className="container mx-auto">
      <h1 className="playfair text-black text-5xl font-bold text-center py-10 bg-base-200 rounded-2xl">
        Have any book in mind? let us know.
      </h1>
      <div
        className="my-8 min-h-[60vh] border rounded-2xl"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-[#143411ac] rounded-2xl w-full h-[60vh] flex flex-col justify-center items-center">
          <h3 className="playfair text-2xl pb-4 text-white text-center ">
            Submit your request here :
          </h3>
          <form className="grid gap-4 w-1/5">
            <label className="flex items-center p-3 border-2 border-[#23BE0A] rounded-lg bg-white">
              <CiUser className="text-2xl mr-2" />
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
                className=" outline-none"
              />
            </label>
            <label className="flex items-center p-3 border-2 border-[#23BE0A] rounded-lg bg-white">
              <HiOutlineMail className="text-2xl mr-2" />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your email"
                className=" outline-none"
                required
              />
            </label>
            <label className="flex items-center p-3 border-2 border-[#23BE0A] rounded-lg bg-white">
              <PiBookBookmarkDuotone className="text-2xl mr-2" />
              <input
                type="text"
                name="bookName"
                id=""
                placeholder="Enter Book name"
                className=" outline-none"
                required
              />
            </label>
            <label className="flex items-center p-3 border-2 border-[#23BE0A] rounded-lg bg-white">
              <RiQuillPenLine className="text-2xl mr-2" />
              <input
                type="text"
                name="authorkName"
                id=""
                placeholder="Enter author name"
                className=" outline-none"
                required
              />
            </label>
            <button
              type="submit"
              className="btn work-sans text-lg bg-[#23BE0A0D] hover:bg-[#22be0a43] text-[#23BE0A] border-[#23BE0A] hover:border-[#23BE0A]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
