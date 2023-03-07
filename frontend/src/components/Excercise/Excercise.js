import { Text, Wrapper, Div } from "./Excercise.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ExcerciseTable = ({ item, setOpenEditModal, setCurrentEdit }) => {
  const [open, setOpen] = useState(false);

  const editExcercise = () => {
    setOpenEditModal(true);
    setCurrentEdit(item);
  };
  return (
    <Wrapper>
      <Div className="row row__workoutName" onClick={() => setOpen(!open)}>
        <Div className="row__left">
          <Text className="workout__name">{item.name}</Text>
          <Text className="workout__details">Series: {item.seriesCount}</Text>
        </Div>
        <Div className="row__right">
          {open ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </Div>
      </Div>
      {open && (
        <Div className="row table__excercises">
          <Div className="table__row">
            <Text className="table__heading">Serie</Text>
            <Text className="table__heading">Repeats</Text>
            <Text className="table__heading">Score</Text>
          </Div>
          {item.series.map((serie) => {
            return (
              <Div className="table__row" key={serie._id}>
                <Text className="table__content">{serie.serie}</Text>
                <Text className="table__content">{serie.repeats}x</Text>
                <Text className="table__content">
                  {serie.score}
                  {item.unit}
                </Text>
              </Div>
            );
          })}
          <Div className="table__edit" onClick={editExcercise}>
            <Text className="table__edit">Edit</Text>
            <FontAwesomeIcon icon={faEdit} className="table__editIcon" />
          </Div>
        </Div>
      )}
    </Wrapper>
  );
};

export default ExcerciseTable;
