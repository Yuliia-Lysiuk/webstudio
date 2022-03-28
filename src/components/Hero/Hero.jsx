import './Hero.scss';
export function Hero({ onClick }) {
  return (
    <section className="hero">
      <div className="conteiner">
        <h1 className="hero__title">Эффективные решения для вашего бизнеса</h1>

        <button
          type="button"
          className="modal-button transition"
          onClick={() => onClick(true)}
        >
          Заказать услугу
        </button>
        <img src="../../images/command/command-img-desktop(1).jpg" alt="" />
      </div>
    </section>
  );
}
