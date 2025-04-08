import axios from "axios";
import { useNavigate } from "react-router";

const FinishRide = (props) => {
  const navigate=useNavigate()

  const apiUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");


  const handleClick=async()=>{
    try {
      if (!token) {
        console.error("❌ Token not found in localStorage");
        return;
      }
  
      const response = await axios.post(
        `${apiUrl}/ride/end-ride`,
        {
          rideId: props.ride._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/captain/home')
    } catch (error) {
      console.error(
        "❌ Error while confirming ride:",
        error?.response?.data?.message || error.message
      );
      // Optional: show error toast or feedback to user
    }
  }
  return (
    <div className="flex flex-col justify-between items-start p-2 bg-white w-full ">
        <div className="flex flex-col justify-between items-center w-full mb-4">
          <div className="flex justify-between items-center w-full mb-4">
            <h3 className="text-2xl font-semibold">
              finish this ride 
            </h3>
            <h5
              onClick={() => props.setfinishRidePanel(false)}
              className="cursor-pointer"
            >
              <i className="ri-arrow-down-wide-fill text-lg text-gray-700"></i>
            </h5>
          </div>
          <div className="flex items-center justify-between border-yellow-400 border-2 p-4 rounded-lg shadow-lg w-full">
            <div className="flex items-center gap-4">
              {/* Captain's Profile Picture */}
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                alt="Captain Profile"
              />
              <div>
                <h4 className="text-lg font-medium">{props.ride?.user.fullName.firstName}</h4>
              </div>
            </div>
            <div className="text-right">
              <h4 className="text-xl font-semibold">2.2 KM</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-1 w-full">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
              <div className="flex justify-center items-center">
                <i className="ri-map-pin-2-fill"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">562/11A</h3>
                <p className="text-sm text-gray-600">
                  {props.ride?.pickUp}
                </p>
              </div>
            </div>
            <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
              <div className="flex justify-center items-center">
                <i className="ri-map-pin-user-fill"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">Royal Mart</h3>
                <p className="text-sm text-gray-600">
                {props.ride?.destination}
                 
                </p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="flex justify-center items-center">
                <i className="ri-currency-line"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">${props.ride?.fare}</h3>
                <p className="text-sm text-gray-600">UPI</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center w-full">
           
              <button onClick={handleClick}
                className=" w-full flex justify-center items-center bg-green-600 text-white font-semibold rounded-2xl py-5 px-8 mt-6 mb-2"
                to={"/captain/home"}
              >
                Finish ride
              </button>
              <p className='text-gray-600 text-sm text-center mb-4 font-semibold'>click on finish ride button if you had finished with payment</p>
       
          </div>
        </div>
      </div>
  )
}

export default FinishRide