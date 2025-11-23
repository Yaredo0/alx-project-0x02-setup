import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;