import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();

  return (
    // <UserInfo
    //   label="💻 Server component"
    //   user={user}
    // />
    <div>Page 1</div>
  );
};

export default ServerPage;
