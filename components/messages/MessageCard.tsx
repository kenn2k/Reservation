"use client";
import React, { useState } from "react";
import { useMyContext } from "../UI/Context";
import { AddPropertyTypes, MessageTypes } from "@/types/types";

interface IMessageCard {
  message: MessageTypes;
}
const MessageCard = ({ message }: IMessageCard) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const { setUnreadCount } = useMyContext();
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        setIsDeleted(true);
        setUnreadCount((prev) => prev - 1);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };
  if (isDeleted) {
    return null; //` Return null to render nothing if the message is deleted
  }
  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
      <h2 className="text-xl mb-4">
        {" "}
        <span className="font-bold">Property Inquiry:</span> {message.name}
      </h2>
      <p className="text-gray-700 text-lg">{message.body}</p>

      <ul className="mt-4">
        <li>
          <strong>Name:</strong> {message.name}
        </li>

        <li>
          <strong>Reply Email:</strong>
          <a href="mailto:recipient@example.com" className="text-blue-500">
            {" "}
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply Phone:</strong>
          <a href={`tel:${message.phone}`} className="text-blue-500">
            {" "}
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received:</strong>{" "}
          {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>

      <button
        onClick={handleDelete}
        className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default MessageCard;
