const LinkIcon = ({link, icon}) => {
  return(
    <a href={link} target="_blank" rel="noreferrer">
      <ion-icon name={icon}></ion-icon>
    </a>
  );
};

export default LinkIcon;