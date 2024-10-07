import Button from "../common/Button";
import Modal from "../common/Modal";
import AddTransactionForm from "../transactions/AddTransactionForm";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <nav className="responsive-container flex flex-wrap items-center justify-between gap-4 border-b-2 py-8 dark:border-b-gray-700">
      <h1 className="heading-1">مصروفاتي</h1>

      <div className="flex items-center gap-4">
        <Modal>
          <Modal.Open id="add-new-transaction">
            <Button> إضافة معاملة جديدة </Button>
          </Modal.Open>

          <Modal.Window id="add-new-transaction" a11yName="add-new-transaction">
            <AddTransactionForm />
          </Modal.Window>
        </Modal>

        <ToggleTheme />
      </div>
    </nav>
  );
}
