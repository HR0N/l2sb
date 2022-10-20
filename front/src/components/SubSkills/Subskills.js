import React from "react";
import "./Subskills.scss";
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import i18next from '../../i18next';

import sk_hpmp from "./../../img/subskills/hpmp.jpg";
import sk_5attevery from "./../../img/subskills/5att.jpg";
import sk_spirit from "./../../img/subskills/spirit.jpg";
import sk_prayer from "./../../img/subskills/prayer.jpg";
import sk_5attholydark from "./../../img/subskills/5holydark.jpg";
import sk_heal150 from "./../../img/subskills/heal150.jpg";
import sk_cp from "./../../img/subskills/cp.jpg";
import sk_5presistmental from "./../../img/subskills/5percentresist.jpg";
import sk_30atkspeed from "./../../img/subskills/30atkspeed.jpg";
import sk_hp295 from "./../../img/subskills/hp295.jpg";
import sk_5percenresistdamage from "./../../img/subskills/5percenresistdamage.jpg";
import sk_20pud from "./../../img/subskills/20pud.jpg";
import sk_mp148 from "./../../img/subskills/mp148.jpg";
import sk_10pmpregen from "./../../img/subskills/10pmpregen.jpg";
import sk_celestial from "./../../img/subskills/celestial.jpg";
import sk_evasion from "./../../img/subskills/evasion.jpg";
import sk_100rangeincrease from "./../../img/subskills/100rangeincrease.jpg";
import sk_30pcritrate from "./../../img/subskills/30pcritrate.jpg";
import sk_5pmagicfail from "./../../img/subskills/5pmagicfail.jpg";
import sk_20mpincreaserecharge from "./../../img/subskills/20mpincreaserecharge.jpg";
import sk_10mpvampiric from "./../../img/subskills/10mpvampiric.jpg";
import {Helmet} from "react-helmet-async";
// {i18next.t('terms.lvl')}

function Subskills() {
    const {i18n} = useTranslation();
    return(<div className={`Subskills`}>
        <Helmet>
            <title>Саб скилы л2 - сабкласс умения</title>
            <meta name="description" content="Список сабкласс умений, их подробное описание. Таблица саб скилов л2." />
            <link /*rel="canonical"*/ href="https://www.l2lb.monster/other/extra/subskills" />
        </Helmet>
        <h2>{i18next.t('subskills.h2')}</h2>
            <div className="Subskills-wrapper">
                <div className="flex">

                    <div className="flex-card">
                        <div className="title">Enchanter Class</div>
                        <div className="description">Prophet, Warcryer, Inspector, Swordsinger, Bladedancer</div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-title"><img src={sk_mp148} alt="sk_mp148"/>{i18next.t('subskills.ench_1_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.ench_1_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.ench_1_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_10pmpregen} alt="sk_10pmpregen"/>{i18next.t('subskills.ench_2_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.ench_2_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.ench_2_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_celestial} alt="spirit"/>{i18next.t('subskills.ench_3_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.ench_3_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.ench_3_des2')}</div>
                                <div className="skill-type">active</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-card">
                        <div className="title">Warrior Class</div>
                        <div className="description">Gladiator, Warlord, Bounty Hunter, Tyrant, Destroyer, Soul Breaker, Berserker</div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-title"><img src={sk_cp} alt="cp"/>{i18next.t('subskills.warior_1_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.warior_1_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.warior_1_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_5presistmental} alt="5presistmental"/>{i18next.t('subskills.warior_2_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.warior_2_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.warior_2_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_30atkspeed} alt="30atkspeed"/>{i18next.t('subskills.warior_3_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.warior_3_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.warior_3_des2')}</div>
                                <div className="skill-type">active</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-card">
                        <div className="title">Summoner Class</div>
                        <div className="description">Warlock, Elemental Summoner, Phantom Summoner</div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-title"><img src={sk_hpmp} alt="l2hpmp"/>{i18next.t('subskills.summ_1_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.summ_1_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.summ_1_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_5attevery} alt="5attevery"/>{i18next.t('subskills.summ_2_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.summ_2_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.summ_2_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_spirit} alt="spirit"/>{i18next.t('subskills.summ_3_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.summ_3_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.summ_3_des2')}</div>
                                <div className="skill-type">active</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-card">
                        <div className="title">Knight Class</div>
                        <div className="description">Paladin, Dark Avenger, Temple Knight, Shillien Knight</div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-title"><img src={sk_hp295} alt="hp295"/>{i18next.t('subskills.knight_1_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.knight_1_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.knight_1_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_5percenresistdamage} alt="5percenresistdamage"/>{i18next.t('subskills.knight_2_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.knight_2_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.knight_2_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_20pud} alt="20pud"/>{i18next.t('subskills.knight_3_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.knight_3_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.knight_3_des2')}</div>
                                <div className="skill-type">active</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-card">
                        <div className="title">Rogue Class</div>
                        <div className="description">Hawkeye, Silver Ranger, Phantom Ranger, Treasure Hunter, Plainswalker, Abyss Walker, Arbalester</div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-title"><img src={sk_evasion} alt="sk_evasion"/>{i18next.t('subskills.rogue_1_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.rogue_1_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.rogue_1_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_100rangeincrease} alt="sk_100rangeincrease"/>{i18next.t('subskills.rogue_2_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.rogue_2_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.rogue_2_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_30pcritrate} alt="sk_30pcritrate"/>{i18next.t('subskills.rogue_3_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.rogue_3_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.rogue_3_des2')}</div>
                                <div className="skill-type">active</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-card">
                        <div className="title">Healer Class</div>
                        <div className="description">Shillien Elder, Elven Elder, Bishop</div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-title"><img src={sk_prayer} alt="prayer"/>{i18next.t('subskills.healer_1_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.healer_1_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.healer_1_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_5attholydark} alt="5holydark"/>{i18next.t('subskills.healer_2_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.healer_2_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.healer_2_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_heal150} alt="heal150"/>{i18next.t('subskills.healer_3_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.healer_3_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.healer_3_des2')}</div>
                                <div className="skill-type">active</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-card">
                        <div className="title">Wizard Class</div>
                        <div className="description">Sorcerer, Spellsinger, Spellhowler, Necromancer</div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-title"><img src={sk_5pmagicfail} alt="sk_5pmagicfail"/>{i18next.t('subskills.wizard_1_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.wizard_1_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.wizard_1_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_20mpincreaserecharge} alt="sk_20mpincreaserecharge"/>{i18next.t('subskills.wizard_2_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.wizard_2_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.wizard_2_des2')}</div>
                                <div className="skill-type">passive</div>
                            </div>
                            <div className="skill">
                                <div className="skill-title"><img src={sk_10mpvampiric} alt="sk_10mpvampiric"/>{i18next.t('subskills.wizard_3_title')}</div>
                                <div className="skill-des1">{i18next.t('subskills.wizard_3_des1')}</div>
                                <div className="skill-des2">{i18next.t('subskills.wizard_3_des2')}</div>
                                <div className="skill-type">active</div>
                            </div>
                        </div>
                    </div>
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
export default connect(mapStateToProps, mapDispatchProps)(Subskills);