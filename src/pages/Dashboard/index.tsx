import React, { useEffect, useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";

import api from "../../services/api";

import { Title, Form, Repositories, Error } from "./styles";

import logoImg from "../../assets/logo.svg";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState("");
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const savedRepos = localStorage.getItem("@BigGithubRepos:repositories");
    if (savedRepos) {
      return JSON.parse(savedRepos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "@BigGithubRepos:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      if (!newRepo) {
        setInputError("Em branco!");
        return;
      }
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo("");
      setInputError("");
    } catch (error) {
      setInputError("Erro ao buscar!");
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer Logo" />
      <Title>Explore Repositórios no Github!</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
