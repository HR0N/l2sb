import moment from "moment";
import trim from "validator/es/lib/trim";

class Time {
    now = ()=>{
        let a = moment([2022, 8, 22, 17, 0]);
        let b = moment();
        console.log(a.format("DD.MM.YYYY | H:mm"));
        console.log(a.diff(a));
    };
    ast_format_refactoring = str =>{
        let data = {boss: str.split('Убит босс ').at(-1)};
        console.log(data);
    };
};

export default Time;