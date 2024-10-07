import { Toaster } from "react-hot-toast";
import Header from "./components/layout/Header";
import Overview from "./components/layout/Overview";
import Summary from "./components/layout/Summary";
import Duration from "./components/layout/Duration";
import TransactionsHistoryTable from "./components/table/TransactionsHistoryTable";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="space-y-16">
        <Overview />
        <Summary />
        <Duration />
        <TransactionsHistoryTable />
      </main>

      <footer className="bg-indigo-100 dark:bg-secondary-dark">
        <Footer />
      </footer>

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
