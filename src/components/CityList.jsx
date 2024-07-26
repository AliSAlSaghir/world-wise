/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <div>
      <ul className={styles.CityList}>
        {cities.map(city => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
