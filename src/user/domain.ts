export interface User {
    id: string;
    telegramUserId: string;
    username: string;
    firstName: string;
    lastName: string;
    photoUrl: string; 
  }

export interface RegisterUser {
    telegram_user_id: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo_url?: string;
}
