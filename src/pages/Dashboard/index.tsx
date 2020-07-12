import React from "react";
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories } from "./styles";

import logoImg from "../../assets/logo.svg";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer Logo" />
      <Title>Explore Repositórios no Github!</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/2911353?s=460&v=4"
            alt="Big"
          />
          <div>
            <strong>bignotto/James</strong>
            <p>James é o robô de relatórios do Big!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/2911353?s=460&v=4"
            alt="Big"
          />
          <div>
            <strong>bignotto/James</strong>
            <p>James é o robô de relatórios do Big!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/2911353?s=460&v=4"
            alt="Big"
          />
          <div>
            <strong>bignotto/James</strong>
            <p>James é o robô de relatórios do Big!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
