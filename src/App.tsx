import { Toaster } from "react-hot-toast";
import Header from "./components/layout/Header";
import Overview from "./components/layout/Overview";
import Summary from "./components/layout/Summary";
import Duration from "./components/layout/Duration";
import TransactionsHistoryTable from "./components/table/TransactionsHistoryTable";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="mb-16 space-y-16">
        <Overview />
        <Summary />
        <Duration />
        <TransactionsHistoryTable />
      </main>

      {/* Notification toaster setup */}
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            padding: "14px 18px",
            marginTop: "18px",
            boxShadow: "0px 5px 12px 1px rgb(0, 0, 0, 0.1)",
          },
        }}
      />
    </>
  );
}

export default App;
