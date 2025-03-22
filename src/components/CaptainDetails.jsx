import React from "react";

const CaptainDetails = () => {
  return (
    <>
      {/* Captain Info Section */}
      <div className="w-full p-4">
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            {/* Captain's Profile Picture */}
            <img
              className="h-16 w-16 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
              alt="Captain Profile"
            />
            <div>
              <h4 className="text-lg font-medium">Srinath V</h4>
              <p className="text-sm text-gray-500">Captain</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-semibold">$300.9</h4>
            <p className="text-sm font-medium text-gray-400">Earned</p>
          </div>
        </div>
      </div>

      {/* Online Stats Section */}
      <div className="flex justify-center items-start gap-5 p-4">
        {/* Hours Online */}
        <div className="text-center bg-white p-4 rounded-lg shadow-md">
          <i className="ri-time-line text-3xl text-gray-700"></i>
          <h5 className="text-lg font-medium mt-2">10.2</h5>
          <p className="text-sm text-gray-400">Hours Online</p>
        </div>

        {/* Completed Rides */}
        <div className="text-center bg-white p-4 rounded-lg shadow-md">
          <i className="ri-speed-up-line text-3xl text-gray-700"></i>
          <h5 className="text-lg font-medium mt-2">15</h5>
          <p className="text-sm text-gray-400">Completed Rides</p>
        </div>

        {/* Documents Verified */}
        <div className="text-center bg-white p-4 rounded-lg shadow-md">
          <i className="ri-booklet-line text-3xl text-gray-700"></i>
          <h5 className="text-lg font-medium mt-2">Verified</h5>
          <p className="text-sm text-gray-400">Documents</p>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
