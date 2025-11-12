import { apiGet } from "@/shared/services/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTelegram } from "../../../shared/providers/telegram-miniapp-provider";
import { User } from "@/user/domain";
import { userKey } from "@/user/query-key";

export function useCurrentUser() {
  const baseUrl = " http://127.0.0.1:8000/users";
  const url = `${baseUrl}/me`;
  const { rawInitData } = useTelegram();

  const getUser = async () => {
    try{
      const response = await apiGet<User>(url, `tma ${rawInitData}`);

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        console.log("User not found");
        return null;
      }
      throw error;
    }
  };

  const userQuery = useQuery({
    queryKey: userKey.detail("me"),
    queryFn: getUser,
  });

  return {
    user: userQuery.data || null,
    isLoadingUser: userQuery.isPending,
    error: userQuery.error,
  };
}
