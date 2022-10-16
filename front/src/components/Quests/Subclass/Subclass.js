import React from "react";
import "./Subclass.scss";
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import i18next from '../../../i18next';

import b_damascus from "./../../../img/FatesWhisper_weapon-list/top-b/Damascus.jpg";
import b_dualsword from "./../../../img/FatesWhisper_weapon-list/top-b/SamuraiDualSword.jpg";
import b_peril from "./../../../img/FatesWhisper_weapon-list/top-b/BowOfPeril.jpg";
import b_lance from "./../../../img/FatesWhisper_weapon-list/top-b/Lance.jpg";
import b_art_axe from "./../../../img/FatesWhisper_weapon-list/top-b/ArtOfBattleAxe.jpg";
import b_soes from "./../../../img/FatesWhisper_weapon-list/top-b/StaffOfEvilSpirits.jpg";
import b_demon from "./../../../img/FatesWhisper_weapon-list/top-b/DemonDagger.jpg";
import b_bellion from "./../../../img/FatesWhisper_weapon-list/top-b/BellionCestus.jpg";
import b_glory from "./../../../img/FatesWhisper_weapon-list/top-b/DeadmansGlory.jpg";
import b_guardians from "./../../../img/FatesWhisper_weapon-list/top-b/GuardiansSword.jpg";
import b_wizard from "./../../../img/FatesWhisper_weapon-list/top-b/WizardsTear.jpg";
import b_star from "./../../../img/FatesWhisper_weapon-list/top-b/StarBuster.jpg";
import b_kaim from "./../../../img/FatesWhisper_weapon-list/top-b/KaimVanulsBones.jpg";

import a_tallum from "./../../../img/FatesWhisper_weapon-list/low-a/TallumBlade.jpg";
import a_dualsword from "./../../../img/FatesWhisper_weapon-list/low-a/KeshanbergDualSwords.jpg";
import a_carnage from "./../../../img/FatesWhisper_weapon-list/low-a/CarnageBow.jpg";
import a_halebard from "./../../../img/FatesWhisper_weapon-list/low-a/Halberd.jpg";
import a_elemental from "./../../../img/FatesWhisper_weapon-list/low-a/ElementalSword.jpg";
import a_dasparions from "./../../../img/FatesWhisper_weapon-list/low-a/DasparionsStaff.jpg";
import a_bloody_orchid from "./../../../img/FatesWhisper_weapon-list/low-a/BloodyOrchid.jpg";
import a_bloody_tornado from "./../../../img/FatesWhisper_weapon-list/low-a/BloodTornado.jpg";
import a_meteor from "./../../../img/FatesWhisper_weapon-list/low-a/MeteorShower.jpg";
import a_infernal from "./../../../img/FatesWhisper_weapon-list/low-a/InfernalMaster.jpg";
import a_spiritual from "./../../../img/FatesWhisper_weapon-list/low-a/SpiritualEye.jpg";
import a_destroyer from "./../../../img/FatesWhisper_weapon-list/low-a/DestroyerHammer.jpg";


const popupFadeToggle = (e)=>{
    let popup = e.target.querySelector('.popup');
    popup.style.opacity = 1;
    setTimeout(()=>{popup.style.opacity = 0;}, 2000);
};

