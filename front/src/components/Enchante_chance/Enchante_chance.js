import React from "react";
import "./Enchante_chance.scss";
import {connect} from 'react-redux';
import $ from "jquery";
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import i18next from '../../i18next';

const chance = [[
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [82, 80, 78, 52, 50, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [92, 90, 88, 76, 74, 72, 46, 44, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [97, 95, 93, 86, 84, 82, 70, 68, 66, 40, 38, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [97, 95, 93, 91, 89, 87, 80, 78, 76, 64, 62, 60, 34, 32, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [97, 95, 93, 91, 89, 87, 85, 83, 81, 74, 72, 70, 58, 56, 54, 28, 26, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [97, 95, 93, 91, 89, 87, 85, 83, 81, 79, 77, 75, 68, 66, 64, 52, 50, 48, 22, 20, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [97, 95, 93, 91, 89, 87, 85, 83, 81, 79, 77, 75, 73, 71, 69, 62, 60, 50, 46, 44, 42, 16, 14, 12, 0, 0, 0, 0, 0, 0],
        [97, 95, 93, 91, 89, 87, 85, 83, 81, 79, 77, 75, 73, 71, 69, 67, 65, 63, 56, 54, 52, 40, 38, 36, 10, 8, 6, 0, 0, 0],
        [97, 95, 93, 91, 89, 87, 85, 83, 81, 79, 77, 75, 73, 71, 69, 67, 65, 63, 61, 59, 57, 50, 48, 46, 34, 32, 30, 4, 2, 1],
        [97, 95, 93, 91, 89, 87, 85, 83, 81, 79, 77, 75, 73, 71, 69, 67, 65, 63, 61, 59, 57, 55, 53, 51, 44, 42, 40, 28, 26, 24],
    ],[
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        [18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [48, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [58, 56, 54, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [82, 80, 78, 52, 50, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [92, 90, 88, 76, 74, 72, 46, 44, 42, 0, 0, 0, 0, 0, 0],
        [97, 95, 93, 86, 84, 82, 70, 68, 66, 40, 38, 36, 0, 0, 0],
        [97, 95, 93, 91, 89, 87, 80, 78, 76, 64, 62, 60, 34, 32, 30],
        [97, 95, 93, 91, 89, 87, 85, 83, 81, 74, 72, 70, 58, 56, 54],
    ]];

function Enchante_chance() {
    const {i18n} = useTranslation();

    const obj_2nd_prof = $(document).find('.enchante_table_2nd_prof');

    const render_prof_skill_enchante_chance_table = (array)=>{
        return array.map((v, k)=>{

            if(k === 0){return(<div key={k}>{v.map((v, k)=>{{
                return (<div className={`ench_chance`} key={k}>{v > 0  ? v : ''}</div>);}})}</div>)}

            else       {return(<div key={k}>{v.map((v, k)=>{{
                return (<div className={`ench_chance ${v >= 80 ? 'green' : ''} 
                                                     ${v >= 60 && v <= 79 ? 'yellow' : ''} 
                                                     ${v >= 50 && v <= 59 ? 'grey_yellow' : ''} 
                                                     ${v >= 30 && v <= 49 ? 'dark_yellow' : ''} 
                                                     ${v <= 29 && v > 0 ? 'red' : ''}`}
                             key={k}>{v > 0  ? v+'%' : ''}</div>);}})}</div>)}
        })
    };
    return(<div className={`Enchante_chance`}>
        <Helmet>
            <title>l2 шанс заточки скиллов</title>
            <meta name="description" content="Шанс заточки второпровных\третьепрофных скилов в игре Lineage 2. Хроники High Five." />
            <link /*rel="canonical"*/ href="https://www.l2lb.monster/other/extra/enchante_chance" />
        </Helmet>
        <h2>{i18next.t('enchante_chance.2nd_proof_encha')}</h2>
        <div className="enchante_table_2nd_prof">
            <div className="lvl">{i18next.t('enchante_chance.ench_lvl')}</div>
            <div className="lvl">76</div>
            <div className="lvl">77</div>
            <div className="lvl">78</div>
            <div className="lvl">79</div>
            <div className="lvl">80</div>
            <div className="lvl">81</div>
            <div className="lvl">82</div>
            <div className="lvl">83</div>
            <div className="lvl">84</div>
            <div className="lvl">85</div>
            {render_prof_skill_enchante_chance_table(chance[0])}
        </div>
        <h2>{i18next.t('enchante_chance.3nd_proof_encha')}</h2>
        <div className="enchante_table_3nd_prof">
            <div className="lvl">{i18next.t('enchante_chance.ench_lvl')}</div>
            <div className="lvl">76</div>
            <div className="lvl">77</div>
            <div className="lvl">78</div>
            <div className="lvl">79</div>
            <div className="lvl">80</div>
            <div className="lvl">81</div>
            <div className="lvl">82</div>
            <div className="lvl">83</div>
            <div className="lvl">84</div>
            <div className="lvl">85</div>
            {render_prof_skill_enchante_chance_table(chance[1])}
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
export default connect(mapStateToProps, mapDispatchProps)(Enchante_chance);