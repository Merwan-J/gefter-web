import { apiGet } from "@/shared/services/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTelegram } from "../../../shared/providers/telegram-miniapp-provider";
import { User } from "@/user/domain";
import { userKey } from "@/user/query-key";

export function useUsers() {
  const baseUrl = "http://127.0.0.1:8000/users";
  const { rawInitData } = useTelegram();

  const getUsers = async () => {
    try{
      const response = await apiGet<User>(baseUrl, `tma ${rawInitData}`);

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  };

  const usersQuery = useQuery({
    queryKey: userKey.detail("users"),
    queryFn: getUsers,
  });

  return {
    users: usersQuery.data || null,
    isLoadingUsers: usersQuery.isPending,
    error: usersQuery.error,
  };
}
