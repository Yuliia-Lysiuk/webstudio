import './Specifics.scss'
import { MdSettingsInputAntenna } from 'react-icons/md';
import { FcClock } from 'react-icons/fc';
import { VscGraphLine } from 'react-icons/vsc';
import { FaSpaceShuttle } from 'react-icons/fa';

export function Specifics() {
    return (
        <section className="section specifics">
        <div className="conteiner">
          <ul className="list specifics__list">
                    <li className="specifics__item">
                       < MdSettingsInputAntenna className="specifics__icon"/>
              {/* <svg className="specifics__icon" width="70" height="70">
                <use href="./images/icon/symbol-defs.svg#icon-antenna"></use>
              </svg> */}
              <h3 className="section-ti+tle">Внимание к деталям</h3>
              <p className="specifics__text">
                Идейные соображения, а также начало повседневной работы по
                формированию позиции.
              </p>
            </li>
            <li className="specifics__item">
              {/* <svg className="specifics__icon" width="70" height="70">
                <use href="./images/icon/symbol-defs.svg#icon-clock"></use>
              </svg> */}
                        <FcClock className="specifics__icon"/>
              <h3 className="section-title">Пунктуальность</h3>
              <p className="specifics__text">
                Задача организации, в особенности же рамки и место обучения
                кадров влечет за собой.
              </p>
            </li>
            <li className="specifics__item">
              {/* <svg className="specifics__icon" width="70" height="70">
                <use href="./images/icon/symbol-defs.svg#icon-diagram"></use>
              </svg> */}
                        <VscGraphLine className="specifics__icon"/>
              <h3 className="section-title">Планирование</h3>
              <p className="specifics__text">
                Равным образом консультация с широким активом в значительной
                степени обуславливает.
              </p>
            </li>
            <li className="specifics__item">
              {/* <svg className="specifics__icon" width="70" height="70">
                <use href="./images/icon/symbol-defs.svg#icon-astronaut"></use>
              </svg> */}
                        <FaSpaceShuttle className="specifics__icon"/>
              <h3 className="section-title">Современные технологии</h3>
              <p className="specifics__text">
                Значимость этих проблем настолько очевидна, что реализация
                плановых заданий.
              </p>
            </li>
                </ul>
                
        </div>
      </section>
    )
}