function Subclass() {
    const {i18n} = useTranslation();
    return(<div className={`Subclass`}>
        <div className="Subclass-wrapper">
            <h2 className="title">{i18next.t('FatesWhisper.title')}</h2>
            <div className="terms">
                <div className="lvl">{i18next.t('terms.lvl')} <span>75+</span></div>
                <div className="lvl">{i18next.t('terms.requirements')} <span>{i18next.t('terms.no')}</span></div>
            </div>
            <div className="exercises">

                <ol>
                    <li className="task" id={0}>
                        {i18next.t("FatesWhisper.1.1")}
                        <b className={`copy`} onClick={(e)=>{popupFadeToggle(e);
                            navigator.clipboard.writeText("/target Reorin");}}
                        > Reorin, <span className={`popup`}>{i18next.t('popup_target_copied')}</span></b>
                        {i18next.t("FatesWhisper.1.2")}
                    </li>

                    <li className="task" id={1}>
                        От Maestro Reorin отправляемся на кладбище (Cemetery). Здесь нам нужно убить
                        <b> Shilen's Messenger Cabrio</b>. Или подождать пока его убьют за нас. После его смерти появится сундук Coffer of the Dead. Разговариваем с ним
                        - получаем Reiria's Soul Orb. <em>Внимание: сундук будет стоять 1-3 минуты.</em>
                    </li>

                    <li className="task" id={2}>
                        Возвращаем Reiria's Soul Orb Maestro <b> Reorin </b>. Дальше мы отправляемся в
                        <b>Tower of Insolence</b>. Нам нужно убить трёх рейд боссов и получить их скипетры.
                        Аналогично первому, главное поговорить с сундуком после того как их замочат, а это будет!
                        <ul>
                            <li id={3}>Третий этаж - <b>Death Lord Hallate</b> (Лорд Смерти Халлет) 73 ур.</li>
                            <li id={4}>Восьмой этаж -  <b>Kernon</b> (Кернон) 75 ур.</li>
                            <li id={5}>Одиннадцатый этаж -  <b>Longhorn Golkonda</b> (Длиннорогий Голконда) 79 ур.</li>
                        </ul>
                        После у нас должно быть три сувенира: Hallate's Infernium Scepter, Kernon's Infernium Scepter
                        и Golkonda's Infernium Scepter.
                    </li>

                    <li className="task" id={6}>
                        Возвращаем скипетры Maestro <b> Reorin </b>. Но конечно это не все...
                    </li>

                    <li className="task" id={7}>
                        Maestro Reorin послал нас к <b>Warehouse Freightman Cliff</b> в <b>Town of Oren</b>. Он даст нам
                        Infernium Varnish.
                    </li>

                    <li className="task" id={8}>
                        Относим Infernium Varnish старому другу Maestro <b> Reorin </b>.
                    </li>

                    <li className="task" id={9}>
                        Друг шлет нас в <b>Town of Aden</b> к <b>Head Blacksmith Ferris</b> в кузне. У него мы получаем Maestro Reorin's Hammer
                        который пренадлежит Reorin.
                    </li>

                    <li className="task" id={10}>
                        Снова идем к Maestro <b> Reorin </b> и отдаем ему Maestro Reorin's Hammer.
                    </li>

                    <li className="task" id={11}>
                        На этот раз он просит нас забрать Maestro Reorin's Mold в <b>Town of Oren</b> у Trader<b> Zenkin</b>,
                        в магазине оружия.
                    </li>

                    <li className="task" id={12}>
                        Trader Zenkin скажет, что он продал его <b>Master Kaspar</b>, который находится в
                        <b> Hardin's Private Academy</b>. <br/>
                        Каспар предложит вам на выбор сходить к Баюму на вечерний чай или перекрасить
                        <b> 30 White Fabric</b> в <b>30 Blood Stained Cloth</b> в ТоИ.
                        <b> Выбираем покраску тряпок.</b> Это наиболее простой и быстрый вариант.
                    </li>

                    <li className="task" id={13}>
                        Летим в <b>ТоИ на 10 этаж</b>, устраиваем кровавый субботник! Мочим всё что шевелится, мочим всем что
                        под руку попадется. В конце мы должны получить 30 мокрых насквозь, красных тряпок. Мочить их можно
                        с друзьями. Чтобы это вызывало дрожь в коленках на соседних этажах. Ибо на многих серверах итемы даются
                        всем в пати, у кого есть этот квест. Даже если тот кто убивает, делает это ради уловольствия и
                        квеста у него нет.
                    </li>

                    <li className="task" id={14}>
                        Возвращаемся к <b>Master Kaspar</b> в <b>Hardin's Private Academy</b> и меняем тряпки на
                        Maestro Reorin's Mold.
                    </li>

                    <li className="task" id={15}>
                        Преждем чем завершить квест вам нужно <b>984 Crystal (B-Grade)</b> и
                        <b> Top B grade</b> оружие.<br/>
                        Возвращаемся к <b> Reorin</b>, возвращаем ему Maestro Reorin's Mold. Он предложит обмен
                        оружия на выбор. Отдаем то оружие которое принесли (Top B grade оружие). Для этого нужно
                        выбрать его в ссписке. <em> Если выбрать другое, придется искать его (другое).</em> После
                        чего выбираем Low A grade оружие которое хотим получить.
                        <br/><br/>Ниже список вариантов для обмена.
                        <div className="weapon-list">
                            <ul className="top-b">
                                <h3>Top-B grade weapon list:</h3>
                                <li><img src={b_art_axe} alt="Art of Battle Axe img"/>Art of Battle Axe</li>
                                <li><img src={b_bellion} alt="Bellion Cestus img"/>Bellion Cestus</li>
                                <li><img src={b_peril} alt="Bow of Peril img"/>Bow of Peril</li>
                                <li><img src={b_glory} alt="Deadman's Glory img"/>Deadman's Glory</li>
                                <li><img src={b_demon} alt="Demon Dagger img"/>Demon Dagger</li>
                                <li><img src={b_guardians} alt="Guardian's Sword img"/>Guardian's Sword</li>
                                <li><img src={b_kaim} alt="Kaim Vanul's Bones img"/>Kaim Vanul's Bones</li>
                                <li><img src={b_lance} alt="Lance img"/>Lance</li>
                                <li><img src={b_dualsword} alt="Samurai Long Sword*Samurai Long Sword img"/>Samurai Long Sword*Samurai Long Sword</li>
                                <li><img src={b_soes} alt="Staff of Evil Spirits img"/>Staff of Evil Spirits</li>
                                <li><img src={b_star} alt="Star Buster img"/>Star Buster</li>
                                <li><img src={b_damascus} alt="Sword of Damascus img"/>Sword of Damascus</li>
                            </ul>
                            <ul className="low-a">
                                <h3>Low-A grade weapon list:</h3>
                                <li><img src={a_bloody_orchid} alt="Bloody Orchid img"/>Bloody Orchid</li>
                                <li><img src={a_bloody_tornado} alt="Blood Tornado img"/>Blood Tornado</li>
                                <li><img src={a_dasparions} alt="Dasparion's Staff img"/>Dasparion's Staff</li>
                                <li><img src={a_destroyer} alt="Destroyer Hammer img"/>Destroyer Hammer</li>
                                <li><img src={a_elemental} alt="Elemental Sword img"/>Elemental Sword</li>
                                <li><img src={a_halebard} alt="Halberd img"/>Halberd</li>
                                <li><img src={a_infernal} alt="Infernal Master img"/>Infernal Master</li>
                                <li><img src={a_dualsword} alt="Keshanberk*Keshanberk img"/>Keshanberk*Keshanberk</li>
                                <li><img src={a_meteor} alt="Meteor Shower img"/>Meteor Shower</li>
                                <li><img src={a_spiritual} alt="Spiritual Eye img"/>Spiritual Eye</li>
                                <li><img src={a_tallum} alt="Tallum Blade img"/>Tallum Blade</li>
                            </ul>

                        </div>
                    </li>
                </ol>

            </div>
        </div>
    </div>);
}


function mapStateToProps(state){
    return {
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Subclass);