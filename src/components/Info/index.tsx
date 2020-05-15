import React from "react";
import { Notification } from "devbsb-ui-kit";
import {
  MdBrightness1,
  MdBrightness3,
  MdBrightness5,
  MdBrightness7,
  MdSentimentVerySatisfied,
} from "react-icons/md";

import { useApp } from "../../contexts/app";

export const Info: React.FC = () => {
  const { info, luckyNumber } = useApp();

  if (info === "cold") {
    return (
      <Notification marginBottom={5} icon={<MdBrightness1 />}>
        Frio
      </Notification>
    );
  }

  if (info === "warm") {
    return (
      <Notification
        backgroundColor="#f7bc44"
        icon={<MdBrightness3 />}
        marginBottom={5}
      >
        Morno
      </Notification>
    );
  }

  if (info === "hot") {
    return (
      <Notification
        backgroundColor="#e86740"
        marginBottom={5}
        icon={<MdBrightness5 />}
      >
        Quente
      </Notification>
    );
  }

  if (info === "veryhot") {
    return (
      <Notification
        backgroundColor="#db4e44"
        marginBottom={5}
        icon={<MdBrightness7 />}
      >
        Muito quente
      </Notification>
    );
  }

  if (info === "veryveryhot") {
    return (
      <Notification
        backgroundColor="#db4e44"
        marginBottom={5}
        icon={<MdBrightness7 />}
      >
        Quente quente quente
      </Notification>
    );
  }

  if (info === "win") {
    return (
      <Notification
        backgroundColor="#3bb85d"
        marginBottom={5}
        icon={<MdSentimentVerySatisfied />}
      >
        Yeah! O número correto: <strong> {luckyNumber}</strong>
      </Notification>
    );
  }

  return <></>;
};
