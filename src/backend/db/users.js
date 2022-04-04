import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Arjun",
    lastName: "Bharti",
    email: "arjun123@test.com",
    password: "arjun123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
