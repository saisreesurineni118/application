import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TicketForm from "./components/tickets/TicketForm";
import TicketList from "./components/tickets/TicketList";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h1 className="text-center text-2xl">Please log in</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <TicketForm />
      <TicketList />
    </div>
  );
};

export default DashboardPage;