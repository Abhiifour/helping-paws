import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { supabase } from "../../auth/supabase";
import { useRecoilState } from "recoil";
import { userState } from "../../Atom";

function Layout() {
  const [userData, setUserData] = useRecoilState(userState);
  const navigate = useNavigate()

  const getUser = async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
      setUserData(data.user);
  
    } catch (e) {}
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
