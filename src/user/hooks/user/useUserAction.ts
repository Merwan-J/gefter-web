import { apiPost } from "@/shared/services/api"
import { RegisterUser } from "@/user/domain";
import { userKey } from "@/user/query-key"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { User as TelegramUser} from "@telegram-apps/sdk-react"
import { User } from "@/user/domain";

export function useUserAction() {
    const url = "http://localhost:8000/users";  // Remove the space before http://
    const queryClient = useQueryClient()

    const registerUser = async ({
        user,
      }: {
        user: TelegramUser;        
        onSuccess?: (data: User) => void;
        onError?: (error: Error) => void;
      }) => {
        console.log("registering user", user)
        const payload: RegisterUser = {
            telegram_user_id: user.id.toString(),
            ...(user.username && { username: user.username }),
            ...(user.first_name && { first_name: user.first_name }),
            ...(user.last_name && { last_name: user.last_name }),
            ...(user.photo_url && { photo_url: user.photo_url })
        }
        const response = await apiPost<User>(url, payload)
        console.log("user registered", response.data)

        return response.data
    }

   const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data, variables) => {
        const { onSuccess } = variables;
        queryClient.invalidateQueries({ queryKey: userKey.detail("me") })
        onSuccess?.(data);
    },
    onError: (error, variables) => {
        const { onError } = variables;
        console.log("everything is failing aparttt")
        onError?.(error);
    },
   })

   return {
    registerUser : registerUserMutation.mutateAsync,
    isRegisteringUser : registerUserMutation.isPending,
    registerUserError : registerUserMutation.error
   }
}


