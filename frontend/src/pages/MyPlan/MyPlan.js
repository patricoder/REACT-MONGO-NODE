import axios from "axios";
import { useEffect, useState } from "react";
import {
  EditExcerciseModal,
  Excercise,
  Loading,
  Portal,
  Error,
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

  const getPlanById = async (planId, controller) => {
    console.log("#fetching");
    let data;
    try {
      data = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB}/training-plan/${planId}`,
        signal: controller.signal,
      });
      setData(data.data);
    } catch (error) {
      throw new Error("Błąd API");
      setData(false);
    } finally {
      setLoading(false);
    }
  };

  const editExcercise = () => {
    if (editData.series === 0) return;
    const serieId = currentEdit.series.find(
      (item) => item.serie === Number(editData.series)
    )._id;

    let data = {
      ...editData,
      serieId,
    };

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
    const controller = new AbortController();
    getPlanById(id, controller);

    return () => {
      controller.abort();
    };
  }, [put]);
  return loading ? (
    <Loading />
  ) : !data ? (
    <Error>Problem with database connection, try again later.</Error>
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
