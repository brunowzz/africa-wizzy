import Subtitle from "../../components/Subtitle/index.jsx"
import Card from "./components/Card/index.jsx"

import Giraffe from "../../assets/giraffe.svg"
import Lake from "../../assets/lake.svg"
import Boat from "../../assets/boat.svg"

import * as S from './style.js';

export default function TourPackage() {

  return (
    <>
      <S.ContainerTourPackage>
        <Subtitle
          subtitle="Choose your Package"
          instructionSubtitle="Select your Best Package for your Travel"
        />

        <S.ContainerCard>
          <S.RowCard>
            <Card
              image={Giraffe}
              title={"Akagera National Park"}
              text={"Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."}
            />

            <Card
              image={Lake}
              title={"Bisoke Hike"}
              text={"The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."}
            />

            <Card
              image={Boat}
              title={"Lake Kivu trip"}
              text={"A trip to Lake Kivu can be a truly unique and memorable experience. "}
            />

            <Card
              image={Giraffe}
              title={"Akagera National Park"}
              text={"Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."}
            />

            <Card
              image={Lake}
              title={"Bisoke Hike"}
              text={"The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."}
            />

            <Card
              image={Boat}
              title={"Lake Kivu trip"}
              text={"A trip to Lake Kivu can be a truly unique and memorable experience. "}
            />

            <Card
              image={Giraffe}
              title={"Akagera National Park"}
              text={"Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."}
            />

            <Card
              image={Lake}
              title={"Bisoke Hike"}
              text={"The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."}
            />

            <Card
              image={Boat}
              title={"Lake Kivu trip"}
              text={"A trip to Lake Kivu can be a truly unique and memorable experience. "}
            />

            <Card
              image={Giraffe}
              title={"Akagera National Park"}
              text={"Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."}
            />

            <Card
              image={Lake}
              title={"Bisoke Hike"}
              text={"The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."}
            />

            <Card
              image={Boat}
              title={"Lake Kivu trip"}
              text={"A trip to Lake Kivu can be a truly unique and memorable experience. "}
            />
          </S.RowCard>


        </S.ContainerCard>
      </S.ContainerTourPackage>
    </>

  )
}
