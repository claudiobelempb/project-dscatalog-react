import { useRouteMatch } from "react-router-dom";
import { GridDefault } from "../../components/GridDefault";
import { HeadingDefault } from "../../components/HeadingDefault";
import { ListDefault } from "../../components/ListDefault";
import { TextDefault } from "../../components/TextDefault";
import { LayoutHomeDefault } from "../../layouts/LayoutHomeDefault";

import { RepositoryDefaultContainer } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

type RepositoryDefaultProps = {
  repository: string;
};

type RepositoryDetailsProps = {
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
};

type RepositoryIssuesProps = {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
};

const RepositoryDefault: React.FC = () => {
  // const [repos, setRepos] = useState<() => RepositoryDetailsProps | null>(null);

  // const [issues, setIssues] = useState<RepositoryIssuesProps[]>([]);
  // const { params } = useRouteMatch<RepositoryDefaultProps>();

  return (
    <LayoutHomeDefault>
      <HeadingDefault tag={"h5"}></HeadingDefault>
      <RepositoryDefaultContainer>
        <GridDefault size={2}>
          <img src={"/"} alt={"Aluizio Developer"} />
          <div>
            <HeadingDefault tag="h5"></HeadingDefault>
            <TextDefault tag="p">
              Reposítorio do mini curso gratuito de react
            </TextDefault>
          </div>
        </GridDefault>

        <GridDefault>
          <ul>
            <li>
              <TextDefault tag={"strong"}>2330</TextDefault>
              <TextDefault tag={"span"}>Stars</TextDefault>
            </li>
            <li>
              <TextDefault tag={"strong"}>218</TextDefault>
              <TextDefault tag={"span"}>Forks</TextDefault>
            </li>
            <li>
              <TextDefault tag={"strong"}>79</TextDefault>
              <TextDefault tag={"span"}>Issues abertas</TextDefault>
            </li>
          </ul>
        </GridDefault>
        <ListDefault
          src="/"
          full_name="fullname"
          description="description"
          alt="alt"
        />
      </RepositoryDefaultContainer>
    </LayoutHomeDefault>
  );
};

export { RepositoryDefault };
