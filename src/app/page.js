export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Profile Card */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden text-center">
        {/* Top Accent Banner */}
        <div className="h-20 bg-blue-600" />

        <div className="px-6 pb-6">
          {/* Avatar Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijdX3UZUoc_YwsuIcNgcnKe5TfBHj-B1LMC3AugFyQw&s"
            alt="Benedict Pagasartonga"
            className="w-20 h-20 rounded-full mx-auto -mt-10 mb-3 object-cover border-4 border-white shadow-sm"
          />

          {/* Status Badge */}
          <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
            ● Open to Projects
          </span>

          {/* Name and Title */}
          <h1 className="text-xl font-bold text-gray-800">Benedict Pagasartonga</h1>
          <p className="text-gray-500 text-sm mb-4">BS Information Technology Student</p>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6">
            Hello! I am a student who enjoys learning about technology.
          </p>

          {/* Action Button */}
          <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}