/* eslint-disable react/prop-types */
export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full text-center text-red-600 bg-red-200 rounded-lg">
        {message}
      </div>
    </div>
  );
}
