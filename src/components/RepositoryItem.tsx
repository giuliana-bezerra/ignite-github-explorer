type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
    owner: {
      avatar_url: string;
    };
  };
};

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <div className="repo-info">
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>Acessar repositório</a>
      </div>
      <div className="repo-avatar">
        <img src={props.repository.owner.avatar_url} alt="Avatar" />
      </div>
    </li>
  );
}
