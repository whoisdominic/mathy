import React, { useEffect, useState } from "react";
import { useLessonStore } from "../state/useLessonStore";
import { KeyPad } from "../components/KeyPad";
import {
  MathProblem,
  Aside,
  Background,
  Container,
  ProblemCount,
} from "../components";
import StartBtn from "../components/StartBtn";
import { Feather } from "@expo/vector-icons";
import { RootStackParamList } from "../../App";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { View } from "react-native";
import { Error } from "../components/Error";

type Props = DrawerScreenProps<RootStackParamList, "root">;

export const ExerciseScreen: React.FC<Props> = ({ navigation }) => {
  const { questions, activeQuestion, quizInProgress, increaseScore, next } =
    useLessonStore();

  const [answer, setAnswer] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("");

  const handleKeyPress = (value: number) => {
    if (answer.length === 3) return;
    setAnswer((prev) => prev + value);
    setErrorDisplay("");
  };

  const handleBackPress = () => {
    setAnswer((prev) => prev.slice(0, prev.length - 1));
    setErrorDisplay("");
  };

  const handleGo = () => {
    if (checkAnswer(answer)) {
      increaseScore(1);
      next();
      setAnswer("");
    } else {
      setErrorDisplay("Sorry that's not correct");
    }
  };

  const checkAnswer = (answer: string) => {
    const guess = parseInt(answer);

    switch (questions[activeQuestion].operator) {
      case "+":
        return guess ===
          questions[activeQuestion].first + questions[activeQuestion].second
          ? true
          : false;
      case "-":
        return guess ===
          questions[activeQuestion].first - questions[activeQuestion].second
          ? true
          : false;
      // case "*":
      //   return guess ===
      //     questions[activeQuestion].first * questions[activeQuestion].second
      //     ? true
      //     : false;
      // case "/":
      //   return guess ===
      //     questions[activeQuestion].first / questions[activeQuestion].second
      //     ? true
      //     : false;
      default:
        return false;
    }
  };

  useEffect(() => {
    setErrorDisplay("");
    setAnswer("");
  }, [quizInProgress]);

  return (
    <Background>
      <Container>
        <ProblemCount />
        {quizInProgress ? (
          <>
            <MathProblem problem={questions[activeQuestion]} {...{ answer }} />
            <Error error={errorDisplay} />
          </>
        ) : (
          <StartBtn />
        )}
      </Container>
      <Aside>
        <Feather
          onPress={navigation.openDrawer}
          name="menu"
          size={50}
          color="#fff"
          style={{ position: "absolute", right: 32, top: 48 }}
        />
        <KeyPad
          onKeyPress={handleKeyPress}
          onBackPress={handleBackPress}
          onGo={handleGo}
        />
      </Aside>
    </Background>
  );
};

export default ExerciseScreen;
