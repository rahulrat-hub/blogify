import React from "react";

const AuthorInfo = ({ author, createdAt, readTime }) => {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center">
        {author
          ?.split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="font-medium text-gray-700">
          {author}
        </span>

        <span>•</span>

        <span>
          {new Date(createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        <span>•</span>

        <span>{readTime}</span>
      </div>
    </div>
  );
};

export default AuthorInfo;