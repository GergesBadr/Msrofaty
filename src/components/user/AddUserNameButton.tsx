import Modal from "../common/Modal";
import AddUserNameForm from "./AddUserNameForm";

export default function AddUserNameButton() {
  return (
    <Modal>
      <Modal.Open widthIsFit={true} id="add-username-modal">
        <button className="font-medium text-indigo-600 underline underline-offset-4 hover:no-underline">
          تعديل الإسم
        </button>
      </Modal.Open>
      <Modal.Window id="add-username-modal" a11yName="Add username modal">
        <AddUserNameForm />
      </Modal.Window>
    </Modal>
  );
}
