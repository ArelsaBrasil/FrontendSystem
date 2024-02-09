import { IndexContainer } from "./styles";

export const MarkerIndex = () => {
  return (
    <IndexContainer>
      <section>
        <img
          src="https://maps.google.com/mapfiles/ms/icons/green-dot.png"
          alt=""
        />
        <p> - Selecionado.</p>
      </section>
      <section>
        <img
          src="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
          alt=""
        />
        <p> - Já atribuido a uma equipe.</p>
      </section>
      <section>
        <img
          src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          alt="OS aberta"
        />
        <p> - Em aberto.</p>
      </section>
    </IndexContainer>
  );
};
