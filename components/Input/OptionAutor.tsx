type AutorType = [
  {
    id: number;
    nome: string;
    sobrenome: string;
    data_nascimento: string;
  }
];

export const SelectAutor = (props: AutorType): any => {
  return (
    <>
      {props.map(
        ({ data_nascimento, id, nome, sobrenome }) => {
          return (
            <option value={id} key={id}>
              {id} : {`${nome} : ${sobrenome}`}
              {data_nascimento}
            </option>
          );
        }
      )}
    </>
  );
};
