  
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleDscr = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRoleDscr = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

