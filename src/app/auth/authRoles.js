/**
 * Authorization Roles
 */
const authRoles = {
  admin: ['admin'],
  staff: ['admin', 'staff'],
  user: ['admin', 'staff', 'user',"superadmin"],
  onlyGuest: [],
};

export default authRoles;
