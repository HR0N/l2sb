import React, {useEffect, useState} from "react";
import "./Subclass.scss";
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import i18next from '../../../i18next';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";

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

import m_moonstone from "./../../../img/FatesWhisper_weapon-list/reagents/MoonstoneShard.jpg";
import m_volcanic from "./../../../img/FatesWhisper_weapon-list/reagents/VolcanicAsh.jpg";
import m_silver from "./../../../img/FatesWhisper_weapon-list/reagents/Quicksilver.jpg";
import m_mixstone from "./../../../img/FatesWhisper_weapon-list/reagents/WesleysMixingStone.jpg";
import m_truegold from "./../../../img/FatesWhisper_weapon-list/reagents/TrueGold.jpg";
import m_puresilver from "./../../../img/FatesWhisper_weapon-list/reagents/PureSilver.jpg";
import m_philosoph from "./../../../img/FatesWhisper_weapon-list/reagents/PhilosophersStone.jpg";
import m_moondust from "./../../../img/FatesWhisper_weapon-list/reagents/MoonDust.jpg";
import m_mimir from "./../../../img/FatesWhisper_weapon-list/reagents/MimirsElixir.jpg";
import m_lunargent from "./../../../img/FatesWhisper_weapon-list/reagents/Lunargent.jpg";
import m_blood from "./../../../img/FatesWhisper_weapon-list/reagents/BloodFire.jpg";

import sc_reorin from "./../../../img/FatesWhisper_weapon-list/frames/webp/reorin.webp";
import sc_cabrio from "./../../../img/FatesWhisper_weapon-list/frames/webp/cabrio.webp";
import sc_hallate from "./../../../img/FatesWhisper_weapon-list/frames/webp/hallate.webp";
import sc_kernon from "./../../../img/FatesWhisper_weapon-list/frames/webp/kernon.webp";
import sc_galkonda from "./../../../img/FatesWhisper_weapon-list/frames/webp/golkonda.webp";
import sc_cliff from "./../../../img/FatesWhisper_weapon-list/frames/webp/cliff.webp";
import sc_ferris from "./../../../img/FatesWhisper_weapon-list/frames/webp/ferris.webp";
import sc_zenkin from "./../../../img/FatesWhisper_weapon-list/frames/webp/zenkin.webp";
import sc_kaspar from "./../../../img/FatesWhisper_weapon-list/frames/webp/kaspar.webp";
import sc_toi10 from "./../../../img/FatesWhisper_weapon-list/frames/webp/toi10.webp";

import sc_ladd from "./../../../img/FatesWhisper_weapon-list/frames/webp/ladd.webp";
import sc_wesley from "./../../../img/FatesWhisper_weapon-list/frames/webp/wesley.webp";
import sc_orcshaman from "./../../../img/FatesWhisper_weapon-list/frames/webp/orcshaman.webp";
import sc_mixurn from "./../../../img/FatesWhisper_weapon-list/frames/webp/mixurn.webp";
import sc_joan from "./../../../img/FatesWhisper_weapon-list/frames/webp/joan.webp";
import sc_chimera from "./../../../img/FatesWhisper_weapon-list/frames/webp/chimera.webp";
import sc_bloodyg from "./../../../img/FatesWhisper_weapon-list/frames/webp/guardian.webp";
import {Helmet} from "react-helmet-async";


const popupFadeToggle = (e)=>{
    let popup = e.target.querySelector('.popup');
    popup.style.opacity = 1;
    setTimeout(()=>{popup.style.opacity = 0;}, 2000);
};


