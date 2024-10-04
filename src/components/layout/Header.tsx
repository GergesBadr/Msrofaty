import Button from "../common/Button";
import Modal from "../common/Modal";
import AddTransactionForm from "../transactions/AddTransactionForm";

export default function Header() {
  return (
    <nav className="responsive-container flex items-center justify-between gap-4 border-b-2 py-8">
      <h1 className="heading-1">مصروفاتي</h1>

      <Modal>
        <Modal.Open id="add-new-transaction">
          <Button> إضافة معاملة جديدة </Button>
        </Modal.Open>

        <Modal.Window id="add-new-transaction" a11yName="add-new-transaction">
          <AddTransactionForm />
        </Modal.Window>
      </Modal>
    </nav>
  );
}
