"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    // <UserInfo
    //   label="📱 Client component"
    //   user={user}
    // />
    <div>Page 2</div>
  );
};

export default ClientPage;
