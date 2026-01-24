"use client";
import { API } from "@/src/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetContacts = () => {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const response = await API.get("/gallery/");
      return response.data;
    },
  });
};
export { useGetContacts };
