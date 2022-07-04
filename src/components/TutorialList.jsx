import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, deleteTutorials, updateTutorials }) => {
  const [editItem, setEditItem] = useState("");
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    onClick={() => setEditItem(item)}
                    size={20}
                    className="me-3 text-warning cursor-pointer "
                  />
                  <AiFillDelete
                    onClick={() => {
                      deleteTutorials(id);
                    }}
                    size={22}
                    className="text-danger cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial updateTutorials={updateTutorials} editItem={editItem} />
    </div>
  );
};

export default TutorialList;
