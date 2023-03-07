import axios from "axios";
import { useEffect, useState } from "react";
import {
  EditExcerciseModal,
  Excercise,
  Loading,
  Portal,
  ErrorMsg,
} from "../../components";
import { useParams } from "react-router-dom";
import { Wrapper, Text } from "./MyPlan.styled";
import Axios from "../../lib/axios";
const MyPlan = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState();
  const [put, setPut] = useState(false);
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
      data = await axios.get(
        `${process.env.REACT_APP_DB}/training-plan/${planId}`
        // {
        //   signal: controller.signal,
        // }
      );
      setData(data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const editExcercise = () => {
    const serie = currentEdit.series.find(
      (item) => item.serie === Number(editData.series)
    );
    console.log(serie._id, editData);
    let data = {
      ...editData,
      serieId: serie._id,
      lastScore: serie.score,
    };
    console.log(data);
    Axios.editWorkout(data);
    setOpenEditModal(false);
    setPut(!put);
    setEditData({
      excerciseId: "",
      serieId: "",
      series: 0,
      repeats: 0,
      score: 0,
    });
  };

  const cancelEditExcercise = () => {
    setEditData({
      excerciseId: "",
      serieId: "",
      series: 0,
      repeats: 0,
      score: 0,
    });
    setOpenEditModal(false);
  };
  useEffect(() => {
    // const controller = new AbortController();
    getPlanById(id);
  }, [put]);
  return loading ? (
    <Loading />
  ) : !data ? (
    <ErrorMsg>Problem with database connection, try again later.</ErrorMsg>
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