function Subclass() {

    const {i18n} = useTranslation();
    const [curParagraph, setParagraph] = useState(0);
    const [go_up, setGo_up] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{if(window.pageYOffset > 400){setGo_up(true)}else{setGo_up(false)}});
        return () => {
            window.removeEventListener("scroll", ()=>{if(window.pageYOffset > 400){setGo_up(true)}else{setGo_up(false)}});
        };
    }, []);

    const scrollTo = (id)=>{
        /*let newParagrph = curParagraph + id;
        if(newParagrph < 0) newParagrph = 0;
        setParagraph(newParagrph);*/
        let elemOffset = document.getElementById(id).offsetTop - 100;
        window.scrollTo({top: elemOffset, behavior: 'smooth'});
    };

    return(<div className={`Subclass`}>
        <Helmet>
            <title>Квест на сабкласс, квест на саб л2</title>
            <meta name="description" content="Подробный гайд в картинках, по прохождения сабклас квеста л2 ХФ, l2 HF" />
            <link /*rel="canonical"*/ href="https://www.l2lb.monster/quests/subclass" />
        </Helmet>
        <div className="Subclass-wrapper">
            <h2 className="title">{i18next.t('FatesWhisper.title')}</h2>
            <div className="terms">
                <div className="lvl">{i18next.t('terms.lvl')} <span>75+</span></div>
                <div className="lvl">{i18next.t('terms.requirements')} <span>{i18next.t('terms.no')}</span></div>
            </div>
            <div className="exercises">

                <ol>
                    <li className="task" id={0}>
                        {i18next.t("FatesWhisper.0.1")}
                        <b className={`copy`} onClick={(e)=>{popupFadeToggle(e);
                            navigator.clipboard.writeText("/target Reorin");}}
                        > Reorin, <span className={`popup`}>{i18next.t('popup_target_copied')}</span></b>
                        {i18next.t("FatesWhisper.0.2")}
                        <div className="screen"><img src={sc_reorin} alt="Reorin"/>
                        {/*<div className="moveBack" onClick={()=>{scrollTo(0);}}><FontAwesomeIcon className={``} icon={faChevronLeft}/></div>
                        <div className="moveForward" onClick={()=>{scrollTo(1);}}><FontAwesomeIcon className={``} icon={faChevronRight}/></div>*/}</div>
                    </li>
                    <li className="task" id={1}>
                        {i18next.t("FatesWhisper.1.1")}
                        <b> Shilen's Messenger Cabrio</b>{i18next.t("FatesWhisper.1.2")}
                        {i18next.t("FatesWhisper.1.3")}<em>{i18next.t("FatesWhisper.1.4")}</em>
                        <div className="screen"><img src={sc_cabrio} alt="Cabrio"/></div>
                    </li>
                    <li className="task" id={2}>
                        {i18next.t("FatesWhisper.2.1")}<b> Reorin </b>{i18next.t("FatesWhisper.2.2")}
                        <b> Tower of Insolence</b>{i18next.t("FatesWhisper.2.3")}
                        <div className="screen"><img src={sc_reorin} alt="Reorin"/></div>
                        <ul className={`toi_rb`}>
                            <li>{i18next.t("FatesWhisper.2.4")}<b>Death Lord Hallate</b>{i18next.t("FatesWhisper.2.5")}</li>
                        <div className="screen"><img src={sc_hallate} alt="Hallate"/></div>
                            <li>{i18next.t("FatesWhisper.2.6")}<b>Kernon</b>{i18next.t("FatesWhisper.2.7")}</li>
                        <div className="screen"><img src={sc_kernon} alt="Kernon"/></div>
                            <li>{i18next.t("FatesWhisper.2.8")}<b>Longhorn Golkonda</b>{i18next.t("FatesWhisper.2.9")}</li>
                        <div className="screen"><img src={sc_galkonda} alt="Galkonda"/></div>
                        </ul>
                        {i18next.t("FatesWhisper.2.91")}
                    </li>
                    <li className="task" id={3}>
                        {i18next.t("FatesWhisper.3.1")}<b> Reorin</b>{i18next.t("FatesWhisper.3.2")}
                        <div className="screen"><img src={sc_reorin} alt="Reorin"/></div>
                    </li>
                    <li className="task" id={4}>
                        {i18next.t("FatesWhisper.4.1")}<b>Warehouse Freightman Cliff</b>{i18next.t("FatesWhisper.4.2")}<b>Town of Oren</b>
                        {i18next.t("FatesWhisper.4.3")}
                        <div className="screen"><img src={sc_cliff} alt="Cliff"/></div>
                    </li>
                    <li className="task" id={5}>
                        {i18next.t("FatesWhisper.5.1")}<b> Reorin</b>.
                        <div className="screen"><img src={sc_reorin} alt="Reorin"/></div>
                    </li>
                    <li className="task" id={6}>
                        {i18next.t("FatesWhisper.6.1")}<b>Town of Aden</b>{i18next.t("FatesWhisper.6.2")}<b>Head Blacksmith Ferris</b>
                        {i18next.t("FatesWhisper.6.3")}
                        <div className="screen"><img src={sc_ferris} alt="Ferris"/></div>
                    </li>
                    <li className="task" id={7}>
                        {i18next.t("FatesWhisper.7.1")}<b> Reorin </b>{i18next.t("FatesWhisper.7.2")}
                        <div className="screen"><img src={sc_reorin} alt="Reorin"/></div>
                    </li>
                    <li className="task" id={8}>
                        {i18next.t("FatesWhisper.8.1")}<b>Town of Oren</b>{i18next.t("FatesWhisper.8.2")}<b> Zenkin</b>
                        {i18next.t("FatesWhisper.8.3")}
                        <div className="screen"><img src={sc_zenkin} alt="Zenkin"/></div>
                    </li>
                    <li className="task" id={9}>
                        {i18next.t("FatesWhisper.9.1")}<b>Hardin's Private Academy</b>{i18next.t("FatesWhisper.6.2")}<b>Master Kaspar</b>
                        {i18next.t("FatesWhisper.9.2")}
                        <b>{i18next.t("FatesWhisper.9.3")}</b>{i18next.t("FatesWhisper.9.4")}
                        <div className="screen"><img src={sc_kaspar} alt="Kaspar"/></div>
                    </li>
                    <li className="task" id={10}>
                        {i18next.t("FatesWhisper.10.1")}<b>{i18next.t("FatesWhisper.10.2")}</b>
                        {i18next.t("FatesWhisper.10.3")}
                        <div className="screen"><img src={sc_toi10} alt="ToI10"/></div>
                    </li>
                    <li className="task" id={11}>
                        {i18next.t("FatesWhisper.11.1")}<b>Master Kaspar</b>{i18next.t("short.in")}<b>Hardin's Private Academy</b>
                        {i18next.t("FatesWhisper.11.2")}
                        <div className="screen"><img src={sc_kaspar} alt="Kaspar"/></div>
                    </li>
                    <li className="task" id={12}>
                        {i18next.t("FatesWhisper.12.1")}<b>984 Crystal (B-Grade)</b>{i18next.t("short.and")}
                        <b> Top B grade</b>{i18next.t("FatesWhisper.12.2")}<br/>
                        {i18next.t("FatesWhisper.12.3")}<b> Reorin</b>{i18next.t("FatesWhisper.12.4")}<em>{i18next.t("FatesWhisper.12.5")}</em>
                        {i18next.t("FatesWhisper.12.6")}
                        <div className="screen"><img src={sc_reorin} alt="Reorin"/></div>
                        <br/>{i18next.t("FatesWhisper.12.7")}
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
                                <li><img src={b_wizard} alt="Wizard's Tear  img"/>Wizard's Tear </li>
                            </ul>
                            <ul className="low-a">
                                <h3>Low-A grade weapon list:</h3>
                                <li><img src={a_bloody_orchid} alt="Bloody Orchid img"/>Bloody Orchid</li>
                                <li><img src={a_bloody_tornado} alt="Blood Tornado img"/>Blood Tornado</li>
                                <li><img src={a_carnage} alt="Carnage Bow img"/>Carnage Bow</li>
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
                    <li className="task" id={13}>
                        {i18next.t("FatesWhisper.13.1")}<b>Star of Destiny.</b>{i18next.t("FatesWhisper.13.2")}
                    </li>
                </ol>
            </div>
            <h2 className="title2">{i18next.t('MimirsElixir.title')}</h2>
            <div className="terms">
                <div className="lvl">{i18next.t('terms.lvl')} <span>75+</span></div>
                <div className="lvl">{i18next.t('terms.requirements')} <span>Star of Destiny</span></div>
            </div>
            <div className="exercises2">
                <ol>
                    <li className="task" id={0}>
                        {i18next.t('MimirsElixir.0.1')}<b>Ivory Tower</b>{i18next.t("short.to")}<b>Ladd</b>{i18next.t('MimirsElixir.0.2')}
                        <div className="screen"><img src={sc_ladd} alt="Ladd"/></div>
                    </li>
                    <li className="task" id={1}>
                        {i18next.t('MimirsElixir.1.1')}<b>Shopping Area</b>{i18next.t("short.to")}<b>Wesley</b>
                        {i18next.t('MimirsElixir.1.2')}<b>Wesley's Mixing Stone.</b>
                        <div className="screen"><img src={sc_wesley} alt="Wesley"/></div>
                    </li>
                    <li className="task" id={2}>
                        {i18next.t('MimirsElixir.2.1')}<b>Blazing Swamp</b>{i18next.t('MimirsElixir.2.2')}
                        <b>Hames Orc Shaman 74 ур. </b>{i18next.t('MimirsElixir.2.3')}<b>Reagent Pouch</b>
                        {i18next.t('MimirsElixir.2.4')}
                        <div className="img-list">
                            <ul>
                                <li><img src={m_moonstone} alt="Moonstone Shard img"/>100 Moonstone Shard</li>
                                <li><img src={m_volcanic} alt="Volcanic Ash img"/>10 Volcanic Ash</li>
                                <li><img src={m_silver} alt="Quicksilver img"/>2 Quicksilver</li>
                            </ul>
                        </div>
                        <div className="screen"><img src={sc_orcshaman} alt="Orc Shaman"/></div>
                        {i18next.t('MimirsElixir.2.5')}
                    </li>
                    <li className="task" id={3}>
                        {i18next.t('MimirsElixir.3.1')}<b>Underground floor, Ivory Tower</b>{i18next.t('MimirsElixir.3.2')}<b>Alchemist's Mixing Urn</b>
                        {i18next.t('MimirsElixir.3.3')}<br/>
                        {i18next.t('MimirsElixir.3.4')}<b>Mixing Stone</b>{i18next.t('MimirsElixir.3.5')}<b>salamandra</b>
                        {i18next.t('MimirsElixir.3.6')}<em>{i18next.t('MimirsElixir.3.7')}</em>
                        <div className="screen"><img src={sc_mixurn} alt="Mixing Urn"/></div>
                    </li>
                    <li className="task" id={4}>
                        {i18next.t('MimirsElixir.4.1')}<b>Mixing Stone</b>{i18next.t("short.in")}<b>Alchemist's Mixing Urn</b>
                        {i18next.t('MimirsElixir.4.2')}
                        <div className="sequence-list">
                            <ul>
                                <li><img src={m_moonstone} alt="Moonstone Shard"/>10 Moonstone Shard</li>
                                <li className={`math`}> + </li>
                                <li><img src={m_volcanic} alt="Volcanic Ash"/>1 Volcanic Ash</li>
                                <li className={`math`}> = </li>
                                <li><img src={m_moondust} alt="Moon Dust"/>1 Moon Dust</li>
                                <li className="x10">x10</li>
                            </ul>
                            <ul>
                                <li><img src={m_moondust} alt="Moon Dust"/>10 Moon Dust</li>
                                <li className={`math`}> + </li>
                                <li><img src={m_silver} alt="Quicksilver"/>1 Quicksilver</li>
                                <li className={`math`}> = </li>
                                <li><img src={m_lunargent} alt="Lunargent"/>1 Lunargent</li>
                            </ul>
                            <ul>
                                <li><img src={m_lunargent} alt="Lunargent"/>1 Lunargent</li>
                                <li className={`math`}> + </li>
                                <li><img src={m_silver} alt="Quicksilver"/>1 Quicksilver</li>
                                <li className={`math`}> = </li>
                                <li><img src={m_puresilver} alt="Pure Silver"/>1 Pure Silver</li>
                            </ul>
                        </div>
                    </li>
                    <li className="task" id={5}>
                        {i18next.t('MimirsElixir.5.1')}<b>Ladd</b>{i18next.t('MimirsElixir.5.2')}<div className="crossed"> &^#*%</div>
                        <b> Pure Silver</b>{i18next.t('MimirsElixir.5.3')}
                        <div className="screen"><img src={sc_ladd} alt="Ladd"/></div>
                    </li>
                    <li className="task" id={6}>
                        {i18next.t('MimirsElixir.6.1')}<b>{i18next.t('MimirsElixir.6.2')}</b>{i18next.t("short.to")}Magister <b>Joan</b>
                        {i18next.t('MimirsElixir.6.3')}
                        <div className="screen"><img src={sc_joan} alt="Joan"/></div>
                    </li>
                    <li className="task" id={7}>
                        {i18next.t('MimirsElixir.7.1')}<b>Silent Valley</b>{i18next.t('MimirsElixir.7.2')}<b>Chimera Piece</b>
                        {i18next.t('MimirsElixir.7.3')}
                        <div className="screen"><img src={sc_chimera} alt="Chimera"/></div>
                    </li>
                    <li className="task" id={8}>
                        {i18next.t('MimirsElixir.8.1')}<b>Joan</b>{i18next.t('MimirsElixir.8.2')}<b>{i18next.t('MimirsElixir.8.3')}</b>
                        {i18next.t('MimirsElixir.8.4')}<b>True Gold.</b>
                        <div className="screen"><img src={sc_joan} alt="Joan"/></div>
                    </li>
                    <li className="task" id={9}>
                        {i18next.t('MimirsElixir.9.1')}<b>Ladd</b>{i18next.t('MimirsElixir.8.2')}<b>{i18next.t('MimirsElixir.9.2')}</b>
                        {i18next.t('MimirsElixir.9.3')}
                        <div className="screen"><img src={sc_ladd} alt="Ladd"/></div>
                    </li>
                    <li className="task" id={10}>
                        {i18next.t('MimirsElixir.10.1')}<b>Bloody Guardian</b>{i18next.t('MimirsElixir.10.2')}<b>Blood Fire.</b>
                        <div className="screen"><img src={sc_bloodyg} alt="Bloody Guardian"/></div>
                    </li>
                    <li className="task" id={11}>
                        {i18next.t('MimirsElixir.11.1')}<b>Underground floor Ivory Tower</b>{i18next.t("short.to")}<b>Alchemist's Mixing Urn</b>{i18next.t('MimirsElixir.11.2')}<b>Pure Silver</b>,
                        <b> True Gold</b>{i18next.t('MimirsElixir.11.3')}<b>Fenix</b>.{i18next.t('MimirsElixir.11.4')}<b>Mimir's Elixir</b>.
                        <div className="screen"><img src={sc_mixurn} alt="Mixing Urn"/></div>
                        <div className="sequence-list sequence-list2">
                            <ul>
                                <li><img src={m_puresilver} alt="Pure Silver"/>Pure Silver</li>
                                <li className={`math`}> + </li>
                                <li><img src={m_truegold} alt="True Gold"/>True Gold</li>
                                <li className={`math`}> = </li>
                                <li><img src={m_mimir} alt="Mimir's Elixir"/>Mimir's Elixir</li>
                            </ul>
                        </div>
                    </li>
                    <li className="task" id={12}>
                        {i18next.t('MimirsElixir.12.1')}<b>Ladd</b>{i18next.t('MimirsElixir.12.2')}<div className="crossed">{i18next.t('MimirsElixir.12.3')}</div> Mimir's Elixir.
                        {i18next.t('MimirsElixir.12.4')}<br/>
                        {i18next.t('MimirsElixir.12.5')}
                        <div className="screen"><img src={sc_ladd} alt="Ladd"/></div>
                    </li>
                </ol>
            </div>
        </div>
        <div className={`go_up ${go_up ? 'show_go-up' : ''}`} onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'})}}
        ><FontAwesomeIcon className={``} icon={faChevronUp}/></div>
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