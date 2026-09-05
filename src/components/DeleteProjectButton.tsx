"use client";

export default function DeleteProjectButton() {
  return (
    <button
      type="submit"
      className="text-red-600 hover:underline cursor-pointer"
      onClick={(e) => {
        if (!window.confirm("Are you sure you want to delete this project?")) {
          e.preventDefault();
        }
      }}
    >
      rm -rf
    </button>
  );
}
