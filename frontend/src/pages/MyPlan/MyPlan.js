import axios from "axios";
import { useEffect, useState } from "react";
import {
  EditExcerciseModal,
  Excercise,
  Loading,
  Portal,
} from "../../components";
import { useParams } from "react-router-dom";
import { Wrapper, Text } from "./MyPlan.styled";

const MyPlan = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState();
  const [editData, setEditData] = useState({
    excerciseId: "",
    serieId: "",
    series: 0,
    repeats: 0,
    score: 0,
  });

  const getPlanById = async (planId) => {
    let data;
    try {
      data = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB}/training-plan/${planId}`,
      });
      setData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const editExcercise = () => {
    if (editData.series !== 0) {
      const serieId = currentEdit.series.find(
        (item) => item.serie === Number(editData.series)
      )._id;

      let data = {
        ...editData,
        serieId,
      };
      console.log(data);
    }
  };

  const cancelEditExcercise = () => {
    console.log("Cancel");
    setOpenEditModal(false);
  };
  useEffect(() => {
    getPlanById(id);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      {openEditModal && (
        <Portal>
          <EditExcerciseModal
            onEdit={editExcercise}
            onCancel={cancelEditExcercise}
            item={currentEdit}
            editData={editData}
            setEditData={setEditData}
          />
        </Portal>
      )}
      <Text>{data.name}</Text>
      {data.workouts.map((item) => {
        return (
          <Excercise
            item={item}
            key={item._id}
            setOpenEditModal={setOpenEditModal}
            setCurrentEdit={setCurrentEdit}
          />
        );
      })}
    </Wrapper>
  );
};

export default MyPlan;
